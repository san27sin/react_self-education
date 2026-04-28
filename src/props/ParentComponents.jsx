import { ChildComponents } from './ChildComponents.jsx'

export const ParentComponents = ({ message }) => {
  return <ChildComponents m1={message}/>
}