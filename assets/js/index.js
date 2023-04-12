
// Function to craete unique ID :
const uniqueID = () => {
    return Date.now().toString().slice(5);
}

// Array to store every item of the localStorage :
let localStorage_array = JSON.parse(localStorage.getItem("crud")) || [];

// Declaring the input field variables MAIN form
let pid = document.querySelector("#input-fields #pid");
let pname = document.getElementById("pname");
let pprice = document.getElementById("pprice");
let pimage = document.getElementById("pimage");
let uploadPreview = document.getElementById("uploadPreview");
let pdesc = document.getElementById("pdesc");
let formField = document.getElementById("form-field")

// Execution on submit click in form 
const submit = async (e) => {
    e.preventDefault();
    const dataEntered = retrieveData();  // data_object is getting stored
    localStorage_array.push(dataEntered);    // pushing all objects in an array   
    setDataToLocalStorage(localStorage_array);   // We are setting the array data in the localStorage
    await swal("", "Product added!", "success");    // animation to show on adding product 
    window.location.href = '/pages/view.html'    // Routing to edit page directly after adding product
};

// When FORM is submitted then call submit function
formField.addEventListener("submit", submit)

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

//Data in the LocalStorage (LS) ::

const setDataToLocalStorage = (localStorage_array) => {
    //storing data in the LS
    localStorage.setItem("crud", JSON.stringify(localStorage_array));
};

// Function to preview the image in the form filling section
function PreviewImage() {
    let imgReader = new FileReader();
    imgReader.readAsDataURL(document.getElementById("pimage").files[0]);
    imgReader.onload = function (imgResult) {
        uploadPreview.src = imgResult.target.result;
    };
};