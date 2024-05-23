import Button from "./Button";
import Video from "./Video";
import "../styles/firstSection.css"
export default function VideoSection(){
  return (
    <section className="videoSection">
      <Video />
      <div>
        <h2>ça va chauffer</h2>
        <p>Des modèles pour tout changer cet été.</p>
        <Button type={"submit"} text={"Acheter"}/>
        <Button type={"submit"} text={"Enfant"} />
      </div>
    </section>
  )
}