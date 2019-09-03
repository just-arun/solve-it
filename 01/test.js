let n = "495";
// let number = Number(n);
// let sort=[];
// for (let i = 0; i < n.length; i++) {
//     const el = n[i];
//     sort.push(el);
// }

// const numN = Number(sort.sort().toString().replace(/,/g,''));
// const numR = Number(sort.sort((a, b) => b - a).toString().replace(/,/g,''));

// console.log(numN, numR);
var permArr = [],
  usedChars = [];

function permute(input) {
  let i, ch;
  let inputArr = [];
  let result = false;
  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    inputArr.push(el);
  }
  for (i = 0; i < inputArr.length; i++) {
    ch = inputArr.splice(i, 1)[0];
    usedChars.push(ch);
    if (inputArr.length == 0) {
    //   permArr.push(Number(usedChars.slice().toString().replace(/,/g,'')));
      let checkres = Number(usedChars.slice().toString().replace(/,/g,''));
      if ((checkres%8)==0) {
        result = true;
        return result;
      }
    }
    permute(inputArr);
    inputArr.splice(i, 0, ch);
    usedChars.pop();
  }
  return result;
};


console.log(permute("488"),`${488%8}`);

