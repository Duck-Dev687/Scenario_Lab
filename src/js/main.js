const inputField = document.querySelector('.input-container input');
const outputDiv = document.querySelector('.output');
const button = document.querySelector("button");

button.addEventListener("click", async () => {
    const inputText = inputField.value;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer gAAAAABm-WvStvnTPmAig7Ohb3lJaPbv7_3KRGxgqW9DkRERRJzd29fHJwNCHllZng6-8yE7nWbjyXadZt1iILJV9THAltR16Dd_skTRBtr3NRv9_js0dZ88BIPGXshyjeR4iGXHx868',
        },
        body: JSON.stringify({
            max_tokens: 2048,
            mode: "python",
            model: "icortex-1",
            n: 1,
            temperature: null,
            text: inputText
        })
    };

    try {
        const response = await fetch('https://api.textcortex.com/v1/codes', options);
        const data = await response.json();
        
        if (data.status === "success") {
            outputDiv.innerText = data.data.outputs[0].text; // Get the generated text
        } else {
            outputDiv.innerText = "Error: " + data.message; // Handle error if needed
        }
    } catch (err) {
        console.error(err);
        outputDiv.innerText = "An error occurred. Please try again.";
    }
});
