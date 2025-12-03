// Global JS for NFC contact pages

document.addEventListener("DOMContentLoaded", () => {

    // Example: copy email to clipboard on tap
    const emailLink = document.querySelector("a[href^='mailto:']");
    
    if (emailLink) {
        emailLink.addEventListener("click", (e) => {
            navigator.clipboard.writeText(emailLink.textContent.trim())
                .catch(() => {});
        });
    }

});
