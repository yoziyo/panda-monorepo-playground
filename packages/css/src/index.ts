import { definePreset } from '@pandacss/dev';
import type { Preset } from '@pandacss/types';

export const css = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          'nice-yellow': { value: '#facc15' },
        },
      },
    },
  },
}) as Preset;
