/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["./tests/components/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
  },
});
