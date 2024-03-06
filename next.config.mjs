/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    MONGODB_URL:
      "mongodb+srv://papunidze07:Zie3HNjSwDFtpwcP@ecomerce.vtueyf5.mongodb.net/?retryWrites=true&w=majority",
    JWT_REFRESH_SECRET: "35LWJ6yltXRai7K",
    JWT_REFRESH_EXPIRES_IN: "1d",
    JWT_SECRET: "pFKcyzD5MbXyOnv",
    JWT_ACCESS_EXPIRES_IN: "30s",
    NEXT_AUTH_SECRET: "codingwithabbas",

    GOOGLE_CLIENT_ID:
      "1042228324880-0afqpdgvt0d5gevn209s4f0dpnabkd77.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

export default nextConfig;
