/**
 * @fileoverview Defines /timeline.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import * as Article from '@/layouts/Article';
import * as Section from '@/layouts/Section';
import * as Timeline from '@/components/Timeline';
import * as RSS from '@/utils/rss';

const blinking = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Blink = styled.span`
  animation: ${blinking} 1s ease-in-out infinite alternate;
`;

type SpinnerProps = {
  fadeIn: boolean;
};

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  fadeIn,
}: SpinnerProps): React.ReactElement => (
  <Chakra.Fade in={fadeIn}>
    <Chakra.VStack>
      <Chakra.Text as="b" mb={5} mt={5} fontSize={16} textAlign="center">
        <Blink>It may take a few seconds...</Blink>
      </Chakra.Text>
      <Chakra.Spinner size="xl" />
    </Chakra.VStack>
  </Chakra.Fade>
);

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const [items, setItems] = React.useState<RSS.Feed[]>([]);

  React.useEffect(() => {
    const controller = new AbortController();

    const { signal } = controller;

    (async () => {
      const items = await RSS.fetchAllFeed(signal);
      await Promise.all(
        items.map(async (item: RSS.Feed) => {
          if (item.imgSrc) {
            const blob = await RSS.getFileContents(item.imgSrc, signal);
            const base64 = blob.toString('base64');
            return {
              ...item,
              imgSrc: 'data:image/jpeg;charset=utf-8;base64,' + base64,
            };
          }
          return item;
        })
      ).then((encoded) => {
        setItems(encoded);
        setLoading(false);
      });
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Article.Component title="Timeline">
      <Chakra.Container>
        <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Timeline
        </Chakra.Heading>
        <Section.Component delay={0.1}>
          {isLoading ? (
            <Spinner fadeIn={isLoading} />
          ) : (
            <Timeline.Component items={items} numberToShow={30} />
          )}
        </Section.Component>
      </Chakra.Container>
    </Article.Component>
  );
};

export default Component;
