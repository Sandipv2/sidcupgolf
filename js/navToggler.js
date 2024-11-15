export const navToggler = () => {
    const toggler = document.querySelector("nav .nav-toggler");
    const ul = document.querySelector("nav .nav-menu-container ul");
    const headerBtn = document.querySelector("nav .header-buttons");

    let isNavHidden = true;

    toggler.addEventListener("click", () => {
        if (isNavHidden) {
            ul.style.display = "flex";
            headerBtn.style.display = "flex";
            isNavHidden = false;
        } else {
            ul.style.display = "none";
            headerBtn.style.display = "none";
            isNavHidden = true;

        }
    })

}

navToggler();