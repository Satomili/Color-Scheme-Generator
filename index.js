const colorInput = document.getElementById("color-input")
const themeInput = document.getElementById("theme-input")
const inputForm = document.getElementById("input-form")
let colorsArray = []

inputForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const color = colorInput.value.slice(1)
    const theme = themeInput.value.toLowerCase()
    const apiData = []
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${theme}&count=5`)
        .then(res => res.json())
        .then(data => {
            apiData.push(data)
            colorsArray = apiData[0].colors
            renderColor()
        })
})

function renderColor() {
    let html = ""
    html = colorsArray.map(function(color) {
        const value = color.hex.value
        const clean = color.hex.clean
        
        return `
            <div id="color-container">
                <div id="color-clean" style="background-color: ${value};"></div>
                <p id="color-value">${value}</p>
            </div>
        `
    }).join("")
    
    document.getElementById("color-palette").innerHTML = html
}



