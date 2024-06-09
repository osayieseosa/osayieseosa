
import {withContentlayer} from 'next-contentlayer'

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "unsplash.com",
          },
        ],
      },
};

export default withContentlayer(nextConfig);
