export default function anim() {
    gsap.from(".hero h1", {
        opacity: 0,
        color:"green",
        duration: 1,
        delay: 0.5,
        y:20,
        scrub:2,
        // stagger:1,

    })
}