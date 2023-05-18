function submitForm() {
    const birthday = document.getElementById("birthday").value;
    const name = document.getElementById("name_input").value;

    const params = new URLSearchParams();
    params.append("birthday", birthday);
    params.append("name", name);

    const url = `calculate.html?${params.toString()}`;

    window.location.href = url;
}