import "../styles/video.css"
import video from '../assets/video.mp4';
export default function Video(){
  return(
    <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  )
}