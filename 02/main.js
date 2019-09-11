const fs = require('fs');
const file = fs.readFileSync('./input000.txt');
const initArr = file.toString().replace(/\n/g,' ').split(' ');
const finalArr = [];
initArr.forEach((a) => {
    if (a) {
        finalArr.push(a);
    }
});

const breakpoint = finalArr.length/2;
let pos = [];
let hei = [];

for (let i = 0; i < breakpoint; i++) {
    pos.push(Number(finalArr[i]));
    hei.push(Number(finalArr[(breakpoint+i)]));
}
pos = pos.splice(1,pos.length);
hei = hei.splice(1,hei.length);

function main(position, height) {
    let mudHieghts = [];
    for (let i = 0; i < position.length; i++) {
        let mudHieght = 0;
        const left = position[i];
        const right = position[i+1];
        let leftHeight = height[i];
        let rightHeight = height[i+1];
        if (right !== undefined) {
            if (right-left != 0) {
                let diference = right-left-1;
                console.log(diference);
                
                let compareLeftRightHeight =  (rightHeight - leftHeight);
                if (diference == 1) {
                    (compareLeftRightHeight > 0)?mudHieght=leftHeight+1:
                    mudHieght=rightHeight+1;
                } else if((diference%2) == 0) {
                    (compareLeftRightHeight > 0)?mudHieght=(leftHeight+1)/2:
                    mudHieght=(rightHeight+1)/2;
                } else {
                    
                }
            }
        }
        mudHieghts.push(mudHieght);
    }
    console.log(mudHieghts.sort());
}
main(pos,hei);

console.log(finalArr);
console.log(pos);
console.log(hei);








