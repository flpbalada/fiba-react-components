import styled, { css } from 'styled-components'

const heroSharedStyles = css`
	font-weight: 700;
	line-height: 1.4;
	color: ${props => props.theme.colors.fontDark};
`

const Hero1 = styled.h1`
	${heroSharedStyles}
	font-size: ${props => props.theme.sizes[32]};
`

const Hero2 = styled.h1`
	${heroSharedStyles}
	font-size: ${props => props.theme.sizes[24]};
`

const Hero3 = styled.h1`
	${heroSharedStyles}
	font-size: ${props => props.theme.sizes[16]};
`

const variants = {
	H1: Hero1,
	H2: Hero2,
	H3: Hero3,
}

type Props = {
	variant?: keyof typeof variants
	children?: JSX.Element | string
}

const Hero = (props: Props) => {
	const Variant = props.variant ? variants[props.variant] : variants.H1
	const children = props.children ?? props.children

	return <Variant>{children}</Variant>
}

export { Hero }
