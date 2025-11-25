// Dynamically load all module pages and shared top-level pages (like Home)
export const pages = import.meta.glob([
  "/src/modules/**/pages/*.tsx",
  "/src/shared/components/*.tsx",
]);
