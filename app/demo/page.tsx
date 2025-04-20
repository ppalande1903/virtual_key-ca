"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function DemoPage() {
  const [typedText, setTypedText] = useState("")
  const [suggestions, setSuggestions] = useState(["hello", "world", "test"])
  const [focusedKey, setFocusedKey] = useState({ row: 0, col: 0 })
  const [focusOnControl, setFocusOnControl] = useState(false)
  const [controlFocusIndex, setControlFocusIndex] = useState(0)

  const KEYS = ["1234567890", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

  const CONTROL_KEYS = ["SPACE", "BACKSPACE", "SPEAK"]

  // Simulate key focus movement with keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        moveLeft()
      } else if (e.key === "ArrowRight") {
        moveRight()
      } else if (e.key === "ArrowUp") {
        moveUp()
      } else if (e.key === "ArrowDown") {
        moveDown()
      } else if (e.key === " ") {
        e.preventDefault()
        selectKey()
      } else if (e.key.toLowerCase() === "r") {
        resetText()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [focusedKey, focusOnControl, controlFocusIndex, typedText])

  const moveLeft = () => {
    if (focusOnControl) {
      setControlFocusIndex((prev) => (prev > 0 ? prev - 1 : CONTROL_KEYS.length - 1))
    } else {
      setFocusedKey((prev) => {
        const newCol = prev.col > 0 ? prev.col - 1 : KEYS[prev.row].length - 1
        return { ...prev, col: newCol }
      })
    }
  }

  const moveRight = () => {
    if (focusOnControl) {
      setControlFocusIndex((prev) => (prev < CONTROL_KEYS.length - 1 ? prev + 1 : 0))
    } else {
      setFocusedKey((prev) => {
        const newCol = prev.col < KEYS[prev.row].length - 1 ? prev.col + 1 : 0
        return { ...prev, col: newCol }
      })
    }
  }

  const moveUp = () => {
    if (focusOnControl) {
      setFocusOnControl(false)
    } else {
      setFocusedKey((prev) => {
        const newRow = prev.row > 0 ? prev.row - 1 : KEYS.length - 1
        const rowLength = KEYS[newRow].length
        const newCol = prev.col < rowLength ? prev.col : rowLength - 1
        return { row: newRow, col: newCol }
      })
    }
  }

  const moveDown = () => {
    if (!focusOnControl && focusedKey.row === KEYS.length - 1) {
      setFocusOnControl(true)
    } else if (!focusOnControl) {
      setFocusedKey((prev) => {
        const newRow = prev.row < KEYS.length - 1 ? prev.row + 1 : 0
        const rowLength = KEYS[newRow].length
        const newCol = prev.col < rowLength ? prev.col : rowLength - 1
        return { row: newRow, col: newCol }
      })
    }
  }

  const selectKey = () => {
    if (focusOnControl) {
      const controlKey = CONTROL_KEYS[controlFocusIndex]
      if (controlKey === "SPACE") {
        setTypedText((prev) => prev + " ")
      } else if (controlKey === "BACKSPACE") {
        setTypedText((prev) => prev.slice(0, -1))
      } else if (controlKey === "SPEAK") {
        if ("speechSynthesis" in window) {
          const utterance = new SpeechSynthesisUtterance(typedText)
          window.speechSynthesis.speak(utterance)
        }
      }
    } else {
      const selectedKey = KEYS[focusedKey.row][focusedKey.col]
      setTypedText((prev) => prev + selectedKey)

      // Update suggestions based on typed text
      if ((typedText + selectedKey).toLowerCase().includes("h")) {
        setSuggestions(["hello", "hi", "hey"])
      } else if ((typedText + selectedKey).toLowerCase().includes("w")) {
        setSuggestions(["world", "welcome", "why"])
      } else {
        setSuggestions(["the", "and", "that"])
      }
    }
  }

  const resetText = () => {
    setTypedText("")
  }

  // Create sparkle elements
  const sparkleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sparkleRef.current) return

    const createSparkle = () => {
      const sparkle = document.createElement("div")
      sparkle.className = "absolute w-1 h-1 rounded-full bg-pink-300 animate-ping"
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}%`
      sparkle.style.opacity = `${Math.random() * 0.7 + 0.3}`
      sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`

      sparkleRef.current?.appendChild(sparkle)

      setTimeout(() => {
        sparkle.remove()
      }, 3000)
    }

    const interval = setInterval(createSparkle, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 flex flex-col items-center"
    >
      <div className="relative">
        <h1 className="text-3xl font-bold mb-8 gradient-text pink-glow">Galactic Typist Demo</h1>
        <div className="absolute -top-4 -right-4 w-8 h-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 animate-ping"></div>
          <div className="absolute inset-1 rounded-full bg-white dark:bg-pink-950 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-pink-500" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mb-8">
        <Card className="border-2 border-pink-200 dark:border-pink-800 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/20 overflow-hidden">
          <CardContent className="p-6">
            <div
              ref={sparkleRef}
              className="aspect-video bg-gradient-to-br from-pink-900 to-purple-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden"
            >
              <p className="text-white text-center z-10">
                Webcam feed simulation
                <br />
                (Use keyboard controls for this demo)
              </p>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent"></div>
            </div>

            <div className="bg-white/50 dark:bg-pink-950/50 backdrop-blur-sm p-4 rounded-lg mb-6 min-h-16 text-xl border border-pink-200 dark:border-pink-800 shadow-inner">
              {typedText || <span className="text-muted-foreground">Type something...</span>}
              <span className="animate-pulse ml-0.5 inline-block w-0.5 h-5 bg-pink-500"></span>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant="secondary"
                    className="text-lg bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 border border-pink-200 dark:border-pink-800 hover:shadow-md hover:shadow-pink-200/50 dark:hover:shadow-pink-900/50 transition-all"
                  >
                    {suggestion}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              {KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-2">
                  {row.split("").map((key, colIndex) => (
                    <Button
                      key={colIndex}
                      variant={
                        !focusOnControl && focusedKey.row === rowIndex && focusedKey.col === colIndex
                          ? "default"
                          : "outline"
                      }
                      className={`w-12 h-12 text-lg transition-all duration-300 ${
                        !focusOnControl && focusedKey.row === rowIndex && focusedKey.col === colIndex
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30"
                          : "border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900"
                      }`}
                    >
                      {key}
                    </Button>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {CONTROL_KEYS.map((key, index) => (
                <Button
                  key={index}
                  variant={focusOnControl && controlFocusIndex === index ? "default" : "outline"}
                  className={`px-6 transition-all duration-300 ${
                    focusOnControl && controlFocusIndex === index
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30"
                      : "border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900"
                  }`}
                >
                  {key}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white/50 dark:bg-pink-950/50 backdrop-blur-sm p-6 rounded-lg max-w-2xl border border-pink-200 dark:border-pink-800 shadow-lg shadow-pink-200/20 dark:shadow-pink-900/20">
        <h2 className="text-xl font-bold mb-4 text-pink-600 dark:text-pink-400">Demo Instructions</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li className="text-muted-foreground">
            Use <strong className="text-pink-600 dark:text-pink-400">arrow keys</strong> ← → ↑ ↓ to move focus between
            keys
          </li>
          <li className="text-muted-foreground">
            Press <strong className="text-pink-600 dark:text-pink-400">spacebar</strong> to select the focused key
          </li>
          <li className="text-muted-foreground">
            Press <strong className="text-pink-600 dark:text-pink-400">R</strong> to reset the typed text
          </li>
          <li className="text-muted-foreground">
            This demo simulates the eye-tracking interface using keyboard controls
          </li>
          <li className="text-muted-foreground">In the real application, your eye movements would control the focus</li>
        </ul>
      </div>
    </motion.div>
  )
}
