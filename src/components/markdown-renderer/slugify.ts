// Converts heading text to a URL-safe id, e.g. "Hello World!" → "hello-world"
export const slugify = (text: React.ReactNode): string =>
  String(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
