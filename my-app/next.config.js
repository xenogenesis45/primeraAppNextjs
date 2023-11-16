/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    webpack: (config, { dev }) => {
      // Agregar reglas personalizadas de webpack si es necesario
      return config;
    },
  };