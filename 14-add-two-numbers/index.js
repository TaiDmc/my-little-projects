let l1 = [2, 4, 3],
  l2 = [5, 6, 4],
  l3 = [0],
  l4 = [0],
  l5 = [9, 9, 9, 9, 9, 9, 9],
  l6 = [9, 9, 9, 9];

const addTwoNumbers = (l1, l2) => {
  l1 = Number(l1.reverse().join(""));
  l2 = Number(l2.reverse().join(""));

  let result = l1 + l2;
  result = result.toString().split("").reverse();
  console.log(result);
  return result;
};

addTwoNumbers(l1, l2);
addTwoNumbers(l3, l4);
addTwoNumbers(l5, l6);
