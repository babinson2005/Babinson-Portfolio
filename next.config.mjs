/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // Optional: pre-define qualities so `quality={100}` is allowed (or just remove that prop)
  images: {
    // You can list allowed qualities if you plan to keep custom qualities in Next 16+
    qualities: [75, 85, 90, 100]
  }
};
export default nextConfig;
