export const MyComponent = (props) => {
  console.log(props)
  return (
    <div>
      <h2>
        Далеко-далеко за словесными горами
      </h2>
      <p>Hello {props.name}</p>
      <button onClick={props.click}>click me</button>
    </div>
  )
}