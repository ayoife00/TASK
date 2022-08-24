//Create a for loop expression
for (let index = 0; index <=15; index++) {
    
    //An If conditional statement is created
    if (index % 2 == 0) {
    //CHECK FOR EVEN NUMBER
        const newH1 = document.createElement('h1');
        newH1.innerHTML = `${index} is an even number`;
        document.body.appendChild(newH1);
    } 
    // //CHECK FOR oDD NUMBER
    else if(index % 2 == 1) {
        const newH2 = document.createElement('h2');
        newH2.innerHTML = `${index} is an odd number`;
        document.body.appendChild(newH2);
    }
};