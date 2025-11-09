import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

// Get the default MDX components from the theme
const themeComponents = getThemeComponents();

// Export the function (note: alias to avoid ESLint hook warnings)
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
  };
}
