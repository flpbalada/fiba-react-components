import styled from 'styled-components'
import { sizes } from '../theme/sizes.const'

type ContainerProps = {
	maxWidth?: keyof typeof sizes
	padding?: keyof typeof sizes
}
const Container = styled.div<ContainerProps>`
	margin-left: auto;
	margin-right: auto;
	max-width: ${props => (props.maxWidth ? props.theme.sizes[props.maxWidth] : props.theme.sizes[768])};
	padding: ${p => (p.padding ? p.theme.sizes[p.padding] : null)};
`

export { Container }
