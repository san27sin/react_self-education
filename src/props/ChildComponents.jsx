export const ChildComponents = ({ m1, onIncrement }) => {
  return <>
    <h3>{m1}</h3>
    <button onClick={onIncrement}>Increment</button>
  </>
}