//Create an Array
let number = [8, 4, 2, 10, 3];
let largest = 0;

//Create a for loop
for (let i = 0; i < number.length; i++) {
    const value = number[i];

    if (value > largest){
        largest = value;
    }
}
//Create Alert
alert(`output: ${largest}`);
