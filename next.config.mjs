/**
 * @type {import('next').NextConfig}
 */

import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  compress: true,
  swcMinify: true,
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: {
        loader: 'raw-loader'
      },
    })
    return config;
  },
};

export default bundleAnalyzer(nextConfig);
