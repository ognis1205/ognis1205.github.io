/**
 * @fileoverview Defines /contact.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Article from '@/layouts/Article';
import * as Section from '@/layouts/Section';
import * as Email from '@/components/Email';

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  return (
    <Article.Component title="Contact">
      <Chakra.Container>
        <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Contact
        </Chakra.Heading>
        <Section.Component delay={0.1}>
          <Email.Component />
        </Section.Component>
      </Chakra.Container>
    </Article.Component>
  );
};

export default Component;
