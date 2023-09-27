//문제1: 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0
for(let i = 1; i<=100; i++){
  sum+=i  // sum = sum+i
}
console.log(sum)

//문제2: 1부터 100까지 홀수만 출력하자
for(let i =1; i<=100; i+=2){
  console.log(i)
}

//문제3: 1부터 50까지 369결과를 프린트하자 
for(let i=1; i<=50; i++){
 let stringValue = i.toString() // 각 숫자 i를 문자열로 변환하여 stringValue 변수에 저장합니다. 이렇게 함으로써 우리는 각 숫자를 자릿수 별로 분리해서 조사할 수 있습니다.
 let result = "" //": 결과를 저장할 변수 result를 초기화합니다. 여기에는 각 자릿수에서 3, 6, 9가 발견되면 "짝"이라는 문자열이 추가됩니다.
 for(let j=0;j<stringValue.length;j++){ // 각 숫자를 자릿수 별로 검사하기 위한 반복문입니다.
  if(stringValue[j] == "3" || stringValue[j] =="6" || stringValue[j] =="9"){
    result+="짝" // result = result + "짝": 만약 3, 6, 9 중 하나를 찾았다면, result에 "짝"을 추가합니다.

  }
 }
 console.log(result.length>0?result:i) // 최종적으로 result에 어떤 값이 들어있는지 확인하여, 값이 있다면 result를 출력하고, 그렇지 않으면 원래 숫자 i를 출력합니다.
}

//문제4: 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
  let n =23
  let isPrime = true

  if (n ===1){// 1은 소수가 아님 
      isPrime = false
  }
  for(let i=2;i<n;i++){
    if(n % i == 0){
      isPrime =  false 
    }
  }
  console.log(isPrime)