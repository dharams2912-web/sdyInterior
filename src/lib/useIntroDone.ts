"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  window.addEventListener("sdy:loader", cb);
  return () => window.removeEventListener("sdy:loader", cb);
};
const getSnapshot = () => document.documentElement.dataset.loading === "false";
const getServerSnapshot = () => false;

/** True once the logo loader has lifted, so hero animations play in view. */
export function useIntroDone() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
