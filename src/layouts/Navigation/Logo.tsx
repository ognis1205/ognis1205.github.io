/**
 * @fileoverview Defines Logo.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import * as Loaders from '@/utils/loaders';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
  img {
    transition: 200ms ease;
    transform: rotate(-20deg);
  }
  &:hover img {
    transform: rotate(0deg);
  }
`;

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const logo = `/images/icons/paw${Chakra.useColorModeValue('', '-dark')}.png`;

  return (
    <NextLink href="/" passHref scroll={false}>
      <a>
        <LogoBox>
          <Image
            src={logo}
            width={20}
            height={20}
            alt="logo"
            loader={Loaders.DefaultLoader}
            unoptimized={true}
          />
          <Chakra.Text
            color={Chakra.useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            pl={1}
          >
            Shingo OKAWA
          </Chakra.Text>
        </LogoBox>
      </a>
    </NextLink>
  );
};
