/**
 * @fileoverview Defines Laptop.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import * as Animations from './animations';
import * as Loaders from '@/utils/loaders';

export type Props = {
  src: string;
  title: string;
};

const Laptop = styled.div`
  width: 100%;
  aspect-ratio: 150 / 96;
  z-index: 20;
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  &:hover,
  &:focus,
  &:active {
    animation: ${Animations.rotate} infinite 3s ease;
  }
`;

Laptop.defaultProps = { 'aria-haspopup': 'true' };

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87%;
  aspect-ratio: 130 / 74;
  background: #000;
  background-size: 100% 100%;
  position: relative;
  box-shadow: inset 0 0 0.1em rgba(0, 0, 0, 1);
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
`;

const BodyFace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 150 / 96;
  border-radius: 0.5em;
  background: #dfdfdf;
  transform-style: preserve-3d;
  transform: translateZ(-1px);
  background-image: linear-gradient(
    30deg,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(0, 0, 0, 0) 100%
  );
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
  &:hover,
  &:focus,
  &:active {
    animation: ${Animations.keys} infinite 3s ease;
  }
`;

Key.defaultProps = { 'aria-haspopup': 'true' };

const Container = styled.div`
  width: 100%;
  aspect-ratio: 150 / 96;
  perspective: 500px;
`;

const isMPeg = (value: string): boolean => value.endsWith('.mp4');

const posterOf = (value: string): string =>
  value.substr(0, value.lastIndexOf('.')) + '.png';

export const Component: React.FunctionComponent<Props> = ({
  src,
  title,
}: Props): React.ReactElement => {
  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (video.current) video.current.play();
  }, []);

  const renderDisplay = () => {
    if (isMPeg(src))
      return (
        <video
          ref={video}
          loop
          muted
          playsInline
          poster={posterOf(src)}
          style={{
            objectFit: 'fill',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        >
          <source src={src} type="video/mp4" />
          {title}
        </video>
      );
    return (
      <Image
        src={src}
        alt={title}
        title={title}
        loading="lazy"
        layout="fill"
        objectFit="contain"
        loader={Loaders.DefaultLoader}
        unoptimized={true}
      />
    );
  };

  return (
    <Chakra.Box width={['50%', '40%', '70%']}>
      <Container>
        <Laptop>
          <Screen>
            <ScreenFace>
              <Display>{renderDisplay()}</Display>
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
