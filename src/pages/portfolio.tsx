/**
 * @fileoverview Defines /portfolio.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Layout from '@/components/layout';
import * as Laptop from '@/components/laptop';

const Portfolio: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Layout.Article title="Porftolio">
    <Chakra.Container>
      <Chakra.Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Chakra.Heading>

      <Chakra.SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Layout.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Chakra.Text as="b" mb={5} mt={5} fontSize={15}>
            SLAM@HOME
          </Chakra.Text>
          <Laptop.Frame src="/images/portfolio/slam.gif" title="SLAM@HOME" />
          <Laptop.GithubLink
            zIndex="20"
            href="https://github.com/ognis1205/slam-at-home"
            target="_blank"
          />
        </Layout.Section>
        <Layout.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Chakra.Text as="b" mb={5} mt={5} fontSize={15}>
            NesTs
          </Chakra.Text>
          <Laptop.Frame src="/images/portfolio/nests.gif" title="NesTs" />
          <Laptop.GithubLink
            zIndex="20"
            href="https://github.com/ognis1205/nests"
            target="_blank"
          />
        </Layout.Section>

        <Layout.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Chakra.Text as="b" mb={5} mt={5} fontSize={15}>
            SIREN GAN
          </Chakra.Text>
          <Laptop.Frame src="/images/portfolio/siren.gif" title="SIREN GAN" />
          <Laptop.GithubLink
            zIndex="20"
            href="https://github.com/ognis1205/siren-gan"
            target="_blank"
          />
        </Layout.Section>
        <Layout.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Chakra.Text as="b" mb={5} mt={5} fontSize={15}>
            Spark TDA
          </Chakra.Text>
          <Laptop.Frame src="/images/portfolio/tda.png" title="Spark TDA" />
          <Laptop.GithubLink
            zIndex="20"
            href="https://github.com/ognis1205/spark-tda"
            target="_blank"
          />
        </Layout.Section>
        <Layout.Section
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Chakra.Text as="b" mb={5} mt={5} fontSize={15}>
            Mutad
          </Chakra.Text>
          <Laptop.Frame src="/images/portfolio/mutad.gif" title="Mutad" />
          <Laptop.GithubLink
            zIndex="20"
            href="https://github.com/ognis1205/mutad"
            target="_blank"
          />
        </Layout.Section>
      </Chakra.SimpleGrid>
    </Chakra.Container>
  </Layout.Article>
);

export default Portfolio;
