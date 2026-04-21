import { MyComponent } from './MyComponent.jsx'

// React компоненты должны начинаться с заглавной буквы, если с маленьков, то react воспринимает как html элемент
// расширение .jsx - используется синтаксическое расширение JavaScript, позволяющее писать HTML-подобную разметку прямо внутри JavaScript-кода.

export const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <MyComponent></MyComponent>
    </div>
  )
}
