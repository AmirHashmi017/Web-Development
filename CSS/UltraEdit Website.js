function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
document.querySelector(".scroll-to-top-btn").addEventListener("click", smoothScrollToTop);