document.getElementById('btn').addEventListener("click", () => {
    const pin = document.getElementById('pin').value.trim();

    if (!pin) {
        alert("Please enter a Pincode!");
        return;
    }

    const url = `https://api.postalpincode.in/pincode/${pin}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data[0].Status === "Success" && data[0].PostOffice) {
                document.getElementById('city').innerHTML = data[0].PostOffice[0].Name;
            } else {
                document.getElementById('city').innerHTML = "Invalid Pincode!";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById('city').innerHTML = "Error fetching data!";
        });
});