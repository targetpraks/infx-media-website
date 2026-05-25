/**
 * Safe JSON-LD serialization for Next.js Script tags.
 * Escapes:
 *   - < to \u003c (prevents </script> injection)
 *   - > to \u003e
 *   - & to \u0026
 *   - U+2028 (line separator) and U+2029 (paragraph separator) to \\n
 *
 * These replacements are compatible with JSON.parse() consumers.
 */
export function safeJsonLdStringify(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\n")
    .replace(/\u2029/g, "\\n");
}
