

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector(".site-header");

    const sections = document.querySelectorAll("section[id]");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navMenu.classList.toggle("open");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });

        document.addEventListener("click", (event) => {

            if (
                navMenu.classList.contains("open") &&
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }

        });

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                navMenu.classList.contains("open")
            ) {

                navMenu.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "menu-open"
                );

                menuToggle.focus();

            }

        });

    }

    const handleHeader = () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        handleHeader
    );

    handleHeader();

    const updateActiveLink = () => {

        let currentSection = "home";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });
        navLinks.forEach((link) => {

            const linkSection =
                link.getAttribute("href").substring(1);

            link.classList.toggle(
                "active",
                linkSection === currentSection
            );

        });

    };
    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();
    const animatedElements =
        document.querySelectorAll(
            ".section-content, .about-facts, .skill-card, .contact-item"
        );


    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach((element) => {

        observer.observe(element);

    });
 const skillCards =
        document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 70}ms`;

    });
    const contactItems =
        document.querySelectorAll(".contact-item");

    contactItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 100}ms`;

    });

});