import { DefaultTheme, ThemeProvider } from 'styled-components'
import { colors } from './colors.const'
import { sizes } from './sizes.const'
import { devices } from './devices.const'
import { shadows } from './shadows.const'

// ? https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3

interface ThemeConfiguration extends DefaultTheme {
	colors: typeof colors
	sizes: typeof sizes
	devices: typeof devices
	shadows: typeof shadows
}

export type { ThemeConfiguration }

const defaultTheme: ThemeConfiguration = {
	colors: colors,
	sizes: sizes,
	devices: devices,
	shadows: shadows,
}

type Props = {
	children: JSX.Element
	theme?: ThemeConfiguration
}

const Theme = (props: Props) => {
	const children = props.children
	const theme = props.theme ? props.theme : defaultTheme

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { Theme }
