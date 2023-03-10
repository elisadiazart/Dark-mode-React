import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Toggle from '../toggle/Toggle';
import {
	StyledHeader,
	StyledMediaTitlesContainer,
	StyledFlexRowContainer
} from './styles';

const Header = () => {
	return (
		<>
			<StyledHeader>
				<StyledMediaTitlesContainer>
					<Title titleText='Social Media Dashboard' />
					<Subtitle textSubtitle='Total Followers: 23,004' />
				</StyledMediaTitlesContainer>
				<StyledFlexRowContainer>
					<Subtitle textSubtitle='Dark Mode' />
					<Toggle open={open} />
				</StyledFlexRowContainer>
			</StyledHeader>
		</>
	);
};

export default Header;
