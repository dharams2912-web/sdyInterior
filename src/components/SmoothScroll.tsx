"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  // Pause smooth scrolling while the intro loader is visible.
  useEffect(() => {
    if (!lenis) return;
    const onLoader = (e: Event) => ((e as CustomEvent<{ done: boolean }>).detail.done ? lenis.start() : lenis.stop());
    if (document.documentElement.dataset.loading === "true") lenis.stop();
    window.addEventListener("sdy:loader", onLoader);
    return () => window.removeEventListener("sdy:loader", onLoader);
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1, anchors: { offset: -96 } }}>
      <RouteScrollReset />
      {children}
    </ReactLenis>
  );
}
