/**
 * @fileoverview Defines /.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ChakraIcon from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import * as Layout from '@/components/layout';

const ProfileImage = Chakra.chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Index: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Layout.Article title="Home">
    <Chakra.Container>
      <Chakra.Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={Chakra.useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer based in Tokyo!
        <br />
        The above &ldquo;MNIST Dice&rdquo; is a small neural network running
        entirely in a WebGL GLSL shader that hallucinates new hand-written
        digits in real-time.
      </Chakra.Box>
      <Chakra.Box display={{ md: 'flex' }}>
        <Chakra.Box flexGrow={1}>
          <Chakra.Heading as="h2" variant="page-title">
            Shingo OKAWA
          </Chakra.Heading>
          <p>Data Misfit ( Developer )</p>
        </Chakra.Box>
        <Chakra.Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Chakra.Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/shingo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>

      <Layout.Section delay={0.1}>
        <Chakra.Heading as="h3" variant="section-title">
          Work
        </Chakra.Heading>
        <Layout.Paragraph>
          Shingo is a software developer based in Tokyo with a passion for
          building digital services/stuff he wants. He has a knack for all
          things prototyping products, from planning and designing all the way
          to solving real-life problems with code. When not online, he loves
          cooking, playing with his cat buddies and contributing to OSS projects
          such as{' '}
          <NextLink href="https://github.com/mlflow" passHref scroll={false}>
            <Chakra.Link>MLflow</Chakra.Link>
          </NextLink>{' '}
          and{' '}
          <NextLink href="https://github.com/gfx-rs" passHref scroll={false}>
            <Chakra.Link>wgpu</Chakra.Link>
          </NextLink>
          .
        </Layout.Paragraph>
        <Chakra.Box textAlign="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Chakra.Button
              rightIcon={<ChakraIcon.ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Chakra.Button>
          </NextLink>
        </Chakra.Box>
      </Layout.Section>

      <Layout.Section delay={0.2}>
        <Chakra.Heading as="h3" variant="section-title">
          Bio
        </Chakra.Heading>
        <Layout.Bio
          title="Stay at Home, Tokyo - Chief Housework Officer"
          year="August 2020 - Present"
        >
          Living with my partner and cat buddies. Conducting all of the
          housework and having a life-long passion for cooking.
        </Layout.Bio>
        <Layout.Bio
          title="Megagon Labs, Recruit Co., Ltd, Tokyo - Research Engineer"
          year="June 2018 - August 2020"
        >
          Worked alongside international teams. Researched data engineering to
          unify software engineering and ML systems.
        </Layout.Bio>
        <Layout.Bio
          title="FOLIO Inc., Tokyo - VP of Engineering, ML Engineer"
          year="December 2016 - April 2018"
        >
          Designed and built financial data microservices and portfolio
          optimization engine. Researched topological data analysis for market
          regime analysis.
        </Layout.Bio>
        <Layout.Bio
          title="SOINN inc., Yokohama - Data Scientist"
          year="February 2016 - December 2016"
        >
          Participated in “Future AI Research and Development Project” of NEDO.
          Designed and built image recognition engine for UAVs as part of the
          NEDO project.
        </Layout.Bio>
        <Layout.Bio
          title="Supership Inc., Tokyo - Search Engineer"
          year="November 2014 - January 2016"
        >
          Worked across teams to implement robust search engines. Developed
          search engine modules such as query parser and large scale LSH
          library.
        </Layout.Bio>
        <Layout.Bio
          title="MARSFLAG Inc., Tokyo - Server Side Engineer, R&D Engineer"
          year="May 2011 - October 2014"
        >
          Designed and built internal management system of search engines.
          Researched next generation search/recommendation system.
        </Layout.Bio>
        <Chakra.Heading as="h3" variant="section-title">
          Education
        </Chakra.Heading>
        <Layout.Bio
          title="Graduate School of Energy Science, Kyoto University - Withdrawal"
          year="April 2005 - September 2008"
        >
          GPA: 3.80/4.00 in major, 3.80/4.00 overall
        </Layout.Bio>
        <Layout.Bio
          title="Faculty of Engineering, Hokkaido University - B.E., Nuclear Engineering"
          year="April 2000 - March 2005"
        >
          GPA: 3.83/4.00 in major, 3.59/4.00 overall
        </Layout.Bio>
      </Layout.Section>

      <Layout.Section delay={0.3}>
        <Chakra.Heading as="h3" variant="section-title">
          I ♥
        </Chakra.Heading>
        <Layout.Paragraph>
          Cooking, Music, Programming, Machine Learning, Cats
        </Layout.Paragraph>
      </Layout.Section>
    </Chakra.Container>
  </Layout.Article>
);

export default Index;
