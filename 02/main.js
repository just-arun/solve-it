const fs = require('fs');


const maxheight = (position, height) => {
    let positionLangth = position.length;
    let maximum = 0;

    for (let i = 0; i < (positionLangth-1); i++) {
        if (position[i] < (position[i+1]-1)) {
            let heightDiff = Math.abs(height[i+1] - height[i]);
            let gapLength = position[i+1] - position[i] - 1;
            let localMax = 0;
            if (gapLength > heightDiff) {
                let low = Math.max(height[i+1],height[i]) + 1;
                let GapRemaining = gapLength-heightDiff-1;
                localMax=low+GapRemaining/2;
            } else {
                localMax = Math.min(height[i+1], height[i] + gapLength)
            }
            maximum = Math.max(maximum, localMax);    
        }
    }
    return Math.floor(maximum);
}

const main = () => {
    let result = [];
    for (let k = 0; k <= 14; k++) {
        if (k<10) {
            const file = fs.readFileSync(`./input00${k}.txt`);
            const initArr = file.toString().replace(/\n/g,' ').split(' ');
            const outputFile = fs.readFileSync(`./output00${k}.txt`);
            const outArr = outputFile.toString().replace(/\n/g,' ').split(' ');
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
            // console.log(Number(outArr[0]));
            
            // console.log(maxheight(pos,hei));
            let outp = {
                myOut: maxheight(pos,hei),
                expOut: Number(outArr[0]),
            }
            result.push(outp);
        } else{
            const file = fs.readFileSync(`./input0${k}.txt`);
            const initArr = file.toString().replace(/\n/g,' ').split(' ');
            const outputFile = fs.readFileSync(`./output0${k}.txt`);
            const outArr = outputFile.toString().replace(/\n/g,' ').split(' ');
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
            
            // console.log(maxheight(pos,hei));
            let outp = {
                myOut: maxheight(pos,hei),
                expOut: Number(outArr[0]),
            }
            result.push(outp);
        }
    }
    console.log(result);
}

main()
