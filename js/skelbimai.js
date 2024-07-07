

export function renderAutoList(data) {

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <div>
                <img class="auto-img" src="../img/skelbimai/auto/${data[i].number}.png" alt="${data[i].number}">                
                <p>Number: ${data[i].number}</p>                
                <p>Name: ${data[i].name}</p>
                <p>Color: ${data[i].color}</p>
                <p>Mileage: ${data[i].mileage}</p>
                <p>Date: ${data[i].date}</p> 
            </div>     
        `
    }
    return `<div class="auto">${HTML}</div>`
}



export function renderButaiList(data) {

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <div>
                <img class="butai-img" src="../img/skelbimai/butai/${data[i].number}.jpg" alt="${data[i].number}">                
                <p>Location: ${data[i].location}</p>                
                <p>Area: ${data[i].area}</p>
                <p>Year: ${data[i].year}</p>
                <p>Price: ${data[i].price}</p>               
            </div>     
        `
    }
    return `<div class="butai">${HTML}</div>`
}


