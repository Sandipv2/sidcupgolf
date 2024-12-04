export default function animations() {
    const bottomCardContainer = document.querySelector(".bottom-card-container");

    gsap.to("nav", {
        backgroundColor: "black",
        height: "6rem",
        scrollTrigger: {
            trigger: "nav",
            start: "top -11%",
            scrub: 1
        }
    })

    gsap.to("main", {
        backgroundColor: "black",
        scrollTrigger: {
            trigger: "main",
            start: "top -25%",
            end: "top -40%",
            scrub: 1
        }
    })

    gsap.from("#left-quote", {
        y: -100,
        x: -100,
        duration: 1,
        scrollTrigger: {
            trigger: "#left-quote",
            scrub: 2,
            start: "top 50%",
            ease: "power3.out"
        }
    })

    gsap.from("#right-quote", {
        y: 100,
        x: 100,
        duration: 1,
        scrollTrigger: {
            trigger: "#left-quote",
            scrub: 2,
            ease: "power3.out"
        }
    })

    gsap.to("#waiting-title", {
        top: 2,
        duration: 2,
        scrollTrigger: {
            trigger: "#waiting-title",
            scrub: 2,
            start: "top 70%",
            end: "top 70%"
        }
    })

    bottomCardContainer.addEventListener("mouseleave", () => {
        gsap.to("#waiting-title", {
            "-webkit-text-stroke-color": "white",
        })
    })
    bottomCardContainer.addEventListener("mouseenter", () => {
        gsap.to("#waiting-title", {
            "-webkit-text-stroke-color": "var(--green)",
        })
    })
}

animations();