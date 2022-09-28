/**
 * @fileoverview Defines /timeline.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Next from 'next';
import * as Chakra from '@chakra-ui/react';
import * as Article from '@/layouts/Article';
import * as Timeline from '@/components/Timeline';
import * as RSS from '@/utils/rss';

type Props = {
  items: RSS.Item[];
};

const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => (
  <Article.Component title="Timeline">
    <Chakra.Container>
      <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Timeline
      </Chakra.Heading>
      <Timeline.Component items={items} />
    </Chakra.Container>
  </Article.Component>
);

export default Component;

export const getServerSideProps: Next.GetServerSideProps = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: Next.GetServerSidePropsContext
) => {
  const items = await RSS.fetchAllFeed();
  const encoded = await Promise.all(
    items.map(async (item: RSS.Item) => {
      if (item.src) {
        const blob = await RSS.getFileContents(item.src);
        const base64 = blob.toString('base64');
        return {
          ...item,
          src: 'data:image/jpg;charset=utf-8;base64,' + base64,
        };
      }
      return item;
    })
  );
  const props: Props = {
    items: encoded,
  };
  return {
    props: props,
  };
};
