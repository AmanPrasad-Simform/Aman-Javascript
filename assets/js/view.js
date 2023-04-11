let localStorage_array = JSON.parse(localStorage.getItem("crud")) || [];
// if(localStorage_array.length == 0){
//      localStorage_array = "nothing"
// }
//Data in the LocalStorage (LS)

const setDataToLocalStorage = (localStorage_array) => {
  console.log(localStorage_array, "view");
  //storing data in the LS
  localStorage.setItem("crud", JSON.stringify(localStorage_array));
};

const getDataFromLocalStorage = () => {
  //getting data from the LS
  const localStorage_getData = JSON.parse(localStorage.getItem("crud")) || [];
  return localStorage_getData;
};

// To show all the products in view page
const insertProductData = (localStorage_getData) => {

    let product_items = document.getElementById("product-items");
    product_items.innerHTML = "";

    if(localStorage_getData.length == 0){
console.log("here") 
       product_items.innerHTML = `<img class="nothingToSeeImg mx-auto" src="../nothingtosee.gif"  alt="No image">` 
    }else{
console.log(localStorage_array)
        
        
        localStorage_getData.forEach((element) => {
            let dynamicProduct = document.createElement("div");
            
            if(element.pdesc == ""){
                element.pdesc = "<b>There is no description.</b>"
            }
            
            dynamicProduct.innerHTML += `<div class="col" id="productData">
            <div class="card text-center">
            <div class="card-body" style="background-color: ;">
            <img class="card-img-top" src="${element.pimage}" style="width:130px; height:150px; margin-bottom:10px; object-fit:contain" alt="No image">
            <h4 class="card-title" id="pid">ID : ${element.pid}</h4>
            <h6 class="card-title" id="pname">Name : ${element.pname}</h6>
            <h6 class="card-text" id="pprice">Price : ${element.pprice}</h6>
            <h6 class="card-text" id="pdesc">Description :<br> ${element.pdesc}</h6>
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


// Filter function on every search input
const myInput = document.getElementById("myInput");
myInput.addEventListener("input", (e) => {
  const select_container = document.getElementById("select-container");
  const filterAttribute =
    select_container.options[select_container.selectedIndex].getAttribute(
      "data-custom"
    );
  const temp = searchByAttribute(e.target.value, filterAttribute);
  insertProductData(temp);
});

// Search result on specified attribute
const searchByAttribute = (searchQuery, filterAttribute) => {
  return localStorage_array.filter((product) => {
    return product[`${filterAttribute}`].toLowerCase().includes(searchQuery);
  });
};

// Function to get attribute for Sort function
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
      let productA = product1.pname.toLowerCase();
      let productB = product2.pname.toLowerCase();
      if (productA > productB) {
        return 1;
      }
      if (productA < productB) {
        return -1;
      }
      return 0;
    } else if (sortByAttribute == "pprice") {
      return product1.pprice - product2.pprice;
      // return a[`${sortByAttribute}`] - b[`${sortByAttribute}`]
    } else {
      return product1.pid - product2.pid;
    }
  });
  insertProductData(localStorage_array);
};
