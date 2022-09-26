/**
 * @fileoverview Defines Box.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import styled from '@emotion/styled';

export type Props = {
  items: string[];
};

const StyledP = styled.p`
  text-align: justify;
  text-indent: 1em;
`;

export const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => {
  return (
    <>
      <Chakra.Heading as="h3" variant="section-title">
        I ♥
      </Chakra.Heading>
      <StyledP>{items.join(', ')}</StyledP>
    </>
  );
};
