export const DARK = 'light'
export const LIGHT = 'dark'

export const toggleTheme = (theme) => {
	return theme == DARK ? LIGHT : DARK
}