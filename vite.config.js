export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./src/index.html",
        profile: "./src/profile/index.html",
        feed: "./src/feed/index.html",
      },
    },
  },
};
