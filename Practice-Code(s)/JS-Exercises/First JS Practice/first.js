function ChangeOnCommand() {
    // Step 1: Define an array of 5 custom paragraphs
    const paragraphs = [
        "At this website, we offer quality content, and customer satisfaction is our utmost priority.",
        "Welcome to our site! We're glad to have you here.",
        "Your satisfaction is our top priority.",
        "Explore our services and find what suits you best.",
        "Stay tuned for exciting updates and features!",
        "Thank you for choosing us — we appreciate your support!"
    ];

    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    document.getElementById("text").innerText = paragraphs[randomIndex];
}

const listItems = document.querySelectorAll("li");

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});