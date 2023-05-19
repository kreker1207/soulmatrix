function submitForm() {
    const birthday = document.getElementById("birthday").value;
    const name = document.getElementById("name_input").value;

    const params = new URLSearchParams();
    params.append("birthday", birthday);
    params.append("name", name);

    const url = `calculate.html?${params.toString()}`;

    window.location.href = url;
}
const nameInput = document.getElementById("name_input");

nameInput.addEventListener("input", function() {
    const inputValue = nameInput.value;
    nameInput.style.color = inputValue ? "#d94c17" : ""; // Set the color to #d94c17 if input value is not empty
});