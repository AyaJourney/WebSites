export function isValidSlug(slug) {
  return typeof slug === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function isNonEmpty(str, min = 2) {
  return typeof str === "string" && str.trim().length >= min;
}

export function isValidCategory(cat) {
  return typeof cat === "string" && cat.trim().length >= 2;
}
