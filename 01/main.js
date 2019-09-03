function solve(array) {
    let finalize = [];
    for (let i = 0; i < array.length; i++) {
        let result = [];
        let decla = false;
        const num = array[i];
        const length = num.length;
        if (length < 3) {
            if ((Number(num) % 8) == 0) {
                result.push(true);
                break;
            } else {
                // function permute(input) {
                //     var z, ch;
                //     for (z = 0; z < input.length; z++) {
                //         ch = input.splice(z, 1)[0];
                //         usedChars.push(ch);
                //         if (input.length == 0) {
                //         permArr.push(usedChars.slice());
                //         }
                //         permute(input);
                //         input.splice(z, 0, ch);
                //         usedChars.pop();
                //     }
                //     return permArr
                // };
                // console.log(num);
                function reversefunc(s) {
                    if (s.length > 2) {
                        return Number(`${s[2]}${s[1]}${s[0]}`);
                    } else {
                        return Number(`${s[1]}${s[0]}`);
                    }
                }
                console.log(reversefunc(num))
                if ((reversefunc(num)%8) == 0) {
                    result.push(true);
                } else {
                    result.push(false);
                }

                // for (let x = 0; x < 9; x++) {
                //     let tempnum = permute(num);
                //     if ((tempnum[x]%8) == 0) {
                //         result.push(true);
                //         break;
                //     }
                // }
                result.push(false);
            }
        } else {
            let charInFrequency =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let y = 0; y < length; y++) {
                charInFrequency.push(Number(num[y]) - 0) += 1;
            }

            for (let j = 104; j < 1000; j+=8) {
                const dup = j;

                let frequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                frequency[Number(dup%10)] += 1;
                dup = dup / 10;
                frequency[Number(dup%10)] += 1;
                dup = dup / 10;
                frequency[Number(dup%10)] += 1;

                dup = i;

                if (frequency[Number(dup%10)] > charInFrequency[Number(dup%10)]) {
                    dup = dup / 10;
                }
                if (frequency[Number(dup%10)] > charInFrequency[Number(dup%10)]) {
                    dup = dup / 10;
                }
                if (frequency[Number(dup%10)] > charInFrequency[Number(dup%10)]) {  }
                result.push(true);
                break;
            }
            result.push(false);
        }
        result.push(false);
        for (let s = 0; s < result.length; s++) {
            const el = result[s];
            if (el) {
                decla = true;
            }
        }
        finalize.push(decla);
    }
    return finalize;
}

function main() {
    let fs = require('fs');
    let file = fs.readFileSync('./input000.txt');
    console.log(solve(["61","75"]));
}

main()