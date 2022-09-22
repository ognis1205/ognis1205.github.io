/**
 * @fileoverview Defines image.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import * as Animations from '@/components/laptop/animations';
import * as Loaders from '@/utils/loaders';

export type Props = {
  src: string;
  title: string;
};

const Container = styled.div`
  width: 100%;
  aspect-ratio: 150 / 96;
  perspective: 500px;
`;

const Laptop = styled.div`
  width: 100%;
  aspect-ratio: 150 / 96;
  z-index: 20;
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  &:hover {
    animation: ${Animations.rotate} infinite 7s ease;
  }
`;

const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 150 / 96;
  border-radius: 0.5em;
  background: #ddd;
  transform-style: preserve-3d;
  transform-origin: 50% 97%;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.34) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 300%;
  box-shadow: inset 0 0.2em 0.5em rgba(255, 255, 255, 0.5);
  &:hover {
    animation: ${Animations.lidScreen} infinite 7s ease;
  }
`;

const ScreenFace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 150 / 96;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0.5em;
  background: #d3d3d3;
  transform: translateZ(1px);
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Logo = styled.div`
  width: 13%;
  aspect-ratio: 20 / 24;
`;

const Display = styled.div`
  width: 87%;
  aspect-ratio: 130 / 74;
  background: #000;
  background-size: 100% 100%;
  position: relative;
  box-shadow: inset 0 0 0.1em rgba(0, 0, 0, 1);
`;

const Shade = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  aspect-ratio: 130 / 74;
  background: linear-gradient(
    -135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 47%,
    rgba(255, 255, 255, 0) 48%
  );
  background-size: 200% 130%;
  background-position: 0px 0px;
  &:hover {
    animation: ${Animations.screenShade} infinite 7s ease;
  }
`;

const Body = styled.div`
  width: 100%;
  aspect-ratio: 150 / 96;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0.5em;
  background: #cbcbcb;
  transform-style: preserve-3d;
  transform-origin: 50% bottom;
  transform: rotateX(-90deg);
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  &:hover {
    animation: ${Animations.lidBody} infinite 7s ease;
  }
`;

const BodyFace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 150 / 96;
  border-radius: 0.5em;
  transform-style: preserve-3d;
  background: #dfdfdf;
  transform: translateZ(-1px);
  background-image: linear-gradient(
    30deg,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  &:hover {
    animation: ${Animations.lidKeyboard} infinite 7s ease;
  }
`;

const Touchpad = styled.div`
  width: 27%;
  aspect-ratio: 40 / 31;
  border-radius: 0.25em;
  background: #cdcdcd;
  background-image: linear-gradient(
    30deg,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  box-shadow: inset 0 0 0.2em #888;
`;

const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  width: 87%;
  aspect-ratio: 130 / 45;
  border-radius: 0.25em;
  transform-style: preserve-3d;
  background: #cdcdcd;
  background-image: linear-gradient(
    30deg,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  box-shadow: inset 0 0 0.2em #777;
`;

const Key = styled.div`
  aspect-ratio: 1 / 1;
  background: #444;
  margin: 1px;
  transform: translateZ(-2px);
  border-radius: 0.1em;
  box-shadow: 0 -2px 0 #222;
  &:hover {
    animation: ${Animations.keys} infinite 7s ease;
  }
`;

export const Component: React.FunctionComponent<Props> = ({
  src,
  title,
}: Props): React.ReactElement => {
  return (
    <Chakra.Box width={['50%', '40%', '70%']}>
      <Container>
        <Laptop>
          <Screen>
            <ScreenFace>
              <Display>
                <Shade />
                <Image
                  src={src}
                  alt={title}
                  title={title}
                  className="grid-item-thumbnail"
                  loading="lazy"
                  layout="fill"
                  objectFit="contain"
                  loader={Loaders.DefaultLoader}
                  unoptimized={true}
                />
              </Display>
            </ScreenFace>
            <Logo>
              <Image
                src="/images/icons/paw.png"
                width={100}
                height={100}
                alt="logo"
                unoptimized={true}
              />
            </Logo>
          </Screen>
          <Body>
            <BodyFace>
              <Touchpad />
              <Keyboard>
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
                <Key />
              </Keyboard>
            </BodyFace>
          </Body>
        </Laptop>
      </Container>
    </Chakra.Box>
  );
};
