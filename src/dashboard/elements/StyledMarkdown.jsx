import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

const StyledMarkdown = styled(Markdown).attrs({
	options: {
		forceInline: true,
	},
})`
	margin: .5rem 0;
`;

export default StyledMarkdown;
