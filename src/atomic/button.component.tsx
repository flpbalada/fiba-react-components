import { useCallback } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button<{ isSecondary: boolean }>`
	display: flex;
	padding: ${props => props.theme.sizes[16]};
	background-color: ${props => (props.isSecondary ? props.theme.colors.secondary : props.theme.colors.primary)};
	border: none;
	border-radius: ${props => props.theme.sizes[8]};
	font-style: none;
	font-weight: 700;
	&:hover {
		cursor: pointer;
		box-shadow: ${props => props.theme.shadows.medium};
		outline: none;
	}
`

type Props = {
	isSecondary?: boolean
	children: JSX.Element | string
	onClick?: () => void
}

const Button = (props: Props) => {
	const children = props.children
	const onClick = props.onClick ? props.onClick : null
	const isSecondary = props.isSecondary ? props.isSecondary : false

	const clickHandler = useCallback(() => {
		if (onClick) onClick()
	}, [onClick])

	return (
		<ButtonWrapper
			onClick={clickHandler}
			isSecondary={isSecondary}
		>
			{children}
		</ButtonWrapper>
	)
}

export { Button }
