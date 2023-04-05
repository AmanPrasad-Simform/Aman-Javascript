let d = new Date()
let uniqueID = d.getTime()

let localStorage_array = JSON.parse(localStorage.getItem("crud")) || []

const submit = () => {

    let dataEntered = retrieveData();         //data_object is getting stored

    localStorage_array.push(dataEntered)                // pushing all objects in an array

    setDataToLocalStorage(localStorage_array)                    // We are setting the array data in the localStorage

    let localStorage_getData = getDataFromLocalStorage(localStorage_array)     // We are getting the data from the localStorage

    insertProductData(localStorage_getData)                // Calling the insert Product function to add the products in the DOM

}

//Creating:

const retrieveData = () => {
    let pid = document.getElementById("pid").value;
    let pname = document.getElementById("pname").value;
    let pprice = document.getElementById("pprice").value;
    let pimage = document.getElementById("pimage").value;
    let pdesc = document.getElementById("pdesc").value;

    // storing all the values 
    let data_object = {
        pid: pid,
        pname: pname,
        pprice: pprice,
        pimage: pimage,
        pdesc: pdesc
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
    let ls_getData = JSON.parse(localStorage.getItem("crud"))
    console.log(ls_getData, "ls_getData")
    return ls_getData
}


const insertProductData = (localStorage_getData) => {

    let product_items = document.getElementById("product-items")
    product_items.innerHTML = ""

    localStorage_getData.forEach(element =>  {

        if(element.pprice == ""){
            element.pprice = 0.01;
        }

        let dynamicProduct = document.createElement("div");

        dynamicProduct.innerHTML += `<div class="col">
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
}

insertProductData(localStorage_array)
