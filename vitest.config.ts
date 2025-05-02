/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["./test/components/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
  },
});
