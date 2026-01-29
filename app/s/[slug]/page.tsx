"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { SNIPPETS, type Snippet } from "../../../lib/registry";

export default function SnippetPage() {
  const params = useParams();
  const router = useRouter();
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : (params?.slug as string | undefined);

  if (!slug) return null;

  const s: Snippet | undefined = SNIPPETS.find((x) => x.slug === slug);

  const handleBack = () => {
    router.back();
  };

  if (!s) {
    return (
      <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900">
        <div className="mx-auto max-w-5xl">
          <button onClick={handleBack} className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back
          </button>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Snippet not found</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            This slug doesn&apos;t exist in your registry yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <button onClick={handleBack} className="text-sm text-zinc-600 hover:text-zinc-900">
          ← Back
        </button>

        <header className="mt-6">
          <h1 className="text-2xl font-semibold tracking-tight">{s.title}</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{s.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600">
              {s.category}
            </span>
            {s.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm">
            <div className="text-sm font-medium text-zinc-700">Preview</div>
            <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <iframe
                title="preview"
                className="h-64 w-full"
                srcDoc={buildPreviewDoc(s.preview.html, s.preview.css, s.preview.js)}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm">
            <div className="text-sm font-medium text-zinc-700">Code (copy)</div>
            <CodeBlock label="HTML" code={s.code.html} />
            <CodeBlock label="CSS" code={s.code.css} />
            {s.code.js ? <CodeBlock label="JS" code={s.code.js} /> : null}
          </div>
        </section>
      </div>
    </main>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-zinc-600">{label}</div>
        <button
          className={`rounded-lg border px-2 py-1 text-xs transition-colors ${
            copied
              ? "border-green-200 bg-green-50 text-green-600"
              : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
          }`}
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="mt-2 overflow-auto rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs leading-5">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function buildPreviewDoc(html: string, css: string, js?: string) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body{font-family: ui-sans-serif, system-ui; padding:18px;}
  ${css}
</style>
</head>
<body>
  ${html}
  <script>${js ?? ""}</script>
</body>
</html>`;
}
