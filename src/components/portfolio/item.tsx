/**
 * @fileoverview Defines item.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Laptop from '@/components/portfolio/laptop';
import * as Link from '@/components/portfolio/link';

export type Props = {
  src: string;
  href: string;
  title: string;
  description: string;
};

export const Component: React.FunctionComponent<Props> = ({
  src,
  href,
  title,
  description,
}: Props): React.ReactElement => {
  return (
    <>
      <Chakra.Text as="b" mb={5} mt={5} fontSize={16}>
        {title}
      </Chakra.Text>
      <Chakra.Text as="i" mb={5} textAlign="center" fontSize={14}>
        {description}
      </Chakra.Text>
      <Laptop.Component src={src} title={title} />
      <Link.Component zIndex="20" href={href} target="_blank" />
    </>
  );
};
