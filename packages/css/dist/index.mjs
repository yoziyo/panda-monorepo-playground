// src/index.ts
import { definePreset } from "@pandacss/dev";
var css = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          "nice-yellow": { value: "#facc15" }
        }
      }
    }
  }
});
export {
  css
};
