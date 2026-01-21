fetch("names.json")
        .then(response => response.json)
        .then(value => console.log(value));