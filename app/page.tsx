"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getSnippetsByCategory, SNIPPETS, type Category } from "../lib/registry";

export default function Home() {
  return (
    <Suspense fallback={<LoadingState />}>
      <HomeContent />
    </Suspense>
  );
}

function LoadingState() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Web Design Playground</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            A small library of reusable UI effects for my personal site. Click any snippet to preview and copy.
          </p>
        </header>
        <div className="text-sm text-zinc-400">Loading...</div>
      </div>
    </main>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const snippetsByCategory = getSnippetsByCategory();

  // 从 URL 读取当前分类
  const categoryParam = searchParams.get("category");
  const activeCategory: Category | "all" =
    categoryParam && CATEGORIES.includes(categoryParam as Category)
      ? (categoryParam as Category)
      : "all";

  const filteredSnippets =
    activeCategory === "all"
      ? SNIPPETS
      : SNIPPETS.filter((s) => s.category === activeCategory);

  // 点击分类时更新 URL
  const setCategory = (cat: Category | "all") => {
    if (cat === "all") {
      router.push("/", { scroll: false });
    } else {
      router.push(`/?category=${encodeURIComponent(cat)}`, { scroll: false });
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Web Design Playground</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            A small library of reusable UI effects for my personal site. Click any snippet to preview and copy.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              activeCategory === "all"
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white/60 text-zinc-600 hover:border-zinc-300"
            }`}
          >
            All ({SNIPPETS.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = snippetsByCategory[c].length;
            const isActive = activeCategory === c;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  isActive
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : count > 0
                    ? "border-zinc-200 bg-white/60 text-zinc-600 hover:border-zinc-300"
                    : "border-zinc-200 bg-white/40 text-zinc-400"
                }`}
              >
                {c} ({count})
              </button>
            );
          })}
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSnippets.map((s) => (
            <Link
              key={s.slug}
              href={`/s/${s.slug}`}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <div className="font-medium">{s.title}</div>
              <div className="mt-1 text-sm leading-6 text-zinc-600">{s.description}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600">
                  {s.category}
                </span>
                {s.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>

        {filteredSnippets.length === 0 && (
          <div className="py-20 text-center text-sm text-zinc-400">
            No components in this category.
          </div>
        )}
      </div>
    </main>
  );
}
