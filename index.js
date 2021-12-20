const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  return cats.push(name)
};

function destructivelyPrependCat(name) {
    return cats.unshift(name)
};

function destructivelyRemoveLastCat() {
    return cats.pop()
};

function destructivelyRemoveFirstCat() {
    return cats.shift()
};

function appendCat(name) {
    let newArray = [...cats];
    newArray.push(name);
    return newArray;
};

function prependCat(name) {
    let newArray2 = [...cats]
    newArray2.unshift(name);
    return newArray2;
};

function removeLastCat() {
    let newArray3 = [...cats];
    newArray3.pop();
    return newArray3;
};

function removeFirstCat() {
    let newArray4 =[...cats];
    newArray4.shift();
    return newArray4;
};