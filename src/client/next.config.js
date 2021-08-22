const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

/**
 // * @type {next.NextConfig}
 **/
const nextConfig = {
    distDir: "../../.next",
    images: {
        domains: ["i.ibb.co", "localhost", "images.freeimages.com"],
    },

    env: {
        NEXT_PUBLIC_HOSTNAME: process.env.SERVER_PROD_HOSTNAME,
        NEXT_PUBLIC_PORT: process.env.SERVER_PROD_PORT,
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.component.svg$/,
            issuer: /\.(js|ts)x?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

module.exports = nextConfig;

// module.exports = withImages({
//     ...nextConfig,
//     inlineImageLimit: false,
//     fileExtensions: ["jpg", "jpeg", "png", "gif"],
// });
