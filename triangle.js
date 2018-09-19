function triangle_tracker(){

var sides = []
sides.push(document.getElementById('first').value);
sides.push(document.getElementById('second').value);
sides.push(document.getElementById('third').value);

var first=sides[0]
var second=sides[1]
var third=sides[2]

/* console.log(sides); */
if (first===second  &&  second===third){
output.innerHTML=("equilateral triangle")
}

else if (first===second  &&  first!==third || first===third  &&  first!==second || second===third  &&  second!==first){
output.innerHTML=("isosceles triangle")
}

else if(first!==second && second!==third && first!==third){
output.innerHTML=("scalene triangle")
}
else if(first>=second+third||second>=first+third||third>=first+third){
output.innerHTML=("NOT a triangle")
}
}
