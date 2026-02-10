(() => {
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    // Footer year
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // -----------------------------
    // THEME: auto | light | dark
    // -----------------------------
    const THEME_KEY = "agm_theme";
    const html = document.documentElement;
    const themeBtn = $(".theme-toggle");

    function getSystemTheme() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
    }

    function setTheme(theme) {
        // theme: "auto" | "light" | "dark"
        html.setAttribute("data-theme", theme);

        if (!themeBtn) return;
        const effective = theme === "auto" ? getSystemTheme() : theme;

        // aria-pressed true when NOT auto
        themeBtn.setAttribute("aria-pressed", theme === "auto" ? "false" : "true");

        const icon = themeBtn.querySelector("i");
        if (icon) {
            // moon for dark, sun for light
            icon.className = effective === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }

        themeBtn.title =
            theme === "auto" ? "Theme: auto" : theme === "light" ? "Theme: light" : "Theme: dark";
    }

    function loadTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        setTheme(saved || "auto");
    }

    function cycleTheme() {
        const current = html.getAttribute("data-theme") || "auto";
        const next = current === "auto" ? "light" : current === "light" ? "dark" : "auto";
        localStorage.setItem(THEME_KEY, next);
        setTheme(next);
    }

    loadTheme();

    // If OS theme changes while in auto, refresh icon
    if (window.matchMedia) {
        const mq = window.matchMedia("(prefers-color-scheme: light)");
        mq.addEventListener?.("change", () => {
            const mode = html.getAttribute("data-theme") || "auto";
            if (mode === "auto") setTheme("auto");
        });
    }

    if (themeBtn) themeBtn.addEventListener("click", cycleTheme);

    // -----------------------------
    // Mobile nav toggle
    // -----------------------------
    const toggle = $(".menu-toggle");
    const nav = $("#primary-nav");
    if (toggle && nav) {
        const closeNav = () => {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        };

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.addEventListener("click", (e) => {
            const target = e.target;
            if (!target) return;
            const clickedInside = nav.contains(target) || toggle.contains(target);
            if (!clickedInside) closeNav();
        });

        $$("a[href^='#']", nav).forEach((a) =>
            a.addEventListener("click", () => closeNav())
        );

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeNav();
        });
    }

    // -----------------------------
    // Slideshow (About)
    // -----------------------------
    const slides = $$(".slideshow .slide");
    const dots = $$(".slideshow .dot");
    const prevBtn = $(".slideshow [data-slide='prev']");
    const nextBtn = $(".slideshow [data-slide='next']");
    let index = 0;
    let timer = null;

    function setSlide(i) {
        if (!slides.length) return;
        index = (i + slides.length) % slides.length;
        slides.forEach((img, idx) => img.classList.toggle("active", idx === index));
        dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
    }

    function startAuto() {
        if (!slides.length) return;
        stopAuto();
        timer = setInterval(() => setSlide(index + 1), 5000);
    }
    function stopAuto() {
        if (timer) clearInterval(timer);
        timer = null;
    }

    if (slides.length) {
        setSlide(0);
        startAuto();

        if (prevBtn) prevBtn.addEventListener("click", () => (setSlide(index - 1), startAuto()));
        if (nextBtn) nextBtn.addEventListener("click", () => (setSlide(index + 1), startAuto()));

        dots.forEach((d) =>
            d.addEventListener("click", () => {
                const to = Number(d.getAttribute("data-slide-to") || "0");
                setSlide(to);
                startAuto();
            })
        );

        const frame = $(".slideshow-frame");
        if (frame) {
            frame.addEventListener("mouseenter", stopAuto);
            frame.addEventListener("mouseleave", startAuto);
        }
    }

    // -----------------------------
    // Lead form: web response support
    // -----------------------------
    const form = $("#leadForm");
    const toast = $("#toast");
    const responseBox = $("#responseBox");
    const submitBtn = $("#submitBtn");

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 4500);
    }

    function showResponse({ ok, title, message }) {
        if (!responseBox) return;
        responseBox.classList.remove("success", "error");
        responseBox.classList.add("show", ok ? "success" : "error");
        responseBox.innerHTML = `<strong>${title}</strong><div>${message}</div>`;
    }

    function clearResponse() {
        if (!responseBox) return;
        responseBox.classList.remove("show", "success", "error");
        responseBox.innerHTML = "";
    }

    function setError(name, message) {
        const el = $(`[data-error-for="${name}"]`);
        if (el) el.textContent = message || "";
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
    }

    function sanitize(str) {
        return String(str || "").replace(/\s+/g, " ").trim();
    }

    async function postLead(endpoint, payload) {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const contentType = res.headers.get("content-type") || "";
        let data = null;

        if (contentType.includes("application/json")) {
            data = await res.json().catch(() => null);
        } else {
            const text = await res.text().catch(() => "");
            data = text ? { message: text } : null;
        }

        if (!res.ok) {
            const msg = (data && (data.error || data.message)) || `Request failed (${res.status}).`;
            throw new Error(msg);
        }
        return data;
    }

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            clearResponse();

            const name = sanitize($("#name")?.value);
            const phone = sanitize($("#phone")?.value);
            const email = sanitize($("#email")?.value);
            const company = sanitize($("#company")?.value);
            const message = sanitize($("#message")?.value);
            const consent = $("#consent")?.checked;

            // reset errors
            ["name", "phone", "email", "message", "consent"].forEach((k) => setError(k, ""));

            let ok = true;
            if (!name) (setError("name", "Name is required."), (ok = false));
            if (!email) (setError("email", "Email is required."), (ok = false));
            else if (!validateEmail(email)) (setError("email", "Please enter a valid email."), (ok = false));
            if (!message) (setError("message", "Message is required."), (ok = false));
            if (!consent) (setError("consent", "Consent is required."), (ok = false));

            if (!ok) {
                showToast("Please fix the highlighted fields.");
                return;
            }

            const payload = {
                name, phone, email, company, message, consent: !!consent,
                source: "agm-landing",
                ts: new Date().toISOString()
            };

            // Store locally as safety net
            try { localStorage.setItem("agm_last_lead", JSON.stringify(payload)); } catch (_) { }

            // Disable briefly for UX
            if (submitBtn) submitBtn.disabled = true;

            const endpoint = sanitize($("#leadEndpoint")?.value);

            try {
                if (endpoint) {
                    showToast("Sending your request…");
                    const data = await postLead(endpoint, payload);

                    // Interpret server response
                    const title = (data && data.title) || "Request sent";
                    const msg =
                        (data && (data.message || data.detail)) ||
                        "Thanks! We received your message and will contact you shortly.";

                    showResponse({ ok: true, title, message: msg });
                    form.reset();
                } else {
                    // Fallback: mailto
                    showToast("No web endpoint configured. Opening email client…");

                    const subject = encodeURIComponent(`New Lead - AGM Business Solutions (${name})`);
                    const body = encodeURIComponent(
                        [
                            `Name: ${name}`,
                            `Email: ${email}`,
                            `Phone: ${phone || "-"}`,
                            `Company: ${company || "-"}`,
                            "",
                            "Message:",
                            message,
                            "",
                            `Consent: ${consent ? "Yes" : "No"}`,
                        ].join("\n")
                    );

                    // Replace with your destination email
                    window.location.href = `mailto:info@agmbs.com?subject=${subject}&body=${body}`;

                    showResponse({
                        ok: true,
                        title: "Draft ready",
                        message: "Your email client should open with the message pre-filled."
                    });

                    form.reset();
                }
            } catch (err) {
                const msg = err?.message || "Something went wrong. Please try again.";
                showResponse({ ok: false, title: "Submission failed", message: msg });
                showToast("Submission failed. Please review the message.");
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }
})();
