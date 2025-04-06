import type { H3Event } from 'h3';
import { randomUUID } from "node:crypto";
import { useNuxtApp } from 'nuxt/app';
export default defineNitroPlugin((app) => {
  const nuxtApp = useNuxtApp()
  app.hooks.hook('request', (event: H3Event) => {
    if(nuxtApp && nuxtApp.ssrContext && !nuxtApp?.ssrContext?.traceId)  {
      nuxtApp.ssrContext.traceId = randomUUID()
    }
    //if(!event.context.traceId) { event.context.traceId = randomUUID()}
    console.log(nuxtApp?.ssrContext?.traceId ,event.path)
  });
});
