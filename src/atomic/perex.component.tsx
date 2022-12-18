import styled from 'styled-components'
import { colors } from '../theme/colors.const'
import { sizes } from '../theme/sizes.const'

type Props = {
	size?: keyof typeof sizes
	color?: keyof typeof colors
	isBold?: boolean
	isTextCenter?: boolean
}

const Perex = styled.p<Props>`
	font-size: ${props => (props.size ? props.theme.sizes[props.size] : props.theme.sizes[20])};
	color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.fontLight)};
	line-height: 1.4;
	font-weight: ${props => (props.isBold ? 'bold' : null)};
	text-align: ${props => (props.isTextCenter ? 'center' : 'left')};
`

export { Perex }
