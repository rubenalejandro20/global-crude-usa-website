/** Resolves a root-relative public asset path (e.g. "/images/hero/foo.jpg") against the app's base URL,
 * so images still resolve correctly when the site is deployed under a subpath (e.g. GitHub Pages project sites). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}
