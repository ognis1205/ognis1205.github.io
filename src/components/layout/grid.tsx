/**
 * @fileoverview Defines grid.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Emotion from '@emotion/react';
import NextLink from 'next/link';
import Image from 'next/image';

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail: any;
};

export const Link: React.FunctionComponent<LinkProps> = ({
  children,
  href,
  title,
  thumbnail,
}: LinkProps): React.ReactElement => {
  return (
    <Chakra.Box w="100%" textAlign="center">
      <Chakra.LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
        />
        <Chakra.LinkOverlay href={href} target="_blank">
          <Chakra.Text mt={2}>{title}</Chakra.Text>
        </Chakra.LinkOverlay>
        <Chakra.Text fontSize={14}>{children}</Chakra.Text>
      </Chakra.LinkBox>
    </Chakra.Box>
  );
};

export type WorkProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: string;
};

export const Work: React.FunctionComponent<WorkProps> = ({
  children,
  id,
  title,
  thumbnail,
}: WorkProps): React.ReactElement => {
  return (
    <Chakra.Box w="100%" textAlign="center">
      <NextLink href={`/works/${id}`} passHref scroll={false}>
        <Chakra.LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <Chakra.LinkOverlay href={`/works/${id}`}>
            <Chakra.Text mt={2} fontSize={20}>
              {title}
            </Chakra.Text>
          </Chakra.LinkOverlay>
          <Chakra.Text fontSize={14}>{children}</Chakra.Text>
        </Chakra.LinkBox>
      </NextLink>
    </Chakra.Box>
  );
};

export const Global: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  return (
    <Emotion.Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      `}
    />
  );
};
