// Task 1
let loggedIn = true;

let cart = [
    'Shirts',
    'Shoes',
    'Bread',
    'Cell Phone',
    'Candy Corn',
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
    'Tomato'
];

// Task 2
if (loggedIn) {
    console.log("Welcome! Here are the items in your cart:");
    for (let i = 0; i < cart.length; i++) {
        console.log(`- ${cart[i]}`);
    }
} 
else {
    console.log("Please log in to view your cart.");
}