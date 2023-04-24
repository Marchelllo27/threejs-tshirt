const config = {
  development: {
    backendUrl: `${import.meta.env.VITE_API}/api/v1/dalle`,
  },
  production: {
    backendUrl: `${import.meta.env.VITE_API}/api/v1/dalle`,
  },
};

export default config;
