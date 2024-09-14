export type UseThemeProps = {
  /** List of all available theme names */
  themeColors: string[]
  themeModes: string[]
  /** Update the theme */
  setThemeMode: React.Dispatch<React.SetStateAction<string>>
  setThemeColor: React.Dispatch<React.SetStateAction<string>>
  /** Active theme name */
  themeMode?: string | undefined
  themeColor?: string | undefined
}