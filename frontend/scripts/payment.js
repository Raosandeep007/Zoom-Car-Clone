const displaydata = async () => {
  try {
    let response = await fetch("http://127.0.0.1:5005/api/selected");
    let data = await response.json();
    displayCars(data);
  } catch (err) {
    console.log("err:", err);
  }
};
displaydata();
let payamt = document.getElementById("amt");
let paybtn = document.getElementById("paybtn");
let payss;
let pricediv = document.getElementById("price_div");
let amtbankdiv = document.getElementById("amtbank");
let amtpytmdiv = document.getElementById("amtpytm");
const displayCars = (data) => {
  pricediv.innerHTML = null;
  amtbankdiv.innerHTML = null;
  payamt.innerHTML = null;
  amtpytmdiv.innerHTML = null;

  data.forEach((car) => {
    //price

    var payableamt = car.car_data.pricing.revenue + 92;
    pricediv.innerText = ` Pay INR ₹${payableamt}`;
    paybtn.innerText = `PAY INR ₹${payableamt}`;
    //price
    payamt.innerText = `Amount: ₹${payableamt}`;
    amtbankdiv.innerText = `Amount: ₹${payableamt}`;
    amtpytmdiv.innerText = `Amount: ₹${payableamt}`;
    payss = () => {
      window.alert(
        `Thank you For booking ${car.car_data.brand} ${car.car_data.name}`
      );
    };
  });
};

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

//.................................................................
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[1];
btn2.onclick = function () {
  modal2.style.display = "block";
};
span.onclick = function () {
  modal2.style.display = "none";
};

//.................................................................
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[2];
btn3.onclick = function () {
  modal3.style.display = "block";
};
span.onclick = function () {
  modal3.style.display = "none";
};

var date = new Date();
var startappen = date.toString().slice(0, 21);

var enddate = new Date("2021-12-20");
var endappend = enddate.toString().slice(0, 21);

let sta = document.getElementById("sta");
sta.innerText = startappen;
let end = document.getElementById("end");
end.innerText = endappend;
