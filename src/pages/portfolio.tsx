/**
 * @fileoverview Defines /portfolio.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Layouts from '@/components/Layouts';
import * as Portfolio from '@/components/Portfolio';

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Layouts.Article title="Portfolio">
    <Chakra.Container>
      <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Personal Projects
      </Chakra.Heading>
      <Chakra.SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Layouts.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Item
            src="/images/portfolio/slam.gif"
            href="https://github.com/ognis1205/slam-at-home"
            title="SLAM@HOME"
            description="An implementation of a real-time SLAM system over a local Wi-Fi network."
          />
        </Layouts.Section>
        <Layouts.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Item
            src="/images/portfolio/nests.gif"
            href="https://github.com/ognis1205/nests"
            title="NesTs"
            description="A TypeScript Nintendo Entertainment System emulator implementation."
          />
        </Layouts.Section>
        <Layouts.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Item
            src="/images/portfolio/siren.gif"
            href="https://github.com/ognis1205/siren-gan"
            title="SIREN GAN"
            description="A PoC Project of the SIREN GAN implementation in GLSL."
          />
        </Layouts.Section>
        <Layouts.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Item
            src="/images/portfolio/tda.png"
            href="https://github.com/ognis1205/spark-tda"
            title="Spark TDA"
            description="A scalable topological data analysis package for Apache Spark."
          />
        </Layouts.Section>
        <Layouts.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Item
            src="/images/portfolio/mutad.gif"
            href="https://github.com/ognis1205/mutad"
            title="Mutad"
            description="A real-time search engine implementation based on various technology stack."
          />
        </Layouts.Section>
      </Chakra.SimpleGrid>
    </Chakra.Container>
  </Layouts.Article>
);

export default Component;
