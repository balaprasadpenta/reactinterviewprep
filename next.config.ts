/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable build cache
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Optimize CSS
  optimizeFonts: true,
  // Disable experimental features that might cause issues
  experimental: {
    optimizeCss: false, // Disable this as it's causing issues
  },
  // Enable standalone output for better deployment
  output: 'standalone',
}

// # Build the Docker image
// docker build -t nextjs-learning .

// # Run the container
// docker run -p 3000:3000 nextjs-learning

export default nextConfig
