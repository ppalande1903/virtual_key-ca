"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Eye, ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DemoPage() {
  const router = useRouter()
  const [typedText, setTypedText] = useState("")
  const [suggestions, setSuggestions] = useState(["hello", "hi", "hey"])
  const [focusedKey, setFocusedKey] = useState({ row: 0, col: 0 })
  const [focusOnControl, setFocusOnControl] = useState(false)
  const [controlFocusIndex, setControlFocusIndex] = useState(0)
  const [webcamActive, setWebcamActive] = useState(false)
  const [lookingDirection, setLookingDirection] = useState("center")
  const [blinking, setBlinking] = useState(false)
  const [statusText, setStatusText] = useState("Ready")
  const [suggestMode, setSuggestMode] = useState(false)
  const [suggestIndex, setSuggestIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const KEYS = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "_"],
    ["Z", "X", "C", "V", "B", "N", "M", "←", "🔊"],
  ]

  const CONTROL_KEYS = ["SPACE", "BACKSPACE", "SPEAK"]

  // Word prediction function (simplified)
  const predictWords = (text: string) => {
    const lastWord = text.trim().split(" ").pop() || ""

    if (lastWord.toLowerCase().startsWith("h")) {
      return ["hello", "hi", "hey"]
    } else if (lastWord.toLowerCase().startsWith("w")) {
      return ["world", "welcome", "why"]
    } else if (lastWord.toLowerCase().startsWith("t")) {
      return ["the", "this", "that"]
    } else if (lastWord.toLowerCase().startsWith("a")) {
      return ["and", "all", "about"]
    } else {
      return ["the", "and", "that"]
    }
  }

  // Text-to-speech function
  const speakText = (text: string) => {
    if (!text) return

    const speech = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(speech)
  }

  // Start webcam
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setWebcamActive(true)
      }
    } catch (err) {
      console.error("Error accessing webcam:", err)
    }
  }

  // Stop webcam
  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()

      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setWebcamActive(false)
    }
  }

  // Simulate eye tracking with mouse movement
  const simulateEyeTracking = (e: React.MouseEvent) => {
    if (!webcamActive) return

    const { clientX, clientWidth } = e
    const position = clientX / clientWidth

    if (position < 0.4) {
      setLookingDirection("left")
      setStatusText("Looking Left")
    } else if (position > 0.6) {
      setLookingDirection("right")
      setStatusText("Looking Right")
    } else {
      setLookingDirection("center")
      setStatusText("Ready")
    }
  }

  // Simulate blinking with mouse click
  const simulateBlinking = () => {
    if (!webcamActive) return

    setBlinking(true)
    setStatusText("Blink Detected")

    setTimeout(() => {
      setBlinking(false)
      setStatusText("Ready")
    }, 300)

    // Process the blink action
    if (suggestMode) {
      setTypedText((prev) => prev + " " + suggestions[suggestIndex])
      setSuggestMode(false)
    } else {
      const selectedKey = KEYS[focusedKey.row][focusedKey.col]

      if (selectedKey === "←") {
        setTypedText((prev) => prev.slice(0, -1))
      } else if (selectedKey === "_") {
        setTypedText((prev) => prev + " ")
        setSuggestMode(true)
        setSuggestIndex(0)
      } else if (selectedKey === "🔊") {
        speakText(typedText)
      } else {
        setTypedText((prev) => prev + selectedKey)
      }
    }
  }

  // Process keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        if (suggestMode) {
          setSuggestIndex((prev) => Math.max(prev - 1, 0))
        } else {
          setFocusedKey((prev) => {
            const newCol = prev.col > 0 ? prev.col - 1 : KEYS[prev.row].length - 1
            return { ...prev, col: newCol }
          })
        }
        setLookingDirection("left")
        setStatusText("Looking Left")
        setTimeout(() => {
          setLookingDirection("center")
          setStatusText("Ready")
        }, 300)
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        if (suggestMode) {
          setSuggestIndex((prev) => Math.min(prev + 1, 2))
        } else {
          setFocusedKey((prev) => {
            const newCol = prev.col < KEYS[prev.row].length - 1 ? prev.col + 1 : 0
            return { ...prev, col: newCol }
          })
        }
        setLookingDirection("right")
        setStatusText("Looking Right")
        setTimeout(() => {
          setLookingDirection("center")
          setStatusText("Ready")
        }, 300)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        if (!suggestMode) {
          setFocusedKey((prev) => {
            const newRow = prev.row > 0 ? prev.row - 1 : KEYS.length - 1
            const rowLength = KEYS[newRow].length
            const newCol = prev.col < rowLength ? prev.col : rowLength - 1
            return { row: newRow, col: newCol }
          })
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        if (!suggestMode) {
          setFocusedKey((prev) => {
            const newRow = prev.row < KEYS.length - 1 ? prev.row + 1 : 0
            const rowLength = KEYS[newRow].length
            const newCol = prev.col < rowLength ? prev.col : rowLength - 1
            return { row: newRow, col: newCol }
          })
        }
      } else if (e.key === " ") {
        e.preventDefault()
        simulateBlinking()
      } else if (e.key === "r" || e.key === "R") {
        setTypedText("")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [focusedKey, suggestMode, suggestIndex, typedText, suggestions])

  // Update suggestions when typing
  useEffect(() => {
    if (suggestMode) {
      const newSuggestions = predictWords(typedText)
      setSuggestions(newSuggestions)
    }
  }, [suggestMode, typedText])

  // Clean up webcam on unmount
  useEffect(() => {
    return () => {
      stopWebcam()
    }
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
            {/* Webcam Display */}
            <div
              className="aspect-video bg-gradient-to-br from-pink-900 to-purple-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden"
              onMouseMove={simulateEyeTracking}
              onClick={simulateBlinking}
            >
              {webcamActive ? (
                <>
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                  <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                  <div className={`absolute inset-0 pointer-events-none ${blinking ? "bg-blue-500/20" : ""}`}></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 rounded text-center text-sm">
                    {lookingDirection === "left" && "Looking Left"}
                    {lookingDirection === "right" && "Looking Right"}
                    {lookingDirection === "center" && (blinking ? "Blinking" : "Looking Center")}
                  </div>
                </>
              ) : (
                <div className="text-center text-white z-10">
                  <p className="mb-4">Click the button below to activate webcam</p>
                  <Button
                    onClick={startWebcam}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Activate Webcam
                  </Button>
                </div>
              )}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Text Area */}
            <div className="bg-white/50 dark:bg-pink-950/50 backdrop-blur-sm p-4 rounded-lg mb-6 min-h-16 text-xl border border-pink-200 dark:border-pink-800 shadow-inner">
              {typedText || <span className="text-muted-foreground">Type something...</span>}
              <span className="animate-pulse ml-0.5 inline-block w-0.5 h-5 bg-pink-500"></span>
            </div>

            {/* Suggestions Area */}
            {suggestMode ? (
              <div className="flex justify-center gap-4 mb-6">
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant={index === suggestIndex ? "default" : "secondary"}
                      className={`text-lg ${
                        index === suggestIndex
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                          : "bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900"
                      } border border-pink-200 dark:border-pink-800 hover:shadow-md hover:shadow-pink-200/50 dark:hover:shadow-pink-900/50 transition-all`}
                    >
                      {suggestion}
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : null}

            {/* Virtual Keyboard */}
            <div className="space-y-2 mb-6">
              {KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-2">
                  {row.map((key, colIndex) => (
                    <Button
                      key={colIndex}
                      variant={
                        !suggestMode && focusedKey.row === rowIndex && focusedKey.col === colIndex
                          ? "default"
                          : "outline"
                      }
                      className={`w-12 h-12 text-lg transition-all duration-300 ${
                        !suggestMode && focusedKey.row === rowIndex && focusedKey.col === colIndex
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

            {/* Control Keys */}
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
            Click <strong className="text-pink-600 dark:text-pink-400">"Activate Webcam"</strong> to start the demo
          </li>
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
            <strong className="text-pink-600 dark:text-pink-400">Mouse movement</strong> over the webcam area simulates
            eye movement
          </li>
          <li className="text-muted-foreground">
            <strong className="text-pink-600 dark:text-pink-400">Clicking</strong> on the webcam area simulates blinking
          </li>
        </ul>
      </div>

      <div className="mt-8 flex gap-4">
        <Button
          variant="outline"
          className="border-pink-300 dark:border-pink-700 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
          onClick={() => router.push("/eye-tracking-demo")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          View Technology
        </Button>
        <Button
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
          onClick={() => router.push("/get-started")}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
