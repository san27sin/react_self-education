export const Button = ({ label, onClick, ...other }) => {
  return <button onClick={onClick} {...other}>{label}</button>
}