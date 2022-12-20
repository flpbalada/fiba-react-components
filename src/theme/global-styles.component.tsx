import { createGlobalStyle, css } from 'styled-components'

const bodyStyles = css`
	margin: 0;
	padding: 0;
`

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
    ${bodyStyles}
  }
`

export { GlobalStyles }
