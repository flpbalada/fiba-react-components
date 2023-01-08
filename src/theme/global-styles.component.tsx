import { createGlobalStyle, css } from 'styled-components'

const bodyStyles = css`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
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
