import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";

const videos = [
  {
    category: "Tutorial · Nethermind",
    title: "Build a Starknet MCP Server in 15 Minutes",
    thumbnail: "https://i.ytimg.com/vi/hm0hBShN9WE/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=hm0hBShN9WE",
    gradient: "gradient-1",
  },
  {
    category: "Workshop · Nethermind",
    title: "Run Your Own Starknet Node With Juno",
    thumbnail: "https://i.ytimg.com/vi/gvdC2XIOibA/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=gvdC2XIOibA",
    gradient: "gradient-2",
  },
  {
    category: "Guide · Nethermind",
    title: "Running an Aztec Node with Sedge",
    thumbnail: "https://i.ytimg.com/vi/g1bYKIGfYVw/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=g1bYKIGfYVw",
    gradient: "gradient-6",
  },
  {
    category: "Tutorial · Nethermind",
    title: "Create a Starknet Account in Go",
    thumbnail: "https://i.ytimg.com/vi/9j2ikkA3IRE/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=9j2ikkA3IRE",
    gradient: "gradient-3",
  },
];

export function Videos() {
  return (
    <section id="videos" className="py-20">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="seclabel">Videos &amp; talks</div>
            <h2 className="display">
              Things I said
              <br />
              on <span className="cyan-hl">camera.</span>
            </h2>
          </div>
          <div
            className="right hidden md:block"
            style={{ color: "var(--fg-3)" }}
          >
            <a
              href="https://youtube.com/@AayushStack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cyan)] transition-colors"
            >
              Subscribe on YouTube ↗
            </a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {videos.map((v, i) => (
            <Link
              key={v.href}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-lg reveal d-${Math.min(i, 3)} group p-3.5 flex flex-col cursor-pointer`}
            >
              <div
                className={`thumb ${v.gradient} flex-1 mb-3 relative overflow-hidden`}
                style={{ borderRadius: "var(--r-md)" }}
              >
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  sizes="(max-width: 960px) 50vw, 25vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity"
                  style={{ background: "rgba(0,0,0,0.2)" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                >
                  <Icon.play width={20} height={20} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div
                  className="mono"
                  style={{ fontSize: 10, color: "var(--fg-4)" }}
                >
                  {v.category}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  {v.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
