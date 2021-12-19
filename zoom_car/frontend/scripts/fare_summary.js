const displaydata = async () => {
  try {
    let response = await fetch("http://127.0.0.1:5005/api/selected");
    let data = await response.json();
    displayCars(data);
    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
};
displaydata();

let car_name = document.getElementById("carname_div");
let paybtn = document.getElementById("checkoutbtn");
let amtshow = document.getElementById("amtshow");
let totalamtshow = document.getElementById("totalamtshow");
let finalfare = document.getElementById("finalfare");
const displayCars = (data) => {
  car_name.innerHTML = null;
  amtshow.innerText = null;
  data.forEach((car) => {
    //car name
    car_name.innerText = `${car.car_data.brand} ${car.car_data.name}`;

    //   //price
    var payableamt = car.car_data.pricing.revenue + 92;
    paybtn.innerText = ` PROCEED TO PAY ₹${payableamt}  `;
    finalfare.innerText = `₹${payableamt}`;
    amtshow.innerText = car.car_data.pricing.payable_amount;
    totalamtshow.innerText = `₹${payableamt}`;
  });
};
const payment = () => {
  window.location.href = "payment.html";
};
var date = new Date();
var startappen = date.toString().slice(0, 21);

var enddate = new Date("2021-12-20");
var endappend = enddate.toString().slice(0, 21);

let sta = document.getElementById("sta");
sta.innerText = startappen;
let end = document.getElementById("end");
end.innerText = endappend;
