/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2; 
    maka :
    
    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
    
    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.  
    "finish" yaitu batas index angka prime 

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/

function rangePrimeNumber(start,finish)
{
    var result = [];
    count = 2;
    while(result.length < finish){
        var flag = true;
        for(var i = 2; i < count; i++){
            if(count % i === 0){
                flag = false;
            }
        }
        if(flag === true){
            result.push(count);
        }
        count = count + 1;
    }
    var output = [];
    for(var j = start-1; j < finish; j++){
        output.push(result[j])
    }
    return output;
}

console.log(rangePrimeNumber(5,10))
// output 
// [11,13,17,19,23,29]

console.log(rangePrimeNumber(4,9));
// output [7,11,13,17,19,23]