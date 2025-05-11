/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable build cache
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Reduce memory usage
  experimental: {
    optimizeCss: true,
  },
  // Enable standalone output for Docker
  output: 'standalone',
}

// # Build the Docker image
// docker build -t nextjs-learning .

// # Run the container
// docker run -p 3000:3000 nextjs-learning

export default nextConfig
