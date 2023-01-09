// function firstLetter() {
//   let str = prompt("Veuillez écrire votre message :");
//   str = str[0].toUpperCase() + str.substring(1).toLowerCase();
//   alert(str);
// }
// firstLetter();

// function camelize(str) {
//   return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
//     if (+match === 0) return "";
//     return index === 0 ? match.toLowerCase() : match.toUpperCase();
//   });
// }

// console.log(camelize("Bonjour comment aller vous"));

let str = prompt("entrez la phrase");

function firstLetter(str) {
  let arr = str.toLowerCase().split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

alert(firstLetter(str));


function camelCase(str) {
  let arr = str.toLowerCase().split(" ");
  let arrNew = arr.map((e, i) => {
    if (i !== 0) {
      return firstLetter(e);
    }
    else {
      return e;
    }
  }
  )

  return arrNew.join('');
  // return str.toLowerCase().split(" ").map((e, i) => {
  //   if (i !== 0) {
  //     return firstLetter(e);
  //   }
  //   else {
  //     return e;
  //   }
  // }
  // )
  //   .join();
}
alert(camelCase(str));