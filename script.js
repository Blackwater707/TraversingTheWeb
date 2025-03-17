function getFile() {
    const fileInput = document.getElementById("fileInput").value;
    const output = document.getElementById("output");

    // Fetch file based on user input
    fetch(fileInput)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("File not found or inaccessible.");
            }
        })
        .then(data => {
            output.textContent = data;
        })
        .catch(error => {
            output.textContent = "Error: " + error.message;
        });
}
