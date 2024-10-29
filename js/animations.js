export default function animations() {
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
        scrollTrigger : {
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
}