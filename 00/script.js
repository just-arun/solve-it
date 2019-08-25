var fs = require('fs');


/**
 *  this function reades input file and returns count and array of budget,cost,resellcost
*/
function fileCollector(fi) {
    var file = fs.readFileSync(fi, 'utf-8');
    var a = file.split(' ');
    var a1 = [];
    var a2 = [];
    var a3 = [];
    var count = 0;
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        a1.push(el.replace(/\n/g,' ').replace(/\r/g,' '));
    }
    a2 = a1.toString().replace(/,/g,' ').replace(/  /g,' ').split(' ');
    a3 = a2.splice(1);
    count = Number(a2[0].toString());
    var a4 = [];
    let j = 0;
    for (let i = 0; i < count; i++) {
        let itm = [];
        for (; j < (3 * (i+1)); j++) {
            const el = a3[j];
            itm.push(el);
        }
        a4[i] = itm;
    }
    return {count,arr:a4};
}
/**
 * for preparing output file
 */
function PrepareOutput(fi) {
    var file = fs.readFileSync(fi, 'utf-8');
    var a = file.split(' ');
    var a1 = [];
    var count = 0;
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        a1.push(el.replace(/\n/g,' ').replace(/\r/g,' '));
    }
    output = a1.toString().replace(/,/g,' ').replace(/  /g,' ');
    return output;
}


/**
 * my function
 */
function Calculation(n, arr) {
    let OutString =  '';
    for (let i = 0; i < n; i++) {
        let budgect = Number(arr[i][0]);
        let cost = Number(arr[i][1]);
        let resellPrice = Number(arr[i][2]);
        let bought = 0;
        let resell = 0;
        let calculation = 0;

        bought = Math.floor(budgect / cost);
        resell = Math.floor(bought / resellPrice);
        calculation = (bought + resell);
        bougntRemaining = (budgect % cost);
        while (bought > resellPrice) {
            bought = Math.floor(bought / resellPrice);
            calculation += bought;
        }
        OutString += `${calculation} `;
    }
    return OutString;
}



/**
 * the main function bootstrapes other functions
 * and provide the output
 */
function main() {
    var x = 0;
    while (true) {
        var file = `./input00${x}.txt`;
        var fileExist = fs.existsSync(file);
        let input = '';
        let output = '';
        let pass = 0;
        let fail = 0;
        if (fileExist) {
            var count = fileCollector(file).count;
            var arr = fileCollector(file).arr;
            input = Calculation(count,arr);
            output = PrepareOutput(`./output00${x}.txt`);
            for (let i = 0; i < output.length; i++) {
                (input[i]==output[i])?pass++:fail++;
            }
            console.log({pass,fail});
        } else {
            break;
        }
        x++;
    }
    return;
}

/**
 * calling the main function
 */
main();
