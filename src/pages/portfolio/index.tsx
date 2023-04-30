/**
 * @fileoverview Defines /portfolio.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Article from '@/layouts/Article';
import * as Section from '@/layouts/Section';
import * as Portfolio from '@/components/Portfolio';
import * as OSS from '@/components/OSS';

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Article.Component title="Portfolio">
    <Chakra.Container maxW="80%">
      <Chakra.Heading as="h3" fontSize={20} mb={9} variant="section-title">
        Open Source Activities
      </Chakra.Heading>
      <Chakra.SimpleGrid columns={[1, 1, 2]} gap={3} mb={9}>
        <OSS.Component
          owner="delta-io"
          pinned="delta"
          href="https://github.com/delta-io"
        />
        <OSS.Component
          owner="mlflow"
          pinned="mlflow"
          href="https://github.com/mlflow"
        />
        <OSS.Component
          owner="dask"
          pinned="dask"
          href="https://github.com/dask"
        />
        <OSS.Component
          owner="kotosiro"
          pinned="sharing"
          href="https://github.com/kotosiro"
        />
      </Chakra.SimpleGrid>
      <Chakra.Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Personal Projects
      </Chakra.Heading>
      <Chakra.SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section.Component
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Component
            src="/images/portfolio/slam.mp4"
            href="https://github.com/ognis1205/slam-at-home"
            title="SLAM@HOME"
            description="An implementation of a SLAM system over a local Wi-Fi network."
          />
        </Section.Component>
        <Section.Component
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Component
            src="/images/portfolio/nests.mp4"
            href="https://github.com/ognis1205/nests"
            title="NesTs"
            description="A TypeScript Nintendo Entertainment System emulator implementation."
          />
        </Section.Component>
        <Section.Component
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Component
            src="/images/portfolio/siren.mp4"
            href="https://github.com/ognis1205/siren-gan"
            title="SIREN GAN"
            description="A PoC Project of the SIREN GAN implementation in GLSL."
          />
        </Section.Component>
        <Section.Component
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Component
            src="/images/portfolio/tda.png"
            href="https://github.com/ognis1205/spark-tda"
            title="Spark TDA"
            description="A scalable topological data analysis package for Apache Spark."
          />
        </Section.Component>
        <Section.Component
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Portfolio.Component
            src="/images/portfolio/mutad.mp4"
            href="https://github.com/ognis1205/mutad"
            title="Mutad"
            description="A real-time search engine implementation based on various technology stack."
          />
        </Section.Component>
      </Chakra.SimpleGrid>
    </Chakra.Container>
  </Article.Component>
);

export default Component;
