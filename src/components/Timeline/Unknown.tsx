/**
 * @fileoverview Defines Unknonw.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcon from 'react-icons/io5';
import styled from '@emotion/styled';
import * as RSS from '@/utils/rss';

export type Props = RSS.Feed;

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
  contentSnippet,
}: Props): React.ReactElement => {
  return (
    <Chakra.Box px={6} pb={6}>
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
                <ReactIcon.IoPaw color="teal" />
              </IconBox>
              {creator}
            </Chakra.Box>
            <Chakra.Spacer />
            <Chakra.Text fontSize={8} opacity={0.4}>
              {pubDate}
            </Chakra.Text>
          </Chakra.Flex>
        </Chakra.Heading>
        <Chakra.Text m={3} fontSize={14}>
          <Chakra.LinkOverlay href={link}>{contentSnippet}</Chakra.LinkOverlay>
        </Chakra.Text>
      </Chakra.LinkBox>
    </Chakra.Box>
  );
};
