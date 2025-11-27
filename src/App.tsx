import styles from "./app.module.css"
import { useEffect, useState } from "react"

import { WORDS, type Challenge } from "../utils/words"

import { Tip } from "./components/tip"
import { Button } from "./components/Button"
import { Input } from "./components/input"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed"

export default function App() {

    const [attempts, setAttempts] = useState(0)
    const [scoreScore] = useState(0)
    const [letter, setLetter] = useState("")
    const [challenge, setChallenge] = useState <Challenge | null>(null)
    const [lettersUsed, setLettersUsed] = useState <LettersUsedProps []> ([])

    function handleRestartGame() {
        alert("Reiniciar o jogo!")
    }

    function startGame() {
        const index = Math.floor(Math.random() * WORDS.length)
        const randomWord = WORDS[index]
        setChallenge(randomWord)

        setAttempts(0)
        setLetter("")
    }

    useEffect (() => {
        startGame()
    }, [])

    if (!challenge) {
        return null
    }



    return <div className={styles.container}>
        <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        
        <Tip tip="Uma das Linguagem de programação mais utilizadas" />

        <div className={styles.word}>
            {
                challenge.word.split("").map(() => (
                    <Letter value="" />
                ))
            }       
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
         <Input autoFocus maxLength={1} placeholder="?" />
         <Button title="Confirmar" />
        </div>

        <LettersUsed data={lettersUsed} />


        </main>
    </div>
  }