
const uniqueID = () => {
    const date = new Date();
    const uniqueKey = date.getTime()
    return uniqueKey
}

const submit = () => {
    let dataEntered = retrieveData();
    let readData = readingDataFromLS(dataEntered)
    console.log(readData,"ppppp")
    insertData(readData)
}

//Creating:

const retrieveData = () =>{
let pid = document.getElementById("pid").value;
let pname = document.getElementById("pname").value;
let pprice = document.getElementById("pprice").value;
let pimage = document.getElementById("pimage").value;
let pdesc = document.getElementById("pdesc").value;

let data_array = [pid,pname,pprice,pimage,pdesc]
return data_array
}


//Data in the LocalStorage (LS)

const readingDataFromLS = (dataEntered) => {

    //storing data in the LS
    let pidLS = localStorage.setItem("pid",dataEntered[0])
    let pnameLS = localStorage.setItem("pname",dataEntered[1])
    let ppriceLS = localStorage.setItem("pprice",dataEntered[2])
    let pimageLS = localStorage.setItem("pimage",dataEntered[3])
    let pdescLS = localStorage.setItem("pdesc",dataEntered[4])

    //getting data from the LS
    let pid_GLS = localStorage.getItem("pid",pidLS)
    let pname_GLS = localStorage.getItem("pname",pnameLS)
    let pprice_GLS = localStorage.getItem("pprice",ppriceLS)
    let pimage_GLS = localStorage.getItem("pimage",pimageLS)
    let pdesc_GLS = localStorage.getItem("pdesc",pdescLS)

    let getdata_array = [pid_GLS,pname_GLS,pprice_GLS,pimage_GLS,pdesc_GLS]
    return getdata_array
}


const insertData = (readData) =>{
    let row = table.insertRow();
    console.log(readData[0],readData[1],readData[2],readData[4])
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    row.insertCell(4).innerHTML = readData[4];
    row.insertCell(5).innerHTML = `<button onclick=edit(this)>Edit</button><button onclick=delete(this)>Delete</button>`;

};

const edit =(td) =>{
    let row = td.parentElement.parentElement;
    document.getElementById("pid").value = row.cells[0].innerHTML;
    document.getElementById("pname").value = row.cells[1].innerHTML;
    document.getElementById("pprice").value = row.cells[2].innerHTML;
    document.getElementById("pimage").value = row.cells[3].innerHTML;
    document.getElementById("pdesc").value = row.cells[4].innerHTML;
}