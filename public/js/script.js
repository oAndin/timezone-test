console.log("Hello World!");

function changeIcon() {
    if(boxIcon.property.name = `chevron-down`) {
        select.innerHTML = `Select timezone <box-icon name='chevron-up'></box-icon>`
    }
}

function listarTimezones () {
    try {
        fetch('http://localhost:3000/timezones')
        .then((response) => response.json())
        .then(timeszones => {
            timeszones.forEach(timeszone => {
                listarTimezones.innerHTML += `
                    <option>${timeszone}</option>
                `                
            });
        })
    } catch (error) {
        alert("Deu ruim");
    }
}
listarTimezones();