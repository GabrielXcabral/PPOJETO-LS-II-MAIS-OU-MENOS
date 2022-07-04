import Loja from "../components/Loja"
import { ArteContextProvider } from "../contexts/FoodContext"; //Trazendo a referência lá do context.jsx 2.

export default function Home() {
  return (
    <ArteContextProvider>
      <Loja />
    </ArteContextProvider> //Pegando o mesmo contexto que fiz no projeto react - index.jsx 1.
  )
}
