function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url-input').value


    if(Client.ValidateURL(formURL)){

        const url = { blogURL: formURL };

        getData(url).then(data => {
            console.log(data);
            updateResult(data);
        })
    } else{
        alert("Invalid URL !");
    }
}

// Get data from the server.
const getData = (url) => {
    return fetch('http://localhost:8081/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(url),
        })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
        
}

// Update Div result.
const updateResult = (data) => {
    document.getElementById('results').innerHTML = `Agrement : ${data.agreement} <br> Confidence : ${data.confidence} <br> Irony : ${data.irony}`

}




// export { handleSubmit }
module.exports = {
    handleSubmit, 
    getData, 
    updateResult
};

