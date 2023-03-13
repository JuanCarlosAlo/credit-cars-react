import { StyledCardItem } from '../cardItem/styles';
import {
	StyledBackCardNumber,
	StyledCardNameContainer,
	StyledCardNumber,
	StyledHeader,
	StyledLogoCard
} from './styles';

const Header = ({ values }) => {
	return (
		<>
			<StyledHeader>
				<StyledCardItem
					bgCard={'/images/bg-card-back.png'}
					top={'20px'}
					left={'180px'}
				>
					<StyledBackCardNumber>{values.cvc}</StyledBackCardNumber>
				</StyledCardItem>
				<StyledCardItem
					bgCard={'/images/bg-card-front.png'}
					top={'120px'}
					left={'20px'}
				>
					<StyledLogoCard src='/images/card-logo.svg' alt='' />
					<StyledCardNumber>{values.cardNumber}</StyledCardNumber>
					<StyledCardNameContainer>
						<p>{values.name}</p>
						<p>{values.exDateMonth}</p>
						<p>/{values.exDateYear}</p>
					</StyledCardNameContainer>
				</StyledCardItem>
			</StyledHeader>
		</>
	);
};

export default Header;
