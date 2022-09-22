/**
 * @fileoverview Defines 404.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Layout from '@/components/layout';
import * as Misc from '@/components/misc';

const Timeline: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Layout.Article title="Timeline">
    <Chakra.Container>
      <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Timeline
      </Chakra.Heading>
      <Misc.WorkInProgress />
    </Chakra.Container>
  </Layout.Article>
);

export default Timeline;
