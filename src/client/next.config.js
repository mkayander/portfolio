// const withImages = require("next-images");

/**
 // * @type {next.NextConfig}
 **/
const nextConfig = {
    distDir: "../../.next",
    images: {
        domains: ["i.ibb.co", "localhost", "images.freeimages.com"],
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
