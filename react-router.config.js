export default {
  // Config options...
  appDirectory: "src",
  basename: "/",
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return ["/", "/login", "/print"];
  },
};
