/**
 * @fileoverview Defines container.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

export const Box = Chakra.forwardRef<Chakra.BoxProps, 'div'>(
  ({ children, ...props }: Chakra.BoxProps, ref) => {
    return (
      <Chakra.Box
        ref={ref}
        className="mnist"
        m="auto"
        mt={['-40px', '-80px', '-120px']}
        mb={['-20px', '-60px', '-100px']}
        w={[210, 360, 480]}
        h={[210, 360, 480]}
        position="relative"
        {...props}
      >
        {children}
      </Chakra.Box>
    );
  }
);

export type SpinnerProps = {
  fadeIn: boolean;
};

export const Spinner: React.FunctionComponent<SpinnerProps> = ({
  fadeIn,
}: SpinnerProps): React.ReactElement => (
  <Chakra.Fade in={fadeIn}>
    <Chakra.Spinner
      size="xl"
      position="absolute"
      left="50%"
      top="50%"
      ml="calc(0px - var(--spinner-size) / 2)"
      mt="calc(0px - var(--spinner-size))"
    />
  </Chakra.Fade>
);
