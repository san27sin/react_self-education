import { MyComponent } from './MyComponent.jsx'
import { MyComponent_2 } from './MyComponent_2.jsx'
import { MyComponent_3, MyComponent_Second } from './MyComponent_3.jsx'
import React from 'react'
import { Button } from './Button.jsx'
import { ParentComponents } from './props/ParentComponents.jsx'
import { List } from './List.jsx'
import { Box } from './Box.jsx'


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

  const handleClick = () => console.log('Hello React')

  const user = {
    name: 'Alice',
    age: 30
  }

  const admin = {
    id: 123,
    rank: 'one'
  }

  const allProps = { className: 'btn-primary', type: 'button' }

  // пропс так же можно передать спред оператором

  const parentProps = { message: 'Hello World....' }

  const fruits = ['яблоко', 'банан', 'апельсин']
  const moreFruits = [...fruits, 'ананас', 'манго']

  return (
    <div>
      <h1>Hello React</h1>
      {/*<MyComponent*/}
      {/*  name='React'*/}
      {/*  click={handleClick}*/}
      {/*  user={user}*/}
      {/*  {...admin}*/}
      {/*/>*/}
      <Button
        label='Click me'
        onClick={() => alert('Button clicked')}
        {...allProps}
      />
      <ParentComponents {...parentProps} />
      <List items={moreFruits}></List>
      <Box>
        <h1>Заголовок</h1>
        <p>Текст внутри коробки</p>
        <MyComponent name="Angular"/>
      </Box>
    </div>
  )
}
