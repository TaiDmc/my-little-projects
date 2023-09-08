// let d = document,
//   $root = d.getElementById("root"),
//   $input = d.getElementById("input-number");

const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function qwertyToRoman(n) {
  let total = 0;

  for (let i = 0; i < n.length; i++) {
    if (romanNumbers[n[i]] < romanNumbers[n[i + 1]]) {
      total += romanNumbers[n[i + 1]] - romanNumbers[n[i]];
      i++;
    } else {
      total += romanNumbers[n[i]];
    }
  }

  console.log(total);
  return total;
}

qwertyToRoman("I");
qwertyToRoman(["X", "V"]);
qwertyToRoman(10);

// d.addEventListener("change", (e) => {
//   if (e.target.matches("#input-number")) {
//     console.log(e.target.value);
//     $root.innerHTML = `
//         <p class="container">
//         Valor en romano: ${qwertyToRoman(e.target.value)}
//         </p>
//         `;

//     setTimeout(() => ($root.innerHTML = ""), 2000);
//   }
// });
