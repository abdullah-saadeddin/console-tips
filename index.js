let x = 3;
console.assert(x>2,"it doesnt work");
// this will print only if false is passed

let ahmad = "saad";
let asad ="saaaaaad";

console.log({ahmad,asad});
//print this like an object 


let ahmad = "saad";
let asad ="saaaaaad";
let ww = [{
    "sad":2,
    "re":45
},{
    "sad":2,
    "re":45
}]
let s = ["a","b","c"];
console.table({ahmad,asad});
console.table([ahmad,asad]);
 console.table(w)
console.table(s)
 console.table(ww)
//print in table 



let w = {
    "sad":2,
    "re":45
}
console.log(w)
console.dir(w)
//print the object in nice way



console.time("hi");
let x=0;
for(let i=0;i<10000;i++){
    x++;
}
console.timeLog("hi");
for(let i=0;i<10000;i++){
    x++;
}
console.timeEnd("hi");
//use time inside javascript



function sad(){

    
    console.trace("so what");
}



sad();
//print where its called and where its defined




console.error("hi")
console.warn("da");
//new way of print with colors



console.log("%c hi hello welcome","color:red; background-color: blue;")
//print with cusstom style



// %i for integer
// %s for string 
// %o for object
// %f for folat
console.log("%i this is integer, %s this is a string, %o this is object, %f this is float",23,"hi",{sad:2},2.33)
//to emded printing in console.log


console.groupCollapsed("hi");
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.log("sub and like")
console.groupEnd("");
console.log("sub and like")







for(let i = 0;i<10;i++){
    console.count('test');
}

console.count("test");
console.count("test");
console.count("test");
console.count("tes");
console.count("test");
