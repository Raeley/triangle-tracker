function triangle_tracker(){

var sides = []
var first = sides.push(parseInt(prompt("enter first side")));
var second = sides.push(parseInt(prompt("enter second side")));
var third = sides.push(parseInt(prompt("enter third side")));

/* console.log(sides); */
if (first===second  &&  second===third){
alert("equilateral")
}

else if (first===second  &&  first!==third || first===third  &&  first!==second || second===third  &&  second!==first){
alert("isosceles")
}

else if(first!==second && second!==third && first!==third){
alert("scalene")
}
else {
alert("NOT a triangle")
}
}
