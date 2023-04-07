let d = new Date()
const uniqueID = d.getTime()

let localStorage_array = JSON.parse(localStorage.getItem("crud")) || []

let pid = document.querySelector("#input-fields #pid");
let pname = document.getElementById("pname");
let pprice = document.getElementById("pprice");
let pimage = document.getElementById("pimage");
let pdesc = document.getElementById("pdesc");

let modal = document.getElementById("modalUpdate")
let pid_update = document.querySelector(`#modalUpdate #pid`)
let pname_update = document.querySelector(`#modalUpdate #pname`)
let pprice_update = document.querySelector(`#modalUpdate #pprice`)
let pimage_update = document.querySelector(`#modalUpdate #pimage`)
let pdesc_update = document.querySelector(`#modalUpdate #pdesc`)


const submit = () => {

    const dataEntered = retrieveData();   //data_object is getting stored

    localStorage_array.push(dataEntered)    // pushing all objects in an array

    setDataToLocalStorage(localStorage_array)   // We are setting the array data in the localStorage

    let localStorage_getData = getDataFromLocalStorage()  // We are getting the data from the localStorage

    insertProductData(localStorage_getData) // Calling the insert Product function to add the products in the DOM

    reset();
}


const reset = () => {

    pid.value = "";
    pname.value = "";
    pprice.value = "";
    pimage.value = "";
    pdesc.value = "";
}

//Creating:

const retrieveData = () => {

    // storing all the values 
    let data_object = {
        pid: pid.value,
        pname: pname.value,
        pprice: pprice.value,
        pimage: pimage.value,
        pdesc: pdesc.value
    }
    return data_object
}

//Data in the LocalStorage (LS)

const setDataToLocalStorage = (localStorage_array) => {

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
        <button type="button" class="btn btn-success" data-custom-id=${element.pid} onclick="updateProduct('${element.pid}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
        <button type="button" class="btn btn-danger" data-custom-id=${element.pid} onclick="deleteProduct('${element.pid}')">Delete</button>
        </div>
        </div>
        </div>`

        product_items.append(dynamicProduct);
    })
    localStorage.setItem("crud", JSON.stringify(localStorage_array))
}
// To show the product details for the first time
window.onload = insertProductData(localStorage_array)


const deleteProduct = (id) => {
    localStorage_array = localStorage_array.filter((element) => {
        return element.pid != id
    })
    localStorage.setItem("crud", JSON.stringify(localStorage_array))
    insertProductData(localStorage_array)
}

const updateProduct = (id) => {
    const productToBeUpdate = localStorage_array.find(product => {
        if (product.pid == id) {
            return product
        }
    })
    const index = localStorage_array.map(item => item.pid).indexOf(id);
    sessionStorage.setItem("index", JSON.stringify(index))
    editValue(productToBeUpdate)
}

const editValue = (productToBeUpdate) => {
    pid_update.value = productToBeUpdate.pid,
        pname_update.value = productToBeUpdate.pname,
        pprice_update.value = productToBeUpdate.pprice,
        pdesc_update.value = productToBeUpdate.pdesc
}

const edit = () => {
    const index = JSON.parse(sessionStorage.getItem("index"))
    const tempData = {
        pname: pname_update.value,
        pprice: pprice_update.value,
        pimage: pimage_update.value,
        pdesc: pdesc_update.value
    }
    localStorage_array.splice(index, 1, tempData)
    setDataToLocalStorage(localStorage_array)
    const localStorage_getData = getDataFromLocalStorage(localStorage_array)
    insertProductData(localStorage_getData)
};


