import { createContext } from "react";
import { UseTheme } from "./types";

export const defaultContext = {
  themeModes: [],
  themeColors: [],
  setThemeMode: () => { },
  setThemeColor: () => { },
}

export const ThemeContext = createContext<UseTheme | null>(null)