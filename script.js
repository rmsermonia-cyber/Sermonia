// Optional: Simple alert for form submission
document.querySelectorAll("form").forEach(form => {
form.addEventListener("submit", e => {
e.preventDefault();
alert("Form submitted successfully!");
});
});