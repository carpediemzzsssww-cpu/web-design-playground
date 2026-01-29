// 可用的分类常量（添加新分类时在这里扩展）
export const CATEGORIES = [
  "Buttons & CTAs",
  "Navigation",
  "Typography",
  "Cards",
  "Sections",
  "Motion",
] as const;

export type Category = (typeof CATEGORIES)[number];

// 代码块结构
export type CodeBlock = {
  html: string;
  css: string;
  js?: string;
};

// Snippet 完整类型定义
export type Snippet = {
  slug: string;           // URL 路径标识，如 "button-glow-pill"
  title: string;          // 显示标题
  description: string;    // 简短描述
  category: Category;     // 必须是 CATEGORIES 中的值
  tags: string[];         // 搜索/过滤标签
  preview: CodeBlock;     // iframe 预览用的代码
  code: CodeBlock;        // 展示给用户复制的代码（可与 preview 相同）
};

// ============================================================
// 素材注册表
// 添加新素材时，按分类放到对应区块，保持代码整洁
// ============================================================

// ---------- Buttons & CTAs ----------
const buttonsSnippets: Snippet[] = [
  {
    slug: "button-glow-pill",
    title: "Glow Pill Button",
    description: "A soft glow pill button for portfolio CTA.",
    category: "Buttons & CTAs",
    tags: ["glow", "pill", "hover", "portfolio"],
    preview: {
      html: `<button class="glow-btn">Get Started</button>`,
      css: `.glow-btn { padding: 12px 28px; font-size: 16px; font-weight: 600; color: #fff; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; border-radius: 9999px; cursor: pointer; transition: box-shadow 0.3s ease, transform 0.2s ease; }
.glow-btn:hover { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); transform: translateY(-2px); }`,
    },
    code: {
      html: `<button class="glow-btn">Get Started</button>`,
      css: `.glow-btn {\n  padding: 12px 28px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: box-shadow 0.3s ease, transform 0.2s ease;\n}\n.glow-btn:hover {\n  box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);\n  transform: translateY(-2px);\n}`,
    },
  },
  {
    slug: "button-outline-hover",
    title: "Outline Fill Button",
    description: "Outline button with fill animation on hover.",
    category: "Buttons & CTAs",
    tags: ["outline", "hover", "fill", "animation"],
    preview: {
      html: `<button class="outline-btn">Learn More</button>`,
      css: `.outline-btn { padding: 12px 28px; font-size: 16px; font-weight: 500; color: #3b82f6; background: transparent; border: 2px solid #3b82f6; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; }
.outline-btn:hover { color: #fff; background: #3b82f6; }`,
    },
    code: {
      html: `<button class="outline-btn">Learn More</button>`,
      css: `.outline-btn {\n  padding: 12px 28px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #3b82f6;\n  background: transparent;\n  border: 2px solid #3b82f6;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.outline-btn:hover {\n  color: #fff;\n  background: #3b82f6;\n}`,
    },
  },
  {
    slug: "button-slide-arrow",
    title: "Slide Arrow Button",
    description: "Button with sliding arrow on hover.",
    category: "Buttons & CTAs",
    tags: ["arrow", "slide", "hover", "cta"],
    preview: {
      html: `<button class="slide-arrow-btn">View Projects <span>&rarr;</span></button>`,
      css: `.slide-arrow-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; font-size: 16px; font-weight: 500; color: #111; background: #f3f4f6; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; }
.slide-arrow-btn span { transition: transform 0.3s ease; }
.slide-arrow-btn:hover { background: #e5e7eb; }
.slide-arrow-btn:hover span { transform: translateX(4px); }`,
    },
    code: {
      html: `<button class="slide-arrow-btn">View Projects <span>&rarr;</span></button>`,
      css: `.slide-arrow-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #111;\n  background: #f3f4f6;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.slide-arrow-btn span { transition: transform 0.3s ease; }\n.slide-arrow-btn:hover { background: #e5e7eb; }\n.slide-arrow-btn:hover span { transform: translateX(4px); }`,
    },
  },
  {
    slug: "button-shimmer",
    title: "Shimmer Button",
    description: "Button with animated shimmer effect.",
    category: "Buttons & CTAs",
    tags: ["shimmer", "animation", "premium", "cta"],
    preview: {
      html: `<button class="shimmer-btn">Premium Access</button>`,
      css: `.shimmer-btn { position: relative; padding: 14px 32px; font-size: 16px; font-weight: 600; color: #fff; background: linear-gradient(90deg, #1e3a8a, #3b82f6, #1e3a8a); background-size: 200% 100%; border: none; border-radius: 8px; cursor: pointer; animation: shimmer 2s linear infinite; overflow: hidden; }
@keyframes shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }`,
    },
    code: {
      html: `<button class="shimmer-btn">Premium Access</button>`,
      css: `.shimmer-btn {\n  position: relative;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: linear-gradient(90deg, #1e3a8a, #3b82f6, #1e3a8a);\n  background-size: 200% 100%;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  animation: shimmer 2s linear infinite;\n}\n@keyframes shimmer {\n  0% { background-position: 100% 0; }\n  100% { background-position: -100% 0; }\n}`,
    },
  },
  {
    slug: "button-3d-press",
    title: "3D Press Button",
    description: "Button with 3D press effect on click.",
    category: "Buttons & CTAs",
    tags: ["3d", "press", "click", "depth"],
    preview: {
      html: `<button class="press-btn">Click Me</button>`,
      css: `.press-btn { padding: 14px 28px; font-size: 16px; font-weight: 600; color: #fff; background: #10b981; border: none; border-radius: 10px; box-shadow: 0 6px 0 #059669; cursor: pointer; transition: all 0.1s ease; }
.press-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 0 #059669; }
.press-btn:active { transform: translateY(4px); box-shadow: 0 2px 0 #059669; }`,
    },
    code: {
      html: `<button class="press-btn">Click Me</button>`,
      css: `.press-btn {\n  padding: 14px 28px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: #10b981;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 6px 0 #059669;\n  cursor: pointer;\n  transition: all 0.1s ease;\n}\n.press-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 0 #059669;\n}\n.press-btn:active {\n  transform: translateY(4px);\n  box-shadow: 0 2px 0 #059669;\n}`,
    },
  },
  {
    slug: "button-icon-circle",
    title: "Icon Circle Button",
    description: "Circular icon button for social links.",
    category: "Buttons & CTAs",
    tags: ["icon", "circle", "social", "minimal"],
    preview: {
      html: `<div style="display:flex;gap:12px"><button class="icon-btn">G</button><button class="icon-btn">T</button><button class="icon-btn">L</button></div>`,
      css: `.icon-btn { width: 44px; height: 44px; font-size: 18px; font-weight: 600; color: #374151; background: #fff; border: 1px solid #e5e7eb; border-radius: 50%; cursor: pointer; transition: all 0.2s ease; }
.icon-btn:hover { color: #3b82f6; border-color: #3b82f6; transform: translateY(-2px); }`,
    },
    code: {
      html: `<button class="icon-btn">G</button>`,
      css: `.icon-btn {\n  width: 44px;\n  height: 44px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #374151;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n  transform: translateY(-2px);\n}`,
    },
  },
  {
    slug: "button-underline-slide",
    title: "Underline Slide Link",
    description: "Text link with sliding underline effect.",
    category: "Buttons & CTAs",
    tags: ["link", "underline", "minimal", "text"],
    preview: {
      html: `<a href="#" class="underline-link">Read more about me</a>`,
      css: `.underline-link { position: relative; color: #111; text-decoration: none; font-weight: 500; }
.underline-link::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 0; height: 2px; background: #3b82f6; transition: width 0.3s ease; }
.underline-link:hover::after { width: 100%; }`,
    },
    code: {
      html: `<a href="#" class="underline-link">Read more about me</a>`,
      css: `.underline-link {\n  position: relative;\n  color: #111;\n  text-decoration: none;\n  font-weight: 500;\n}\n.underline-link::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  width: 0;\n  height: 2px;\n  background: #3b82f6;\n  transition: width 0.3s ease;\n}\n.underline-link:hover::after {\n  width: 100%;\n}`,
    },
  },
  {
    slug: "button-magnetic",
    title: "Magnetic Button",
    description: "Button that follows cursor on hover.",
    category: "Buttons & CTAs",
    tags: ["magnetic", "interactive", "cursor", "js"],
    preview: {
      html: `<button class="magnetic-btn" id="magBtn">Hover Me</button>`,
      css: `.magnetic-btn { padding: 16px 32px; font-size: 16px; font-weight: 600; color: #fff; background: #111; border: none; border-radius: 50px; cursor: pointer; transition: transform 0.2s ease; }`,
      js: `const btn = document.getElementById('magBtn');
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  btn.style.transform = \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;
});
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'translate(0, 0)';
});`,
    },
    code: {
      html: `<button class="magnetic-btn" id="magBtn">Hover Me</button>`,
      css: `.magnetic-btn {\n  padding: 16px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: #111;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}`,
      js: `const btn = document.getElementById('magBtn');\nbtn.addEventListener('mousemove', (e) => {\n  const rect = btn.getBoundingClientRect();\n  const x = e.clientX - rect.left - rect.width / 2;\n  const y = e.clientY - rect.top - rect.height / 2;\n  btn.style.transform = \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;\n});\nbtn.addEventListener('mouseleave', () => {\n  btn.style.transform = 'translate(0, 0)';\n});`,
    },
  },
];

// ---------- Navigation ----------
const navigationSnippets: Snippet[] = [
  {
    slug: "nav-underline",
    title: "Underline Nav Links",
    description: "Navigation links with animated underline on hover.",
    category: "Navigation",
    tags: ["nav", "underline", "hover", "animation"],
    preview: {
      html: `<nav class="nav-underline"><a href="#">Home</a><a href="#">About</a><a href="#">Work</a><a href="#">Contact</a></nav>`,
      css: `.nav-underline { display: flex; gap: 24px; }
.nav-underline a { position: relative; text-decoration: none; color: #374151; font-weight: 500; padding: 4px 0; }
.nav-underline a::after { content: ""; position: absolute; left: 0; bottom: 0; width: 0; height: 2px; background: #3b82f6; transition: width 0.3s ease; }
.nav-underline a:hover::after { width: 100%; }`,
    },
    code: {
      html: `<nav class="nav-underline">\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Work</a>\n  <a href="#">Contact</a>\n</nav>`,
      css: `.nav-underline {\n  display: flex;\n  gap: 24px;\n}\n.nav-underline a {\n  position: relative;\n  text-decoration: none;\n  color: #374151;\n  font-weight: 500;\n  padding: 4px 0;\n}\n.nav-underline a::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  background: #3b82f6;\n  transition: width 0.3s ease;\n}\n.nav-underline a:hover::after {\n  width: 100%;\n}`,
    },
  },
  {
    slug: "nav-pill-active",
    title: "Pill Active Nav",
    description: "Navigation with pill-shaped active indicator.",
    category: "Navigation",
    tags: ["nav", "pill", "active", "modern"],
    preview: {
      html: `<nav class="nav-pill"><a href="#" class="active">Home</a><a href="#">About</a><a href="#">Work</a><a href="#">Contact</a></nav>`,
      css: `.nav-pill { display: flex; gap: 8px; padding: 6px; background: #f3f4f6; border-radius: 12px; }
.nav-pill a { padding: 8px 16px; text-decoration: none; color: #6b7280; font-weight: 500; border-radius: 8px; transition: all 0.2s ease; }
.nav-pill a:hover { color: #111; }
.nav-pill a.active { background: #fff; color: #111; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }`,
    },
    code: {
      html: `<nav class="nav-pill">\n  <a href="#" class="active">Home</a>\n  <a href="#">About</a>\n  <a href="#">Work</a>\n  <a href="#">Contact</a>\n</nav>`,
      css: `.nav-pill {\n  display: flex;\n  gap: 8px;\n  padding: 6px;\n  background: #f3f4f6;\n  border-radius: 12px;\n}\n.nav-pill a {\n  padding: 8px 16px;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.nav-pill a:hover { color: #111; }\n.nav-pill a.active {\n  background: #fff;\n  color: #111;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}`,
    },
  },
  {
    slug: "nav-header-sticky",
    title: "Sticky Header",
    description: "Fixed header with blur backdrop effect.",
    category: "Navigation",
    tags: ["header", "sticky", "blur", "backdrop"],
    preview: {
      html: `<header class="sticky-header"><div class="logo">Logo</div><nav><a href="#">Home</a><a href="#">About</a><a href="#">Contact</a></nav></header><div style="height:200px;padding:20px;">Scroll content below...</div>`,
      css: `.sticky-header { position: sticky; top: 0; display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border-bottom: 1px solid #e5e7eb; z-index: 100; }
.sticky-header .logo { font-weight: 700; font-size: 18px; }
.sticky-header nav { display: flex; gap: 24px; }
.sticky-header nav a { text-decoration: none; color: #374151; font-weight: 500; }
.sticky-header nav a:hover { color: #111; }`,
    },
    code: {
      html: `<header class="sticky-header">\n  <div class="logo">Logo</div>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n</header>`,
      css: `.sticky-header {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: rgba(255,255,255,0.8);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid #e5e7eb;\n  z-index: 100;\n}\n.sticky-header .logo { font-weight: 700; font-size: 18px; }\n.sticky-header nav { display: flex; gap: 24px; }\n.sticky-header nav a { text-decoration: none; color: #374151; font-weight: 500; }\n.sticky-header nav a:hover { color: #111; }`,
    },
  },
  {
    slug: "nav-hamburger",
    title: "Hamburger Menu Icon",
    description: "Animated hamburger to X toggle.",
    category: "Navigation",
    tags: ["hamburger", "menu", "mobile", "toggle"],
    preview: {
      html: `<button class="hamburger" id="ham"><span></span><span></span><span></span></button>`,
      css: `.hamburger { display: flex; flex-direction: column; gap: 5px; padding: 10px; background: none; border: none; cursor: pointer; }
.hamburger span { display: block; width: 24px; height: 2px; background: #111; transition: all 0.3s ease; }
.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }`,
      js: `document.getElementById('ham').addEventListener('click', function() { this.classList.toggle('active'); });`,
    },
    code: {
      html: `<button class="hamburger" id="ham">\n  <span></span>\n  <span></span>\n  <span></span>\n</button>`,
      css: `.hamburger {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.hamburger span {\n  display: block;\n  width: 24px;\n  height: 2px;\n  background: #111;\n  transition: all 0.3s ease;\n}\n.hamburger.active span:nth-child(1) {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n.hamburger.active span:nth-child(2) { opacity: 0; }\n.hamburger.active span:nth-child(3) {\n  transform: rotate(-45deg) translate(5px, -5px);\n}`,
      js: `document.getElementById('ham').addEventListener('click', function() {\n  this.classList.toggle('active');\n});`,
    },
  },
  {
    slug: "nav-breadcrumb",
    title: "Breadcrumb Navigation",
    description: "Simple breadcrumb with separators.",
    category: "Navigation",
    tags: ["breadcrumb", "navigation", "path", "hierarchy"],
    preview: {
      html: `<nav class="breadcrumb"><a href="#">Home</a><span>/</span><a href="#">Portfolio</a><span>/</span><span class="current">Project Name</span></nav>`,
      css: `.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.breadcrumb a { color: #6b7280; text-decoration: none; }
.breadcrumb a:hover { color: #3b82f6; }
.breadcrumb span { color: #9ca3af; }
.breadcrumb .current { color: #111; font-weight: 500; }`,
    },
    code: {
      html: `<nav class="breadcrumb">\n  <a href="#">Home</a>\n  <span>/</span>\n  <a href="#">Portfolio</a>\n  <span>/</span>\n  <span class="current">Project Name</span>\n</nav>`,
      css: `.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.breadcrumb a { color: #6b7280; text-decoration: none; }\n.breadcrumb a:hover { color: #3b82f6; }\n.breadcrumb span { color: #9ca3af; }\n.breadcrumb .current { color: #111; font-weight: 500; }`,
    },
  },
  {
    slug: "nav-sidebar-minimal",
    title: "Minimal Sidebar",
    description: "Clean vertical navigation sidebar.",
    category: "Navigation",
    tags: ["sidebar", "vertical", "minimal", "dashboard"],
    preview: {
      html: `<aside class="sidebar"><div class="sidebar-logo">Brand</div><nav><a href="#" class="active">Dashboard</a><a href="#">Projects</a><a href="#">Settings</a><a href="#">Logout</a></nav></aside>`,
      css: `.sidebar { width: 200px; padding: 24px 16px; background: #111; border-radius: 12px; }
.sidebar-logo { color: #fff; font-weight: 700; font-size: 18px; margin-bottom: 32px; padding: 0 12px; }
.sidebar nav { display: flex; flex-direction: column; gap: 4px; }
.sidebar nav a { padding: 12px; color: #9ca3af; text-decoration: none; border-radius: 8px; transition: all 0.2s ease; }
.sidebar nav a:hover { color: #fff; background: rgba(255,255,255,0.1); }
.sidebar nav a.active { color: #fff; background: #3b82f6; }`,
    },
    code: {
      html: `<aside class="sidebar">\n  <div class="sidebar-logo">Brand</div>\n  <nav>\n    <a href="#" class="active">Dashboard</a>\n    <a href="#">Projects</a>\n    <a href="#">Settings</a>\n    <a href="#">Logout</a>\n  </nav>\n</aside>`,
      css: `.sidebar {\n  width: 200px;\n  padding: 24px 16px;\n  background: #111;\n  border-radius: 12px;\n}\n.sidebar-logo {\n  color: #fff;\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 32px;\n  padding: 0 12px;\n}\n.sidebar nav {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sidebar nav a {\n  padding: 12px;\n  color: #9ca3af;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.sidebar nav a:hover { color: #fff; background: rgba(255,255,255,0.1); }\n.sidebar nav a.active { color: #fff; background: #3b82f6; }`,
    },
  },
];

// ---------- Typography ----------
const typographySnippets: Snippet[] = [
  {
    slug: "text-gradient",
    title: "Gradient Text",
    description: "Eye-catching gradient text for headings.",
    category: "Typography",
    tags: ["gradient", "heading", "text", "colorful"],
    preview: {
      html: `<h1 class="gradient-text">Beautiful Gradient</h1>`,
      css: `.gradient-text { font-size: 48px; font-weight: 700; background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }`,
    },
    code: {
      html: `<h1 class="gradient-text">Beautiful Gradient</h1>`,
      css: `.gradient-text {\n  font-size: 48px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}`,
    },
  },
  {
    slug: "text-typewriter",
    title: "Typewriter Effect",
    description: "Animated typing effect for hero text.",
    category: "Typography",
    tags: ["typewriter", "animation", "typing", "hero"],
    preview: {
      html: `<h1 class="typewriter">Hello, I'm a Developer</h1>`,
      css: `.typewriter { font-size: 32px; font-weight: 600; overflow: hidden; border-right: 3px solid #3b82f6; white-space: nowrap; animation: typing 3s steps(22) forwards, blink 0.7s step-end infinite; width: 0; }
@keyframes typing { to { width: 100%; } }
@keyframes blink { 50% { border-color: transparent; } }`,
    },
    code: {
      html: `<h1 class="typewriter">Hello, I'm a Developer</h1>`,
      css: `.typewriter {\n  font-size: 32px;\n  font-weight: 600;\n  overflow: hidden;\n  border-right: 3px solid #3b82f6;\n  white-space: nowrap;\n  animation: typing 3s steps(22) forwards, blink 0.7s step-end infinite;\n  width: 0;\n}\n@keyframes typing { to { width: 100%; } }\n@keyframes blink { 50% { border-color: transparent; } }`,
    },
  },
  {
    slug: "text-highlight",
    title: "Highlight Text",
    description: "Text with marker highlight effect.",
    category: "Typography",
    tags: ["highlight", "marker", "emphasis", "text"],
    preview: {
      html: `<p class="highlight-text">This is <span class="highlight">important text</span> you should notice.</p>`,
      css: `.highlight-text { font-size: 18px; line-height: 1.6; color: #374151; }
.highlight { background: linear-gradient(120deg, #fef08a 0%, #fef08a 100%); background-repeat: no-repeat; background-size: 100% 40%; background-position: 0 90%; padding: 0 4px; }`,
    },
    code: {
      html: `<p>This is <span class="highlight">important text</span> you should notice.</p>`,
      css: `.highlight {\n  background: linear-gradient(120deg, #fef08a 0%, #fef08a 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 40%;\n  background-position: 0 90%;\n  padding: 0 4px;\n}`,
    },
  },
  {
    slug: "text-glitch",
    title: "Glitch Text",
    description: "Cyberpunk-style glitch text effect.",
    category: "Typography",
    tags: ["glitch", "cyberpunk", "effect", "animation"],
    preview: {
      html: `<h1 class="glitch" data-text="GLITCH">GLITCH</h1>`,
      css: `.glitch { position: relative; font-size: 48px; font-weight: 700; color: #fff; background: #111; padding: 20px; text-transform: uppercase; }
.glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 20px; left: 20px; width: 100%; height: 100%; }
.glitch::before { color: #0ff; animation: glitch-1 0.3s infinite linear alternate-reverse; clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%); }
.glitch::after { color: #f0f; animation: glitch-2 0.3s infinite linear alternate-reverse; clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%); }
@keyframes glitch-1 { 0% { transform: translate(2px, 2px); } 100% { transform: translate(-2px, -2px); } }
@keyframes glitch-2 { 0% { transform: translate(-2px, -2px); } 100% { transform: translate(2px, 2px); } }`,
    },
    code: {
      html: `<h1 class="glitch" data-text="GLITCH">GLITCH</h1>`,
      css: `.glitch {\n  position: relative;\n  font-size: 48px;\n  font-weight: 700;\n  color: #fff;\n  background: #111;\n  padding: 20px;\n  text-transform: uppercase;\n}\n.glitch::before, .glitch::after {\n  content: attr(data-text);\n  position: absolute;\n  top: 20px; left: 20px;\n}\n.glitch::before {\n  color: #0ff;\n  animation: glitch-1 0.3s infinite linear alternate-reverse;\n  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);\n}\n.glitch::after {\n  color: #f0f;\n  animation: glitch-2 0.3s infinite linear alternate-reverse;\n  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);\n}\n@keyframes glitch-1 { 0% { transform: translate(2px); } 100% { transform: translate(-2px); } }\n@keyframes glitch-2 { 0% { transform: translate(-2px); } 100% { transform: translate(2px); } }`,
    },
  },
  {
    slug: "text-stroke-outline",
    title: "Stroke Outline Text",
    description: "Outlined text with transparent fill.",
    category: "Typography",
    tags: ["stroke", "outline", "hollow", "modern"],
    preview: {
      html: `<h1 class="stroke-text">BOLD</h1>`,
      css: `.stroke-text { font-size: 72px; font-weight: 900; color: transparent; -webkit-text-stroke: 2px #111; letter-spacing: 8px; }
.stroke-text:hover { color: #111; -webkit-text-stroke: 2px transparent; transition: all 0.3s ease; }`,
    },
    code: {
      html: `<h1 class="stroke-text">BOLD</h1>`,
      css: `.stroke-text {\n  font-size: 72px;\n  font-weight: 900;\n  color: transparent;\n  -webkit-text-stroke: 2px #111;\n  letter-spacing: 8px;\n}\n.stroke-text:hover {\n  color: #111;\n  -webkit-text-stroke: 2px transparent;\n  transition: all 0.3s ease;\n}`,
    },
  },
  {
    slug: "text-animate-letters",
    title: "Letter by Letter",
    description: "Staggered letter animation on hover.",
    category: "Typography",
    tags: ["letters", "stagger", "animation", "hover"],
    preview: {
      html: `<h1 class="animate-letters"><span>H</span><span>E</span><span>L</span><span>L</span><span>O</span></h1>`,
      css: `.animate-letters { display: flex; font-size: 48px; font-weight: 700; }
.animate-letters span { transition: transform 0.3s ease; }
.animate-letters:hover span { transform: translateY(-10px); }
.animate-letters span:nth-child(1) { transition-delay: 0s; }
.animate-letters span:nth-child(2) { transition-delay: 0.05s; }
.animate-letters span:nth-child(3) { transition-delay: 0.1s; }
.animate-letters span:nth-child(4) { transition-delay: 0.15s; }
.animate-letters span:nth-child(5) { transition-delay: 0.2s; }`,
    },
    code: {
      html: `<h1 class="animate-letters">\n  <span>H</span><span>E</span><span>L</span><span>L</span><span>O</span>\n</h1>`,
      css: `.animate-letters { display: flex; font-size: 48px; font-weight: 700; }\n.animate-letters span { transition: transform 0.3s ease; }\n.animate-letters:hover span { transform: translateY(-10px); }\n.animate-letters span:nth-child(1) { transition-delay: 0s; }\n.animate-letters span:nth-child(2) { transition-delay: 0.05s; }\n.animate-letters span:nth-child(3) { transition-delay: 0.1s; }\n.animate-letters span:nth-child(4) { transition-delay: 0.15s; }\n.animate-letters span:nth-child(5) { transition-delay: 0.2s; }`,
    },
  },
  {
    slug: "text-split-reveal",
    title: "Split Reveal",
    description: "Text reveals with split animation.",
    category: "Typography",
    tags: ["split", "reveal", "animation", "entrance"],
    preview: {
      html: `<div class="split-reveal"><span class="line">Creative</span><span class="line">Developer</span></div>`,
      css: `.split-reveal { overflow: hidden; }
.split-reveal .line { display: block; font-size: 48px; font-weight: 700; line-height: 1.1; animation: revealUp 0.8s ease forwards; opacity: 0; transform: translateY(100%); }
.split-reveal .line:nth-child(2) { animation-delay: 0.2s; }
@keyframes revealUp { to { opacity: 1; transform: translateY(0); } }`,
    },
    code: {
      html: `<div class="split-reveal">\n  <span class="line">Creative</span>\n  <span class="line">Developer</span>\n</div>`,
      css: `.split-reveal { overflow: hidden; }\n.split-reveal .line {\n  display: block;\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.1;\n  animation: revealUp 0.8s ease forwards;\n  opacity: 0;\n  transform: translateY(100%);\n}\n.split-reveal .line:nth-child(2) { animation-delay: 0.2s; }\n@keyframes revealUp { to { opacity: 1; transform: translateY(0); } }`,
    },
  },
];

// ---------- Cards ----------
const cardsSnippets: Snippet[] = [
  {
    slug: "card-hover-lift",
    title: "Hover Lift Card",
    description: "Card with subtle lift effect on hover.",
    category: "Cards",
    tags: ["card", "hover", "shadow", "lift"],
    preview: {
      html: `<div class="lift-card"><h3>Card Title</h3><p>Some description text goes here.</p></div>`,
      css: `.lift-card { padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease; }
.lift-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
.lift-card h3 { margin: 0 0 8px; font-size: 18px; font-weight: 600; color: #111827; }
.lift-card p { margin: 0; font-size: 14px; color: #6b7280; }`,
    },
    code: {
      html: `<div class="lift-card">\n  <h3>Card Title</h3>\n  <p>Some description text goes here.</p>\n</div>`,
      css: `.lift-card {\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.lift-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0,0,0,0.15);\n}\n.lift-card h3 { margin: 0 0 8px; font-size: 18px; font-weight: 600; }\n.lift-card p { margin: 0; font-size: 14px; color: #6b7280; }`,
    },
  },
  {
    slug: "card-project",
    title: "Project Card",
    description: "Portfolio project card with image and overlay.",
    category: "Cards",
    tags: ["project", "portfolio", "image", "overlay"],
    preview: {
      html: `<div class="project-card"><div class="project-img" style="background:#ddd;height:160px;"></div><div class="project-overlay"><span>View Project</span></div><div class="project-info"><h3>Project Name</h3><p>Web Design</p></div></div>`,
      css: `.project-card { position: relative; width: 280px; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.project-img { width: 100%; }
.project-overlay { position: absolute; top: 0; left: 0; right: 0; height: 160px; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
.project-overlay span { color: #fff; font-weight: 600; border: 2px solid #fff; padding: 8px 20px; border-radius: 6px; }
.project-card:hover .project-overlay { opacity: 1; }
.project-info { padding: 16px; }
.project-info h3 { margin: 0 0 4px; font-size: 16px; font-weight: 600; }
.project-info p { margin: 0; font-size: 14px; color: #6b7280; }`,
    },
    code: {
      html: `<div class="project-card">\n  <img class="project-img" src="..." alt="Project">\n  <div class="project-overlay"><span>View Project</span></div>\n  <div class="project-info">\n    <h3>Project Name</h3>\n    <p>Web Design</p>\n  </div>\n</div>`,
      css: `.project-card {\n  position: relative;\n  width: 280px;\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}\n.project-img { width: 100%; }\n.project-overlay {\n  position: absolute;\n  top: 0; left: 0; right: 0;\n  height: 200px;\n  background: rgba(0,0,0,0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.project-card:hover .project-overlay { opacity: 1; }\n.project-info { padding: 16px; }\n.project-info h3 { margin: 0 0 4px; font-size: 16px; font-weight: 600; }\n.project-info p { margin: 0; font-size: 14px; color: #6b7280; }`,
    },
  },
  {
    slug: "card-testimonial",
    title: "Testimonial Card",
    description: "Quote card for testimonials and reviews.",
    category: "Cards",
    tags: ["testimonial", "quote", "review", "social"],
    preview: {
      html: `<div class="testimonial-card"><p class="quote">"This product changed how I work. Highly recommended!"</p><div class="author"><div class="avatar">JD</div><div><div class="name">John Doe</div><div class="role">CEO, Company</div></div></div></div>`,
      css: `.testimonial-card { padding: 24px; background: #fff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.testimonial-card .quote { margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #374151; font-style: italic; }
.testimonial-card .author { display: flex; align-items: center; gap: 12px; }
.testimonial-card .avatar { width: 44px; height: 44px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 600; }
.testimonial-card .name { font-weight: 600; color: #111; }
.testimonial-card .role { font-size: 14px; color: #6b7280; }`,
    },
    code: {
      html: `<div class="testimonial-card">\n  <p class="quote">"This product changed how I work. Highly recommended!"</p>\n  <div class="author">\n    <img class="avatar" src="..." alt="Avatar">\n    <div>\n      <div class="name">John Doe</div>\n      <div class="role">CEO, Company</div>\n    </div>\n  </div>\n</div>`,
      css: `.testimonial-card {\n  padding: 24px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n}\n.testimonial-card .quote {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #374151;\n  font-style: italic;\n}\n.testimonial-card .author { display: flex; align-items: center; gap: 12px; }\n.testimonial-card .avatar { width: 44px; height: 44px; border-radius: 50%; }\n.testimonial-card .name { font-weight: 600; }\n.testimonial-card .role { font-size: 14px; color: #6b7280; }`,
    },
  },
  {
    slug: "card-pricing",
    title: "Pricing Card",
    description: "Clean pricing tier card with features.",
    category: "Cards",
    tags: ["pricing", "plan", "features", "saas"],
    preview: {
      html: `<div class="pricing-card"><div class="plan-name">Pro</div><div class="price">$29<span>/mo</span></div><ul class="features"><li>Unlimited projects</li><li>Priority support</li><li>Custom domain</li></ul><button class="plan-btn">Get Started</button></div>`,
      css: `.pricing-card { padding: 32px; background: #fff; border: 2px solid #e5e7eb; border-radius: 20px; text-align: center; width: 260px; }
.pricing-card .plan-name { font-size: 14px; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 1px; }
.pricing-card .price { font-size: 48px; font-weight: 700; margin: 16px 0; }
.pricing-card .price span { font-size: 16px; color: #6b7280; font-weight: 400; }
.pricing-card .features { list-style: none; padding: 0; margin: 24px 0; text-align: left; }
.pricing-card .features li { padding: 8px 0; color: #374151; border-bottom: 1px solid #f3f4f6; }
.pricing-card .plan-btn { width: 100%; padding: 12px; font-size: 16px; font-weight: 600; color: #fff; background: #3b82f6; border: none; border-radius: 10px; cursor: pointer; }`,
    },
    code: {
      html: `<div class="pricing-card">\n  <div class="plan-name">Pro</div>\n  <div class="price">$29<span>/mo</span></div>\n  <ul class="features">\n    <li>Unlimited projects</li>\n    <li>Priority support</li>\n    <li>Custom domain</li>\n  </ul>\n  <button class="plan-btn">Get Started</button>\n</div>`,
      css: `.pricing-card {\n  padding: 32px;\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 20px;\n  text-align: center;\n  width: 280px;\n}\n.pricing-card .plan-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b82f6;\n  text-transform: uppercase;\n}\n.pricing-card .price { font-size: 48px; font-weight: 700; margin: 16px 0; }\n.pricing-card .price span { font-size: 16px; color: #6b7280; }\n.pricing-card .features { list-style: none; padding: 0; margin: 24px 0; }\n.pricing-card .features li { padding: 8px 0; border-bottom: 1px solid #f3f4f6; }\n.pricing-card .plan-btn {\n  width: 100%;\n  padding: 12px;\n  font-weight: 600;\n  color: #fff;\n  background: #3b82f6;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n}`,
    },
  },
  {
    slug: "card-profile",
    title: "Profile Card",
    description: "User profile card with avatar and socials.",
    category: "Cards",
    tags: ["profile", "avatar", "social", "about"],
    preview: {
      html: `<div class="profile-card"><div class="avatar">AS</div><h3>Alex Smith</h3><p>Full-stack Developer</p><div class="socials"><a href="#">G</a><a href="#">T</a><a href="#">L</a></div></div>`,
      css: `.profile-card { padding: 32px; background: #fff; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; width: 240px; }
.profile-card .avatar { width: 80px; height: 80px; margin: 0 auto 16px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px; font-weight: 700; }
.profile-card h3 { margin: 0 0 4px; font-size: 20px; }
.profile-card p { margin: 0 0 20px; color: #6b7280; font-size: 14px; }
.profile-card .socials { display: flex; justify-content: center; gap: 12px; }
.profile-card .socials a { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: #f3f4f6; border-radius: 50%; color: #374151; text-decoration: none; font-weight: 600; transition: all 0.2s; }
.profile-card .socials a:hover { background: #3b82f6; color: #fff; }`,
    },
    code: {
      html: `<div class="profile-card">\n  <img class="avatar" src="..." alt="Avatar">\n  <h3>Alex Smith</h3>\n  <p>Full-stack Developer</p>\n  <div class="socials">\n    <a href="#">G</a>\n    <a href="#">T</a>\n    <a href="#">L</a>\n  </div>\n</div>`,
      css: `.profile-card {\n  padding: 32px;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.08);\n  text-align: center;\n}\n.profile-card .avatar {\n  width: 80px; height: 80px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n}\n.profile-card h3 { margin: 0 0 4px; font-size: 20px; }\n.profile-card p { margin: 0 0 20px; color: #6b7280; }\n.profile-card .socials { display: flex; justify-content: center; gap: 12px; }\n.profile-card .socials a {\n  width: 36px; height: 36px;\n  display: flex; align-items: center; justify-content: center;\n  background: #f3f4f6;\n  border-radius: 50%;\n  color: #374151;\n  text-decoration: none;\n}\n.profile-card .socials a:hover { background: #3b82f6; color: #fff; }`,
    },
  },
  {
    slug: "card-glass",
    title: "Glassmorphism Card",
    description: "Frosted glass effect card.",
    category: "Cards",
    tags: ["glass", "blur", "modern", "frosted"],
    preview: {
      html: `<div class="glass-bg"><div class="glass-card"><h3>Glass Card</h3><p>Beautiful frosted glass effect with blur backdrop.</p></div></div>`,
      css: `.glass-bg { padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; }
.glass-card { padding: 24px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; color: #fff; }
.glass-card h3 { margin: 0 0 8px; font-size: 20px; }
.glass-card p { margin: 0; font-size: 14px; opacity: 0.9; }`,
    },
    code: {
      html: `<div class="glass-card">\n  <h3>Glass Card</h3>\n  <p>Beautiful frosted glass effect with blur backdrop.</p>\n</div>`,
      css: `.glass-card {\n  padding: 24px;\n  background: rgba(255,255,255,0.2);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255,255,255,0.3);\n  border-radius: 16px;\n  color: #fff;\n}\n.glass-card h3 { margin: 0 0 8px; font-size: 20px; }\n.glass-card p { margin: 0; font-size: 14px; opacity: 0.9; }`,
    },
  },
  {
    slug: "card-blog",
    title: "Blog Post Card",
    description: "Clean blog post preview card.",
    category: "Cards",
    tags: ["blog", "post", "article", "content"],
    preview: {
      html: `<article class="blog-card"><div class="blog-img" style="background:#e5e7eb;height:140px;border-radius:12px;"></div><div class="blog-meta"><span>Jan 15, 2025</span><span>5 min read</span></div><h3>How to Build a Personal Website</h3><p>A complete guide to creating your own portfolio site from scratch...</p></article>`,
      css: `.blog-card { max-width: 320px; }
.blog-card .blog-img { margin-bottom: 16px; }
.blog-card .blog-meta { display: flex; gap: 16px; font-size: 13px; color: #6b7280; margin-bottom: 12px; }
.blog-card h3 { margin: 0 0 8px; font-size: 18px; font-weight: 600; line-height: 1.4; }
.blog-card h3:hover { color: #3b82f6; cursor: pointer; }
.blog-card p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.6; }`,
    },
    code: {
      html: `<article class="blog-card">\n  <img class="blog-img" src="..." alt="Blog">\n  <div class="blog-meta">\n    <span>Jan 15, 2025</span>\n    <span>5 min read</span>\n  </div>\n  <h3>How to Build a Personal Website</h3>\n  <p>A complete guide to creating your own portfolio site...</p>\n</article>`,
      css: `.blog-card { max-width: 320px; }\n.blog-card .blog-img { width: 100%; border-radius: 12px; margin-bottom: 16px; }\n.blog-card .blog-meta {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.blog-card h3 {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n.blog-card h3:hover { color: #3b82f6; cursor: pointer; }\n.blog-card p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.6; }`,
    },
  },
];

// ---------- Sections ----------
const sectionsSnippets: Snippet[] = [
  {
    slug: "hero-centered",
    title: "Centered Hero",
    description: "Clean centered hero section with CTA.",
    category: "Sections",
    tags: ["hero", "centered", "landing", "cta"],
    preview: {
      html: `<section class="hero-centered"><h1>Build Something Amazing</h1><p>Create beautiful websites with modern tools and best practices.</p><button>Get Started</button></section>`,
      css: `.hero-centered { text-align: center; padding: 40px 20px; }
.hero-centered h1 { margin: 0 0 16px; font-size: 36px; font-weight: 700; }
.hero-centered p { margin: 0 0 24px; font-size: 18px; color: #6b7280; }
.hero-centered button { padding: 12px 28px; font-size: 16px; font-weight: 600; color: #fff; background: #3b82f6; border: none; border-radius: 8px; cursor: pointer; }`,
    },
    code: {
      html: `<section class="hero-centered">\n  <h1>Build Something Amazing</h1>\n  <p>Create beautiful websites with modern tools and best practices.</p>\n  <button>Get Started</button>\n</section>`,
      css: `.hero-centered {\n  text-align: center;\n  padding: 80px 20px;\n}\n.hero-centered h1 {\n  margin: 0 0 16px;\n  font-size: 56px;\n  font-weight: 700;\n}\n.hero-centered p {\n  margin: 0 auto 32px;\n  max-width: 600px;\n  font-size: 20px;\n  color: #6b7280;\n}\n.hero-centered button {\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: #3b82f6;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}`,
    },
  },
  {
    slug: "hero-split",
    title: "Split Hero",
    description: "Two-column hero with text and image.",
    category: "Sections",
    tags: ["hero", "split", "two-column", "image"],
    preview: {
      html: `<section class="hero-split"><div class="hero-content"><h1>I'm a Creative Developer</h1><p>Building digital experiences that matter.</p><button>View Work</button></div><div class="hero-image" style="background:#e5e7eb;"></div></section>`,
      css: `.hero-split { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; padding: 20px; }
.hero-content h1 { margin: 0 0 16px; font-size: 36px; font-weight: 700; }
.hero-content p { margin: 0 0 24px; font-size: 18px; color: #6b7280; }
.hero-content button { padding: 12px 24px; font-weight: 600; color: #fff; background: #111; border: none; border-radius: 8px; cursor: pointer; }
.hero-image { height: 200px; border-radius: 16px; }`,
    },
    code: {
      html: `<section class="hero-split">\n  <div class="hero-content">\n    <h1>I'm a Creative Developer</h1>\n    <p>Building digital experiences that matter.</p>\n    <button>View Work</button>\n  </div>\n  <div class="hero-image">\n    <img src="..." alt="Hero">\n  </div>\n</section>`,
      css: `.hero-split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n  padding: 80px 40px;\n}\n.hero-content h1 {\n  margin: 0 0 16px;\n  font-size: 48px;\n  font-weight: 700;\n}\n.hero-content p {\n  margin: 0 0 32px;\n  font-size: 20px;\n  color: #6b7280;\n}\n.hero-content button {\n  padding: 14px 28px;\n  font-weight: 600;\n  color: #fff;\n  background: #111;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.hero-image img { width: 100%; border-radius: 16px; }`,
    },
  },
  {
    slug: "section-features-grid",
    title: "Features Grid",
    description: "Three-column features showcase.",
    category: "Sections",
    tags: ["features", "grid", "icons", "benefits"],
    preview: {
      html: `<section class="features-grid"><div class="feature"><div class="icon">⚡</div><h3>Fast</h3><p>Lightning quick performance.</p></div><div class="feature"><div class="icon">🔒</div><h3>Secure</h3><p>Enterprise-grade security.</p></div><div class="feature"><div class="icon">🎨</div><h3>Beautiful</h3><p>Stunning modern design.</p></div></section>`,
      css: `.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 20px; }
.feature { padding: 24px; background: #f9fafb; border-radius: 16px; text-align: center; }
.feature .icon { font-size: 32px; margin-bottom: 12px; }
.feature h3 { margin: 0 0 8px; font-size: 18px; font-weight: 600; }
.feature p { margin: 0; font-size: 14px; color: #6b7280; }`,
    },
    code: {
      html: `<section class="features-grid">\n  <div class="feature">\n    <div class="icon">⚡</div>\n    <h3>Fast</h3>\n    <p>Lightning quick performance.</p>\n  </div>\n  <div class="feature">\n    <div class="icon">🔒</div>\n    <h3>Secure</h3>\n    <p>Enterprise-grade security.</p>\n  </div>\n  <div class="feature">\n    <div class="icon">🎨</div>\n    <h3>Beautiful</h3>\n    <p>Stunning modern design.</p>\n  </div>\n</section>`,
      css: `.features-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n  padding: 60px 40px;\n}\n.feature {\n  padding: 32px;\n  background: #f9fafb;\n  border-radius: 16px;\n  text-align: center;\n}\n.feature .icon { font-size: 40px; margin-bottom: 16px; }\n.feature h3 { margin: 0 0 8px; font-size: 20px; font-weight: 600; }\n.feature p { margin: 0; color: #6b7280; }`,
    },
  },
  {
    slug: "section-about-me",
    title: "About Me Section",
    description: "Personal introduction with photo.",
    category: "Sections",
    tags: ["about", "bio", "personal", "introduction"],
    preview: {
      html: `<section class="about-me"><div class="about-photo" style="background:#e5e7eb;width:120px;height:120px;border-radius:50%;"></div><div class="about-content"><h2>About Me</h2><p>I'm a designer and developer based in San Francisco. I love creating beautiful, functional websites that help businesses grow.</p><div class="about-stats"><div><strong>5+</strong><span>Years Exp</span></div><div><strong>50+</strong><span>Projects</span></div><div><strong>30+</strong><span>Clients</span></div></div></div></section>`,
      css: `.about-me { display: flex; align-items: center; gap: 40px; padding: 20px; }
.about-content h2 { margin: 0 0 12px; font-size: 28px; font-weight: 700; }
.about-content p { margin: 0 0 20px; color: #6b7280; line-height: 1.6; }
.about-stats { display: flex; gap: 32px; }
.about-stats div { text-align: center; }
.about-stats strong { display: block; font-size: 24px; color: #3b82f6; }
.about-stats span { font-size: 13px; color: #6b7280; }`,
    },
    code: {
      html: `<section class="about-me">\n  <img class="about-photo" src="..." alt="Photo">\n  <div class="about-content">\n    <h2>About Me</h2>\n    <p>I'm a designer and developer based in San Francisco...</p>\n    <div class="about-stats">\n      <div><strong>5+</strong><span>Years Exp</span></div>\n      <div><strong>50+</strong><span>Projects</span></div>\n      <div><strong>30+</strong><span>Clients</span></div>\n    </div>\n  </div>\n</section>`,
      css: `.about-me {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n  padding: 80px 40px;\n}\n.about-photo { width: 200px; height: 200px; border-radius: 50%; object-fit: cover; }\n.about-content h2 { margin: 0 0 16px; font-size: 36px; font-weight: 700; }\n.about-content p { margin: 0 0 24px; color: #6b7280; line-height: 1.7; max-width: 500px; }\n.about-stats { display: flex; gap: 40px; }\n.about-stats strong { display: block; font-size: 32px; color: #3b82f6; }\n.about-stats span { font-size: 14px; color: #6b7280; }`,
    },
  },
  {
    slug: "section-cta-banner",
    title: "CTA Banner",
    description: "Full-width call-to-action banner.",
    category: "Sections",
    tags: ["cta", "banner", "action", "conversion"],
    preview: {
      html: `<section class="cta-banner"><h2>Ready to start your project?</h2><p>Let's work together to bring your ideas to life.</p><button>Get in Touch</button></section>`,
      css: `.cta-banner { padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; text-align: center; color: #fff; }
.cta-banner h2 { margin: 0 0 8px; font-size: 28px; font-weight: 700; }
.cta-banner p { margin: 0 0 24px; opacity: 0.9; }
.cta-banner button { padding: 12px 28px; font-size: 16px; font-weight: 600; color: #667eea; background: #fff; border: none; border-radius: 8px; cursor: pointer; }`,
    },
    code: {
      html: `<section class="cta-banner">\n  <h2>Ready to start your project?</h2>\n  <p>Let's work together to bring your ideas to life.</p>\n  <button>Get in Touch</button>\n</section>`,
      css: `.cta-banner {\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 24px;\n  text-align: center;\n  color: #fff;\n}\n.cta-banner h2 { margin: 0 0 12px; font-size: 36px; font-weight: 700; }\n.cta-banner p { margin: 0 0 32px; font-size: 18px; opacity: 0.9; }\n.cta-banner button {\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #667eea;\n  background: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}`,
    },
  },
  {
    slug: "section-contact-form",
    title: "Contact Form",
    description: "Simple contact form layout.",
    category: "Sections",
    tags: ["contact", "form", "input", "email"],
    preview: {
      html: `<section class="contact-form"><h2>Get in Touch</h2><form><input type="text" placeholder="Your Name"><input type="email" placeholder="Email Address"><textarea placeholder="Your Message" rows="3"></textarea><button type="submit">Send Message</button></form></section>`,
      css: `.contact-form { max-width: 400px; padding: 20px; }
.contact-form h2 { margin: 0 0 20px; font-size: 24px; font-weight: 700; }
.contact-form form { display: flex; flex-direction: column; gap: 12px; }
.contact-form input, .contact-form textarea { padding: 12px 16px; font-size: 15px; border: 1px solid #e5e7eb; border-radius: 8px; outline: none; }
.contact-form input:focus, .contact-form textarea:focus { border-color: #3b82f6; }
.contact-form button { padding: 12px; font-size: 16px; font-weight: 600; color: #fff; background: #3b82f6; border: none; border-radius: 8px; cursor: pointer; }`,
    },
    code: {
      html: `<section class="contact-form">\n  <h2>Get in Touch</h2>\n  <form>\n    <input type="text" placeholder="Your Name">\n    <input type="email" placeholder="Email Address">\n    <textarea placeholder="Your Message" rows="4"></textarea>\n    <button type="submit">Send Message</button>\n  </form>\n</section>`,
      css: `.contact-form { max-width: 500px; padding: 40px; }\n.contact-form h2 { margin: 0 0 24px; font-size: 32px; font-weight: 700; }\n.contact-form form { display: flex; flex-direction: column; gap: 16px; }\n.contact-form input, .contact-form textarea {\n  padding: 14px 18px;\n  font-size: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  outline: none;\n}\n.contact-form input:focus, .contact-form textarea:focus { border-color: #3b82f6; }\n.contact-form button {\n  padding: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: #3b82f6;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n}`,
    },
  },
  {
    slug: "section-footer",
    title: "Simple Footer",
    description: "Clean footer with links and copyright.",
    category: "Sections",
    tags: ["footer", "links", "copyright", "bottom"],
    preview: {
      html: `<footer class="simple-footer"><div class="footer-brand">Brand</div><nav class="footer-links"><a href="#">Home</a><a href="#">About</a><a href="#">Work</a><a href="#">Contact</a></nav><div class="footer-copy">© 2025 Your Name. All rights reserved.</div></footer>`,
      css: `.simple-footer { padding: 40px 20px; border-top: 1px solid #e5e7eb; text-align: center; }
.footer-brand { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
.footer-links { display: flex; justify-content: center; gap: 24px; margin-bottom: 20px; }
.footer-links a { color: #6b7280; text-decoration: none; font-size: 14px; }
.footer-links a:hover { color: #111; }
.footer-copy { font-size: 13px; color: #9ca3af; }`,
    },
    code: {
      html: `<footer class="simple-footer">\n  <div class="footer-brand">Brand</div>\n  <nav class="footer-links">\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Work</a>\n    <a href="#">Contact</a>\n  </nav>\n  <div class="footer-copy">© 2025 Your Name. All rights reserved.</div>\n</footer>`,
      css: `.simple-footer {\n  padding: 60px 40px;\n  border-top: 1px solid #e5e7eb;\n  text-align: center;\n}\n.footer-brand { font-size: 24px; font-weight: 700; margin-bottom: 20px; }\n.footer-links { display: flex; justify-content: center; gap: 32px; margin-bottom: 24px; }\n.footer-links a { color: #6b7280; text-decoration: none; }\n.footer-links a:hover { color: #111; }\n.footer-copy { font-size: 14px; color: #9ca3af; }`,
    },
  },
  {
    slug: "section-skills",
    title: "Skills Section",
    description: "Skills display with progress bars.",
    category: "Sections",
    tags: ["skills", "progress", "abilities", "expertise"],
    preview: {
      html: `<section class="skills-section"><h2>My Skills</h2><div class="skill"><div class="skill-header"><span>JavaScript</span><span>90%</span></div><div class="skill-bar"><div class="skill-progress" style="width:90%"></div></div></div><div class="skill"><div class="skill-header"><span>React</span><span>85%</span></div><div class="skill-bar"><div class="skill-progress" style="width:85%"></div></div></div><div class="skill"><div class="skill-header"><span>CSS</span><span>95%</span></div><div class="skill-bar"><div class="skill-progress" style="width:95%"></div></div></div></section>`,
      css: `.skills-section { max-width: 400px; padding: 20px; }
.skills-section h2 { margin: 0 0 24px; font-size: 24px; font-weight: 700; }
.skill { margin-bottom: 16px; }
.skill-header { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 14px; }
.skill-bar { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; }
.skill-progress { height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 4px; }`,
    },
    code: {
      html: `<section class="skills-section">\n  <h2>My Skills</h2>\n  <div class="skill">\n    <div class="skill-header"><span>JavaScript</span><span>90%</span></div>\n    <div class="skill-bar"><div class="skill-progress" style="width:90%"></div></div>\n  </div>\n  <!-- Add more skills... -->\n</section>`,
      css: `.skills-section { max-width: 500px; padding: 40px; }\n.skills-section h2 { margin: 0 0 32px; font-size: 32px; font-weight: 700; }\n.skill { margin-bottom: 20px; }\n.skill-header { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 15px; font-weight: 500; }\n.skill-bar { height: 10px; background: #e5e7eb; border-radius: 5px; overflow: hidden; }\n.skill-progress { height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 5px; }`,
    },
  },
];

// ---------- Motion ----------
const motionSnippets: Snippet[] = [
  {
    slug: "fade-in-up",
    title: "Fade In Up",
    description: "Element fades in while moving up on load.",
    category: "Motion",
    tags: ["animation", "fade", "entrance", "scroll"],
    preview: {
      html: `<div class="fade-in-up"><h2>Hello World</h2><p>This content fades in from below.</p></div>`,
      css: `.fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.fade-in-up h2 { margin: 0 0 8px; font-size: 24px; font-weight: 600; }
.fade-in-up p { margin: 0; color: #6b7280; }`,
    },
    code: {
      html: `<div class="fade-in-up">\n  <h2>Hello World</h2>\n  <p>This content fades in from below.</p>\n</div>`,
      css: `.fade-in-up {\n  animation: fadeInUp 0.6s ease-out forwards;\n  opacity: 0;\n}\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}`,
    },
  },
  {
    slug: "pulse-dot",
    title: "Pulse Dot",
    description: "Animated pulsing dot for status indicators.",
    category: "Motion",
    tags: ["pulse", "dot", "status", "indicator"],
    preview: {
      html: `<span class="pulse-dot"></span>`,
      css: `.pulse-dot { display: inline-block; width: 12px; height: 12px; background: #10b981; border-radius: 50%; animation: pulse 1.5s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: 0.7; } }`,
    },
    code: {
      html: `<span class="pulse-dot"></span>`,
      css: `.pulse-dot {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background: #10b981;\n  border-radius: 50%;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.3); opacity: 0.7; }\n}`,
    },
  },
  {
    slug: "motion-bounce",
    title: "Bounce Animation",
    description: "Playful bounce effect for attention.",
    category: "Motion",
    tags: ["bounce", "attention", "playful", "loop"],
    preview: {
      html: `<div class="bounce-box">Bounce!</div>`,
      css: `.bounce-box { display: inline-block; padding: 16px 32px; background: #3b82f6; color: #fff; font-weight: 600; border-radius: 12px; animation: bounce 1s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }`,
    },
    code: {
      html: `<div class="bounce-box">Bounce!</div>`,
      css: `.bounce-box {\n  display: inline-block;\n  padding: 16px 32px;\n  background: #3b82f6;\n  color: #fff;\n  font-weight: 600;\n  border-radius: 12px;\n  animation: bounce 1s infinite;\n}\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-15px); }\n}`,
    },
  },
  {
    slug: "motion-scale-hover",
    title: "Scale on Hover",
    description: "Smooth scale transform on hover.",
    category: "Motion",
    tags: ["scale", "hover", "transform", "zoom"],
    preview: {
      html: `<div class="scale-hover">Hover me</div>`,
      css: `.scale-hover { display: inline-block; padding: 20px 40px; background: #f3f4f6; border-radius: 12px; font-weight: 500; cursor: pointer; transition: transform 0.3s ease; }
.scale-hover:hover { transform: scale(1.1); }`,
    },
    code: {
      html: `<div class="scale-hover">Hover me</div>`,
      css: `.scale-hover {\n  display: inline-block;\n  padding: 20px 40px;\n  background: #f3f4f6;\n  border-radius: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.scale-hover:hover {\n  transform: scale(1.1);\n}`,
    },
  },
  {
    slug: "motion-rotate-hover",
    title: "Rotate on Hover",
    description: "Smooth rotation effect on hover.",
    category: "Motion",
    tags: ["rotate", "hover", "spin", "icon"],
    preview: {
      html: `<div class="rotate-hover">⚙️</div>`,
      css: `.rotate-hover { display: inline-block; font-size: 48px; cursor: pointer; transition: transform 0.5s ease; }
.rotate-hover:hover { transform: rotate(180deg); }`,
    },
    code: {
      html: `<div class="rotate-hover">⚙️</div>`,
      css: `.rotate-hover {\n  display: inline-block;\n  font-size: 48px;\n  cursor: pointer;\n  transition: transform 0.5s ease;\n}\n.rotate-hover:hover {\n  transform: rotate(180deg);\n}`,
    },
  },
  {
    slug: "motion-shake",
    title: "Shake Animation",
    description: "Attention-grabbing shake effect.",
    category: "Motion",
    tags: ["shake", "attention", "error", "alert"],
    preview: {
      html: `<button class="shake-btn">Shake me!</button>`,
      css: `.shake-btn { padding: 12px 24px; font-size: 16px; font-weight: 600; color: #fff; background: #ef4444; border: none; border-radius: 8px; cursor: pointer; }
.shake-btn:hover { animation: shake 0.5s ease-in-out; }
@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }`,
    },
    code: {
      html: `<button class="shake-btn">Shake me!</button>`,
      css: `.shake-btn {\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  background: #ef4444;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.shake-btn:hover {\n  animation: shake 0.5s ease-in-out;\n}\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  20%, 60% { transform: translateX(-5px); }\n  40%, 80% { transform: translateX(5px); }\n}`,
    },
  },
  {
    slug: "motion-spinner",
    title: "Loading Spinner",
    description: "Simple rotating loading spinner.",
    category: "Motion",
    tags: ["loading", "spinner", "rotate", "wait"],
    preview: {
      html: `<div class="spinner"></div>`,
      css: `.spinner { width: 40px; height: 40px; border: 4px solid #e5e7eb; border-top-color: #3b82f6; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }`,
    },
    code: {
      html: `<div class="spinner"></div>`,
      css: `.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}`,
    },
  },
  {
    slug: "motion-skeleton",
    title: "Skeleton Loading",
    description: "Shimmer skeleton placeholder.",
    category: "Motion",
    tags: ["skeleton", "loading", "placeholder", "shimmer"],
    preview: {
      html: `<div class="skeleton-card"><div class="skeleton skeleton-img"></div><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div></div>`,
      css: `.skeleton-card { width: 200px; padding: 16px; background: #fff; border-radius: 12px; }
.skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 6px; }
.skeleton-img { height: 100px; margin-bottom: 12px; }
.skeleton-title { height: 20px; width: 80%; margin-bottom: 8px; }
.skeleton-text { height: 14px; width: 60%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`,
    },
    code: {
      html: `<div class="skeleton-card">\n  <div class="skeleton skeleton-img"></div>\n  <div class="skeleton skeleton-title"></div>\n  <div class="skeleton skeleton-text"></div>\n</div>`,
      css: `.skeleton-card { width: 280px; padding: 20px; background: #fff; border-radius: 16px; }\n.skeleton {\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 8px;\n}\n.skeleton-img { height: 160px; margin-bottom: 16px; }\n.skeleton-title { height: 24px; width: 80%; margin-bottom: 12px; }\n.skeleton-text { height: 16px; width: 60%; }\n@keyframes shimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}`,
    },
  },
  {
    slug: "motion-stagger-list",
    title: "Staggered List",
    description: "List items appear with staggered delay.",
    category: "Motion",
    tags: ["stagger", "list", "delay", "entrance"],
    preview: {
      html: `<ul class="stagger-list"><li>Item One</li><li>Item Two</li><li>Item Three</li><li>Item Four</li></ul>`,
      css: `.stagger-list { list-style: none; padding: 0; margin: 0; }
.stagger-list li { padding: 12px 16px; margin-bottom: 8px; background: #f3f4f6; border-radius: 8px; opacity: 0; animation: fadeIn 0.4s ease forwards; }
.stagger-list li:nth-child(1) { animation-delay: 0s; }
.stagger-list li:nth-child(2) { animation-delay: 0.1s; }
.stagger-list li:nth-child(3) { animation-delay: 0.2s; }
.stagger-list li:nth-child(4) { animation-delay: 0.3s; }
@keyframes fadeIn { to { opacity: 1; } }`,
    },
    code: {
      html: `<ul class="stagger-list">\n  <li>Item One</li>\n  <li>Item Two</li>\n  <li>Item Three</li>\n  <li>Item Four</li>\n</ul>`,
      css: `.stagger-list { list-style: none; padding: 0; margin: 0; }\n.stagger-list li {\n  padding: 16px 20px;\n  margin-bottom: 8px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  opacity: 0;\n  animation: fadeIn 0.4s ease forwards;\n}\n.stagger-list li:nth-child(1) { animation-delay: 0s; }\n.stagger-list li:nth-child(2) { animation-delay: 0.1s; }\n.stagger-list li:nth-child(3) { animation-delay: 0.2s; }\n.stagger-list li:nth-child(4) { animation-delay: 0.3s; }\n@keyframes fadeIn { to { opacity: 1; } }`,
    },
  },
  {
    slug: "motion-flip-card",
    title: "Flip Card",
    description: "Card flips to reveal back on hover.",
    category: "Motion",
    tags: ["flip", "3d", "card", "reveal"],
    preview: {
      html: `<div class="flip-card"><div class="flip-inner"><div class="flip-front">Front</div><div class="flip-back">Back</div></div></div>`,
      css: `.flip-card { width: 150px; height: 100px; perspective: 1000px; }
.flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-weight: 600; }
.flip-front { background: #3b82f6; color: #fff; }
.flip-back { background: #10b981; color: #fff; transform: rotateY(180deg); }`,
    },
    code: {
      html: `<div class="flip-card">\n  <div class="flip-inner">\n    <div class="flip-front">Front</div>\n    <div class="flip-back">Back</div>\n  </div>\n</div>`,
      css: `.flip-card { width: 200px; height: 150px; perspective: 1000px; }\n.flip-inner {\n  position: relative;\n  width: 100%; height: 100%;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.flip-card:hover .flip-inner { transform: rotateY(180deg); }\n.flip-front, .flip-back {\n  position: absolute;\n  width: 100%; height: 100%;\n  backface-visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 16px;\n  font-weight: 600;\n}\n.flip-front { background: #3b82f6; color: #fff; }\n.flip-back { background: #10b981; color: #fff; transform: rotateY(180deg); }`,
    },
  },
  // -------- Butterfly × Emergence Theme --------
  {
    slug: "emergence-reveal",
    title: "Emergence Reveal",
    description: "Content gracefully emerges from stillness. Calm, unhurried entrance.",
    category: "Motion",
    tags: ["emergence", "butterfly", "calm", "reveal", "minimal"],
    preview: {
      html: `<div class="emergence"><span class="emergence-text">Emerge</span></div>`,
      css: `.emergence { overflow: hidden; }
.emergence-text { display: inline-block; font-size: 32px; font-weight: 500; letter-spacing: 0.08em; color: #1a1a1a; opacity: 0; transform: translateY(100%); animation: emerge 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
@keyframes emerge { to { opacity: 1; transform: translateY(0); } }`,
    },
    code: {
      html: `<div class="emergence">\n  <span class="emergence-text">Emerge</span>\n</div>`,
      css: `.emergence { overflow: hidden; }\n.emergence-text {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  color: #1a1a1a;\n  opacity: 0;\n  transform: translateY(100%);\n  animation: emerge 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;\n}\n@keyframes emerge {\n  to { opacity: 1; transform: translateY(0); }\n}`,
    },
  },
];

// ---------- Butterfly × Emergence Theme ----------
const butterflySnippets: Snippet[] = [
  {
    slug: "butterfly-button",
    title: "Butterfly Button",
    description: "Restrained button with delicate hover transformation. Warm, muted tones.",
    category: "Buttons & CTAs",
    tags: ["butterfly", "emergence", "minimal", "warm", "elegant"],
    preview: {
      html: `<button class="bf-btn">Explore</button>`,
      css: `.bf-btn { position: relative; padding: 14px 36px; font-size: 13px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #1a1a1a; background: transparent; border: 1px solid #d4cfc7; cursor: pointer; overflow: hidden; transition: color 0.5s ease, border-color 0.5s ease; }
.bf-btn::before { content: ''; position: absolute; inset: 0; background: #1a1a1a; transform: scaleX(0); transform-origin: right; transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); z-index: -1; }
.bf-btn:hover { color: #f5f4f0; border-color: #1a1a1a; }
.bf-btn:hover::before { transform: scaleX(1); transform-origin: left; }`,
    },
    code: {
      html: `<button class="bf-btn">Explore</button>`,
      css: `.bf-btn {\n  position: relative;\n  padding: 14px 36px;\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #1a1a1a;\n  background: transparent;\n  border: 1px solid #d4cfc7;\n  cursor: pointer;\n  overflow: hidden;\n  transition: color 0.5s ease, border-color 0.5s ease;\n}\n.bf-btn::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: #1a1a1a;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);\n  z-index: -1;\n}\n.bf-btn:hover { color: #f5f4f0; border-color: #1a1a1a; }\n.bf-btn:hover::before { transform: scaleX(1); transform-origin: left; }`,
    },
  },
  {
    slug: "subtle-text-link",
    title: "Subtle Text Link",
    description: "Understated link with quiet underline reveal. Never overpowers content.",
    category: "Buttons & CTAs",
    tags: ["link", "subtle", "underline", "minimal", "butterfly"],
    preview: {
      html: `<a href="#" class="subtle-link">View collection</a>`,
      css: `.subtle-link { position: relative; color: #5c5750; text-decoration: none; font-size: 14px; letter-spacing: 0.02em; }
.subtle-link::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 100%; height: 1px; background: #a39382; transform: scaleX(0); transform-origin: right; transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
.subtle-link:hover::after { transform: scaleX(1); transform-origin: left; }`,
    },
    code: {
      html: `<a href="#" class="subtle-link">View collection</a>`,
      css: `.subtle-link {\n  position: relative;\n  color: #5c5750;\n  text-decoration: none;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n}\n.subtle-link::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  width: 100%;\n  height: 1px;\n  background: #a39382;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.subtle-link:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}`,
    },
  },
  {
    slug: "emergence-card",
    title: "Emergence Card",
    description: "Quiet card with gentle lift on hover. Warm neutrals, content-first.",
    category: "Cards",
    tags: ["card", "emergence", "minimal", "warm", "hover"],
    preview: {
      html: `<article class="em-card"><span class="em-label">Essay</span><h3 class="em-title">On Stillness</h3><p class="em-desc">Finding clarity in the quiet moments between.</p></article>`,
      css: `.em-card { padding: 32px; background: #faf9f7; border: 1px solid #e8e4df; transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease; }
.em-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.06); }
.em-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #a39382; }
.em-title { margin: 12px 0 8px; font-size: 20px; font-weight: 500; color: #1a1a1a; letter-spacing: -0.01em; }
.em-desc { margin: 0; font-size: 14px; line-height: 1.6; color: #6b6560; }`,
    },
    code: {
      html: `<article class="em-card">\n  <span class="em-label">Essay</span>\n  <h3 class="em-title">On Stillness</h3>\n  <p class="em-desc">Finding clarity in the quiet moments between.</p>\n</article>`,
      css: `.em-card {\n  padding: 32px;\n  background: #faf9f7;\n  border: 1px solid #e8e4df;\n  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;\n}\n.em-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0,0,0,0.06);\n}\n.em-label {\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #a39382;\n}\n.em-title {\n  margin: 12px 0 8px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #1a1a1a;\n}\n.em-desc {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #6b6560;\n}`,
    },
  },
  {
    slug: "calm-hero",
    title: "Calm Hero",
    description: "Serene hero section. Geometric type, generous whitespace, understated.",
    category: "Sections",
    tags: ["hero", "calm", "minimal", "butterfly", "emergence"],
    preview: {
      html: `<section class="calm-hero"><p class="calm-eyebrow">Portfolio 2025</p><h1 class="calm-title">Design with<br>intention</h1><p class="calm-sub">Creating thoughtful digital experiences.</p></section>`,
      css: `.calm-hero { padding: 48px 24px; text-align: center; background: #faf9f7; }
.calm-eyebrow { margin: 0 0 16px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #a39382; }
.calm-title { margin: 0 0 20px; font-size: 36px; font-weight: 400; line-height: 1.15; letter-spacing: -0.02em; color: #1a1a1a; }
.calm-sub { margin: 0; font-size: 15px; color: #6b6560; letter-spacing: 0.01em; }`,
    },
    code: {
      html: `<section class="calm-hero">\n  <p class="calm-eyebrow">Portfolio 2025</p>\n  <h1 class="calm-title">Design with<br>intention</h1>\n  <p class="calm-sub">Creating thoughtful digital experiences.</p>\n</section>`,
      css: `.calm-hero {\n  padding: 120px 24px;\n  text-align: center;\n  background: #faf9f7;\n}\n.calm-eyebrow {\n  margin: 0 0 24px;\n  font-size: 11px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: #a39382;\n}\n.calm-title {\n  margin: 0 0 24px;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  color: #1a1a1a;\n}\n.calm-sub {\n  margin: 0;\n  font-size: 17px;\n  color: #6b6560;\n}`,
    },
  },
  {
    slug: "quiet-nav",
    title: "Quiet Navigation",
    description: "Minimal navigation with soft hover states. Disappears into the background.",
    category: "Navigation",
    tags: ["nav", "minimal", "quiet", "butterfly", "elegant"],
    preview: {
      html: `<nav class="quiet-nav"><a href="#" class="qn-link">Work</a><a href="#" class="qn-link">About</a><a href="#" class="qn-link">Contact</a></nav>`,
      css: `.quiet-nav { display: flex; gap: 32px; }
.qn-link { font-size: 13px; letter-spacing: 0.04em; color: #8b8680; text-decoration: none; transition: color 0.3s ease; }
.qn-link:hover { color: #1a1a1a; }`,
    },
    code: {
      html: `<nav class="quiet-nav">\n  <a href="#" class="qn-link">Work</a>\n  <a href="#" class="qn-link">About</a>\n  <a href="#" class="qn-link">Contact</a>\n</nav>`,
      css: `.quiet-nav {\n  display: flex;\n  gap: 32px;\n}\n.qn-link {\n  font-size: 13px;\n  letter-spacing: 0.04em;\n  color: #8b8680;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.qn-link:hover {\n  color: #1a1a1a;\n}`,
    },
  },
  {
    slug: "whisper-text",
    title: "Whisper Typography",
    description: "Delicate heading with subtle letter animation on hover.",
    category: "Typography",
    tags: ["typography", "whisper", "subtle", "butterfly", "hover"],
    preview: {
      html: `<h2 class="whisper">Metamorphosis</h2>`,
      css: `.whisper { font-size: 28px; font-weight: 400; letter-spacing: 0.08em; color: #1a1a1a; cursor: default; transition: letter-spacing 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
.whisper:hover { letter-spacing: 0.16em; }`,
    },
    code: {
      html: `<h2 class="whisper">Metamorphosis</h2>`,
      css: `.whisper {\n  font-size: 28px;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  color: #1a1a1a;\n  cursor: default;\n  transition: letter-spacing 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.whisper:hover {\n  letter-spacing: 0.16em;\n}`,
    },
  },
];

// ============================================================
// 合并所有素材并导出
// ============================================================
export const SNIPPETS: Snippet[] = [
  ...buttonsSnippets,
  ...navigationSnippets,
  ...typographySnippets,
  ...cardsSnippets,
  ...sectionsSnippets,
  ...motionSnippets,
  ...butterflySnippets,
];

// 辅助函数：按分类分组
export function getSnippetsByCategory(): Record<Category, Snippet[]> {
  const grouped = {} as Record<Category, Snippet[]>;
  for (const cat of CATEGORIES) {
    grouped[cat] = SNIPPETS.filter((s) => s.category === cat);
  }
  return grouped;
}

// 辅助函数：获取所有标签
export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const s of SNIPPETS) {
    for (const t of s.tags) {
      tags.add(t);
    }
  }
  return Array.from(tags).sort();
}
