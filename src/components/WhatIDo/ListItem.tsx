/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

export type Props = {
  children: React.ReactNode;
  href: string;
  icon: React.ReactElement;
};

export const Component: React.FunctionComponent<Props> = ({
  children,
  href,
  icon,
}: Props): React.ReactElement => {
  return (
    <Chakra.ListItem>
      <Chakra.Link href={href} target="_blank">
        <Chakra.Button variant="ghost" colorScheme="teal" leftIcon={icon}>
          {children}
        </Chakra.Button>
      </Chakra.Link>
    </Chakra.ListItem>
  );
};
