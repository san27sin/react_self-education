export const MyComponent_2 = () => {
  const a = 10
  const b = 35
  const element = <h1>{ a + b }</h1>
  const isLoggedIn = true
  const el1 = <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h1>

  const handleClick = () => alert('Button clicked!')
  const buttonElement = <button onClick={handleClick}>Click Me!</button>

  return (
    <div>
      <h2>
        Здесь какой-то текст для нашего компонента
      </h2>
      <h1>{ 10 + 55 }</h1>
      { element }
      <div>{el1}</div>
      { buttonElement }
    </div>
  )
}