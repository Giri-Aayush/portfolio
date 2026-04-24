import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/footer";
import { Fragment } from "react";
import { blogs, type ContentBlock, type RichText } from "@/data/blogs";

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
      canonical: `https://aayushgiri.dev/blogs/${blog.slug}`,
    },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      url: `https://aayushgiri.dev/blogs/${blog.slug}`,
    },
  };
}

function renderRich(text: RichText) {
  if (typeof text === "string") return text;
  return text.map((span, i) =>
    typeof span === "string" ? (
      <Fragment key={i}>{span}</Fragment>
    ) : (
      <a
        key={i}
        href={span.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-outline-variant/60 hover:decoration-primary hover:text-primary transition-colors"
      >
        {span.text}
      </a>
    )
  );
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight uppercase mt-16 mb-6 clear-both">
        {block.text}
      </h2>
    );
  }
  if (block.type === "paragraph") {
    return (
      <p className="font-body text-lg text-on-surface leading-relaxed">
        {renderRich(block.text)}
      </p>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-2 border-primary pl-6 py-2 my-4">
        <p className="font-body text-xl italic text-on-surface-variant leading-relaxed">
          {block.text}
        </p>
      </blockquote>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="font-body text-lg text-on-surface space-y-3 list-none">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="font-label text-secondary mt-1 text-xs">
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
      <div className="border border-outline-variant/30 bg-surface-container-low">
        {block.language && (
          <div className="font-label text-[10px] text-on-surface-variant tracking-[0.3em] uppercase border-b border-outline-variant/30 px-4 py-2">
            {block.language}
          </div>
        )}
        <pre className="font-label text-sm text-on-surface overflow-x-auto p-4">
          <code>{block.text}</code>
        </pre>
      </div>
    );
  }
  if (block.type === "image") {
    const figure = (
      <figure className="my-4 md:float-right md:w-[45%] md:ml-8 md:mb-4 md:mt-2 max-w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={block.src}
          alt={block.alt}
          className="w-full border border-outline-variant/20"
        />
        {block.caption && (
          <figcaption className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mt-3 leading-relaxed">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
    return block.href ? (
      <a
        href={block.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity md:float-right md:w-[45%] md:ml-8 md:mb-4 md:mt-2 max-w-full my-4"
      >
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            className="w-full border border-outline-variant/20"
          />
          {block.caption && (
            <figcaption className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mt-3 leading-relaxed">
              {block.caption}
            </figcaption>
          )}
        </figure>
      </a>
    ) : (
      figure
    );
  }
  if (block.type === "references") {
    return (
      <ul className="font-label text-sm text-on-surface-variant space-y-2 list-none">
        {block.items.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <span className="text-outline-variant mr-2">[↗]</span>
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
      url: "https://aayushgiri.dev",
    },
    url: `https://aayushgiri.dev/blogs/${blog.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-24 pb-12">
        <section className="px-8 mb-12">
          <div className="editorial-grid">
            <div className="col-span-12">
              <Link
                href="/blogs"
                className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors inline-block mb-12"
              >
                [←] ALL_BLOGS
              </Link>
            </div>

            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-label text-xs text-secondary tracking-widest">
                  {blog.date}
                </span>
                <span className="font-label text-[10px] text-on-surface-variant border border-outline-variant/30 px-2 py-0.5 uppercase">
                  {blog.readTime}
                </span>
              </div>

              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
                {blog.title}
              </h1>

              <p className="font-body text-xl text-on-surface-variant max-w-3xl leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-outline-variant/20 mx-8 mb-16" />

        <article className="px-8 mb-24">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-8 md:col-start-3 space-y-6">
              {blog.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </div>
        </article>

        <section className="px-8 mb-28">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <div className="h-px bg-outline-variant/20 mb-10" />
              <div className="flex flex-col md:flex-row justify-between gap-8">
                {prev ? (
                  <Link href={`/blogs/${prev.slug}`} className="group max-w-sm">
                    <span className="font-label text-[10px] text-on-surface-variant tracking-[0.3em] uppercase block mb-2">
                      [←] PREVIOUS
                    </span>
                    <span className="font-headline text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    href={`/blogs/${next.slug}`}
                    className="group max-w-sm md:text-right"
                  >
                    <span className="font-label text-[10px] text-on-surface-variant tracking-[0.3em] uppercase block mb-2">
                      NEXT [→]
                    </span>
                    <span className="font-headline text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {next.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingDock />
      <Footer />
    </>
  );
}
