let localStorage_array = JSON.parse(localStorage.getItem("crud")) || [];

//Data in the LocalStorage (LS)

const setDataToLocalStorage = (localStorage_array) => {
  console.log(localStorage_array, "view");
  //storing data in the LS
  localStorage.setItem("crud", JSON.stringify(localStorage_array));
};

const getDataFromLocalStorage = () => {
  //getting data from the LS
  const localStorage_getData = JSON.parse(localStorage.getItem("crud"));
  return localStorage_getData;
};

// To show all the products in view page
const insertProductData = (localStorage_getData) => {
  let product_items = document.getElementById("product-items");
  product_items.innerHTML = "";

  localStorage_getData.forEach((element) => {
    let dynamicProduct = document.createElement("div");
    
    if(element.pdesc == ""){
        element.pdesc = "<b>There is no description.</b>"
    }

    dynamicProduct.innerHTML += `<div class="col" id="productData">
        <div class="card text-center">
        <div class="card-body">
        <img class="card-img-top" src="${element.pimage}" style="width: 150px; height: 150px;" alt="No image">
        <h4 class="card-title" id="pid" alt="hhhhhhhhh">ID : ${element.pid}</h4>
        <h6 class="card-title" id="pname">Name : ${element.pname}</h6>
        <h6 class="card-text" id="pprice">Price : ${element.pprice}</h6>
        <p class="card-text" id="pdesc">Description : ${element.pdesc}</p>
        </div>
        </div>
        </div>`;

    product_items.append(dynamicProduct);
  });
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
  localStorage_array.sort((a, b) => {
    if (sortByAttribute == "pname") {
      let fa = a.pname.toLowerCase();
      let fb = b.pname.toLowerCase();
      if (fa > fb) {
        return 1;
      }
      if (fa < fb) {
        return -1;
      }
      return 0;
    } else if (sortByAttribute == "pprice") {
      return a.pprice - b.pprice;
      // return a[`${sortByAttribute}`] - b[`${sortByAttribute}`]
    } else {
      return a.pid - b.pid;
    }
  });
  insertProductData(localStorage_array);
};
