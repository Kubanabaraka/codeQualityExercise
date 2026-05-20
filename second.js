// function greet(name) {
//    if (name) {
//       return "Hello, " + name + "!";
//     } else {
//      return "Hello!";
//    }
// }

const improvedGreet = (name) => (name ? `Hello, ${name}` : "Hello!");
console.log(improvedGreet(""));
