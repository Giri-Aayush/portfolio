import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Aayush Giri — Senior Developer Relations Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CYAN = "#7ee4f3";
const CYAN_SOFT = "rgba(126, 228, 243, 0.14)";
const BG = "#08090b";
const FG = "#f5f5f7";
const FG_2 = "#c7c7cc";
const FG_3 = "#86868b";
const BORDER = "rgba(255, 255, 255, 0.08)";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage: `
            radial-gradient(circle at 14% 28%, ${CYAN_SOFT}, transparent 55%),
            radial-gradient(circle at 86% 78%, rgba(126, 228, 243, 0.06), transparent 55%)
          `,
          padding: "72px 80px",
          color: FG,
          fontFamily: "sans-serif",
          letterSpacing: "-0.01em",
        }}
      >
        {/* top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: CYAN,
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 3,
              background: CYAN,
              boxShadow: `0 0 16px ${CYAN}`,
            }}
          />
          <div style={{ display: "flex" }}>Portfolio · aayushgiri.dev</div>
        </div>

        {/* name + role pill + tagline */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 32 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 148,
                fontWeight: 700,
                letterSpacing: "-0.045em",
                lineHeight: 0.95,
              }}
            >
              Aayush Giri
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 20px",
                marginBottom: 18,
                borderRadius: 999,
                border: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.02)",
                color: FG_2,
                fontSize: 22,
                fontFamily: "monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: CYAN,
                }}
              />
              <div style={{ display: "flex" }}>
                Senior DevRel · Nethermind
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: FG_2,
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
              maxWidth: 1040,
            }}
          >
            5+ years shipping SDKs, developer tooling, and protocol
            integrations across EVM and non-EVM ecosystems.
          </div>
        </div>

        {/* bottom: skills + handle */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: FG_3,
            fontSize: 22,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div style={{ display: "flex" }}>ETHEREUM</div>
            <div style={{ display: "flex", color: CYAN }}>·</div>
            <div style={{ display: "flex" }}>STARKNET</div>
            <div style={{ display: "flex", color: CYAN }}>·</div>
            <div style={{ display: "flex" }}>AZTEC</div>
            <div style={{ display: "flex", color: CYAN }}>·</div>
            <div style={{ display: "flex" }}>ZERO-KNOWLEDGE</div>
            <div style={{ display: "flex", color: CYAN }}>·</div>
            <div style={{ display: "flex" }}>MCP</div>
          </div>
          <div
            style={{
              display: "flex",
              color: FG,
              fontSize: 24,
              letterSpacing: "0",
              textTransform: "none",
            }}
          >
            aayushgiri.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
