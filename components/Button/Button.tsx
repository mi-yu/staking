import styled, { css } from 'styled-components';
import { resetButtonCSS } from 'styles/common';

type ButtonProps = {
	size?: 'sm' | 'md' | 'lg' | 'xl';
	variant: 'primary' | 'secondary' | 'outline' | 'alt' | 'danger' | 'text';
	isActive?: boolean;
	isRounded?: boolean;
};

const Button = styled.button<ButtonProps>`
	font-family: ${(props) => props.theme.fonts.condensedBold};
	height: 32px;
	font-size: 12px;
	padding: 0 12px;
	border-radius: ${(props) => (props.isRounded ? '100px' : '4px')};
	border: none;
	white-space: nowrap;
	cursor: pointer;
	outline: none;
    color: ${(props) => props.theme.colors.white};
	text-transform: capitalize;

  &:disabled {
		background: ${(props) => props.theme.colors.mutedBrightBlue};
		cursor: default;
	}

	${(props) =>
		props.size === 'sm' &&
		css`
			height: 24px;
		`}

	${(props) =>
		props.size === 'md' &&
		css`
			height: 32px;
		`}

	${(props) =>
		props.size === 'lg' &&
		css`
			padding: 0 40px;
			height: 40px;
		`}		


	${(props) =>
		props.size === 'xl' &&
		css`
			height: 48px;
		`}				

	${(props) =>
		props.variant === 'primary' &&
		css`
			color: ${(props) => props.theme.colors.darkBlue};
			background: ${(props) => props.theme.colors.brightBlue};
			box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.6);
			border: 1px solid transparent;
			&:hover {
				&:not(:disabled) {
					background: ${(props) => props.theme.colors.lightBlue};
					color: ${(props) => props.theme.colors.brightBlue};
					box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
					border: 1px solid ${(props) => props.theme.colors.brightBlue};
				}
			}
			&:disabled {
				background: ${(props) => props.theme.colors.lightBlue};
				color: ${(props) => props.theme.colors.brightBlue};
				box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
				border: 1px solid ${(props) => props.theme.colors.brightBlue};
				cursor: default;
			}
		`}

		${(props) =>
			props.variant === 'secondary' &&
			css`
				color: ${(props) => props.theme.colors.brightBlue};
				background-color: ${(props) => props.theme.colors.lightBlue};
				box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
				border: 1px solid ${(props) => props.theme.colors.brightBlue};
				&:hover {
					&:not(:disabled) {
						background: ${(props) => props.theme.colors.brightBlue10};
						color: ${(props) => props.theme.colors.darkBlue};
					}
				}
				&:disabled {
					background: ${(props) => props.theme.colors.brightBlue10};
					color: ${(props) => props.theme.colors.darkBlue};
					cursor: default;
				}
			`}	

		
		${(props) =>
			props.variant === 'alt' &&
			css`
				color: ${(props) => props.theme.colors.white};
				background: ${(props) => props.theme.colors.brightOrange};
				box-shadow: 0px 0px 10px rgba(252, 135, 56, 0.6);
				&:hover {
					&:not(:disabled) {
						background: ${(props) => props.theme.colors.mutedBrightBurntOrange};
					}
				}
				&:disabled {
					background: ${(props) => props.theme.colors.mutedBrightBurntOrange};
					cursor: default;
				}
			`}		

		${(props) =>
			props.variant === 'outline' &&
			css`
				border-radius: 2px;
				color: ${(props) => props.theme.colors.white};
				background-color: ${(props) => props.theme.colors.elderberry};
				border: 1px solid ${(props) => props.theme.colors.mediumBlue};
				&:hover {
					&:not(:disabled) {
						color: ${(props) => props.theme.colors.white};
						background-color: ${(props) => props.theme.colors.mediumBlue};
					}
				}
				${(props) =>
					// @ts-ignore
					props.isActive &&
					css`
						color: ${(props) => props.theme.colors.white};
						background-color: ${(props) => props.theme.colors.mediumBlue};
					`};
			`}		


	${(props) =>
		props.variant === 'danger' &&
		css`
			color: ${(props) => props.theme.colors.white};
			background-color: ${(props) => props.theme.colors.red};
			&:hover {
				&:not(:disabled) {
					background-color: ${(props) => props.theme.colors.redHover};
				}
			}
			${(props) =>
				// @ts-ignore
				props.isActive &&
				css`
					background-color: ${(props) => props.theme.colors.redHover};
				`};
		`}									

		${(props) =>
			props.variant === 'text' &&
			css`
				${resetButtonCSS};
				color: ${(props) => props.theme.colors.white};
				&:hover {
					&:not(:disabled) {
						color: ${(props) => props.theme.colors.silver};
					}
				}
				${(props) =>
					// @ts-ignore
					props.isActive &&
					css`
						color: ${(props) => props.theme.colors.white};
					`};
			`}	
`;

export default Button;
