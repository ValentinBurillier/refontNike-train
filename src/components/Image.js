import PropTypes from "prop-types"
export default function Image(props){
  return(
    <img src={props.src} alt={props.text}/>
  )
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}