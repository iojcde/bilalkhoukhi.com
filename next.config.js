const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: ['s3.us-east-2.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      }
    }
    return config
  },
})
