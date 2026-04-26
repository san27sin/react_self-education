import "./style.scss"

export const MyComponent_3 = () => {
  const style = { 'background-color': 'blue', color: '#fff' }

  // jsx - не поддерживает названия 'for' и 'class' по скольку они зарезервированы в js
  // className - class
  // htmlFor — это атрибут в React (JSX), который заменяет стандартный HTML-атрибут for у тега <label>
  // в return всегда надо возвращать html разметку
  // все атрибуты в jsx должны быть в camelCase

  return (
    <div className="container">
      <h2>Hello React.</h2>
      <label htmlFor="input-id">Name:</label>
      <input type="text" id="input-id"/>
      <input type="checkbox" checked={true}/>
      <div style={style}>
        Привет как дела? Привет как дела? Привет как дела? Привет как дела? Привет как дела?
      </div>
      <div
        style={{
          background: '#161c53',
          color: 'red'
        }}
      >
        { 2 * 23 }
      </div>
    </div>
  )
}