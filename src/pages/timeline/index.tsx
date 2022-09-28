/**
 * @fileoverview Defines /timeline.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Article from '@/layouts/Article';
import * as Section from '@/layouts/Section';
import * as Timeline from '@/components/Timeline';
import * as RSS from '@/utils/rss';

type SpinnerProps = {
  fadeIn: boolean;
};

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  fadeIn,
}: SpinnerProps): React.ReactElement => (
  <Chakra.Fade in={fadeIn}>
    <Chakra.Spinner
      size="xl"
      position="absolute"
      left="50%"
      top="75%"
      ml="calc(0px - var(--spinner-size) / 2)"
      mt="calc(0px - var(--spinner-size))"
    />
  </Chakra.Fade>
);

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const [items, setItems] = React.useState<RSS.Item[]>([]);

  React.useEffect(() => {
    let unmounted = false;

    const fetchAllFeed = async () => {
      const items = await RSS.fetchAllFeed();
      const encoded = await Promise.all(
        items.map(async (item: RSS.Item) => {
          if (item.src) {
            const blob = await RSS.getFileContents(item.src);
            const base64 = blob.toString('base64');
            return {
              ...item,
              src: 'data:image/jpeg;charset=utf-8;base64,' + base64,
            };
          }
          return item;
        })
      );

      if (!unmounted) {
        setItems(encoded);
        setLoading(false);
      }
    };

    fetchAllFeed();

    const cleanup = () => {
      unmounted = true;
    };

    return cleanup;
  }, []);

  return (
    <Article.Component title="Timeline">
      <Chakra.Container>
        <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Timeline
        </Chakra.Heading>
        <Section.Component delay={0.1}>
          <Spinner fadeIn={isLoading} />
          <Timeline.Component items={items} />
        </Section.Component>
      </Chakra.Container>
    </Article.Component>
  );
};

export default Component;
