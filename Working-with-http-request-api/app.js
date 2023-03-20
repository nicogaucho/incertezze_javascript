export function giveStyleToData(data) {
    let grid = document.createElement('div')
    grid.classList.add('grid') 
    data.forEach((image) => {
        let div = document.createElement('article')
        div.innerHTML = `
       
            <img src="${image}" alt="">
  
        `
        grid.appendChild(div)
    });   
    document.body.appendChild(grid)
}
