import styled from 'styled-components';

const StyledHeader = styled.header`
	height: 240px;
	background-image: url('/images/bg-main-mobile.png');
	background-size: cover;
	color: white;
`;

const StyledLogoCard = styled.img`
	height: 30px;
`;
const StyledCardNumber = styled.p`
	position: absolute;
	top: 60px;
	left: 1.5rem;
	font-size: 1.5rem;
`;

const StyledCardNameContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	bottom: 0;
	left: 1.5rem;
	font-size: 0.7rem;
	width: 82%;
`;

const StyledBackCardNumber = styled.p`
	position: absolute;
	right: 2.5rem;
	top: 55px;
	font-size: 0.8rem;
`;
export {
	StyledHeader,
	StyledLogoCard,
	StyledCardNumber,
	StyledCardNameContainer,
	StyledBackCardNumber
};
