import { fileURLToPath } from 'url';
import { dirname } from 'path';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import * as path from 'node:path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.CUSTOM_VARIABLE': JSON.stringify('custom value'),
    }));

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
