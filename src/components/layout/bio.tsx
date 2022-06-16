/**
 * @fileoverview Defines bio.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import styled from '@emotion/styled';

export type Props = {
  children: React.ReactNode;
  title: string;
  year: string;
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
  children,
  title,
  year,
}: Props): React.ReactElement => {
  return (
    <StyledBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledYear>{year}</StyledYear>
      {children}
    </StyledBox>
  );
};
