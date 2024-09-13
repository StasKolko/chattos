import { useContext } from "react";
import { defaultContext, ThemeContext } from "./ThemeContext";
import { UseTheme } from "./types";

export const useTheme = (): UseTheme => useContext(ThemeContext) ?? defaultContext;