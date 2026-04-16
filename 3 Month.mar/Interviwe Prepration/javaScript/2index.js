// Javascript
// React Js 
// Node Js 

// Synchronous and Asynchronous
// Callbacks
// Promises 
// Async/await

// 1. Set Timeout

// console.log(1)
// console.log(11)

// code wait 1 second
// setTimeout(() =>{
//  console.log(2)
// },1000)

// console.log(3)

// 1. Callback - Asynchronous

const getData = (callBackFunction) => {
    console.log("Hello Get Data")
    callBackFunction()
}
// const callBackFunction = () =>{
// console.log("Call Back Function Called")
// }

// getData(callBackFunction)

getData(() => console.log(3131))


// 2. Promises - Asynchronous
//   3 Stages to ctreate     resolve / pending / reject 

const myPromise = new Promise(
    (resolve, reject) => {
        const error = false
        if (error == true) {
            resolve("Promise Rejected")
        } else {
            reject("Promise Resolved")
        }
    }
)


myPromise.then((res) => console.log(res)).catch((error) => console.log(error))




// 3. async/await

const myFunction = async () => {
    // API Integration 
    // DB call -Add Delete update get from DB - await 
}