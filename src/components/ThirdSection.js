import nikeImage from "../assets/nike-just-do-it (1).jpg"
import Image from "./Image"
import Button from "./Button"
import "../styles/thirdSection.css"
import Trait from "./Trait"
import "../styles/trait.css"
export default function ThirdSection(){
  return(
    <section id="thirdSection">
      <h2 className="title2">Nos modèles iconiques</h2>
      <div className="container__shoes">
        <Image src={nikeImage} text={"image nike"}/>
        <Button type={"submit"} text={"Air Max"}/>
      </div>
      <Trait />
    </section>
  )
}