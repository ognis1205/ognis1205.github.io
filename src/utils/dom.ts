/**
 * @fileoverview Defines DOM utilities.
 * @copyright Shingo OKAWA 2022
 */

export const isDefined = (): boolean => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};
