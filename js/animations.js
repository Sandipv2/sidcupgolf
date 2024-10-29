export default function animations() {
    const bottomCard = document.querySelectorAll(".bottom-card");

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

    gsap.from("#waiting-title", {
        top: 50,
        duration: 2,
        scrollTrigger: {
            trigger: "#waiting-title",
            scrub: 2,
            start: "top 70%",
            end: "top 70%"
        }
    })

    bottomCard.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to("#waiting-title", {
                "-webkit-text-stroke-color": "var(--green)",
            })
        })
        
        card.addEventListener("mouseleave", () => {
            gsap.to("#waiting-title", {
                "-webkit-text-stroke-color": "white",
            })
        })
    })
}