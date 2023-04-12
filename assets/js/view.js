
// Array to store every item of the localStorage :
let localStorage_array = JSON.parse(localStorage.getItem("crud")) || [];

// Declaring the input field variables EDIT form 
let myInput = document.getElementById("myInput");
let modal = document.getElementById("modalUpdate");
let pid_update = document.querySelector(`#modalUpdate #pid`);
let pname_update = document.querySelector(`#modalUpdate #pname`);
let pprice_update = document.querySelector(`#modalUpdate #pprice`);
let uploadPreview_update = document.querySelector("#modalUpdate #uploadPreview-update");
let pimage_update = document.querySelector(`#modalUpdate #pimage_update`);
let pdesc_update = document.querySelector(`#modalUpdate #pdesc`);

//Data in the LocalStorage (LS)

const setDataToLocalStorage = (localStorage_array) => {
    //storing data in the LS
    localStorage.setItem("crud", JSON.stringify(localStorage_array));
};

const getDataFromLocalStorage = () => {
    //getting data from the LS
    const localStorage_getData = JSON.parse(localStorage.getItem("crud")) || [];
    return localStorage_getData;
};

// Function to preview the image in the form EDIT section
function UpdatePreviewImage() {
    let imgReader = new FileReader();
    imgReader.readAsDataURL(document.getElementById("pimage_update").files[0]);
    imgReader.onload = function (imgResult) {
        uploadPreview_update.src = imgResult.target.result;
        return uploadPreview_update.src;
    };
};

// To show all the products in view page
const insertProductData = (localStorage_getData) => {

    let product_items = document.getElementById("product-items");
    product_items.innerHTML = "";

    if (localStorage_getData.length == 0) {
        product_items.innerHTML = `<img class="nothingToSeeImg mx-auto" src="../images/no-products.avif" alt="No image">`
        document.getElementById("sorting-container").classList.add("d-none")
    }
    else {
        document.getElementById("sorting-container").classList.remove("d-none")
        localStorage_getData.forEach((element) => {
            let dynamicProduct = document.createElement("div");

            if (element.pdesc == "") {
                element.pdesc = "There is no description."
            }
            dynamicProduct.innerHTML += `<div class="col" id="productData">
            <div class="card text-center">
            <div class="card-body">
            <div class="card-icons d-flex justify-content-end">
            <i class="fa-solid fa-trash mx-2" style="color:#d9534f" data-custom-id=${element.pid} onclick="deleteProduct('${element.pid}')"></i>
            <i class="fa-regular fa-pen-to-square" style="color:#5cb85c" data-custom-id=${element.pid} onclick="updateProduct('${element.pid}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </div>
            <img class="card-img-top" src="${element.pimage}" style="width:130px; height:150px; object-fit:contain;" alt="No image">
            <h4 class="card-title" id="pid"><b>ID :</b> ${element.pid}</h4>
            <h6 class="card-title" id="pname"><b>Name :</b> ${element.pname}</h6> 
            <h6 class="card-text" id="pprice"><b>Price :</b> ${element.pprice}</h6>
            <h6 class="card-text" id="pdesc"><b>Description :</b><br> ${element.pdesc}</h6>
            </div>
            </div>
            </div>`;
            product_items.append(dynamicProduct);
        });
    }
    localStorage.setItem("crud", JSON.stringify(localStorage_array));
};


// To show the product details for the first time
insertProductData(localStorage_array);


// Function to GET attribute for Filter (Search) function
myInput.addEventListener("input", (e) => {
    const select_container = document.getElementById("select-container");
    const filterAttribute =
        select_container.options[select_container.selectedIndex].getAttribute(
            "data-custom"
        );
    const temp = searchByAttribute(e.target.value, filterAttribute);
    insertProductData(temp);
});

// Search function on every search input
const searchByAttribute = (searchQuery, filterAttribute) => {
    return localStorage_array.filter((product) => {
        return product[`${filterAttribute}`].toLowerCase().includes(searchQuery);
    });
};

// Function to GET attribute for Sort function
const sort = () => {
    const sort_container = document.getElementById("sort-container");
    const sortAttribute =
        sort_container.options[sort_container.selectedIndex].getAttribute(
            "data-custom"
        );
    sortByAttr(sortAttribute);
};

// Sort Function 
const sortByAttr = (sortByAttribute) => {

    localStorage_array.sort((product1, product2) => {
        if (sortByAttribute == "pname") {
            let productA = product1[sortByAttribute].toLowerCase();
            let productB = product2[sortByAttribute].toLowerCase();
            if (productA > productB) {
                return 1;
            }
            if (productA < productB) {
                return -1;
            }
            return 0;
        }else {
            return product1[sortByAttribute] - product2[sortByAttribute];
        }
    });
    insertProductData(localStorage_array);
};

// To delete the product
const deleteProduct = async (id) => {
    if (await swal("", "Are you sure you want to delete this product!")) {
        localStorage_array = localStorage_array.filter((element) => {
            return element.pid != id;
        });
        localStorage.setItem("crud", JSON.stringify(localStorage_array));
        insertProductData(localStorage_array);
        swal("", "Product deleted!", "success");
    }
    else {
        return 0;
    }
};

// To update the product 
const updateProduct = (id) => {
    const productToBeUpdate = localStorage_array.find((product) => {
        if (product.pid == id) {
            return product;
        }
    });
    const index = localStorage_array.map((product) => product.pid).indexOf(id);
    sessionStorage.setItem("index", JSON.stringify(index));
    editValue(productToBeUpdate);
};

// To render the value in the edit modal section
const editValue = (productToBeUpdate) => {
    (pid_update.value = productToBeUpdate.pid),
        (pname_update.value = productToBeUpdate.pname),
        (pprice_update.value = productToBeUpdate.pprice),
        (pdesc_update.value = productToBeUpdate.pdesc);
    (uploadPreview_update.src = productToBeUpdate.pimage);
    (pimage_update.value = productToBeUpdate.pimage);
};

// To change the data which is enetered in the localStorage 
const edit = () => {
    const index = JSON.parse(sessionStorage.getItem("index"));
    const tempData = {
        pid: pid_update.value,
        pname: pname_update.value,
        pprice: pprice_update.value,
        pimage: uploadPreview_update.src,
        pdesc: pdesc_update.value,
    };
    localStorage_array.splice(index, 1, tempData);
    setDataToLocalStorage(localStorage_array);
    const localStorage_getData = getDataFromLocalStorage(localStorage_array);
    insertProductData(localStorage_getData);
    swal("", "Product edited!", "success");
};