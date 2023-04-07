/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
/**
 * In order to use a remote federated module add the following information inside of
 * "remotes" property: {remote_name}: '{remote_name}@https://{remote_domain}/{filename_path}', where:
 *   - remote_name is the value of "name" property that is mentioned inside of Webpack Module Federation
 *   configuration written at the remote application;
 *   - remote_domain is the domain of the remote application;
 *   - remote_filename is the value of the "filename" property that is mentioned inside of Webpack Module Federation
 *   configuration written at the remote application;
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
    },
  },
  webpack: (config, options) => {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          library: { type: "var", name: "remote" },
          remotes: {},
          filename: "static/chunks/remoteEntry.js",
          extraOptions: {
            exposePages: true,
            automaticAsyncBoundary: true,
          },
          exposes: {
            "./RButton": "./src/pages/RButton",
          },
          shared: {
            "styled-components": {
              singleton: true,
              eager: true,
              //requiredVersion: "^5.3.9",
            },
          },
        })
      );
    

    return config;
  },
};

export default nextConfig;
