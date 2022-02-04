import { PixelRatio } from 'react-native';

export function size(multiplier) {
  if (PixelRatio.get() >= 2) {
    return `${multiplier * 16}px`;
  }
  return `${multiplier * 12}px`;
}

export default {
  base: size(1),
  medium: size(0.8),
  smaller: size(0.5),
  small: size(0.7),
  big: size(1.4),
  bigger: size(2),
  biggest: size(3),
};
