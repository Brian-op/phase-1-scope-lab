// Write your solution in this file!
//declare in global scope 
var customerName = 'bob';
//func to return customerName

function upperCaseCustomerName(){
    customerName = customerName.toLocaleUpperCase();
}
 var bestCustomer;
function setBestCustomer(){
    bestCustomer = "not bob"
}
var overwriteBestCustomer;
function overwriteBestCustomer (){
    bestCustomer = "maybe bob"
};

const leastFavoriteCustomer = "Ian"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "titus"
}
changeLeastFavoriteCustomer();
