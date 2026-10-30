import { useMemo, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { CASE_FILTERS, CASE_STUDIES } from '@/data/caseStudies';

type SortKey = 'impact' | 'speed' | 'recent';

export function CaseExplorer() {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('impact');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = CASE_STUDIES.filter(
      (c) => (filter === 'all' || c.categories.includes(filter)) && (!q || c.searchText.includes(q)),
    );
    if (sort === 'impact') return [...list].sort((a, b) => b.impact - a.impact);
    if (sort === 'speed') return [...list].sort((a, b) => a.lcp - b.lcp);
    return list;
  }, [filter, query, sort]);

  return (
    <>
      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md py-space-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-margin flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {CASE_FILTERS.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all shrink-0 ${
                    active
                      ? 'bg-primary text-on-primary font-semibold shadow-sm'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-medium'
                  }`}
                >
                  {f.label}
                  {f.count !== undefined && (
                    <span className="ml-1 opacity-80 text-label-sm font-normal">({f.count})</span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <div className="relative flex-1 sm:w-64">
              <Icon name="search" className="absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by client, stack..."
                aria-label="Filter case studies"
                className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm pl-8 pr-3 py-1.5 rounded-lg placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort case studies"
              className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-3 py-2 rounded-lg cursor-pointer focus:outline-none shadow-sm font-medium"
            >
              <option value="impact">Sort: Highest Impact</option>
              <option value="speed">Sort: Performance (LCP)</option>
              <option value="recent">Sort: Most Recent</option>
            </select>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl max-w-7xl mx-auto px-margin space-y-space-xl">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              Architectural Dossiers
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-1">
              Featured Production Case Studies
            </h2>
          </div>
          <span className="hidden sm:inline-block font-body-sm text-body-sm text-on-surface-variant">
            Displaying verified client architectures
          </span>
        </div>
        <div className="space-y-space-xl">
          {visible.map(({ id, Card }) => (
            <Card key={id} />
          ))}
          {visible.length === 0 && (
            <p className="text-center font-body-md text-body-md text-on-surface-variant py-space-xl">
              No case studies match your filters.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
