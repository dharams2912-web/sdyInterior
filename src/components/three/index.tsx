"use client";

import dynamic from "next/dynamic";

const Fallback = () => <div className="h-full w-full animate-pulse bg-forest-900/40" />;

/** Three.js scenes are client-only and loaded lazily so they never block the page. */
export const RoomScene = dynamic(() => import("./RoomScene"), { ssr: false, loading: Fallback });
export const MaterialOrbs = dynamic(() => import("./MaterialOrbs"), { ssr: false, loading: Fallback });
