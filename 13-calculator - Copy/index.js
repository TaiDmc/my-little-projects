const d = document,
  $calculatorForm = d.getElementById("calculator-form");

d.addEventListener("click", (e) => {
  if (!e.target == $calculatorForm) return false;
  // if (e.target == undefined) return false;

  if (e.target.value == "=") {
    console.log($calculatorForm.ans.value);
    let result = eval($calculatorForm.ans.value);
    $calculatorForm.ans.value = result;
    return;
  }

  // console.log("hi");
  $calculatorForm.ans.value += e.target.value;

  if (e.target.value == "C") $calculatorForm.ans.value = "";
});
