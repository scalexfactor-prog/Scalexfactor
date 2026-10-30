/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
  "colors": {
    "on-surface": "#111c2d",
    "on-secondary-container": "#5c6477",
    "surface-dim": "#cfdaf2",
    "outline": "#737686",
    "tertiary": "#006056",
    "tertiary-container": "#007b6e",
    "surface": "#f9f9ff",
    "inverse-primary": "#b4c5ff",
    "on-primary-fixed": "#00174b",
    "surface-container-highest": "#d8e3fb",
    "primary": "#004ac6",
    "tertiary-fixed-dim": "#4fdbc8",
    "error": "#ba1a1a",
    "on-primary-fixed-variant": "#003ea8",
    "primary-fixed": "#dbe1ff",
    "surface-container-high": "#dee8ff",
    "secondary-fixed": "#dbe2f9",
    "on-secondary": "#ffffff",
    "on-surface-variant": "#434655",
    "on-primary-container": "#eeefff",
    "on-error": "#ffffff",
    "inverse-on-surface": "#ecf1ff",
    "on-tertiary-container": "#b1fff1",
    "surface-bright": "#f9f9ff",
    "on-tertiary-fixed-variant": "#005048",
    "on-primary": "#ffffff",
    "inverse-surface": "#263143",
    "surface-tint": "#0053db",
    "on-tertiary": "#ffffff",
    "primary-container": "#2563eb",
    "surface-container-low": "#f0f3ff",
    "on-background": "#111c2d",
    "surface-variant": "#d8e3fb",
    "outline-variant": "#c3c6d7",
    "surface-container-lowest": "#ffffff",
    "secondary-fixed-dim": "#bfc6dc",
    "error-container": "#ffdad6",
    "on-error-container": "#93000a",
    "on-tertiary-fixed": "#00201c",
    "on-secondary-fixed-variant": "#3f4759",
    "primary-fixed-dim": "#b4c5ff",
    "on-secondary-fixed": "#141b2c",
    "secondary": "#565e71",
    "surface-container": "#e7eeff",
    "background": "#f9f9ff",
    "tertiary-fixed": "#71f8e4",
    "secondary-container": "#dbe2f9"
  },
  "borderRadius": {
    "DEFAULT": "0.125rem",
    "lg": "0.25rem",
    "xl": "0.5rem",
    "full": "0.75rem"
  },
  "spacing": {
    "space-sm": "0.5rem",
    "gutter": "1.5rem",
    "space-xl": "2.5rem",
    "margin-mobile": "1rem",
    "space-md": "1rem",
    "margin": "2rem",
    "gutter-mobile": "1rem",
    "space-lg": "1.5rem",
    "space-xs": "0.25rem"
  },
  "fontFamily": {
    "headline-lg": [
      "Inter"
    ],
    "display-hero-mobile": [
      "Inter"
    ],
    "display-hero": [
      "Inter"
    ],
    "label-md": [
      "Inter"
    ],
    "metric-stat": [
      "Inter"
    ],
    "headline-md": [
      "Inter"
    ],
    "headline-sm": [
      "Inter"
    ],
    "body-lg": [
      "Inter"
    ],
    "body-sm": [
      "Inter"
    ],
    "headline-lg-mobile": [
      "Inter"
    ],
    "body-md": [
      "Inter"
    ],
    "label-sm": [
      "Inter"
    ]
  },
  "fontSize": {
    "headline-lg": [
      "40px",
      {
        "lineHeight": "48px",
        "letterSpacing": "-0.025em",
        "fontWeight": "700"
      }
    ],
    "display-hero-mobile": [
      "36px",
      {
        "lineHeight": "44px",
        "letterSpacing": "-0.025em",
        "fontWeight": "700"
      }
    ],
    "display-hero": [
      "56px",
      {
        "lineHeight": "64px",
        "letterSpacing": "-0.03em",
        "fontWeight": "700"
      }
    ],
    "label-md": [
      "14px",
      {
        "lineHeight": "20px",
        "letterSpacing": "0em",
        "fontWeight": "500"
      }
    ],
    "metric-stat": [
      "44px",
      {
        "lineHeight": "48px",
        "letterSpacing": "-0.03em",
        "fontWeight": "700"
      }
    ],
    "headline-md": [
      "28px",
      {
        "lineHeight": "36px",
        "letterSpacing": "-0.02em",
        "fontWeight": "600"
      }
    ],
    "headline-sm": [
      "20px",
      {
        "lineHeight": "28px",
        "letterSpacing": "-0.015em",
        "fontWeight": "600"
      }
    ],
    "body-lg": [
      "18px",
      {
        "lineHeight": "28px",
        "letterSpacing": "-0.01em",
        "fontWeight": "400"
      }
    ],
    "body-sm": [
      "13px",
      {
        "lineHeight": "20px",
        "letterSpacing": "0em",
        "fontWeight": "400"
      }
    ],
    "headline-lg-mobile": [
      "28px",
      {
        "lineHeight": "36px",
        "letterSpacing": "-0.02em",
        "fontWeight": "600"
      }
    ],
    "body-md": [
      "15px",
      {
        "lineHeight": "24px",
        "letterSpacing": "-0.005em",
        "fontWeight": "400"
      }
    ],
    "label-sm": [
      "12px",
      {
        "lineHeight": "16px",
        "letterSpacing": "0.02em",
        "fontWeight": "600"
      }
    ]
  }
} },
  plugins: [],
};
