interface IconProps {
  name: string;
  className?: string;
}

/** Material Symbols glyph. Pass sizing/colour utilities through className. */
export function Icon({ name, className = '' }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`.trim()} aria-hidden="true">
      {name}
    </span>
  );
}
