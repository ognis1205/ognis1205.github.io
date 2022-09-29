/**
 * @fileoverview Defines Instagram.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcon from 'react-icons/io5';
import Image from 'next/image';
import styled from '@emotion/styled';
import * as RSS from '@/utils/rss';
import * as Loaders from '@/utils/loaders';

export type Props = RSS.Feed;

const AspectRatioBox = styled.div`
  display: inline-block;
  position: relative;
  width: 25%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
`;

const IconBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5em;
`;

export const Component: React.FunctionComponent<Props> = ({
  creator,
  link,
  pubDate,
  title,
  imgSrc,
}: Props): React.ReactElement => {
  return (
    <Chakra.Box pl={6} pr={6} pb={6}>
      <Chakra.LinkBox
        borderRadius="lg"
        p={3}
        textAlign="center"
        bg={Chakra.useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Chakra.Heading size="sm" fontSize={10} fontWeight="bold">
          <Chakra.Flex flex={1}>
            <Chakra.Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconBox>
                <ReactIcon.IoLogoInstagram color="teal" />
              </IconBox>
              {creator}
            </Chakra.Box>
            <Chakra.Spacer />
            <Chakra.Text fontSize={8} opacity={0.4}>
              {pubDate}
            </Chakra.Text>
          </Chakra.Flex>
        </Chakra.Heading>
        <Chakra.Box
          m={3}
          fontSize={14}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Chakra.LinkOverlay href={link}>{title}</Chakra.LinkOverlay>
        </Chakra.Box>
        <AspectRatioBox>
          <Image
            src={imgSrc}
            alt={title}
            title={title}
            loading="lazy"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            loader={Loaders.DefaultLoader}
            unoptimized={true}
          />
        </AspectRatioBox>
      </Chakra.LinkBox>
    </Chakra.Box>
  );
};
