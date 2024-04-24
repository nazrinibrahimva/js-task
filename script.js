function carpimArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.error("Massivlərin uzunluqları bərabər olmalıdır!");
        return;
    }

    let carpimArr = [];
    for (let i = 0; i < arr1.length; i++) {
        carpimArr.push(arr1[i] * arr2[i]);
    }
    return carpimArr;
}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(carpimArray(arr1, arr2));

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6, 7];
carpimArray(arr3, arr4); 