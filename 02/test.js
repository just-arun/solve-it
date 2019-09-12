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
    return maximum;
}

const main = () => {
    for (let i = 0; i < 15; i++) {
        if (i<10) {
            let file = fs.readFileSync(`input00${i}.txt`);
            let newFile = file.toString().replace(/\n/g,' ').split(' ');
            let refinedFile = [];
            for (let x = 0; x < newFile.length; x++) {
                const el = newFile[x];
                if (el) {
                    refinedFile.push(el);
                }
            }
            let pos = [];
            let hei = [];
            let breakpoint = refinedFile[0];
            for (let x = 1; x < breakpoint; x++) {
                pos.push(refinedFile[x]);
            }
            console.log({breakpoint,pos,refinedFile});
            
        } else {
            let file = fs.readFileSync(`input0${i}.txt`);
            let newFile = file.toString().replace(/\n/g,' ').split(' ');
            let pos = [];
            let hei = [];
            console.log({newFile});
        }
    }
}

main();
