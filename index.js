
const cats = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendCat (Ralph){
    cats.push("Ralph");
    return cats;
}


function destructivelyPrependCat (Bob){
    cats.unshift('Bob');
    return cats;
}


function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}


function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}


const copyOfCats = [...cats]

function appendCat(Broom){
    const copyOfCats = [...cats, 'Broom']
    return copyOfCats
}


function prependCat(Arnold){
    const copyOfCats = [ 'Arnold', ...cats]
    return copyOfCats
}


function removeLastCat(){
    const copyOfCats = cats.slice(0, cats.length - 1)
    return copyOfCats
}


function removeFirstCat(){
    const copyOfCats = cats.slice(1)
    return copyOfCats
}


