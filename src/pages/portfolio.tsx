/**
 * @fileoverview Defines /portfolio.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Layout from '@/components/layout';
import mutad from '@/assets/images/mutad.gif';
import nests from '@/assets/images/nests.gif';
import siren from '@/assets/images/siren.gif';
import slam from '@/assets/images/slam.gif';
import tda from '@/assets/images/tda.png';

const Portfolio: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Layout.Article title="Porftolio">
    <Chakra.Container>
      <Chakra.Heading as="h3" fontSize={20} mb={4}>
        Portfolio
      </Chakra.Heading>

      <Chakra.SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Layout.Section delay={0}>
          <Layout.GridLink
            href="https://github.com/ognis1205/slam-at-home"
            title="SLAM@HOME"
            thumbnail={slam}
          >
            A real-time SLAM system over a local Wi-Fi network, ML driven and
            WebRTC connected iOS & WEB applications.
          </Layout.GridLink>
        </Layout.Section>
        <Layout.Section delay={0}>
          <Layout.GridLink
            href="https://github.com/ognis1205/nests"
            title="NesTs"
            thumbnail={nests}
          >
            A Nintendo Entertainment System (NES) emulator implemented in
            TypeScript/React.
          </Layout.GridLink>
        </Layout.Section>

        <Layout.Section delay={0.1}>
          <Layout.GridLink
            href="https://github.com/ognis1205/siren-gan"
            title="SIREN-GAN"
            thumbnail={siren}
          >
            A SIREN GAN implementation in GLSL that hallucinates new
            hand-written digits in real-time.
          </Layout.GridLink>
        </Layout.Section>
        <Layout.Section delay={0.1}>
          <Layout.GridLink
            href="https://github.com/ognis1205/spark-tda"
            thumbnail={tda}
            title="SparkTDA"
          >
            An Apache Spark package providing large scale Topological Data
            Analysis functionalities.
          </Layout.GridLink>
        </Layout.Section>
        <Layout.Section delay={0.1}>
          <Layout.GridLink
            href="https://github.com/ognis1205/mutad"
            title="Mutad"
            thumbnail={mutad}
          >
            A Realtime Data Processing and Search Engine Implementation,
            visualizing Tweet geographic data in real-time.
          </Layout.GridLink>
        </Layout.Section>
      </Chakra.SimpleGrid>
    </Chakra.Container>
  </Layout.Article>
);

export default Portfolio;
