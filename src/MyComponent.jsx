export const MyComponent = (props) => {
  console.log(props)
  return (
    <div>
      <h2>
        Далеко-далеко за словесными горами
      </h2>
      <p>Hello {props.name}</p>
      {/*<button onClick={props.click}>click me</button>*/}
      {/*<h3>*/}
      {/*  {props.user.name} is {props.user.age} years old.*/}
      {/*</h3>*/}
      {/*<h4>*/}
      {/*  { props.id } - { props.rank }*/}
      {/*</h4>*/}
    </div>
  )
}