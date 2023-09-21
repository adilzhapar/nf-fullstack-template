let contentElement = document.getElementById('content');

document.getElementById('characters').addEventListener('click', function () {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(function (response) {

            console.log(response);
            const apiData = response.data.results;
            const apiDataElement = document.getElementById('api-data');

            apiData.forEach(function (item) {
                const div = document.createElement('div');
                div.className = 'item-card';
                div.innerHTML = `
                <img src=${item.image}></img>
                <strong>${item.name}</strong>
                `

                apiDataElement.appendChild(div);
            });

        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });

})


