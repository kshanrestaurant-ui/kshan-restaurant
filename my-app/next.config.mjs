/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other config options
  devIndicators: {
    appIsrStatus: false, // Hides the static/dynamic indicator (the "N" icon)
    buildActivity: false, // Hides the building/compiling indicator
  },
};

export default nextConfig;  