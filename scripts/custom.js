
function BuildingHeight() {
    //user inputs the numbers
    let bldgHeight1 = Number(document.getElementById("Building 1").value);
    let bldgHeight2 = Number(document.getElementById("Building 2").value);
    let bldgHeight3 = Number(document.getElementById("Building 3").value);
    let bldgHeight4 = Number(document.getElementById("Building 4").value);
    let bldgHeight5 = Number(document.getElementById("Building 5").value);

    //setting up an array from user input
    let bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];

    let newArray = [];
    let count = 1;
    let Sun = bldgArray[0];
    newArray.push(Sun);//pushes what the sun hits into a new array

    //Step 3: Traverse the array from right to left and keep track of the buildings that can see the sunset
    for (let loop = 0; loop < bldgArray.length; loop++) {
        if (bldgArray[loop] > Sun) {
            count++;
            newArray.push(bldgArray[loop]);
            Sun = bldgArray[loop];

        }
    }
    //Step 4: Output to the user which buildings can see the sunset and how many buildings can see the sunset
    document.getElementById("SunsetOut").innerHTML = `There is   ${count} building(s) that get Sunlight 😎: [${newArray.join(',')}]`
}