/*************************************************
 * TRANSLATIONS (FR / EN)
 *************************************************/
const translations = {
    fr: {
        /* Navigation */
        nav_about:      "À propos",
        nav_education:  "Formation",
        nav_experience: "Experience",

        /* About */
        name:   "MARTIN RECHER",
        job:    "Développeur Jeux Vidéo — C++ / Unreal Engine",
        about_title: "À propos de moi",
        about_p1: "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",
        about_p2: "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",

        /* Formation */
        education_title: "Formation",

        edu_1_title:    "Maîtrise Informatique Cheminement en Jeux Vidéo - DDJV",
        edu_1_date:     "Sept. 2024 — Mai 2025",
        edu_1_location: "Université de Sherbrooke, Longueuil, Canada",
        edu_1_desc:     "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",
    
        edu_2_title:    "Cycle Ingénieur Informatique - Option Intelligence Artificielle",
        edu_2_date:     "Sept. 2022 — Mai 2025",
        edu_2_location: "Polytech Tours, France",
        edu_2_desc:     "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",

        edu_3_title:    "Parcours des Écoles d'Ingénieur Polytech - Option Mathématiques",
        edu_3_date:     "Sept. 2020 — Mai 2022",
        edu_3_location: "Polytech Clermont-Ferrand, France",
        edu_3_desc:     "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",

        /* Expériences */
        experience_title:   "Expériences professionnelles",
        nav_experience:     "Expérience",
    
        exp_1_title: "Gameplay Programmer",
        exp_1_company: "Studio XYZ",
        exp_1_date: "Avril 2023 — Septembre 2023",
        exp_1_location: "Paris, France",
        exp_1_desc: "Développement de fonctionnalités gameplay en C++ et Unreal Engine. Travail sur les systèmes de combat, l’IA et l’optimisation des performances."
    
    },
    en: {
        /* Navigation */
        nav_about:      "About",
        nav_education:  "Education",
        nav_experience: "Experience",

        /* About */
        name:   "MARTIN RECHER",
        job:    "Game Developer — C++ / Unreal Engine",
        about_title: "About Me",
        about_p1: "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",
        about_p2: "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",

        /* Formation */
        education_title: "Education",

        edu_1_title:    "Master in Computer Science - Video Game Development",
        edu_1_date:     "Sept. 2024 — May 2025",
        edu_1_location: "Longueuil, Canada",
        edu_1_desc:     "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",
    
        edu_2_title:    "Software Engineer - Artificial Intelligence Option",
        edu_2_date:     "Sept. 2022 — May 2025",
        edu_2_location: "Tours, France",
        edu_2_desc:     "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",

        edu_3_title:    "Preparatory Engineering School Polytech - Mathematics Option",
        edu_3_date:     "Sept. 2020 — May 2022",
        edu_3_location: "Polytech Clermont-Ferrand, France",
        edu_3_desc:     "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere.",

        /* Expériences */
        experience_title: "Professional Experience",
        nav_experience: "Experience",
    
        exp_1_title: "Gameplay Programmer",
        exp_1_company: "Studio XYZ",
        exp_1_date: "April 2023 — September 2023",
        exp_1_location: "Paris, France",
        exp_1_desc: "Developed gameplay features using C++ and Unreal Engine. Worked on combat systems, AI and performance optimization."
    
    }
};

/*************************************************
 * LANGUAGE SWITCH
 *************************************************/
const langButtons = document.querySelectorAll(".lang-switch button");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
    // Update text content
    translatableElements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active button
    langButtons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    // HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem("lang", lang);
}

/*************************************************
 * FADE-IN ANIMATION ON SCROLL
 *************************************************/
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // perf friendly
            }
        });
    },
    { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));

/*************************************************
 * EVENTS
 *************************************************/
langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

/*************************************************
 * INIT
 *************************************************/
const savedLang = localStorage.getItem("lang") || "fr";
setLanguage(savedLang);

/*************************************************
 * SCROLL SPY - ACTIVE NAV LINK
 *************************************************/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".top-nav a");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });
    },
    {
        rootMargin: "-40% 0px -50% 0px"
    }
);

sections.forEach(section => sectionObserver.observe(section));
