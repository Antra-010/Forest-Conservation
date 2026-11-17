
// Mobile Navigation Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Update the copyright year automatically
document.getElementById("year").textContent =
    new Date().getFullYear();

// Green Pledge Button
const pledgeButton = document.getElementById("pledge-btn");
const pledgeMessage = document.getElementById("pledge-message");
const actionCheckboxes = document.querySelectorAll(
    '.action-list input[type="checkbox"]'
);

pledgeButton.addEventListener("click", function () {
    const completedActions = document.querySelectorAll(
        '.action-list input[type="checkbox"]:checked'
    ).length;

    if (completedActions === 0) {
        pledgeMessage.textContent =
            "Please select at least one action to make your green pledge.";
    } else {
        pledgeMessage.textContent =
            `Thank you for taking the green pledge! ` +
            `You selected ${completedActions} of ${actionCheckboxes.length} ` +
            `conservation actions. Every step counts!`;
    }
});

// Clear the old pledge message when an action changes
actionCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        pledgeMessage.textContent = "";
    });
});
