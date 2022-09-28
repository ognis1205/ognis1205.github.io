/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcon from 'react-icons/io5';
import Image from 'next/image';
import styled from '@emotion/styled';
import * as Timeline from '@/utils/timeline';
import * as Loaders from '@/utils/loaders';

export type Props = {
  date: string;
  title: string;
  content: string;
  action?: string;
  url?: string;
  src?: string;
};

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
  padding-left: 0.75em;
  padding-right: 0.5em;
`;

const getIcon = (url: string): React.ReactElement => {
  const hostname = Timeline.getHostFrom(url);
  if (hostname.includes('twitter')) {
    return <ReactIcon.IoLogoTwitter color="teal" />;
  } else if (hostname.includes('instagram')) {
    return <ReactIcon.IoLogoInstagram color="teal" />;
  } else {
    return <ReactIcon.IoPaw color="teal" />;
  }
};

export const Component: React.FunctionComponent<Props> = ({
  date,
  title,
  url,
  src,
}: Props): React.ReactElement => {
  const lineStyle = {
    content: `""`,
    position: 'absolute',
    left: '-2px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: Chakra.useColorModeValue('blackAlpha.500', 'whiteAlpha.500'),
  };

  const dotStyle = {
    content: `"─ "`,
    position: 'absolute',
    left: '-2px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Chakra.Box _before={lineStyle}>
      <Chakra.Box
        display="flex"
        as="time"
        fontSize={14}
        p={3}
        _before={dotStyle}
      >
        <IconBox>{getIcon(url)}</IconBox>
        Posted on {Timeline.getHostFrom(url)} / {Timeline.formatDate(date)}
      </Chakra.Box>
      <Chakra.Box pl={6} pr={6} pb={6}>
        <Chakra.LinkBox
          borderRadius="lg"
          p={3}
          textAlign="center"
          bg={Chakra.useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Chakra.Heading size="sm" my="2" fontSize={16}>
            <Chakra.LinkOverlay href={url}>{title}</Chakra.LinkOverlay>
          </Chakra.Heading>
          {src && (
            <AspectRatioBox>
              <Image
                src={src}
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
          )}
        </Chakra.LinkBox>
      </Chakra.Box>
    </Chakra.Box>
  );
};
