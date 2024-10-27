export default function animations() {
    gsap.to("nav", {
        backgroundColor: "black",
        height: "6rem",
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top -11%",
            scrub: 1
        }
    })

    gsap.to("main", {
        backgroundColor: "black",
        scrollTrigger : {
            trigger: "main",
            scroller: "body",
            start: "top -25%",
            end: "top -40%",
            scrub: 1
        }
    })
}