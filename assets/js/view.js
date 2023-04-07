let localStorage_array = JSON.parse(localStorage.getItem("crud")) || []

//Data in the LocalStorage (LS)

const setDataToLocalStorage = (localStorage_array) => {
    console.log(localStorage_array,"view")
    //storing data in the LS
    localStorage.setItem("crud", JSON.stringify(localStorage_array))
}

const getDataFromLocalStorage = () => {

    //getting data from the LS
    const localStorage_getData = JSON.parse(localStorage.getItem("crud"))
    return localStorage_getData
}


const insertProductData = (localStorage_getData) => {

    let product_items = document.getElementById("product-items")
    product_items.innerHTML = ""

    localStorage_getData.forEach(element => {

        let dynamicProduct = document.createElement("div");

        dynamicProduct.innerHTML += `<div class="col" id="productData">
        <div class="card">
        <img class="card-img-top" src="${element.pimage}" alt="Card image cap">
        <div class="card-body">
        <h6 class="card-title" id="pid" alt="hhhhhhhhh">${element.pid}</h6>
        <h4 class="card-title" id="pname">${element.pname}</h4>
        <p class="card-text" id="pdesc">${element.pdesc}</p>
        <a href="#" class="btn btn-primary" id="pprice">${element.pprice}</a>
        
        </div>
        </div>
        </div>`

        product_items.append(dynamicProduct);
    })
    localStorage.setItem("crud", JSON.stringify(localStorage_array))
}
// To show the product details for the first time
insertProductData(localStorage_array)


const searchByAttribute = (searchQuery,filterAttribute) => {
    return localStorage_array.filter(product=>{
            return product[`${filterAttribute}`].includes(searchQuery);
        })
}

const myInput = document.getElementById("myInput")
myInput.addEventListener("input",(e)=>{
    const select_container = document.getElementById("select-container")
    console.log(select_container,"iiiiii")
    const filterAttribute = select_container.options[select_container.selectedIndex].getAttribute("data-custom")
    console.log(filterAttribute,"filterAttribute")
    const temp = searchByAttribute(e.target.value,filterAttribute)
    insertProductData(temp);
})

    const sort =() =>{
        const sort_container = document.getElementById("sort-container")
        console.log(sort_container,"iiiiii")
        const sortAttribute = sort_container.options[sort_container.selectedIndex].getAttribute("data-custom")
        console.log(sortAttribute,"sortAttribute")
        const temp = sortByAttr(sortAttribute)
        insertProductData(temp);
    }

const sortByAttr = (sortByAttribute) => {
localStorage_array.sort((a,b)=>{
    console.log(a[`${sortByAttribute}`] - b[`${sortByAttribute}`],"sorttttt")
        return a[`${sortByAttribute}`] - b[`${sortByAttribute}`]
    })
    insertProductData(localStorage_array);
}
