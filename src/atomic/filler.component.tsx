import styled from 'styled-components'
import { sizes } from '../theme/sizes.const'

type Props = {
	width?: keyof typeof sizes
	height?: keyof typeof sizes
}

const Filler = styled.div<Props>`
	padding: 0;
	margin: 0;
	width: ${props => (props.width ? props.theme.sizes[props.width] : 0)};
	height: ${props => (props.height ? props.theme.sizes[props.height] : 0)};
`

export { Filler }
