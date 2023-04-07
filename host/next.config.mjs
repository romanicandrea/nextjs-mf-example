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

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  console.log("isServer ", isServer)

  return {
    remote: `remote@http://localhost:5001/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host-ex",
          remotes: remotes(isServer),
          filename: "static/chunks/remoteEntry.js",
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
