module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Content-Security-Policy", value: "default-src 'self'" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "same-site" },
          {
            key: "Permissions-Policy",
            value:
              "picture-in-picture=(), geolocation=(), camera=(), microphone=()",
          },
        ],
      },
    ];
  },
};
