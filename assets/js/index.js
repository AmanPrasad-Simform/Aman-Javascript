const uniqueID = () => {
  return Date.now().toString().slice(5);
}
let localStorage_array = JSON.parse(localStorage.getItem("crud")) || [];
// Declaring the input field variables MAIN form
let pid = document.querySelector("#input-fields #pid");
let pname = document.getElementById("pname");
let pprice = document.getElementById("pprice");
let pimage = document.getElementById("pimage");
let uploadPreview = document.getElementById("uploadPreview");
let pdesc = document.getElementById("pdesc");

// Declaring the input field variables EDIT form 
let modal = document.getElementById("modalUpdate");
let pid_update = document.querySelector(`#modalUpdate #pid`);
let pname_update = document.querySelector(`#modalUpdate #pname`);
let pprice_update = document.querySelector(`#modalUpdate #pprice`);
let uploadPreview_update = document.querySelector("#modalUpdate #uploadPreview-update");
let pimage_update = document.querySelector(`#modalUpdate #pimage_update`);
let pdesc_update = document.querySelector(`#modalUpdate #pdesc`);

// Execution on submit click
const submit = () => {
  const dataEntered = retrieveData(); //data_object is getting stored

  localStorage_array.push(dataEntered); // pushing all objects in an array

  setDataToLocalStorage(localStorage_array); // We are setting the array data in the localStorage

  let localStorage_getData = getDataFromLocalStorage(); // We are getting the data from the localStorage

  insertProductData(localStorage_getData); // Calling the insert Product function to add the products in the DOM

  reset();
};

// function to reset the input fields
const reset = () => {
  pname.value = "";
  pprice.value = "";
  pimage.value = "";
  uploadPreview.src = "../no_img.jpg";
  pdesc.value = "";
};

//Creating :

const retrieveData = () => {

  // storing all the values
  let data_object = {
    pid: uniqueID(),
    pname: pname.value,
    pprice: pprice.value,
    pimage: uploadPreview.src,
    pdesc: pdesc.value,
  };
  return data_object;
};

//Data in the LocalStorage (LS)

const setDataToLocalStorage = (localStorage_array) => {
  //storing data in the LS
  localStorage.setItem("crud", JSON.stringify(localStorage_array));
};

const getDataFromLocalStorage = () => {
  //getting data from the LS
  const localStorage_getData = JSON.parse(localStorage.getItem("crud"));
  return localStorage_getData;
};

// Function to preview the image in the form filling section
function PreviewImage(){
    let imgReader = new FileReader();
     imgReader.readAsDataURL(document.getElementById("pimage").files[0]); 
     imgReader.onload = function (imgResult) { 
    uploadPreview.src = imgResult.target.result; 
   return uploadPreview.src ;
};
};

// Function to preview the image in the form EDIT section
function UpdatePreviewImage(){
    let imgReader = new FileReader();
     imgReader.readAsDataURL(document.getElementById("pimage_update").files[0]); 
     imgReader.onload = function (imgResult) { 
        uploadPreview_update.src = imgResult.target.result; 
        return uploadPreview_update.src ;
};
};

// This function will insert Products in the view area
const insertProductData = (localStorage_getData) => {
  let product_items = document.getElementById("product-items");
  product_items.innerHTML = "";

  localStorage_getData.forEach((element) => {
    let dynamicProduct = document.createElement("div");

    if(element.pdesc == ""){
        element.pdesc = "<b>There is no description.</b>"
    }

    dynamicProduct.innerHTML += `<div class="col card-column" id="productData">
        <div class="card text-center">
        <div class="card-body ">
        <img class="card-img-top" src="${element.pimage}" style="width: 150px; height: 150px;;" alt="Product Image">
        <h4 class="card-title" id="pid" alt="hhhhhhhhh">ID : ${element.pid}</h4>
        <h6 class="card-title" id="pname">Name : ${element.pname}</h6>
        <h6 class="card-text" id="pprice">Price : ₹ ${element.pprice}</h6>
        <h6 class="card-text truncate"  id="pdesc">Description : <br>${element.pdesc}</h6>
        <button type="button" id="demo" class="btn btn-success" data-custom-id=${element.pid} onclick="updateProduct('${element.pid}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
        <button type="button" class="btn btn-danger" data-custom-id=${element.pid} onclick="deleteProduct('${element.pid}')">Delete</button>
        </div>
        </div>
        </div>`;

    product_items.append(dynamicProduct);
  });
  localStorage.setItem("crud", JSON.stringify(localStorage_array));
};
// To show the product details for the first time
window.onload = insertProductData(localStorage_array);

const aa = document.getElementById("demo")
aa.addEventListener("click",()=>{
    console.log("text-truncatetext-truncatetext-truncate")
    // e.target.element.classList.add('text-truncate')
})
// To delete the product
const deleteProduct = (id) => {
    if(confirm('Are you sure you want to delete the product??')){
        localStorage_array = localStorage_array.filter((element) => {
            return element.pid != id;
          });
          localStorage.setItem("crud", JSON.stringify(localStorage_array));
          insertProductData(localStorage_array);
    }
    else{
        return 0;
    }
};

// To update the product 
const updateProduct = (id) => {
    console.log(id,"iddddddddddd")
  const productToBeUpdate = localStorage_array.find((product) => {
    if (product.pid == id) {
        console.log(product,"inside")
      return product;
    }
  });
  console.log(productToBeUpdate,"teddiiiiiiiiiiii")
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
    pid:pid_update.value,
    pname: pname_update.value,
    pprice: pprice_update.value,
    pimage: uploadPreview_update.src,
    pdesc: pdesc_update.value,
  };
  console.log(tempData,"temppppdatattaa")
  localStorage_array.splice(index, 1, tempData);
  setDataToLocalStorage(localStorage_array);
  const localStorage_getData = getDataFromLocalStorage(localStorage_array);
  insertProductData(localStorage_getData);
};

const sortById = () => {
    localStorage_array.sort((a,b)=>{
        return a.pid - b.pid;
    })
    insertProductData(localStorage_array);
}
sortById();