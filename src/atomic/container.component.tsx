import styled from 'styled-components'

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: ${props => props.theme.sizes[768]};
`

export { Container }
