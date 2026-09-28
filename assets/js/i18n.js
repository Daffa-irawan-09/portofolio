/* ==========================================================================
   DAFFA IRAWAN — PORTFOLIO
   i18n.js — lightweight English / Indonesian translation engine
   - Default language: Indonesian ("id")
   - Persists selection in localStorage across pages and refreshes
   - Works on every page via data-i18n / data-i18n-html / data-i18n-attr /
     data-i18n-placeholder attributes
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var DEFAULT_LANG = "id";

  /* ------------------------------------------------------------------
     Translation dictionary
     Each key maps to { id: "...", en: "..." }
     ------------------------------------------------------------------ */
  var dict = {
    /* ---------- shared: nav / footer / common ---------- */
    "nav.home": { id: "Beranda", en: "Home" },
    "nav.about": { id: "Tentang Saya", en: "About Me" },
    "nav.projects": { id: "Proyek", en: "Projects" },
    "nav.contact": { id: "Kontak", en: "Contact" },
    "nav.cta": { id: "Mari Ngobrol", en: "Let's talk" },
    "common.toggleMenu": { id: "Buka menu", en: "Toggle menu" },
    "common.close": { id: "Tutup", en: "Close" },

    "footer.navigate": { id: "Navigasi", en: "Navigate" },
    "footer.studio": { id: "Studio", en: "Studio" },

    /* ---------- index.html ---------- */
    "index.title": { id: "Daffa Irawan — Pengembang Perangkat Lunak", en: "Daffa Irawan — Software Developer" },
    "index.desc": {
      id: "Daffa Irawan adalah pengembang perangkat lunak dan siswa RPL di SMKN 6 Jakarta, bagian dari Index Studio, membangun software web, desktop, dan game.",
      en: "Daffa Irawan is a software developer and RPL student at SMKN 6 Jakarta, part of Index Studio, building web, desktop and game software."
    },
    "index.eyebrow": { id: "Pengembang Perangkat Lunak / Siswa RPL", en: "Software Developer / RPL Student" },
    "index.heroHeadline": { id: "Membangun pengalaman digital melalui kode, desain, dan teknologi.", en: "Building digital experiences through code, design, and technology." },
    "index.heroDesc": {
      id: 'Siswa RPL di <strong>SMKN 6 Jakarta</strong> dan bagian dari <a href="https://indexstudio.my.id" target="_blank" rel="noopener">Index Studio</a> — saya membangun aplikasi web, alat desktop, dan game kecil, serta memperhatikan detail di antaranya.',
      en: 'RPL student at <strong>SMKN 6 Jakarta</strong> and part of <a href="https://indexstudio.my.id" target="_blank" rel="noopener">Index Studio</a> — I build web apps, desktop tools and small games, and care about the details in between.'
    },
    "index.viewProjects": { id: "Lihat Proyek", en: "View Projects" },
    "index.aboutMe": { id: "Tentang Saya", en: "About Me" },
    "index.metaAvailable": { id: "Tersedia untuk kolaborasi", en: "Available for collaboration" },

    "index.introEyebrow": { id: "Perkenalan", en: "Introduction" },
    "index.introText": {
      id: "Saya siswa Rekayasa Perangkat Lunak yang senang mengubah ide menjadi perangkat lunak yang berjalan — mulai dari <strong>antarmuka web</strong> hingga <strong>aplikasi desktop</strong> dan <strong>game kecil</strong>. Di Index Studio, saya bekerja bersama developer lain pada proyek nyata, belajar bagaimana produk yang baik benar-benar dirilis, bukan sekadar dibangun.",
      en: "I'm a Software Engineering student who enjoys turning ideas into working software — from <strong>web interfaces</strong> to <strong>desktop applications</strong> and <strong>small games</strong>. At Index Studio, I work alongside other developers on real projects, learning how good products are actually shipped, not just built."
    },

    "index.skillsEyebrow": { id: "Keahlian Terpilih", en: "Selected Skills" },
    "index.skillsTitle": { id: "Perangkat yang saya gunakan", en: "Tools I build with" },
    "index.skillsNote": { id: "Kumpulan bahasa, framework, dan perangkat yang saya pakai di pengembangan web, desktop, dan game.", en: "A working set of languages, frameworks and tools across web, desktop and game development." },

    "skill.markup": { id: "Markup", en: "Markup" },
    "skill.styling": { id: "Styling", en: "Styling" },
    "skill.language": { id: "Bahasa", en: "Language" },
    "skill.framework": { id: "Framework", en: "Framework" },
    "skill.gameEngine": { id: "Mesin Game", en: "Game Engine" },
    "skill.database": { id: "Basis Data", en: "Database" },
    "skill.desktopUI": { id: "UI Desktop", en: "Desktop UI" },

    "index.focusEyebrow": { id: "Fokus Saat Ini", en: "Current Focus" },
    "index.focusTitle": { id: "Apa yang sedang saya bangun", en: "What I'm building now" },
    "index.focus1Title": { id: "Pengembangan Web", en: "Web Development" },
    "index.focus1Desc": { id: "Mengasah dasar-dasar front-end serta mendalami React dan Laravel untuk proyek full-stack.", en: "Sharpening front-end fundamentals and exploring React and Laravel for full-stack project work." },
    "index.focus2Title": { id: "Aplikasi Desktop", en: "Desktop Applications" },
    "index.focus2Desc": { id: "Membangun alat internal dengan C# dan Guna2, dengan fokus pada antarmuka yang bersih dan mudah digunakan untuk alur kerja nyata.", en: "Building internal tools in C# with Guna2, focused on clean, usable interfaces for real workflows." },
    "index.focus3Title": { id: "Kerja Studio", en: "Studio Work" },
    "index.focus3Desc": { id: "Berkolaborasi dengan tim Index Studio, mengerjakan brief nyata mulai dari perencanaan hingga rilis.", en: "Collaborating with the Index Studio team, taking on real briefs from planning through to delivery." },

    "index.projectsEyebrow": { id: "Proyek Terpilih", en: "Selected Projects" },
    "index.projectsTitle": { id: "Karya Terbaru", en: "Recent work" },
    "index.allProjects": { id: "Semua Proyek", en: "All Projects" },

    "index.ctaEyebrow": { id: "Hubungi Saya", en: "Get In Touch" },
    "index.ctaHeading": { id: "Punya proyek dalam pikiran, atau sekadar ingin ngobrol?", en: "Have a project in mind, or just want to talk shop?" },
    "index.contactMe": { id: "Hubungi Saya", en: "Contact Me" },

    /* ---------- about.html ---------- */
    "about.title": { id: "Tentang — Daffa Irawan", en: "About — Daffa Irawan" },
    "about.desc": {
      id: "Tentang Daffa Irawan — siswa RPL di SMKN 6 Jakarta, bagian dari Index Studio. Pendidikan, keahlian, dan perangkat di bidang web, desktop, dan pengembangan game.",
      en: "About Daffa Irawan — RPL student at SMKN 6 Jakarta, part of Index Studio. Education, skills and tools across web, desktop and game development."
    },
    "about.eyebrow": { id: "Tentang", en: "About" },
    "about.headerTitle": { id: "Profil & latar belakang.", en: "Profile &amp; background." },
    "about.headerSub": { id: "Penjelasan lebih dekat tentang pendidikan saya, studio tempat saya bekerja, dan perangkat yang saya gunakan untuk membangun software.", en: "A closer look at my education, the studio I work with, and the tools I use to build software." },

    "about.aboutMeEyebrow": { id: "Tentang Saya", en: "About Me" },
    "about.lead": { id: "Saya <strong>Daffa Irawan</strong>, siswa Rekayasa Perangkat Lunak yang berbasis di Jakarta.", en: "I'm <strong>Daffa Irawan</strong>, a Software Engineering student based in Jakarta." },
    "about.body1": { id: "Saya belajar Rekayasa Perangkat Lunak (Software Engineering) di SMKN 6 Jakarta, tempat saya mempelajari dasar-dasar membangun software dengan benar — mulai dari perencanaan dan basis data hingga antarmuka dan deployment.", en: "I study Rekayasa Perangkat Lunak (Software Engineering) at SMKN 6 Jakarta, where I learn the fundamentals of building software properly — from planning and databases to interfaces and deployment." },
    "about.body2": { id: "Di luar kelas, saya bagian dari <strong>Index Studio</strong>, tempat saya menerapkan apa yang saya pelajari pada proyek nyata bersama developer lain. Saya senang mengerjakan berbagai jenis software: platform web, alat desktop, dan sesekali prototipe game di Godot.", en: "Outside the classroom, I'm part of <strong>Index Studio</strong>, where I get to apply what I learn on real projects alongside other developers. I enjoy working across different kinds of software: web platforms, desktop tools, and the occasional game prototype in Godot." },
    "about.body3": { id: "Saya peduli menulis kode yang mudah dirawat dan antarmuka yang mudah digunakan — dan saya selalu mencari hal baru untuk dibangun.", en: "I care about writing code that's easy to maintain and interfaces that are easy to use — and I'm always looking for the next thing to build." },

    "about.eduEyebrow": { id: "Pendidikan", en: "Education" },
    "about.eduTitle": { id: "Pendidikan formal", en: "Formal training" },
    "about.labelInstitution": { id: "Institusi", en: "Institution" },
    "about.labelProgram": { id: "Program", en: "Program" },
    "about.labelStatus": { id: "Status", en: "Status" },
    "about.valueStatus": { id: "Sedang menempuh pendidikan", en: "Currently studying" },

    "about.studioTitle": { id: "Tempat saya bekerja", en: "Where I work" },
    "about.studioBody": { id: "Saat ini saya bagian dari <strong>Index Studio</strong>, tim kecil tempat saya berkontribusi sebagai developer pada proyek yang sedang berjalan. Di sinilah saya mendapat pengalaman langsung mengubah brief menjadi software yang dirilis, dengan batasan dan masukan yang nyata.", en: "I'm currently part of <strong>Index Studio</strong>, a small team where I contribute as a developer on ongoing projects. It's where I get hands-on experience turning briefs into shipped software, working with real constraints and real feedback." },
    "about.labelStudio": { id: "Studio", en: "Studio" },
    "about.labelWebsite": { id: "Situs Web", en: "Website" },

    "about.stackEyebrow": { id: "Keahlian & Perangkat", en: "Skills &amp; Tools" },
    "about.stackTitle": { id: "Yang saya gunakan", en: "What I work with" },
    "about.stackNote": { id: "Dikelompokkan berdasarkan area — dari antarmuka front-end hingga aplikasi desktop dan pengembangan game.", en: "Organized by area — from front-end interfaces to desktop applications and game development." },
    "about.catFrontend": { id: "Frontend", en: "Frontend" },
    "about.catBackend": { id: "Backend", en: "Backend" },
    "about.catDesktop": { id: "Desktop", en: "Desktop" },
    "about.catDatabase": { id: "Basis Data", en: "Database" },
    "about.catGameDev": { id: "Pengembangan Game", en: "Game Development" },

    "about.certEyebrow": { id: "Sertifikat", en: "Certificates" },
    "about.certTitle": { id: "Kredensial", en: "Credentials" },
    "about.certNote": { id: "Sertifikat akan ditambahkan di sini seiring diperoleh.", en: "Certificates will be added here as they're earned." },
    "about.cert1Title": { id: "Sertifikat bahasa Inggris", en: "English language certificate" },
    "about.cert2Title": { id: "Sertifikasi Kursus AI oleh Anthropic Academy", en: "AI Course Certification by Anthropic Academy" },
    "about.cert3Title": { id: "Software Developer - Web Developer oleh Timedoor Academy", en: "Software Developer - Web Developer By Timedoor Academy" },
    "about.cert4Title": { id: "pelatihan kewirausahaan dan pemasaran produk", en: "entrepreneurship and product marketing training" },
    "about.cert5Title": { id: "Duta Siswa SMKN 6 Jakarta", en: "Student Ambassador of SMKN 6 Jakarta" },
    "about.cert6Title": { id: "AI Fluency dari Anthropic Academy", en: "AI Fluency of Anthropic Academy" },
    "about.certShow": { id: "Lihat", en: "Show" },

    /* ---------- projects.html ---------- */
    "projects.title": { id: "Proyek — Daffa Irawan", en: "Projects — Daffa Irawan" },
    "projects.desc": {
      id: "Proyek terpilih oleh Daffa Irawan di bidang pengembangan web, desktop, dan game.",
      en: "Selected projects by Daffa Irawan spanning web, desktop and game development."
    },
    "projects.eyebrow": { id: "Proyek", en: "Projects" },
    "projects.headerTitle": { id: "Karya terpilih.", en: "Selected work." },
    "projects.headerSub": { id: "Kombinasi kerja studio, proyek pribadi, dan tugas sekolah di bidang web, desktop, dan pengembangan game. Ganti detail di bawah dengan milik Anda saat ada karya baru.", en: "A mix of studio work, personal builds and school projects across web, desktop and game development. Replace the details below with your own as new work ships." },

    "projects.featuredTag": { id: "Unggulan", en: "Featured" },
    "projects.featuredTitle": { id: "Situs Index Studio", en: "Index Studio Website" },
    "projects.featuredDesc": { id: "Situs studio yang dibangun saat bekerja dengan Index Studio — platform berbasis Laravel yang menampilkan karya dan layanan tim, dengan lapisan konten berbasis MySQL.", en: "Studio site built while working with Index Studio — a Laravel-backed platform showcasing the team's work and services, with a MySQL-driven content layer." },
    "projects.liveSite": { id: "Situs Langsung", en: "Live Site" },
    "projects.source": { id: "Kode Sumber", en: "Source" },

    "projects.card1Title": { id: "Aplikasi Desktop Apotek", en: "Apotek Desktop App" },
    "projects.card1Meta": { id: "2026 — Desktop", en: "2026 — Desktop" },
    "projects.card1Desc": { id: "Alat manajemen Apotek desktop yang dibangun dengan C# dan Guna2, didukung basis data SQL Server untuk data stok dan transaksi. Saya tidak dapat menampilkan proyek ini karena aplikasi Windows Forms di Visual Studio bersifat offline.", en: "A desktop Apotek management tool built in C# with Guna2, backed by a SQL Server database for stock and transaction records. I cannot show this project because the Visual Studio Windows Forms app is an offline application." },

    "projects.card2Title": { id: "Prototipe 2D — Godot", en: "2D Prototype — Godot" },
    "projects.card2Meta": { id: "2025 — Game", en: "2025 — Game" },
    "projects.card2Desc": { id: "Prototipe game 2D kecil yang dibangun di Godot untuk mengeksplorasi logika game, fisika, dan dasar-dasar desain level.", en: "A small 2D game prototype built in Godot to explore game logic, physics and level design fundamentals." },

    "projects.card3Title": { id: "Golden State Warriors Basketball Club", en: "Golden State Warriors Basketball Club" },
    "projects.card3Meta": { id: "2024 — Tugas Sekolah", en: "2024 — School Project" },
    "projects.card3Desc": { id: "Proyek web front-end yang dibuat sebagai bagian dari tugas sekolah di SMKN 6 Jakarta, dengan fokus pada tata letak responsif dan struktur yang rapi.", en: "A front-end web project built as part of coursework at SMKN 6 Jakarta, focused on responsive layout and clean structure." },

    "projects.card4Title": { id: "Eventara", en: "Eventara" },
    "projects.card4Meta": { id: "2026 — Web", en: "2026 — Web" },
    "projects.card4Desc": { id: "Sebuah perusahaan yang mengelola banyak event di Indonesia.", en: "A company for manage events in Indonesia." },

    "projects.ctaEyebrow": { id: "Hubungi Saya", en: "Get In Touch" },
    "projects.ctaHeading": { id: "Tertarik untuk bekerja sama?", en: "Interested in working together?" },

    /* ---------- contact.html ---------- */
    "contact.title": { id: "Kontak — Daffa Irawan", en: "Contact — Daffa Irawan" },
    "contact.desc": {
      id: "Hubungi Daffa Irawan untuk kolaborasi, pertanyaan proyek, atau pertanyaan lainnya.",
      en: "Get in touch with Daffa Irawan for collaboration, project inquiries or questions."
    },
    "contact.eyebrow": { id: "Kontak", en: "Contact" },
    "contact.headerTitle": { id: "Mari membangun sesuatu.", en: "Let's build something." },
    "contact.headerSub": { id: "Punya proyek, peluang, atau sekadar pertanyaan? Kirim pesan dan saya akan segera membalas.", en: "Have a project, an opportunity, or just a question? Send a message and I'll get back to you." },

    "contact.getInTouch": { id: "Hubungi saya", en: "Get in touch" },
    "contact.leftDesc": { id: "Baik itu kolaborasi, kesempatan magang, atau proyek yang ingin didiskusikan — saya terbuka untuk membicarakannya.", en: "Whether it's a collaboration, an internship opportunity, or a project you'd like to discuss — I'm open to hearing about it." },
    "contact.labelEmail": { id: "Email", en: "Email" },
    "contact.labelStudio": { id: "Studio", en: "Studio" },
    "contact.labelGithub": { id: "GitHub", en: "GitHub" },
    "contact.labelLocation": { id: "Lokasi", en: "Location" },

    "contact.formName": { id: "Nama", en: "Name" },
    "contact.formEmail": { id: "Email", en: "Email" },
    "contact.formSubject": { id: "Subjek", en: "Subject" },
    "contact.formMessage": { id: "Pesan", en: "Message" },
    "contact.placeholderName": { id: "Nama Anda", en: "Your name" },
    "contact.placeholderEmail": { id: "anda@contoh.com", en: "you@example.com" },
    "contact.placeholderSubject": { id: "Tentang apa ini?", en: "What is this about?" },
    "contact.placeholderMessage": { id: "Ceritakan tentang proyek Anda...", en: "Tell me about your project..." },
    "contact.sendMessage": { id: "Kirim Pesan", en: "Send Message" },
    "contact.formNote": { id: "Pesan Anda akan dikirim langsung ke email saya.", en: "Your message will be sent directly to my email." },
    "contact.formSuccess": { id: "Terima kasih sudah menghubungi! Saya akan segera membalas.", en: "Thanks for reaching out! I'll get back to you soon." },

    "contact.valRequired": { id: "Kolom ini wajib diisi.", en: "This field is required." },
    "contact.valEmail": { id: "Masukkan alamat email yang valid.", en: "Please enter a valid email address." }
  };

  /* ------------------------------------------------------------------
     Core engine
     ------------------------------------------------------------------ */
  var i18n = {
    getLang: function () {
      try {
        var stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "id" || stored === "en") return stored;
      } catch (e) {}
      return DEFAULT_LANG;
    },

    setLang: function (lang) {
      if (lang !== "id" && lang !== "en") return;
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}
      i18n.apply(lang);
    },

    t: function (key, lang) {
      var entry = dict[key];
      if (!entry) return null;
      return entry[lang] != null ? entry[lang] : entry[DEFAULT_LANG];
    },

    apply: function (lang) {
      document.documentElement.setAttribute("lang", lang);

      // Plain text content
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        var val = i18n.t(key, lang);
        if (val != null) el.textContent = val;
      });

      // Inner HTML (contains inline markup like <strong>/<a>)
      document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        var key = el.getAttribute("data-i18n-html");
        var val = i18n.t(key, lang);
        if (val != null) el.innerHTML = val;
      });

      // Placeholder attribute
      document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        var key = el.getAttribute("data-i18n-placeholder");
        var val = i18n.t(key, lang);
        if (val != null) el.setAttribute("placeholder", val);
      });

      // Arbitrary attribute — format: data-i18n-attr="attrName:key"
      document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
        var parts = el.getAttribute("data-i18n-attr").split(":");
        var attrName = parts[0];
        var key = parts.slice(1).join(":");
        var val = i18n.t(key, lang);
        if (val != null) el.setAttribute(attrName, val);
      });

      // Language switch buttons active state
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
        var btnLang = btn.getAttribute("data-lang");
        if (btnLang === lang) {
          btn.classList.add("is-active");
          btn.setAttribute("aria-pressed", "true");
        } else {
          btn.classList.remove("is-active");
          btn.setAttribute("aria-pressed", "false");
        }
      });

      // Custom validation messages for the contact form (if present)
      i18n.bindValidation(lang);

      // Reveal page now that translations are applied
      document.documentElement.classList.remove("i18n-init");
    },

    bindValidation: function (lang) {
      var form = document.querySelector("#contact-form");
      if (!form) return;
      var requiredMsg = i18n.t("contact.valRequired", lang);
      var emailMsg = i18n.t("contact.valEmail", lang);

      form.querySelectorAll("input, textarea").forEach(function (field) {
        // Remove any previously attached listener by cloning is overkill;
        // instead just (re)assign the handler property so it's idempotent.
        field.oninvalid = function () {
          if (field.validity.valueMissing) {
            field.setCustomValidity(requiredMsg);
          } else if (field.validity.typeMismatch && field.type === "email") {
            field.setCustomValidity(emailMsg);
          } else {
            field.setCustomValidity("");
          }
        };
        field.oninput = function () {
          field.setCustomValidity("");
        };
      });
    },

    initSwitcher: function () {
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var lang = btn.getAttribute("data-lang");
          i18n.setLang(lang);
        });
      });
    }
  };

  // Run immediately — this script is placed at the end of <body>,
  // so the DOM for the current page is already available.
  i18n.apply(i18n.getLang());
  i18n.initSwitcher();

  // Expose for debugging / potential reuse
  window.i18n = i18n;
})();
