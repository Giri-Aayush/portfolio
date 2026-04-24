import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Motion } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { blogs, type ContentBlock, type RichText } from "@/data/blogs";

function renderRich(text: RichText) {
  if (typeof text === "string") return text;
  return text.map((span, i) =>
    typeof span === "string" ? (
      <span key={i}>{span}</span>
    ) : (
      <a
        key={i}
        href={span.href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[var(--cyan)]"
        style={{ color: "var(--cyan)" }}
      >
        {span.text}
      </a>
    )
  );
}

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Not Found // Aayush Giri" };
  return {
    title: `${blog.title} // Aayush Giri`,
    description: blog.description,
    alternates: {
      canonical: `https://aayush-giri.netlify.app/blogs/${blog.slug}`,
    },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      url: `https://aayush-giri.netlify.app/blogs/${blog.slug}`,
    },
  };
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "heading") {
    return (
      <h2
        className="mt-16 mb-6 clear-both"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 3.4vw, 36px)",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "paragraph") {
    return (
      <p
        className="leading-relaxed"
        style={{ fontSize: 18, color: "var(--fg)" }}
      >
        {renderRich(block.text)}
      </p>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote
        className="my-4 py-2 pl-6"
        style={{ borderLeft: "2px solid var(--cyan)" }}
      >
        <p
          className="italic leading-relaxed"
          style={{ fontSize: 20, color: "var(--fg-2)" }}
        >
          {block.text}
        </p>
      </blockquote>
    );
  }
  if (block.type === "list") {
    return (
      <ul
        className="space-y-3 list-none pl-0"
        style={{ fontSize: 18, color: "var(--fg)" }}
      >
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span
              className="mono shrink-0 mt-1.5"
              style={{ color: "var(--cyan)", fontSize: 11 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 leading-relaxed">{renderRich(item)}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "code") {
    return (
      <div
        className="overflow-hidden"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-md)",
        }}
      >
        {block.language && (
          <div
            className="mono px-4 py-2"
            style={{
              borderBottom: "1px solid var(--border)",
              fontSize: 10,
              color: "var(--fg-3)",
            }}
          >
            {block.language}
          </div>
        )}
        <pre
          className="overflow-x-auto p-4 m-0"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--fg)",
            lineHeight: 1.7,
          }}
        >
          <code>{block.text}</code>
        </pre>
      </div>
    );
  }
  if (block.type === "image") {
    const floatClass =
      block.float === "right"
        ? "my-6 md:my-2 md:float-right md:max-w-[min(420px,45%)] md:ml-8 md:mb-4"
        : block.float === "left"
        ? "my-6 md:my-2 md:float-left md:max-w-[min(420px,45%)] md:mr-8 md:mb-4"
        : "my-6";
    const figure = (
      <figure className={floatClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={block.src}
          alt={block.alt}
          className="w-full"
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--r-md)",
          }}
        />
        {block.caption && (
          <figcaption
            className="mono mt-3"
            style={{ color: "var(--fg-3)", fontSize: 11 }}
          >
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
    const wrapped = block.href ? (
      <a
        href={block.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-opacity hover:opacity-90 ${block.float ? "contents" : "block"}`}
      >
        {figure}
      </a>
    ) : (
      figure
    );
    return wrapped;
  }
  if (block.type === "references") {
    return (
      <ul className="list-none pl-0 space-y-2.5 clear-both">
        {block.items.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--cyan)]"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--fg-2)",
              }}
            >
              <span style={{ color: "var(--cyan)", marginRight: 8 }}>↗</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const prev = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const next =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    author: {
      "@type": "Person",
      name: "Aayush Giri",
      url: "https://aayush-giri.netlify.app",
    },
    url: `https://aayush-giri.netlify.app/blogs/${blog.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="wrap mb-10">
          <Link
            href="/blogs"
            className="mono inline-block mb-10 transition-colors hover:text-[var(--cyan)]"
            style={{ color: "var(--fg-3)" }}
          >
            ← All essays
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span
                className="mono"
                style={{ color: "var(--cyan)", letterSpacing: "0.08em" }}
              >
                {blog.date}
              </span>
              <span className="pill">{blog.readTime}</span>
            </div>
            <h1
              className="display mb-8"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
              }}
            >
              {blog.title}
            </h1>
            <p
              className="leading-relaxed"
              style={{
                fontSize: 20,
                color: "var(--fg-2)",
              }}
            >
              {blog.description}
            </p>
          </div>
        </div>

        <div
          className="mx-8 mb-16"
          style={{
            height: 1,
            background: "var(--border)",
          }}
        />

        <article className="wrap mb-24">
          <div className="max-w-3xl mx-auto space-y-6">
            {blog.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </article>

        <section className="wrap mb-20">
          <div className="max-w-3xl mx-auto">
            <div
              className="mb-8"
              style={{ height: 1, background: "var(--border)" }}
            />
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {prev ? (
                <Link
                  href={`/blogs/${prev.slug}`}
                  className="group max-w-sm"
                >
                  <div
                    className="mono mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    ← Previous
                  </div>
                  <div
                    className="transition-colors group-hover:text-[var(--cyan)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {prev.title}
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/blogs/${next.slug}`}
                  className="group max-w-sm md:text-right"
                >
                  <div
                    className="mono mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    Next →
                  </div>
                  <div
                    className="transition-colors group-hover:text-[var(--cyan)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {next.title}
                  </div>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </section>
      </main>
      <ThemeToggle />
      <Motion />
    </>
  );
}
