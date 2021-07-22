// @ts-check
const withImages = require("next-images");

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    /* config options here */
    images: {
        domains: ["i.ibb.co"],
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // deviceSizes: [576, 768, 992, 1200, 1400, 1920, 2048, 3840],
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
