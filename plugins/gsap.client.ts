// plugins/gsap.client.ts
import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // patch gsap methods so they only run on client
  const safeGsap = new Proxy(gsap, {
    get(target, prop) {
      if (process.server) {
        // return a no-op function during SSR
        return () => {};
      }
      return Reflect.get(target, prop);
    },
  });

  nuxtApp.provide("gsap", safeGsap);
});
