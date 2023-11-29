document
  .querySelector('button[type="button"][value="CO"]')
  .addEventListener("click", function () {
    // Navigate to the next page (replace 'next_page.html' with the actual page URL)
    window.location.href = "index.html";
  });

// Event listener for Back button
document
  .querySelector('button[type="button"][value="back"]')
  .addEventListener("click", function () {
    // Navigate to the next page (replace 'next_page.html' with the actual page URL)
    window.location.href = "Order.html";
  });
const Cpulabel = document.getElementById("CPU");
const GPUlabel = document.getElementById("GPU");
const Mblabel = document.getElementById("MB");
const Coolerlabel = document.getElementById("cooling");
const ssdlabel = document.getElementById("SSD");
const Psulabel = document.getElementById("Psu");
const Ramlabel = document.getElementById("Ram");
const TP = document.getElementById("tP");

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
  Cpulabel.textContent = "Intel i9 1300k $" + CPUPriceFromStorage;
} else if (CPUPriceFromStorage == 858.0) {
  Cpulabel.textContent = "Intel i9 1300kf $" + CPUPriceFromStorage;
} else {
  Cpulabel.textContent = "Intel i7 1300k $" + CPUPriceFromStorage;
}
//GPU
if (GPUlPriceFromStorage == 1999) {
  GPUlabel.textContent = "RTX 3090 TI $" + GPUlPriceFromStorage;
} else if (GPUlPriceFromStorage == 1733) {
  GPUlabel.textContent = "RTX 3090  $" + GPUlPriceFromStorage;
} else {
  GPUlabel.textContent = "RTX 3080 IT $" + GPUlPriceFromStorage;
}

//Mb
if (MBPriceFromStorage == 335.0) {
  Mblabel.textContent = "B660I AORUS $" + MBPriceFromStorage;
} else if (MBPriceFromStorage == 847) {
  Mblabel.textContent = "ASUS ROG Maximus Z790 Hero $" + MBPriceFromStorage;
} else {
  Mblabel.textContent ="ASUS ROG Strix B760-A Gaming WiFi D4 $" + MBPriceFromStorage;
}

//Ram
if (RamPriceFromStorage == 147.49) {
  Ramlabel.textContent = "G Skill 32GB $" + RamPriceFromStorage;
} else if (RamPriceFromStorage == 309.13) {
  Ramlabel.textContent = "G Skill 64GB $" + RamPriceFromStorage;
} else {
  Ramlabel.textContent ="ADATA Lancer RGB DDR5 6400MHz CL32 White $" + RamPriceFromStorage;
}
//SSD
if (SSDPriceFromStorage == 117.37) {
  ssdlabel.textContent = "Samsung 990 PRO 1TB $" + SSDPriceFromStorage;
} else if (SSDPriceFromStorage == 105.39) {
  ssdlabel.textContent = "Samsung 990 PRO 1TB $" + SSDPriceFromStorage;
} else {
  ssdlabel.textContent = "Lexar NM790 Gen4 1TB $" + SSDPriceFromStorage;
}
//Cooler
if (CoolerPriceFromStorage == 104.82) {
  Coolerlabel.textContent = "Deepcool AK620 $" + CoolerPriceFromStorage;
} else if (CoolerPriceFromStorage == 69) {
  Coolerlabel.textContent ="Thermalright Frost Spirit 140 $" + CoolerPriceFromStorage;
} else if (CoolerPriceFromStorage == 127.99){
  Coolerlabel.textContent="bequiet dark rock pro 4 $" + CoolerPriceFromStorage;
}
//Psu
if (PsuPriceFromStorage == 269.98) {
  Psulabel.textContent = "ROG THOR $" + PsuPriceFromStorage;
} else if (PsuPriceFromStorage == 190.97) {
  Psulabel.textContent = "Deepcool 80+ Gold $" + PsuPriceFromStorage;
} else {
  Psulabel.textContent = "ASUS ROG Strix White Edition $" + PsuPriceFromStorage;
}
TP.textContent="$"+totalPriceFromStorage;