// String Challenge

let a = "Elzero Web School";


// Include This Method In Your Solution [slice, charAt]  Zero
console.log(a.charAt(2).toUpperCase()+ a.slice(3, 6));

//8 H
console.log(a.charAt(13).toUpperCase().repeat(8));

// Return Array ["Elzero"]
console.log(a.split(" ", 1));

// Use Only "substr" Method + Template Literals In Your Solution Elzero school
console.log(a.substr(0, 6) + " " + a.substr(-6));

// Solution Must Be Dynamic Because String May Changes eLZERO WEB SCHOOl
console.log(a.charAt(0).toLowerCase()+ a.substr(1, 15).toUpperCase()+a.charAt(16).toLowerCase());