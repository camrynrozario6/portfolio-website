/* ============================================================
   Shared navigation — edit links here and every page updates.
   Each page has <aside class="site-nav" data-nav="main|nook">.
   ============================================================ */
(function () {
  var FISH =
    '<svg viewBox="0 0 54 32" aria-hidden="true"><path d="M36.4376 26.899C25.7438 37.0787 13.5442 33.2613 8.78117 30.0802L1.40613 20.5367L0.94519 14.6289L5.55459 7.35766L13.3906 2.35871L19.8437 0.995361L27.2188 2.35871L37.8204 9.62991L44.7345 6.44876H49.8048L53.0314 10.0844L50.7267 13.72L48.8829 16.9011V19.6278L51.6486 27.8079L49.8048 30.989H46.1173L36.4376 26.899Z"/><circle cx="14" cy="14" r="2.6" fill="#f5f0e6"/></svg>';

  // ---- Edit these ----
  var EMAIL = "camrynrozario06@gmail.com";
  var LINKEDIN = "";   // paste your LinkedIn URL here
  var RESUME = "";     // paste a link to your resume PDF here (e.g. "assets/resume.pdf")

  var main = [
    { label: "Product Design", links: [
      { text: "Nook", href: "nook.html" },
      { text: "Placeholder", href: "" },
      { text: "Placeholder", href: "" },
      { text: "Placeholder", href: "" }
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

  var page = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";

  function link(l) {
    if (!l.href) return '<span' + (l.plain ? "" : ' class="muted"') + ">" + l.text + "</span>";
    var target = l.href.replace(/\.html$/, "");
    var active = target === page || (page === "index" && target === "index") ? ' class="active" aria-current="page"' : "";
    var ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
    return '<a href="' + l.href + '"' + active + ext + ">" + l.text + "</a>";
  }

  function group(s) {
    return '<div class="nav-group"><span class="nav-label">' + s.label + "</span>" + s.links.map(link).join("") + "</div>";
  }

  document.querySelectorAll(".site-nav").forEach(function (el) {
    var sections = el.dataset.nav === "nook" ? nook : main;
    var top =
      '<div class="nav-section nav-top">' +
        '<a class="logo" href="index.html" aria-label="Home">' + FISH + "</a>" +
        link({ text: "Home", href: "index.html" }) +
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
  bar.innerHTML = '<a class="logo" href="index.html" aria-label="Home">' + FISH + '</a><button class="menu-btn" aria-expanded="false" aria-label="Open menu"><span class="bars" aria-hidden="true"><span></span><span></span></span></button>';
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
