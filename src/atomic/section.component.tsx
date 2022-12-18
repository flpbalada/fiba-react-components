import styled from 'styled-components'

const Section = styled.section`
	padding: 0;
	@media ${props => props.theme.devices.mobile} {
		padding: ${props => props.theme.sizes[16]};
	}
`

export { Section }
