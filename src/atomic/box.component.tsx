import styled, { css } from 'styled-components'
import { sizes } from '../theme/sizes.const'

type Props = {
	isFlex?: boolean
	mobileFlexDirection?: 'column' | 'row'
	flexDirection?: 'column' | 'row'
	flex?: number
	alignItems?: 'center' | 'start' | 'end'
	justify?: 'center' | 'start' | 'end'
	isShadow?: boolean
	padding?: keyof typeof sizes
	isBorder?: boolean
	isRounded?: boolean
	width?: keyof typeof sizes
}

const borderStyle = css`
	border: 1px solid ${props => props.theme.colors.fontLight};
`

const Box = styled.div<Props>`
	display: ${props => (props.isFlex ? 'flex' : 'block')};
	width: ${props => (props.width ? props.theme.sizes[props.width] : null)};
	flex-direction: ${props => (props.isFlex && props.flexDirection ? props.flexDirection : 'row')};
	flex: ${props => (props.flex ? props.flex : null)};
	align-items: ${props => (props.isFlex && props.alignItems ? props.alignItems : null)};
	justify-content: ${props => (props.isFlex && props.justify ? props.justify : null)};
	padding: ${props => (props.padding ? props.theme.sizes[props.padding] : 0)};
	box-shadow: ${props => (props.isShadow ? props.theme.shadows.medium : null)};
	border-radius: ${props => (props.isRounded ? props.theme.sizes[8] : 0)};
	${props => (props.isBorder ? borderStyle : null)}
	@media ${props => props.theme.devices.mobile} {
		flex-direction: ${props => (props.isFlex && props.mobileFlexDirection ? props.mobileFlexDirection : 'row')};
	}
`

export { Box }
