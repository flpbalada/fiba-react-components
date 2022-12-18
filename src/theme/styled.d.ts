import 'styled-components'
import { colors } from './colors.const'
import { sizes } from './sizes.const'
import { devices } from './devices.const'
import { shadows } from './shadows.const'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: typeof colors
		sizes: typeof sizes
		devices: typeof devices
		shadows: typeof shadows
	}
}
