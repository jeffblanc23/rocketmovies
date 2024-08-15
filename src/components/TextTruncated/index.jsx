import { Tooltip as ReactTooltip } from 'react-tooltip';

import { Container } from './styles';

export function TextTruncated ({ text, maxLength = 300 }) {
  const isTruncated = text.length > maxLength;
  const truncatedText = isTruncated ? text.slice(0, maxLength) + '...' : text;

  return (
    <>
      <Container data-tip={text}>
        {truncatedText}
      </Container>
      <ReactTooltip place="above" />
    </>
  );
};
