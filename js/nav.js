/* ============================================================
   Shared navigation — edit links here and every page updates.
   Each page has <aside class="site-nav" data-nav="main|nook|supplysync">.
   ============================================================ */
(function () {
  var FISH =
    '<svg viewBox="-0.4 -0.4 53.8 36" aria-hidden="true"><path fill-rule="evenodd" d="M36.4376 26.899C25.7438 37.0787 13.5442 33.2613 8.78117 30.0802L1.40613 20.5367L0.94519 14.6289L5.55459 7.35766L13.3906 2.35871L19.8437 0.995361L27.2188 2.35871L37.8204 9.62991L44.7345 6.44876H49.8048L53.0314 10.0844L50.7267 13.72L48.8829 16.9011V19.6278L51.6486 27.8079L49.8048 30.989H46.1173L36.4376 26.899ZM11.36 13.95a2.7 2.7 0 1 0 5.4 0a2.7 2.7 0 1 0 -5.4 0Z"/><path d="M50.6787 22.3816C49.9379 21.0603 49.237 19.8113 49.2787 18.6293C49.3203 17.4474 50.1046 16.2478 50.9359 14.9776C51.3615 14.3284 51.8016 13.6563 52.153 12.9595C52.8141 11.6487 53.0658 10.4774 52.9264 9.37658C52.7941 8.34281 52.2327 6.88036 50.3038 5.77956C49.4634 5.29972 48.0091 4.79518 45.8465 5.11802C43.6949 5.43908 41.2824 6.51519 38.6725 8.31458C38.1201 8.69563 37.8104 8.805 37.6492 8.8297C37.1964 8.89674 36.222 8.0235 35.5302 7.3602C32.1143 4.08954 27.4017 0.31082 21.2292 0.107947C20.291 0.0761931 19.2967 0.139701 18.2734 0.291414C11.9543 1.23521 4.01958 5.79543 1.07644 12.6825C-0.111677 15.4628 -0.218536 18.5641 0.772169 21.4166C2.03998 25.063 4.86902 28.5366 8.73584 31.2004C12.3419 33.6842 16.4496 35.1749 20.0049 35.2931C20.9467 35.3249 21.9048 35.2684 22.8502 35.1273C25.2518 34.7692 29.1005 33.7425 34.7767 29.0023C35.1933 28.6548 36.2981 27.7321 36.8559 27.6492C37.0805 27.6157 37.459 27.808 37.9807 28.2225C40.5235 30.2407 44.2853 32.5376 47.7645 32.0172C48.3568 31.9289 48.9092 31.7614 49.4091 31.5179C51.4104 30.5459 52.0715 29.124 52.2743 28.1008C52.4899 27.0124 52.3196 25.8269 51.7509 24.4756C51.4485 23.7576 51.0572 23.0572 50.6769 22.3816H50.6787ZM48.5778 29.8949C48.2699 30.0449 47.904 30.1613 47.482 30.2231C45.7107 30.4877 42.9396 29.8191 39.1561 26.8148C38.1726 26.0333 37.3902 25.7334 36.5734 25.8551C35.7022 25.9857 34.7948 26.5978 33.565 27.6245C30.477 30.2036 26.8058 32.6999 22.5677 33.3332C21.7563 33.4549 20.9213 33.5078 20.0683 33.4796C15.5132 33.3296 9.84246 30.5776 6.04989 26.4814C7.23258 26.7619 8.59276 26.8801 10.0833 26.843C10.7716 26.8254 11.4598 26.7654 12.1408 26.6648C15.3629 26.1832 18.46 24.7684 21.0282 22.5756C21.3596 22.2916 21.4574 21.81 21.2347 21.4378C20.9304 20.9244 20.244 20.8327 19.8111 21.2032C17.0255 23.5847 13.5553 24.9448 10.0381 25.0295C8.14722 25.0754 6.53528 24.7543 5.34173 24.2815C4.32929 23.8811 3.52695 23.1119 3.07234 22.1434C2.84776 21.6636 2.65034 21.1749 2.48372 20.6792C1.67594 18.2589 1.80634 15.655 2.82421 13.3105C5.4015 7.36902 12.5266 2.98344 18.556 2.08375C19.4561 1.94968 20.3345 1.89146 21.1677 1.91969C26.4762 2.09433 30.7704 5.34382 34.2279 8.65153C35.7511 10.1087 36.7654 10.7949 37.9336 10.6203C38.4824 10.5374 39.0655 10.2657 39.7502 9.79467C42.3763 7.98293 44.4936 7.15556 46.1309 6.91035C47.5689 6.69513 48.6393 6.92976 49.3638 7.34256C51.6006 8.62154 51.3307 10.4774 50.4831 12.1603C49.4906 14.1291 47.5037 16.1437 47.4186 18.5676C47.3335 20.9915 49.1773 23.1313 50.0303 25.1618C50.7584 26.8977 50.8997 28.7677 48.5778 29.8949Z" stroke="#3D342D" stroke-width="0.4" stroke-linejoin="round"/></svg>';

  // ---- Edit these ----
  var EMAIL = "camrynrozario06@gmail.com";
  var LINKEDIN = "";   // paste your LinkedIn URL here
  var RESUME = "";     // paste a link to your resume PDF here (e.g. "assets/resume.pdf")

  var main = [
    { label: "Product Design", links: [
      { text: "Nook", href: "nook.html" },
      { text: "CIBC", href: "" },
      { text: "SupplySync", href: "procurement.html" },
      { text: "PRESTO", href: "" }
    ]},
    { label: "Playground", links: [
      { text: "Paintings", href: "paintings.html" },
      { text: "Sketches", href: "sketches.html" }
    ]}
  ];

  var nook = [
    { label: "Nook Index", links: [
      { text: "Overview", href: "#overview" },
      { text: "Problem", href: "#problem" },
      { text: "Key Solutions", href: "#solutions" },
      { text: "User Research", href: "#research" },
      { text: "Lo Fi Sketches", href: "#lofi" },
      { text: "Mid Fidelity Testing", href: "#midfi" },
      { text: "Visual Design", href: "#visual" },
      { text: "Final Product", href: "#final" },
      { text: "Reflections", href: "#reflections" }
    ]}
  ];

  // SupplySync index: add a line here (and a matching <section id="...">) as each part of the case study is finished
  var supplysync = [
    { label: "SupplySync Index", links: [
      { text: "Overview", href: "#overview" },
      { text: "The Starting Point", href: "#starting-point" },
      { text: "Primary Research Question", href: "#research-question" }
    ]}
  ];

  var page = (location.pathname.split("/").pop() || "home.html").replace(/\.html$/, "") || "home";
  if (page === "index") page = "home";

  function link(l) {
    if (!l.href) return '<span' + (l.plain ? "" : ' class="muted"') + ">" + l.text + "</span>";
    var target = l.href.replace(/\.html$/, "");
    var active = target === page || (page === "home" && target === "home") ? ' class="active" aria-current="page"' : "";
    var ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
    return '<a href="' + l.href + '"' + active + ext + ">" + l.text + "</a>";
  }

  function group(s) {
    return '<div class="nav-group"><span class="nav-label">' + s.label + "</span>" + s.links.map(link).join("") + "</div>";
  }

  document.querySelectorAll(".site-nav").forEach(function (el) {
    var sections = { nook: nook, supplysync: supplysync }[el.dataset.nav] || main;
    var top =
      '<div class="nav-section nav-top">' +
        '<a class="logo" href="home.html" aria-label="Home">' + FISH + "</a>" +
        link({ text: "Home", href: "home.html" }) +
        link({ text: "About", href: "about.html" }) +
        link({ text: "Resume", href: RESUME, plain: true }) +
      "</div>";
    var work = '<div class="nav-section">' + sections.map(group).join("") + "</div>";
    var contacts =
      '<div class="nav-section">' + group({ label: "Contact", links: [
        { text: "Email", href: "mailto:" + EMAIL },
        { text: "LinkedIn", href: LINKEDIN, plain: true }
      ]}) + "</div>";
    el.innerHTML = '<nav class="nav-panel" aria-label="Main">' + top + work + contacts + "</nav>";
  });

  // Scroll spy: bold the in-page link (e.g. Nook Index) for the section you're reading
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var spySections = spyLinks.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  if (spyLinks.length) {
    var current = -1, ticking = false;
    function updateSpy() {
      ticking = false;
      var line = window.innerHeight * 0.35, idx = 0;
      spySections.forEach(function (sec, i) { if (sec && sec.getBoundingClientRect().top <= line) idx = i; });
      // at the very bottom, the last section counts as current
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) idx = spySections.length - 1;
      if (idx === current) return;
      current = idx;
      spyLinks.forEach(function (a, i) {
        a.classList.toggle("active", i === idx);
        if (i === idx) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
      });
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(updateSpy); } }, { passive: true });
    window.addEventListener("resize", updateSpy);
    updateSpy();
  }

  // Mobile menu
  var bar = document.createElement("header");
  bar.className = "mobile-bar";
  bar.innerHTML = '<a class="logo" href="home.html" aria-label="Home">' + FISH + '</a><button class="menu-btn" aria-expanded="false" aria-label="Open menu"><span class="bars" aria-hidden="true"><span></span><span></span></span></button>';
  var scrim = document.createElement("div");
  scrim.className = "scrim";
  document.body.prepend(scrim);
  document.body.prepend(bar);
  var btn = bar.querySelector("button");
  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  btn.addEventListener("click", function () { setOpen(!document.body.classList.contains("nav-open")); });
  scrim.addEventListener("click", function () { setOpen(false); });
  document.querySelectorAll(".site-nav a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
})();

/* ============================================================
   Page-load animation: each block fades in and flows up, one after another.
   Blocks further down the page flow up when you scroll to them.
   ============================================================ */
(function () {
  var root = document.documentElement;
  if (!root.classList.contains("js-reveal")) return;

  // Containers whose children animate one by one
  var CONTAINERS = "main, main section, .projects, .mg-grid, .cv, .cv-col, .intro, .about-top, .about-intro";
  var containers = Array.prototype.slice.call(document.querySelectorAll(CONTAINERS));
  var items = [];
  containers.forEach(function (c) {
    Array.prototype.forEach.call(c.children, function (el) {
      if (el.matches(CONTAINERS) || el.matches("script, style")) return;
      items.push(el);
    });
  });
  // keep page order
  items.sort(function (a, b) { return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });
  items.forEach(function (el) { el.classList.add("rv"); });
  root.classList.add("rv-ready");

  var STEP = 90, MAX = 720;
  var firstScreen = innerHeight;
  var loadIndex = 0;

  function show(el, delay) {
    el.style.setProperty("--rv-delay", delay + "ms");
    el.classList.add("in");
    // clear the delay afterwards so hover effects stay snappy
    setTimeout(function () { el.style.removeProperty("--rv-delay"); }, delay + 900);
  }

  // On load: everything on the first screen, staggered top to bottom
  requestAnimationFrame(function () {
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < firstScreen) show(el, Math.min(loadIndex++ * STEP, MAX));
    });

    // The rest: flow up as they scroll into view
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { show(el, 0); }); return; }
    var batch = 0, batchTimer = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        show(e.target, Math.min(batch++ * STEP, MAX));
        clearTimeout(batchTimer); batchTimer = setTimeout(function () { batch = 0; }, 120);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { if (!el.classList.contains("in")) io.observe(el); });
  });
})();
