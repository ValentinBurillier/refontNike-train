import PropTypes  from "prop-types"
export default function Button(props){
  return(
    <button type={props.type}>{props.text}</button>
  )
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}