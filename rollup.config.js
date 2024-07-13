// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.tsx", // Adjust if your entry point is different
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true, // Extract CSS to separate file
        modules: true, // Enable CSS modules if needed
        minimize: true, // Minimize CSS output
        sourceMap: true, // Generate source maps
        extensions: [".css"], // Default extensions for loading styles
      }),
      terser(),
    ],
    external: ["react", "react-dom", /\.css$/], // Treat .css files as external
  },
  {
    input: "src/index.ts", // Adjust if your entry point is different
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
