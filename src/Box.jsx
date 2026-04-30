// если хотим использовать box в качестве обертки или контейнера, то следует передать свойство children в пропс (слово зарезервирано)

export const Box = ({ children }) => {
  const style = { 'background-color': 'pink', color: '#fff' }
  return <div style={style}>{ children }</div>
}