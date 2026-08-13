import type { SVGProps } from "react";

export type IconName =
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "map-pin"
  | "chevron-down"
  | "chevron-right"
  | "chevron-left"
  | "arrow-right"
  | "check"
  | "check-circle"
  | "alert-circle"
  | "send"
  | "expand"
  | "flame"
  | "drill"
  | "flask"
  | "refinery"
  | "bolt"
  | "factory"
  | "pipeline"
  | "gauge";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg {...common} width={size} height={size} aria-hidden="true" {...props}>
      {renderPaths(name)}
    </svg>
  );
}

function renderPaths(name: IconName) {
  switch (name) {
    case "menu":
      return (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      );
    case "close":
      return (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      );
    case "phone":
      return (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      );
    case "mail":
      return (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        </>
      );
    case "map-pin":
      return (
        <>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </>
      );
    case "chevron-down":
      return <polyline points="6 9 12 15 18 9" />;
    case "chevron-right":
      return <polyline points="9 18 15 12 9 6" />;
    case "chevron-left":
      return <polyline points="15 18 9 12 15 6" />;
    case "arrow-right":
      return (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      );
    case "check":
      return <polyline points="20 6 9 17 4 12" />;
    case "check-circle":
      return (
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </>
      );
    case "alert-circle":
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12.5" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </>
      );
    case "send":
      return (
        <>
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </>
      );
    case "expand":
      return (
        <>
          <path d="M15 3h6v6" />
          <path d="M9 21H3v-6" />
          <path d="m21 3-7 7" />
          <path d="m3 21 7-7" />
        </>
      );
    case "flame":
      return (
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
      );
    case "drill":
      return (
        <>
          <path d="M12 2v9" />
          <path d="M8 11h8l-4 9-4-9Z" />
          <path d="M9 5h6" />
        </>
      );
    case "flask":
      return (
        <>
          <path d="M9 2v6.5L4 18a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9.5V2" />
          <path d="M8 2h8" />
          <path d="M8.5 13h7" />
        </>
      );
    case "refinery":
      return (
        <>
          <rect x="3.5" y="10" width="4" height="10" />
          <rect x="10" y="5.5" width="4" height="14.5" />
          <rect x="16.5" y="12.5" width="4" height="7.5" />
          <line x1="2" y1="20.5" x2="22" y2="20.5" />
        </>
      );
    case "bolt":
      return <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />;
    case "factory":
      return (
        <>
          <path d="M3 21V9l6 4V9l6 4V9l6 4v8H3Z" />
          <path d="M17 6V3h3v3" />
        </>
      );
    case "pipeline":
      return (
        <>
          <rect x="2" y="9.5" width="20" height="5" rx="2.5" />
          <circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="19.5" cy="12" r="1" fill="currentColor" stroke="none" />
        </>
      );
    case "gauge":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12 15.5 8.5" />
          <path d="M12 5v1.5" />
        </>
      );
    default:
      return null;
  }
}
