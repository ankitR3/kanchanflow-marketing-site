import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Shared social preview card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#111316",
          color: "#f6f7f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <path d="M7 6h18l5 20H2L7 6Z" fill="#e5a218" />
            <path
              d="M6 19.5c4-3.5 8-3.5 10 0s6 3.5 10 0"
              fill="none"
              stroke="#111316"
              strokeWidth="2.75"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800 }}>
            Kanchan<span style={{ color: "#e5a218" }}>Flow</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          Run your sales the way you run your shop floor.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c6cad0" }}>
          Quotes · BOMs · Work orders · Sales pipeline
        </div>
      </div>
    ),
    size,
  );
}
