/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

export type Props = {
  organization: string;
  title: string;
  year: string;
  description: React.ReactNode;
};

export const Component: React.FunctionComponent<Props> = ({
  organization,
  title,
  year,
  description,
}: Props): React.ReactElement => {
  return (
    <Chakra.Box>
      <Chakra.Box display={{ md: 'flex' }}>
        <Chakra.Box fontWeight="bold">{organization}</Chakra.Box>
        <Chakra.Box
          fontWeight="bold"
          _before={{ md: { content: '"\\00A0─\\00A0"' } }}
        >
          {title}
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box>
        <Chakra.Text as="i">{year}</Chakra.Text>
      </Chakra.Box>
      <Chakra.Box px={[3, 6]} py={[1, 3]}>
        <Chakra.Text as="i">{description}</Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  );
};
