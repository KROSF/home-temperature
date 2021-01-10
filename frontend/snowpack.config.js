const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({
  target: "http://192.168.3.8/",
  ignorePath: true,
});

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  buildOptions: {
    out: "../data",
  },
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"] },
    ],
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
  ],
  installOptions: {
    installTypes: true,
  },
  experiments: {
    routes: [
      {
        src: "/api/*",
        dest: (req, res) => {
          return proxy.web(req, res, {});
        },
      },
    ],
  },
};
