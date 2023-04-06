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

    console.log("on submit")
    let dataEntered = retrieveData();   //data_object is getting stored

    localStorage_array.push(dataEntered)    // pushing all objects in an array

    setDataToLocalStorage(localStorage_array)   // We are setting the array data in the localStorage

    let localStorage_getData = getDataFromLocalStorage(localStorage_array)  // We are getting the data from the localStorage

    insertProductData(localStorage_getData) // Calling the insert Product function to add the products in the DOM
    
    reset();
}

const edit = () => {
    // let newData = editValue()
    
    let tempData = {
        pid: pid_update.value,
        pname: pname_update.value,
        pprice: pprice_update.value,
        pimage: pimage_update.value,
        pdesc: pdesc_update.value
    }

    localStorage_array.push(tempData)
    const localID = pid
    console.log(localID,"LLOOOO")
    localStorage_array = localStorage_array.filter((element)=>{
        console.log(element,"elelellelele")
        return element.pid!=localID
    })
    setDataToLocalStorage(localStorage_array)
    let localStorage_getData = getDataFromLocalStorage(localStorage_array)
    insertProductData(localStorage_getData)
}

const reset = () => {
    console.log("im called")
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
    let ls_getData = JSON.parse(localStorage.getItem("crud"))
    console.log(ls_getData, "ls_getData")
    return ls_getData
}


const insertProductData = (localStorage_getData) => {

    let product_items = document.getElementById("product-items")
    product_items.innerHTML = ""

    localStorage_getData.forEach(element =>  {

        if(element.pid == ""){
            element.pid = uniqueID;
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
        <button type="button" class="btn btn-success" data-custom-id=${element.pid} onclick="updateProduct(this)" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
        <button type="button" class="btn btn-danger" data-custom-id=${element.pid} onclick="deleteProduct(this)">Delete</button>
        </div>
        </div>
        </div>`
        
        product_items.append(dynamicProduct);
    })
    localStorage.setItem("crud",JSON.stringify(localStorage_array))
}
insertProductData(localStorage_array)

const deleteProduct = (e) => {

    const pid = e.getAttribute("data-custom-id")
    console.log(pid,"ppp")
    localStorage_array = localStorage_array.filter((element)=>{
        return element.pid!=pid
    })
    console.log(localStorage_array,"lllll")
    localStorage.setItem("crud",JSON.stringify(localStorage_array))
    insertProductData(localStorage_array)
}

const updateProduct = (e) => {
    const pid = e.getAttribute("data-custom-id") 
    console.log(pid,"lklkkkkkkkk")
    const dataToBeUpdate = localStorage_array.filter(element=>{
        if(element.pid == pid){
            return element
        }
    })
    editValue(dataToBeUpdate)
    return dataToBeUpdate[0]
}

const editValue = (dataToBeUpdate)=> {

    pdesc_update.value = "ooooooo",
    pid_update.value = "ppppppppp",
    pname_update.value = 'pppppp',
    pprice_update.value = "ppppppppp"
    // pimage_update.value = "ppp"
    
    let data_object1 = {
        pid: pid_update.value,
        pname: pname_update.value,
        pprice: pprice_update.value,
        pimage: pimage_update.value,
        pdesc: pdesc_update.value
    }
    return data_object1
}
