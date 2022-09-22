/**
 * @fileoverview Defines Next/Image loader utilities.
 * @copyright Shingo OKAWA 2022
 */

export const DefaultLoader = ({ src }: { src: string }): string => {
  return src;
};

export type MicroCMLProps = {
  src: string;
  width: string | number;
  quality: string;
};

export const microCMSLoader = ({
  src,
  width
}: MicroCMLProps): string => {
  return `${src}?auto=format&fit=max&w=${width}`
};
