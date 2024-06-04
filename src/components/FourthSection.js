import Button from "./Button"
import nikeImageWoman from "../assets/nike-just-do-it-2.jpg"
import "../styles/thirdSection.css"
import Image from "./Image"
export default function FourthSection(){
  return(
    <section id="fourthSection">
      <h2 className="title2">Tout pour ton sport</h2>
      <div className="container__shoes">
        <Image src={nikeImageWoman} text={"image nike"}/>
        <Button type={"submit"} text={"Running"}/>
      </div>
    </section>
  )
}