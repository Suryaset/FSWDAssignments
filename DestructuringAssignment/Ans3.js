function swapVariables(x,y){
    [x,y] = [y,x];
    return [x,y];
}
let x = 2;
let y = 8;

console.log("before swap, x: "+x+",y: "+y);
[x,y] = swapVariables(x,y);
console.log("after swap, x: "+x+",y: "+y);