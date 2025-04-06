import type { H3Event } from 'h3';
export default defineNitroPlugin((app) => {
  app.hooks.hook('request', (event: H3Event) => {
    return;
  });
});
