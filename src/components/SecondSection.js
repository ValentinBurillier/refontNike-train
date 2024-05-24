import Button from "./Button.js"
import Image from "./Image.js"
import nikeImage from "../assets/nike-just-do-it.jpg"
import styles from "../styles/secondSection.css"
export default function SecondSection(){
  return(
    <section id="secondSection">
      <h2 className="title2">En ce moment</h2>
      <Image src={nikeImage} text={"image nike"}/>
      <Button type={"submit"} text={"Cadeaux pour la fête de Pères"}/>
    </section>
  )
}