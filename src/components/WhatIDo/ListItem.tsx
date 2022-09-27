/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

export type Props = {
  href: string;
  icon: React.ReactElement;
  title: React.ReactNode;
};

export const Component: React.FunctionComponent<Props> = ({
  href,
  icon,
  title,
}: Props): React.ReactElement => {
  return (
    <Chakra.ListItem>
      <Chakra.Link href={href} target="_blank">
        <Chakra.Button variant="ghost" colorScheme="teal" leftIcon={icon}>
          {title}
        </Chakra.Button>
      </Chakra.Link>
    </Chakra.ListItem>
  );
};
