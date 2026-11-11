import { ImageResponse } from "next/og";

export const alt = "SDY Interior: Design Beyond Walls. Home interior designer in Mumbai.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#1d3d35", color: "#d9ae62", position: "relative" }}>
        {[
          { top: 40, left: 40, borderTop: "2px solid #d9ae62", borderLeft: "2px solid #d9ae62" },
          { top: 40, right: 40, borderTop: "2px solid #d9ae62", borderRight: "2px solid #d9ae62" },
          { bottom: 40, left: 40, borderBottom: "2px solid #d9ae62", borderLeft: "2px solid #d9ae62" },
          { bottom: 40, right: 40, borderBottom: "2px solid #d9ae62", borderRight: "2px solid #d9ae62" },
        ].map((s, i) => (
          <div key={i} style={{ position: "absolute", width: 70, height: 70, ...s }} />
        ))}
        <div style={{ display: "flex", fontSize: 180, fontWeight: 700, letterSpacing: 24, fontFamily: "serif" }}>
          <span>S</span>
          <span style={{ color: "#6b6a4a" }}>D</span>
          <span>Y</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 10 }}>
          <div style={{ width: 160, height: 2, background: "#d9ae62" }} />
          <div style={{ width: 16, height: 16, background: "#d9ae62", transform: "rotate(45deg)" }} />
          <div style={{ width: 160, height: 2, background: "#d9ae62" }} />
        </div>
        <div style={{ fontSize: 48, letterSpacing: 22, marginTop: 30 }}>INTERIOR</div>
        <div style={{ fontSize: 34, marginTop: 16, fontStyle: "italic", fontFamily: "serif" }}>Design Beyond Walls</div>
        <div style={{ fontSize: 22, marginTop: 34, color: "#f6f0e5", opacity: 0.7, letterSpacing: 4 }}>HOME INTERIOR DESIGNER IN MUMBAI · SDYINTERIOR.COM</div>
      </div>
    ),
    size,
  );
}
