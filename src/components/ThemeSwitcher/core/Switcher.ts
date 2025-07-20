import { LocalStorageAdaptor } from "@/components/ThemeSwitcher/infrastructure/LocalStorageAdaptor.ts";
import { PageAdaptor } from "@/components/ThemeSwitcher/infrastructure/PageAdaptor.ts";
import { Theme } from "./Theme";

const initializeTheme = (storage: LocalStorageAdaptor, page: PageAdaptor) => {
  const theme = storage.get();
  if (theme !== Theme.UNKNOWN) page.setPageTheme(theme);
};

const storeTheme = (storage: LocalStorageAdaptor, page: PageAdaptor) => {
  return (event: Event) => {
    const value = (event.target as HTMLSelectElement).value as Theme;
    storage.set(value);
    page.setPageTheme(value);
  };
};

export { initializeTheme, storeTheme };
