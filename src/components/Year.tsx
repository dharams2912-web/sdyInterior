"use client";
import { useSyncExternalStore } from "react";

const noop = () => () => {};
export function Year() {
  const year = useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);
  return <span>{year ?? ""}</span>;
}
