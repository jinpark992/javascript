let fruit = ["banana","apple","grape","mango"]

console.log(fruit)
console.log(fruit[3])

fruit[0]="cherry"
console.log(fruit)


//pop() : 마지막에 있는 아이템을 뻄
fruit.pop()
console.log(fruit)
fruit.push("pineapple")
console.log(fruit)

//includes: 아이템이 있는지 없는지 확인
console.log(fruit.includes("pear"))

//indexOf: 아이템에 인덱스 번호 알려줌
console.log(fruit.indexOf("apple"))


//slice: 배열 아이템을 잘라내는 역할(시작점, 끝점-끝점 미포함)
console.log(fruit.slice(2)) // grape,mango 
console.log(fruit.slice(1,3)) // apple,grape

//splice : 배열 아이템 잘라내는 역할(시작점,개수)
fruit.splice(2,2) 
console.log(fruit) //cherry,apple

// slice는 기존의 배열을 건드리지 않음 
// splice는 기존의 배열을 건드림




