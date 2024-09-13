import {
  Dispatch,
  SetStateAction
} from "react";

export type UseTheme = {
  themeMode?: string;
  themeColor?: string;
  themeModes: string[];
  themeColors: string[];
  setThemeMode: Dispatch<SetStateAction<string>>;
  setThemeColor: Dispatch<SetStateAction<string>>;
}