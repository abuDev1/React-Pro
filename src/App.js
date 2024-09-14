
import {useState, useEffect} from 'react'


// JS - однопоточный язык программирования

// Синхронный код - код, который выполняется строка за строкой т.е код не выполнится, пока не будет выполнен предыдущий кусок кода

// //// Синхронный код
// function App() {
//   const x = 1;

//   alert(x)

//   return ('Hello, World!')

// }
// export default App;

////

// Асинхронность - когда делаем несколько вещей одновременно

// //// Асихронный код

// function App() {
//   const x = 1;

//   setTimeout(() => { // код уходит работать.
//     alert(x)
//   }, 3000)

//   return ('Hello, World!')

// }
// export default App;


////////////////// Промисы, fetch ////////////////////


// const promise = new Promise((resolve, rejected) => {
//     let a = 1000;
//     let b = 990;
//     let c = a !== b;
//     if(c) {
//         resolve(console.log(`Данная операция была выполнена успешно! Результат выполнения ${c}`));
//     } else {
//         rejected(console.log("ERROR"))
//     }
// })

// promise.then((result) => {
//     return console.log(result);;
// }).catch((error) => {
//     console.log(error);
// })

////////////////////// fetch

// const getUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Не удалось получить список пользователей")
//         } 
//         return response.json();
//     })
// }

// getUsers()
// .then((users) => {
//   console.log(users);
// }).catch((e) => {
//   console.log(e);
// })

//********************** Promise в react


//Объект promise имеет три состояния:

// 1. pending - (ожидание) т.е запрос создан, но еще не выполнен
// 2. fulfield - (выполнено успешно) т.е запрос был создан и выполнился без ошибок
// 3. rejected - (выполнено с ошибкой) т.е запрос был создан и выполнился с какой-то ошибкой

function App() {

  // const promise = new Promise ((resolve, reject) => {
  //   if () {
  //     return resolve()
  //   }
  //   return reject()
  // })

  // promise.then((result) => {
  //   // обрабатываем результат выполнения промиса
  // }).catch((e) => {
  //   // обрабатывает ошибку в случаи возникновения в процессе запроса
  // })

//*******************************

  // const getData = () => {
  //   return fetch ('https://jsonplaceholder.typicode.com/todos')
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error ('Не удалось получить данные с сервера')
  //     }
  //     return response.json()
  //   })
  // }

  // getData().then((data) => {
  //   console.log(data);
  // }).catch((e) => {
  //   console.log(e);
  // })

  // // JSON - JavaScript Object Notation 

  // const x = 1;

  // console.log(x)

  // return (
  //   <>
  //     React Pro
  //   </>
  // )   

  //////////////////// Внизу пример без промиса

  // console.log('Request data ...');

  // setTimeout(() => {
  //   console.log('Preparing data ...');

  //   const backendData = {
  //     server: 'aws',
  //     port: 2000,
  //     status: 'working'
  //   }
  //   setTimeout(() => {
  //     backendData.modified = true
  //     console.log('Data received', backendData);
  //   }, 2000)

  // }, 2000)

  ///////////////////// Переделали пример сверху, но с промисом

  // const p = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log("Preparing data ...");

  //     const backendData = {
  //       server: "aws",
  //       port: 2000,
  //       status: "working",
  //     }
  //     resolve(backendData)
  //   }, 2000);
  // })

  // p.then(data => {
  //   return new Promise((resolve, reject) => {
  //     data.modified = true
  //     resolve(data)
  //   }, 2000)
  // })
  // .then(clientData => {
  //   clientData.fromPromise = true;
  //   return clientData
  // })
  // .then(data => {
  //   console.log('Modified', data);
  // })
  // .catch(err => console.log('Error: ', err))
  // .finally(() => {
  //   console.log('Finally');
  // })


  ///////////////////////////////

//   const sleep = ms => {
//     return new Promise(resolve =>{ setTimeout(() => resolve(),ms)
//   })
// }

// // sleep(2000).then(() => console.log('After 2 sec'))
// // sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(3000)])
//   .then(() => {
//     console.log('All promises');
//   })

// Promise.race([sleep(2000), sleep(3000)])
//   .then(() => {
//     console.log('Race promises');
//   })

/////////////////////////////////////

  
// Async, Await. Работа с сервером c fetch

// const delay = ms => {
//   return new Promise(r => setTimeout(()=> r(), ms))
// }

// delay(2000).then(() => console.log('2 sec'))


// const url = 'https://jsonplaceholder.typicode.com/todos'

////////////////////////////

// const fetchTodos = () => {
//   console.log('Fetch todo started ...');
//   return delay(2000).then(() => fetch(url))
//   .then(response => response.json())
// }

// fetchTodos().then(data => {
//   console.log('Data: ', data);
// }).catch(e => console.error(e))

/////////////////////////// Код внизу выводит тоже самое, что и наверху, но только в более лаконичной форме

// async function fetchAsyncTodos () {
//   console.log('Fetch todo started ...')
//   try {
//     await delay(2000)
//     const response =  await fetch(url)
//     const data = await response.json()
//     console.log('Data: ', data);
//   } catch (e) {
//     console.error(e);
//   } finally {

//   }
  
// }

// fetchAsyncTodos();









//************************************ Вывод в компонент

const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось получить данные с сервера");
    }
    return response.json()
  })
      .then((json) => {
        setData(json);
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
      });
}, [])

  
  return (
    <>
      <h1>Список дел</h1>

      {
        loading ? (
          <div>
            Идет загрузка. Пожалуйста, подождите.
          </div>
        ) : data.map((item) => {
          return (
            <div key={item.id}>
              {item.title}
            </div>
          )
        })
      }
    </>
  )  
  
}



export default App;




