export default function pointer() {
    const dotPointer = document.querySelector('.pointer-dot');
    const largePointer = document.querySelector('.pointer-large');
    const anchors = document.querySelectorAll("a, .card, .bottom-card");

    document.addEventListener("mousemove", (e) => {
        gsap.to(dotPointer, {
            left: e.x,
            top: e.y,
            display: "block",
            duration: 1,
            ease: "power4.out"
        })

        gsap.to(largePointer, {
            left: e.x,
            top: e.y,
            duration: 2.5,
            ease: "power2.out"
        })
    })



    // ******* Handling pointer scale *******
    anchors.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            gsap.to(dotPointer, {
                width: "4rem",
                height: "4rem",
                border: "2px solid white",
                backgroundColor: "transparent"
            })

        })

        element.addEventListener('mouseleave', () => {
            gsap.to(dotPointer, {
                width: "1.2rem",
                height: "1.2rem",
                border: "none",
                backgroundColor: "#95c11e"
            })

        })
    })
}