// 문제1: 안녕 내 이름은 제시카야" 라는 문장을 프린트하는 함수 'greet'을 만드시오
function greet(){
    console.log("안녕 내 이름은 제시카야")
}
greet()

//문제2: 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오.
// 예)"안녕 내이름은 에밀리야", "안녕 내 이름은 할리야"

function greet(name){
    console.log("안녕 내이름은"+name+"야")

}
greet("에밀리")
// 문제3: 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오.
function greet(name){
    console.log("안녕 내 이름은",name,"야")
    return name
}
// 결과 확인 법 
const name = greet("진호")
console.log("안녕 내 이름은",name,"이야")


// 문제4 : meetAt 함수를 만들어주세요.
// 인자를 세개 받습니다. 
 // 첫번째 인자는 년도에 해당하는 숫자입니다. 
 // 두번째 인자는 월에 해당하는 숫자입니다.
 // 세번째 인자는 일에 해당하는 숫자입니다. 
 // 년도 인자만 받았을 경우 -> "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
 // 년도,월,인자를 받았을 경우 -> 년도와 월을 조합해서 "1234년 5월" 과 같은 형식 의 문자열을 리턴해주세요.
 // 년도,월,일,인자를 전부 받았을 경우 -> 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴 해주세요.

 // 결과 예시 
 // meetAt(2022); // 결과 --> 2022년 
 // meetAt(2032, 3); // 결과 --> "2032년 3월"
 // meetAt(1987, 10, 28); // 결과 --> "1987/10/28"
 function meetAt(year, month, date) {
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;
  
    if (todayDate) {
      return `${todayYear}/${todayMonth}/${todayDate}`;
    }
    if (todayMonth) {
      return `${todayYear}년 ${todayMonth}월`;
    }
    if (todayYear) {
      return `${todayYear}년`;
    }
  
  }
  
  console.log(meetAt(2022,1,7))

// 문제5: findSmallestElement 함수를 구현해 주세요.
//findSmallestElement의 arr 인자는 숫자 값으로만 이루어진 배열입니다. 
// arr의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr가 비어있으면 0을 리턴해주세요 
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴되어야 합니다.
// [100,200,3,0,2,1]

function findSmallestElement(arr) {
   // 어레이가 비어있다
   if(arr.length == 0){
    return 0
   }
   let result = arr[0] // arr의 첫번째값을 넣음 
   for(let i=1; i<arr.length;i++){
      if(result > arr[i]){  // result와 arr에 있는 [i]번째있는 값을 비교했을때 result가 더 크면 
          result = arr[i]  // 더작은 result값에 있는 arr[i] 로 바꿔준다. 
      }
   }

   return result
  }

  console.log(findSmallestElement([100,200,3,5,2,1]))


// 가장 큰값 return? 
function findSmallestElement1(arr) {
  // 어레이가 비어있다
  if(arr.length == 0){
   return 0
  }
  let result = arr[0] // arr의 첫번째값을 넣음 
  for(let i=1; i<arr.length;i++){
     if(result < arr[i]){  // result와 arr에 있는 [i]번째있는 값을 비교했을때 result가 더 크면 
         result = arr[i]  // 더작은 result값에 있는 arr[i] 로 바꿔준다. 
     }
  }

  return result
 }

 console.log(findSmallestElement1([100,200,500,5,2,1]))

  // 문제6 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
  //  출력예)
  //  12300인 경우 
  //    50000 x 0 
  //    10000 x 1 //2300
  //    5000 x 0 
  //    1000 x 2  //300
  //    500 x 0 
  //    100 x3  //0

  let unit =[50000,10000,5000,1000,500,100]

  function giveMeChange(money){
    for(let i=0; i<unit.length;i++){
      let num = Math.floor(money/unit[i]) // math.floor는 소수점 버림을 뜻함
      console.log(`${unit[i]}X${num}`)
      money = money - (unit[i] * num) // 돈의값을 재할당할거임.
    }

  }

  giveMeChange(12300)
  

























// function makeBurger(type,size,num){
//     console.log("매개변수 값은?", type) //불고기
//     console.log("빵두기")
//     console.log("상추두기")
//   if(num < 1){
//     return "버거 개수가 0개 입니다."
//   }
//   if(type == "불고기"){
//     console.log("고기패티두기")
//   } else if(type == "새우"){
//     console.log("새우패티두기")
//   }
//     console.log("뚜껑덥기")
//     console.log(type,"버거",size,"사이즈",num,"개 준비완료")

//   return "완료되었습니다."
// }

// function serveCoke(){
//     console.log("콜라통 선택")
//     console.log("얼음담기")
//     console.log("콜라담기")
// }

// function servefrenchFries(){
//     console.log("감튀박스 선택")
//     console.log("감튀담기")
// }

// let result =  makeBurger("불고기","M",0) //return 결과값 출력하기위해 result 사용
// console.log("버거 프로세스 결과",result)

// function makeSet(){
//     makeBurger("새우","M",2)
//     servefrenchFries()
//     serveCoke()
// }

// makeSet()









