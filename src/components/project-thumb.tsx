import type { CSSProperties } from "react";

type FeedItem = { date: string; text: string };
type LogItem = { time: string; level: string; text: string };

type ProjectThumbProps = {
  big?: boolean;
  mockType?: "terminal" | "code" | "api" | "feed" | "chart" | "log";
  mockHeader?: string;
  mock?: string;
  mockMethod?: string;
  mockEndpoint?: string;
  mockFeed?: FeedItem[];
  mockLogs?: LogItem[];
  mockLabel?: string;
  mockValue?: string;
};

const panelStyle = (big: boolean): CSSProperties => ({
  border: "1px solid rgba(255,255,255,0.09)",
  background: "rgba(0,0,0,0.42)",
  backdropFilter: "blur(2px)",
  fontFamily: "var(--font-mono)",
  fontSize: big ? 10 : 9,
  color: "rgba(255,255,255,0.65)",
  lineHeight: big ? 1.6 : 1.55,
  overflow: "hidden",
});

function chromeDots() {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: "#ff5f57" }} />
      <span style={{ width: 7, height: 7, borderRadius: 999, background: "#febc2e" }} />
      <span style={{ width: 7, height: 7, borderRadius: 999, background: "#28c840" }} />
    </div>
  );
}

function TerminalThumb({
  big,
  header,
  mock,
}: {
  big: boolean;
  header?: string;
  mock?: string;
}) {
  return (
    <div
      className={`absolute ${big ? "inset-6" : "inset-4"} flex flex-col`}
      style={{ borderRadius: 10, ...panelStyle(big) }}
    >
      <div
        className="flex items-center gap-2.5 px-3 py-2"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {chromeDots()}
        {header && (
          <span
            style={{
              fontSize: big ? 9 : 8,
              color: "rgba(255,255,255,0.45)",
              marginLeft: "auto",
              letterSpacing: "0.04em",
            }}
          >
            {header}
          </span>
        )}
      </div>
      <div className={`${big ? "p-3.5" : "p-3"} flex-1 min-h-0`}>
        {mock?.split("\n").map((line, j) => {
          const t = line.trimStart();
          const isPrompt = t.startsWith("$");
          const isCheck = t.startsWith("✓");
          const isArrow = t.startsWith("→");
          return (
            <div
              key={j}
              style={{
                whiteSpace: "pre",
                color: isPrompt
                  ? "rgba(255,255,255,0.85)"
                  : isCheck
                    ? "#7ee4c7"
                    : isArrow
                      ? "rgba(255,255,255,0.55)"
                      : undefined,
              }}
            >
              {line || " "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CodeThumb({
  big,
  header,
  mock,
}: {
  big: boolean;
  header?: string;
  mock?: string;
}) {
  return (
    <div
      className={`absolute ${big ? "inset-6" : "inset-4"} flex flex-col`}
      style={{ borderRadius: 10, ...panelStyle(big) }}
    >
      {header && (
        <div
          className="flex items-center px-3 py-2"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.025)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "var(--cyan)",
              marginRight: 8,
              boxShadow: "0 0 8px var(--cyan-glow)",
            }}
          />
          <span
            style={{
              fontSize: big ? 9 : 8,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.02em",
            }}
          >
            {header}
          </span>
        </div>
      )}
      <div
        className={`${big ? "p-3.5 pl-5" : "p-3 pl-4"} flex-1 min-h-0`}
        style={{ position: "relative" }}
      >
        {mock?.split("\n").map((line, j) => {
          const isComment = line.trimStart().startsWith("//");
          const keyword = /(\bconst\b|\blet\b|\bawait\b|\bimport\b|\bfrom\b)/;
          const parts = line.split(keyword);
          return (
            <div
              key={j}
              style={{
                whiteSpace: "pre",
                display: "flex",
                gap: big ? 10 : 8,
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.25)",
                  minWidth: big ? 14 : 12,
                  textAlign: "right",
                  userSelect: "none",
                }}
              >
                {j + 1}
              </span>
              <span
                style={{
                  color: isComment ? "rgba(255,255,255,0.35)" : undefined,
                  fontStyle: isComment ? "italic" : undefined,
                }}
              >
                {isComment
                  ? line
                  : parts.map((part, k) =>
                      keyword.test(part) ? (
                        <span key={k} style={{ color: "var(--cyan)" }}>
                          {part}
                        </span>
                      ) : (
                        <span key={k}>{part}</span>
                      ),
                    )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ApiThumb({
  big,
  method,
  endpoint,
  mock,
}: {
  big: boolean;
  method?: string;
  endpoint?: string;
  mock?: string;
}) {
  const methodColor: Record<string, { bg: string; fg: string }> = {
    GET: { bg: "oklch(0.75 0.14 180 / 0.2)", fg: "#7ee4f3" },
    POST: { bg: "oklch(0.8 0.16 145 / 0.2)", fg: "#86e0a3" },
    PUT: { bg: "oklch(0.82 0.12 60 / 0.2)", fg: "#f3c578" },
    DELETE: { bg: "oklch(0.67 0.2 25 / 0.2)", fg: "#ff9a8a" },
    TOOL: { bg: "oklch(0.75 0.15 280 / 0.2)", fg: "#c9b3f5" },
  };
  const c = methodColor[method ?? "GET"] ?? methodColor.GET;
  return (
    <div
      className={`absolute ${big ? "inset-6" : "inset-4"} flex flex-col`}
      style={{ borderRadius: 10, ...panelStyle(big) }}
    >
      <div
        className="flex items-center gap-2.5 px-3 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {method && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: big ? 9 : 8,
              fontWeight: 600,
              padding: "2px 7px",
              borderRadius: 4,
              background: c.bg,
              color: c.fg,
              letterSpacing: "0.08em",
            }}
          >
            {method}
          </span>
        )}
        <span
          style={{
            fontSize: big ? 10 : 9,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.01em",
          }}
        >
          {endpoint}
        </span>
        <span
          className="ml-auto"
          style={{
            fontSize: big ? 9 : 8,
            color: "#86e0a3",
            letterSpacing: "0.05em",
          }}
        >
          200 OK
        </span>
      </div>
      <div className={`${big ? "p-3.5" : "p-3"} flex-1 min-h-0`}>
        {mock?.split("\n").map((line, j) => (
          <div key={j} style={{ whiteSpace: "pre", color: "rgba(255,255,255,0.75)" }}>
            {line || " "}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedThumb({
  big,
  items,
}: {
  big: boolean;
  items?: FeedItem[];
}) {
  return (
    <div
      className={`absolute ${big ? "inset-6" : "inset-4"} flex flex-col`}
      style={{ borderRadius: 10, ...panelStyle(big) }}
    >
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span
          style={{
            fontSize: big ? 9 : 8,
            color: "var(--cyan)",
            letterSpacing: "0.15em",
          }}
        >
          INTEL FEED · LIVE
        </span>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "#86e0a3",
            boxShadow: "0 0 6px #86e0a3",
          }}
        />
      </div>
      <div className={`${big ? "p-3" : "p-2.5"} flex-1 min-h-0 flex flex-col`}>
        {items?.slice(0, big ? 5 : 4).map((item, j) => (
          <div
            key={j}
            className="flex items-start gap-3 py-1.5"
            style={{
              borderTop:
                j === 0 ? "none" : "1px dashed rgba(255,255,255,0.07)",
            }}
          >
            <span
              style={{
                fontSize: big ? 9 : 8,
                color: "var(--cyan)",
                letterSpacing: "0.04em",
                minWidth: big ? 40 : 34,
              }}
            >
              {item.date}
            </span>
            <span style={{ flex: 1, color: "rgba(255,255,255,0.85)" }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartThumb({
  big,
  label,
  value,
}: {
  big: boolean;
  label?: string;
  value?: string;
}) {
  // Generates a soft curve rising toward the right
  const points = "0,38 10,34 20,36 30,28 40,30 50,22 60,24 70,15 80,18 90,8 100,10";
  return (
    <div
      className={`absolute ${big ? "inset-6" : "inset-4"} flex flex-col`}
      style={{ borderRadius: 10, ...panelStyle(big) }}
    >
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span
          style={{
            fontSize: big ? 9 : 8,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: big ? 9 : 8,
            color: "var(--cyan)",
            fontWeight: 600,
          }}
        >
          {value}
        </span>
      </div>
      <div className={`${big ? "p-3" : "p-2.5"} flex-1 min-h-0`}>
        <svg
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          {[8, 16, 24, 32, 40].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.3"
            />
          ))}
          <polyline
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
          <polygon
            fill="var(--cyan)"
            fillOpacity="0.12"
            points={`${points} 100,44 0,44`}
          />
          <circle cx="100" cy="10" r="1.8" fill="var(--cyan)" />
        </svg>
      </div>
    </div>
  );
}

function LogThumb({
  big,
  items,
}: {
  big: boolean;
  items?: LogItem[];
}) {
  const levelColor: Record<string, string> = {
    INFO: "#86e0a3",
    WARN: "#f3c578",
    ERROR: "#ff9a8a",
    DEBUG: "rgba(255,255,255,0.5)",
  };
  return (
    <div
      className={`absolute ${big ? "inset-6" : "inset-4"} flex flex-col`}
      style={{ borderRadius: 10, ...panelStyle(big) }}
    >
      <div
        className="flex items-center gap-2.5 px-3 py-2"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.025)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "#86e0a3",
            boxShadow: "0 0 6px #86e0a3",
          }}
        />
        <span
          style={{
            fontSize: big ? 9 : 8,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          tail -f app.log
        </span>
      </div>
      <div className={`${big ? "p-3" : "p-2.5"} flex-1 min-h-0`}>
        {items?.slice(0, big ? 5 : 4).map((item, j) => (
          <div
            key={j}
            className="flex items-start gap-2 py-0.5"
            style={{ whiteSpace: "nowrap" }}
          >
            <span style={{ color: "rgba(255,255,255,0.4)" }}>{item.time}</span>
            <span
              style={{
                color: levelColor[item.level] ?? "rgba(255,255,255,0.6)",
                fontWeight: 600,
                minWidth: big ? 36 : 32,
              }}
            >
              {item.level}
            </span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectThumb(p: ProjectThumbProps) {
  const big = !!p.big;
  switch (p.mockType) {
    case "terminal":
      return <TerminalThumb big={big} header={p.mockHeader} mock={p.mock} />;
    case "code":
      return <CodeThumb big={big} header={p.mockHeader} mock={p.mock} />;
    case "api":
      return (
        <ApiThumb
          big={big}
          method={p.mockMethod}
          endpoint={p.mockEndpoint}
          mock={p.mock}
        />
      );
    case "feed":
      return <FeedThumb big={big} items={p.mockFeed} />;
    case "chart":
      return <ChartThumb big={big} label={p.mockLabel} value={p.mockValue} />;
    case "log":
      return <LogThumb big={big} items={p.mockLogs} />;
    default:
      return null;
  }
}
