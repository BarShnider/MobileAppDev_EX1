class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    return `(${this.x},${this.y})`;
  }

  equals(p) {
    return p.x == this.x && p.y == this.y;
  }
}

arr = [new Point(0, 1), new Point(1, 2), new Point(2, 3), new Point(3, 4)];

$(document).ready(() => {
  arrString = "["
  for(let p of arr){
    arrString += p.show()
  }
  arrString +="]"
  $("#exmp-arr").html(arrString)

  $("#total-dist").html(caclulcatePointsTripLength(arr))
})


function isXYinArray(arr, x, y) {
  for (p of arr) {
    if (p.x == x && p.y == y) {
      return true;
    }
  }
  return false;
}
console.log( isXYinArray(arr, 1,2)) // returns true
console.log( isXYinArray(arr, 4,4)) // returns false

function isPointinArray(arr, point) {
  for (p of arr) {
    if(p.equals(point)){
      return true
    }
  }
  return false;
}

console.log( isPointinArray(arr, new Point(1,2))) // returns true
console.log( isPointinArray(arr, new Point(4,4))) // returns false

function calculateTwoPointsDistance(point1, point2) {
  const xDiff = point2.x - point1.x;
  const yDiff = point2.y - point1.y;
  const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
  return distance;
}
function caclulcatePointsTripLength(pointsArr){
  let sumTrip = 0
  for(let i = 0 ; i< pointsArr.length - 1; i++){
    sumTrip += calculateTwoPointsDistance(pointsArr[i],pointsArr[i+1])
  }
  return sumTrip
}

