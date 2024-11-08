import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Otras configuraciones pueden ir aquí
  experimental: {
    ppr: 'incremental', // Asegúrate de que esta opción esté habilitada en tu versión de Next.js
  },
};

export default nextConfig;
