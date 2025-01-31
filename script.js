const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
const stringArray = userInputString.split(",");

console.log("Array of inputs: ", stringArray);

function countFlavors(arr){
    let obj = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] in obj){
            obj[arr[i]] = obj[arr[i]] + 1;
        }else{
            obj[arr[i]] = 1;
        }
    }
    return obj
};

const outputObject = countFlavors(stringArray);

console.log("This is your order: ", outputObject);