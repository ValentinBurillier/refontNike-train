import baniere from "../styles/banniere.module.css"
import Button from "./Button"
export default function Banniere(){
  return(
    <section className={baniere.promotion}>
      <h2>Fête des Mères</h2>
        <p>Commande avant le 24 mai à 1H pour recevoir ton cadeau à temps
        <Button type="submit" text="*Acheter"/>
        </p>
    </section>
  )
}