export default function pointer() {
    const dotPointer = document.querySelector('.pointer-dot');
    const largePointer = document.querySelector('.pointer-large');
    const anchors = document.querySelectorAll("a, .card, .bottom-card");

    document.addEventListener("mousemove", (e) => {
        dotPointer.style.left = `${e.clientX}px`;
        dotPointer.style.top = `${e.clientY}px`;
        dotPointer.style.display = "block";

        largePointer.style.left = `${e.clientX}px`;
        largePointer.style.top = `${e.clientY}px`;
    })

    
    
    // ******* Handling pointer scale *******
    anchors.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            dotPointer.style.width = "4rem";
            dotPointer.style.height = "4rem";
            dotPointer.style.border = '2px solid white';
            dotPointer.style.backgroundColor = 'transparent';
            
        })
        
        element.addEventListener('mouseleave', () => {
            dotPointer.style.width = "1.2rem";
            dotPointer.style.height = "1.2rem";
            dotPointer.style.border = 'none';
            dotPointer.style.backgroundColor = '#95c11e';

        })
    })
}