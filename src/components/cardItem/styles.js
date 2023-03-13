import styled from 'styled-components';

const StyledCardItem = styled.div`
	position: absolute;

	left: ${({ left }) => left};
	top: ${({ top }) => top};
	width: 285px;
	height: 156px;
	padding: 1rem;
	background-image: ${({ bgCard }) => `url(${bgCard})`};
	background-size: cover;
`;

export { StyledCardItem };
