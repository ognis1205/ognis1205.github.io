/**
 * @fileoverview Defines 404.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Layouts from '@/components/Layouts';
import * as Misc from '@/components/Misc';

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Layouts.Article title="Timeline">
    <Chakra.Container>
      <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Timeline
      </Chakra.Heading>
      <Misc.WIP />
    </Chakra.Container>
  </Layouts.Article>
);

export default Component;
