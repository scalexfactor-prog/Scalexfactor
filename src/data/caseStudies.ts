import type { ComponentType } from 'react';
import { ApexLogisticsGlobalPortalCard } from '@/components/cases/cards/ApexLogisticsGlobalPortalCard';
import { FinvaultEnterpriseB2bSaasCard } from '@/components/cases/cards/FinvaultEnterpriseB2bSaasCard';
import { MedicareHealthGlobalNetworkCard } from '@/components/cases/cards/MedicareHealthGlobalNetworkCard';
import { AuracraftLuxuryECommerceCard } from '@/components/cases/cards/AuracraftLuxuryECommerceCard';
import { HyperscaleAiDeveloperCloudCard } from '@/components/cases/cards/HyperscaleAiDeveloperCloudCard';
import { VanguardCorporateAdvisoryCard } from '@/components/cases/cards/VanguardCorporateAdvisoryCard';

export interface CaseStudyMeta {
  id: string;
  title: string;
  categories: string[];
  /** Impact score used for "Highest Impact" sorting. */
  impact: number;
  /** LCP in seconds used for "Performance" sorting (lower is faster). */
  lcp: number;
  searchText: string;
  Card: ComponentType;
}

export const CASE_STUDIES: CaseStudyMeta[] = [
  { id: "apex-logistics-global-portal", title: "Apex Logistics Global Portal", categories: ["logistics", "web-apps", "seo-growth"], impact: 8.4, lcp: 0.72, searchText: " logistics & supply chain verified enterprise rollout nagpur \u2022 singapore hubs apex logistics global portal next-generation programmatic route indexation and real-time carrier intelligence platform serving 4,200 regional transit hubs across asia-pacific and emea. report_problem core challenge legacy monolithic cold-starts, high bounce rates (64%), unindexed freight routes, and fragmented legacy customer lead routing dropping enterprise shippers. check_circle engineered solution modular next.js 14 server components architecture, redis edge caching, and programmatic route indexation covering 4,200 transit hubs with instant rate quotes. stack: next.js 14 typescript tailwind redis postgresql aws ecs read full architecture case study arrow_forward explore logistics solutions apexlogistics.io/network/hub-4200 edge 200 ok trending_up inbound leads +240% qualified b2b inquiries bolt core web vitals 0.72s global p95 lcp shield availability 99.98% verified service uptime attach_money pipeline created $8.4m attributed revenue ", Card: ApexLogisticsGlobalPortalCard },
  { id: "finvault-enterprise-b2b-saas", title: "FinVault Enterprise B2B SaaS", categories: ["fintech-saas", "web-apps"], impact: 3.4, lcp: 0.65, searchText: " fintech / high-security saas soc2 \u2022 gdpr ready san francisco \u2022 london finvault enterprise b2b saas zero-trust treasury management platform rebuild engineered for fortune 500 compliance auditors, including real-time sandbox interactive calculation simulators. report_problem core challenge fragmented 6-step demo funnel with 4.8s page loads, sub-optimal trial conversion (2.1%), and complex soc2 type ii institutional audit hurdles. check_circle engineered solution headless interactive demo calculator, micro-frontends with sub-second page transitions, dynamic abm personalization, and zero-trust telemetry. stack: react 18 node.js graphql cloudflare workers datadog read full architecture case study arrow_forward fintech architecture advisory finvault.security/enterprise-audit 100 / 100 perf calendar_today demo conversions +185% enterprise demo bookings price_check customer cac -48% blended paid cac reduction speed lighthouse core 100/100 perfect google cwv score fast_forward sales velocity 3.4x pipeline velocity increase ", Card: FinvaultEnterpriseB2bSaasCard },
  { id: "medicare-health-global-network", title: "MediCare Health Global Network", categories: ["healthcare", "seo-growth", "web-apps"], impact: 3.1, lcp: 0.58, searchText: " healthcare & telemedicine hipaa \u2022 soc2 type ii bengaluru \u2022 chicago medicare health global network programmatic medical discovery platform with geo-clustered physician matching, automated hipaa intake forms, and sub-600ms booking queues across 42 metro zones. report_problem core challenge dispersed clinic discovery, zero organic search ranking in 42 target metropolitan areas, and sluggish non-compliant patient triage forms losing bookings. check_circle engineered solution geo-clustered programmatic local seo system, hipaa-compliant patient intake orchestration, and real-time doctor appointment availability caching with mapbox. stack: next.js hipaa cloud redis prisma mapbox gl read full architecture case study arrow_forward healthcare compliance stack medicare.global/care/find-specialist hipaa sealed pin_drop search dominance 42 metro #1 organic ranked regions medical_services intake yield +310% direct doctor appointments timer responsiveness <600ms time-to-interactive (tti) verified_user certification soc2-ii verified hipaa audit passed ", Card: MedicareHealthGlobalNetworkCard },
  { id: "auracraft-luxury-e-commerce", title: "AuraCraft Luxury E-Commerce", categories: ["ecommerce", "web-apps"], impact: 3.4, lcp: 1.1, searchText: " omnichannel high-ticket retail headless architecture paris \u2022 dubai auracraft luxury e-commerce ultra-high performance headless storefront integrating shopify plus, sub-second global checkout, multi-currency routing, and instant dynamic catalog filtering. report_problem core challenge sluggish monolithic magento store with severe checkout drop-offs (68%), regular crash events during flash-sale peaks, and zero multi-currency flexibility. check_circle engineered solution headless shopify plus integration with next.js edge storefront, stripe global rails, edge geo-currency routing, and instant algolia catalog indexing. stack: shopify plus next.js edge stripe api tailwind algolia read full architecture case study arrow_forward headless commerce audits auracraft.luxury/checkout/edge 1.1s total flow shopping_bag mobile velocity +340% mobile gross revenue arrows_outward checkout time 1.1s average completed flow signal_cellular_alt peak stability 0% flash-sale peak downtime trending_up aov impact +74% organic basket size ", Card: AuracraftLuxuryECommerceCard },
  { id: "hyperscale-ai-developer-cloud", title: "HyperScale AI Developer Cloud", categories: ["fintech-saas", "seo-growth", "web-apps"], impact: 4.2, lcp: 0.68, searchText: " developer tooling / infrastructure 12,000+ programmatic docs austin \u2022 berlin hyperscale ai developer cloud high-density technical documentation engine, real-time code playground sandboxes, and programmatic developer search architecture built to scale to millions of monthly engineering queries. report_problem core challenge fragmented api documentation causing 42% sign-up drop-offs; near-zero search engine indexation for long-tail sdk queries and api method calls. check_circle engineered solution algolia-powered interactive documentation hub, mdx server components, automated code playground sandboxes, and a programmatic technical encyclopedia. stack: mdx next.js tailwind rust backend algolia read full architecture case study arrow_forward developer platform services hyperscale.cloud/docs/api/v2 99.99% docs sla group_add signups +420% organic dev signups library_books programmatic index 12,000+ indexed technical docs cloud_done availability 99.99% zero downtime migration insights search traffic 2.8m monthly technical visits ", Card: HyperscaleAiDeveloperCloudCard },
  { id: "vanguard-corporate-advisory", title: "Vanguard Corporate Advisory", categories: ["fintech-saas", "web-apps"], impact: 1.9, lcp: 0.75, searchText: " professional legal & financial services fortune 500 portal mumbai \u2022 dubai vanguard corporate advisory institutional web infrastructure engineered to project absolute authority for high-stakes m&a advisory, featuring secure gated executive research vaults and compliant lead triage. report_problem core challenge outdated corporate presence failing to communicate gravitas to fortune 500 decision-makers and high-net-worth clients, leading to missed rfp pipelines. check_circle engineered solution minimalist high-contrast institutional web presence, gated executive briefing downloads, secure multi-tenant lead routing, and hubspot enterprise synchronization. stack: next.js tailwind hubspot enterprise api postgresql read full architecture case study arrow_forward institutional consulting vanguardadvisory.com/executive-brief 98/100 a11y business_center c-suite rfps +190% qualified inbound rfps accessibility accessibility 98/100 desktop a11y compliance hourglass_top engagement 4.2x average time-on-site account_balance deal flow $31m+ direct mandate pipeline ", Card: VanguardCorporateAdvisoryCard },
];

export interface CaseFilter {
  id: string;
  label: string;
  count?: number;
}

export const CASE_FILTERS: CaseFilter[] = [
  {
    "id": "all",
    "label": "All Projects",
    "count": 24
  },
  {
    "id": "web-apps",
    "label": "Custom Web Platforms",
    "count": 9
  },
  {
    "id": "fintech-saas",
    "label": "B2B SaaS & Fintech",
    "count": 8
  },
  {
    "id": "seo-growth",
    "label": "Programmatic SEO & Search",
    "count": 7
  },
  {
    "id": "healthcare",
    "label": "Healthcare (HIPAA)"
  },
  {
    "id": "logistics",
    "label": "Logistics & Supply Chain"
  },
  {
    "id": "ecommerce",
    "label": "E-Commerce"
  }
];
