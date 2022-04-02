var strl = "str";
var car  = {
    car_brand : "Tesla",
    car_model : "2022",
    car_price : "150000",

    TeslaAutopilot : function()
    {
        document.write("<h2>This Car has Autopilot</h2>");
    }
}
// delete car.car_price;
document.write("<h2>"+typeof(car.car_price)+"</h2>");
// document.write("<h2>"+typeof(strl)+"</h2>");
car.functiontype = "Electric";
document.write("<h2>"+car.functiontype+"</h2>");
// class Cars {
//     constructor(car_brand, car_model, car_price) {
//         this.car_brand = car_brand;
//         this.car_model = car_model;
//         this.car_price = car_price;
//         this.TeslaAutopilot = function () {
//             document.write("<h2>This car has auto pilot</h2>");
//         };
//     }
// }
// var c1 = new Cars("Tesla" , "2022" , "35000");
// var c2 = new Cars("Tesla" , "2021" , "45000");
// c1.TeslaAutopilot();
// document.write("<h2>"+c2.car_model+"</h2>");