import styled from 'styled-components';

const StyledToggle = styled.div`
	width: 64px;
	height: 30px;
	display: flex;
	background-color: #aeb3cb;
	border-radius: 32px;
	align-items: center;
	padding: 0.2rem;

	&::after {
		content: '';
		width: 25px;
		height: 25px;
		background-color: white;
		border-radius: 50%;
		transform: translateX(${({ open }) => (open ? '33px' : '0')});
	}
`;

export { StyledToggle };
