function SetUsername(username) {
    // complex DB call 
    this.username = username;
}

function createuser(username, email, password) {
    SetUsername.call(this, username); // call method is used to call a function with a given this value and arguments provided individually. in hndi, call method ka use ek function ko call karne ke liye kiya jata hai jisme hum us function ke this value ko specify kar sakte hain aur arguments ko alag alag provide kar sakte hain.
    this.email = email;
    this.password = password;
}

const chai = new createuser("chai","chai@gmail.com","123");
console.log(chai);