function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url-input').value


    if(Client.ValidateURL(formURL)){

        const data = { blogURL: formURL };

        fetch('http://localhost:8081/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('results').innerHTML = `Agrement : ${data.agreement} <br> Confidence : ${data.confidence} <br> Irony : ${data.irony}`
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    
}


export { handleSubmit }
