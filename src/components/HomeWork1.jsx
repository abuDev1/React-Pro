import React from 'react'
import { useState, useEffect } from 'react'

export const ToDoShow = () => {
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
          if (item.completed === true) {
            return (
            <div key={item.id}>
              <ul>
                <li className='selected'>
                {item.title}
                </li>
              </ul>
            </div>)
          } if (item.completed === false) {
            return (
            <div key={item.id}>
              <ul>
                <li>
                {item.title}
                </li>
              </ul>
            </div>)
            }
          }
          )
        }
    </>
  )
}
