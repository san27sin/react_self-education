import { MyComponent } from './MyComponent.jsx'
import { MyComponent_2 } from './MyComponent_2.jsx'
import React from 'react'

// React компоненты должны начинаться с заглавной буквы, если с маленьков, то react воспринимает как html элемент
// расширение .jsx - используется синтаксическое расширение JavaScript, позволяющее писать HTML-подобную разметку прямо внутри JavaScript-кода.

// атрибуты - пишутся в camelCase
// мы должны оборачивать наш контент в родительский элемент, 2 возвращать не можем

// фрагмент - это наподобие template во vue, как невидимая обертка, можно использовать пустые тэги <> вместо React.Fragment

export const App = () => {
  const element = <h1>Hello, World</h1>
  const img = (
    <img src="https://semantica.in/wp-content/uploads/2018/01/580b57fcd9996e24bc43c4c4-300x300.png" alt="nature"/>
  )

  const component = <MyComponent name="Alice"/>

  const age = 29
  const elem2 = <p>You are {age} years old.</p>

  return (
    <div>
      <h1>Hello React</h1>
      <MyComponent name="Pavel"></MyComponent>
      { element }
      <div>{ img }</div>
      { component }
      { elem2 }
      <React.Fragment>
        <div>тестируем fragment</div>
      </React.Fragment>
      <>
        <div>можно использовать пустые скобки вместо React.Fragment</div>
      </>
      <MyComponent_2/>
    </div>
  )
}
