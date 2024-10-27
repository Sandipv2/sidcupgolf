export default function pointer() {
    const dotPointer = document.querySelector('.pointer-dot');
    const largePointer = document.querySelector('.pointer-large');

    document.addEventListener("mousemove", (e) => {
        dotPointer.style.left = `${e.clientX}px`;
        dotPointer.style.top = `${e.clientY}px`;
        dotPointer.style.display = "block";

        largePointer.style.left = `${e.clientX}px`;
        largePointer.style.top = `${e.clientY}px`;
    })
}