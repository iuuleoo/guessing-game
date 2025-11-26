import styles from "./app.module.css"

import { Tip } from "./components/tip"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"

export default function App() {

    function handleRestartGame() {
        alert("Reiniciar o jogo!")
    }



    return <div className={styles.container}>
        <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        
        <Tip tip="Uma das Linguagem de programação mais utilizadas" />

        <div className={styles.word}>
        <Letter value="" />
        </div>

        </main>
    </div>
  }