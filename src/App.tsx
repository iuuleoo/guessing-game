import styles from "./app.module.css"

import { Tip } from "./components/tip"
import { Button } from "./components/Button"
import { Input } from "./components/input"
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
        <Letter value="" />
        <Letter value="" />
        <Letter value="" />
        <Letter value="" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
         <Input autoFocus maxLength={1} placeholder="?" />
         <Button title="Confirmar" />
        </div>


        </main>
    </div>
  }