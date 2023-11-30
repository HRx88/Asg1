//retrieve form information when submit
document.addEventListener("submit", function (event) {
  //prevent default action of the form from actually submitting
  event.preventDefault();

  //@TODO
  //create objects based on object template and form data
  //
  //INSERT YOUR CODE HERE :)
  let Cpul = document.getElementById("CPU");
  let GPUl = document.getElementById("GPU");
  const Mbl = document.getElementById("MB");
  const Cool = document.getElementById("cooling");
  const ssdl = document.getElementById("SSD");
  const Psul = document.getElementById("Psu");
  const Raml = document.getElementById("Ram");
  const TPs = document.getElementById("tP");

  const totalPriceFromStorage = localStorage.getItem("totalPrice");
  const CPUPriceFromStorage = localStorage.getItem("CPU");
  const GPUlPriceFromStorage = localStorage.getItem("GPU");
  const RamPriceFromStorage = localStorage.getItem("Ram");
  const MBPriceFromStorage = localStorage.getItem("MB");
  const SSDPriceFromStorage = localStorage.getItem("SSD");
  const CoolerPriceFromStorage = localStorage.getItem("cooling");
  const PsuPriceFromStorage = localStorage.getItem("Psu");
  //CPU
  if (CPUPriceFromStorage == 998.0) {
    Cpul.textContent = "Intel i9 1300k $" + CPUPriceFromStorage;
  } else if (CPUPriceFromStorage == 858.0) {
    Cpul.textContent = "Intel i9 1300kf $" + CPUPriceFromStorage;
  } else {
    Cpul.textContent = "Intel i7 1300k $" + CPUPriceFromStorage;
  }
  //GPU
  if (GPUlPriceFromStorage == 1999) {
    GPUl.textContent = "RTX 3090 TI $" + GPUlPriceFromStorage;
  } else if (GPUlPriceFromStorage == 1733) {
    GPUl.textContent = "RTX 3090  $" + GPUlPriceFromStorage;
  } else {
    GPUl.textContent = "RTX 3080 IT $" + GPUlPriceFromStorage;
  }

  //Mb
  if (MBPriceFromStorage == 335.0) {
    Mbl.textContent = "B660I AORUS $" + MBPriceFromStorage;
  } else if (MBPriceFromStorage == 847) {
    Mbl.textContent = "ASUS ROG Maximus Z790 Hero $" + MBPriceFromStorage;
  } else {
    Mbl.textContent ="ASUS ROG Strix B760-A Gaming WiFi D4 $" + MBPriceFromStorage;
  }

  //Ram
  if (RamPriceFromStorage == 147.49) {
    Raml.textContent = "G Skill 32GB $" + RamPriceFromStorage;
  } else if (RamPriceFromStorage == 309.13) {
    Raml.textContent = "G Skill 64GB $" + RamPriceFromStorage;
  } else {
    Raml.textContent ="ADATA Lancer RGB DDR5 6400MHz CL32 White $" + RamPriceFromStorage;
  }
  //SSD
  if (SSDPriceFromStorage == 117.37) {
    ssdl.textContent = "Samsung 990 PRO 1TB $" + SSDPriceFromStorage;
  } else if (SSDPriceFromStorage == 105.39) {
    ssdl.textContent = "Samsung 990 PRO 1TB $" + SSDPriceFromStorage;
  } else {
    ssdl.textContent = "Lexar NM790 Gen4 1TB $" + SSDPriceFromStorage;
  }
  //Cooler
  if (CoolerPriceFromStorage == 104.82) {
    Cool.textContent = "Deepcool AK620 $" + CoolerPriceFromStorage;
  } else if (CoolerPriceFromStorage == 69) {
    Cool.textContent ="Thermalright Frost Spirit 140 $" + CoolerPriceFromStorage;
  } else if (CoolerPriceFromStorage == 127.99) {
    Cool.textContent = "bequiet dark rock pro 4 $" + CoolerPriceFromStorage;
  }
  //Psu
  if (PsuPriceFromStorage == 269.98) {
    Psul.textContent = "ROG THOR $" + PsuPriceFromStorage;
  } else if (PsuPriceFromStorage == 190.97) {
    Psul.textContent = "Deepcool 80+ Gold $" + PsuPriceFromStorage;
  } else {
    Psul.textContent = "ASUS ROG Strix White Edition $" + PsuPriceFromStorage;
  }
  TPs.textContent = "$" + totalPriceFromStorage;

  //Get form values
  let Name = document.getElementById("txtName").value;
  let Mobile = document.getElementById("txtMobile").value;
  let Email = document.getElementById("txtEmail").value;

  let CustomerList = [];

  //retrieve localstorage items
  if (localStorage.getItem("CustomerList") !== null) {
    CustomerList = JSON.parse(localStorage.getItem("CustomerList"));
  }
  let newCustomer = new Customer(Name, Mobile, Email);
  //create our student and store to localstorage
  CustomerList.push(newCustomer);
  localStorage.setItem("CustomerList", JSON.stringify(CustomerList));

  //clear the form upon each sumission
  document.getElementById("myFrm").reset();

  refreshCustomerTable();
});
//@Step 1
//create a function based object "template"
function Customer(Name, Mobile, Email) {
  this.id = Date.now();
  this.name = Name;
  this.mobile = Mobile;
  this.email = Email;
}

//Method to print the list of students from localstorage to output on the html page.
function refreshCustomerTable() {
  let CustomerTable = document.getElementById("Customer-table-body");
  let CustomerList = [];
  let customerData = "";
  if (localStorage.getItem("CustomerList") !== null) {
    CustomerList = JSON.parse(localStorage.getItem("CustomerList"));

    for (let c of CustomerList) {
      customerData += `<tr><td>${c.name}</td><td>${c.mobile}</td><td>${c.email}</td></tr>`;
    }
    CustomerTable.innerHTML = customerData;
  }
}
