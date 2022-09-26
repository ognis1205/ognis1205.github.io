// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * @fileoverview Defines Section.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as FramerMotion from 'framer-motion';

export type Props = {
  children: React.ReactNode;
  [key: string]: unknown;
};

const StyledDiv = Chakra.chakra(FramerMotion.motion.div, {
  shouldForwardProp: (prop: string) =>
    Chakra.shouldForwardProp(prop) || prop === 'transition',
});

export const Component: React.FunctionComponent<Props> = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      mb={10}
      {...props}
    >
      {children}
    </StyledDiv>
  );
};
