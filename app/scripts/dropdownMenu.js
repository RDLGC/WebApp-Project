function displayDropdown() {
    const servicesDropdown = document.querySelector(".services-dropdown");

    if (window.getComputedStyle(servicesDropdown).display === "none") {
        servicesDropdown.classList.add("is-visible-dropdown");
    } else {
        servicesDropdown.classList.remove("is-visible-dropdown");
    }

    // const servicesElement = document.querySelector(".services");

    // if (servicesDropdown.classList.contains("is-visible-dropdown")) {
    //     servicesElement.style.color = "#F7DE75";
    // } else {
    //     servicesElement.style.color = "#000";
    // }
}