export default {
  // Config options...
  appDirectory: "src",
  basename: import.meta.env.DEV ? "/" : "/bloomable-price-tags/",
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: true,
};
