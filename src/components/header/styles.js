import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: #f7f9ff;
	padding: 2rem 1.5rem 8rem 1.5rem;
	border-radius: 0 0 20px 20px;
`;

const StyledMediaTitlesContainer = styled.div`
	border-bottom: 1px solid #848bab;
	padding-bottom: 1.8rem;
	margin-bottom: 1.8rem;
`;

const StyledFlexRowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export { StyledHeader, StyledMediaTitlesContainer, StyledFlexRowContainer };
