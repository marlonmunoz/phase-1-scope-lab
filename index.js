// Write your solution in this file!

var customerName = "bob";
// var bestCustomer = "not bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}












function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


// Call the function to overwrite the bestCustomer
overwriteBestCustomer();

const leastFavoriteCustomer = 'someone'; // Assign an initial value

function changeLeastFavoriteCustomer() {
    // Attempt to change the constant (won't work)
    leastFavoriteCustomer = 'new person'; // This will throw an error
}