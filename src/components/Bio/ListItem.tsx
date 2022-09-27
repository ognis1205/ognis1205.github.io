/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import styled from '@emotion/styled';

export type Props = {
  title: string;
  year: string;
  description: React.ReactNode;
};

const StyledBox = styled(Chakra.Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 1em;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const StyledYear = styled.div``;

export const Component: React.FunctionComponent<Props> = ({
  title,
  year,
  description,
}: Props): React.ReactElement => {
  return (
    <StyledBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledYear>{year}</StyledYear>
      {description}
    </StyledBox>
  );
};
