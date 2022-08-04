const arr = [1, 1, 4, 1, 2, 3, 4, 3, 1, 2]
// output:  {1:4, 2:2, 3:2, 4:2}

const reqAns = function (arr) {
  let map = {}
  for (let ele of arr) {
    map[ele] = map[ele] ? map[ele] + 1 : 1
    }
    return map;
}

console.log(reqAns(arr))
