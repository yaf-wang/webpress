// 

function fun1() {
  return new Promise((resolve) => {
    console.log('fun1 running--->');
    setTimeout(() => {
      console.log('fun1 response--->');
      resolve()
    }, 3000)
  })
}



function fun2() {
  return new Promise((resolve) => {
    console.log('fun2 running--->');
    setTimeout(() => {
      console.log('fun2 response--->');
      resolve()
    }, 2000)
  })
}

console.log('script start');
fun1()
fun2()
console.log('script end');