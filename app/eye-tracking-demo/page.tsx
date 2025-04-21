"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Code, Download, ExternalLink, Eye, Keyboard, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EyeTrackingDemoPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text pink-glow">
            Eye-Tracking Technology
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Explore the advanced technology that powers Galactic Typist
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="overflow-hidden border-pink-200 dark:border-pink-800 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/20 card-hover h-full">
            <div className="aspect-video relative bg-gradient-to-br from-pink-300 to-purple-400 dark:from-pink-600 dark:to-purple-700 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Eye-tracking interface"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mr-3 shrink-0">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-pink-600 dark:text-pink-400">Eye Tracking</h4>
                    <p className="text-muted-foreground text-sm">
                      Our advanced computer vision algorithms track your eye movements in real-time, detecting even
                      subtle shifts in gaze direction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mr-3 shrink-0">
                    <Keyboard className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-pink-600 dark:text-pink-400">Virtual Keyboard</h4>
                    <p className="text-muted-foreground text-sm">
                      Look left or right to navigate between keys, and blink to select. The interface adapts to your
                      movements with smooth transitions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mr-3 shrink-0">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-pink-600 dark:text-pink-400">AI Word Prediction</h4>
                    <p className="text-muted-foreground text-sm">
                      Our AI-powered word prediction system learns from your typing patterns to suggest the most likely
                      next words, dramatically increasing typing speed.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-pink-200 dark:border-pink-800 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/20 card-hover h-full">
            <div className="aspect-video relative bg-gradient-to-br from-pink-300 to-purple-400 dark:from-pink-600 dark:to-purple-700 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Technology Stack</h3>
              <p className="text-muted-foreground mb-6">
                Our eye-tracking keyboard is built with cutting-edge technologies:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-pink-600 dark:text-pink-400">OpenCV & MediaPipe:</span> For
                    precise facial landmark detection and eye tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-pink-600 dark:text-pink-400">PyTTSx3:</span> For natural
                    text-to-speech capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-pink-600 dark:text-pink-400">Custom AI Models:</span> For
                    intelligent word prediction
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-pink-600 dark:text-pink-400">Multi-language Support:</span> For
                    global accessibility
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-300 dark:border-pink-700 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="overflow-hidden border-pink-200 dark:border-pink-800 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Source Code Preview</h3>
              <p className="text-muted-foreground mb-6">
                Below is a snippet of our eye-tracking keyboard implementation:
              </p>

              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto max-h-96 text-sm font-mono">
                <pre>{`import cv2
import mediapipe as mp
import numpy as np
import time
import pygame
import pyttsx3
import threading
from gaze_tracking.predictor import WordPredictor

# Initialize TTS and sound
engine = pyttsx3.init()
pygame.init()

# MediaPipe face mesh
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(refine_landmarks=True, max_num_faces=1)

# Modern UI Colors - Soft purple theme
BG_COLOR = (250, 245, 255)
KEY_INACTIVE = (230, 215, 245)
KEY_ACTIVE = (180, 155, 220)
KEY_BORDER = (200, 175, 235)
HEADER_COLOR = (150, 100, 180)
TEXT_AREA_BG = (245, 240, 255)

def calculate_ear(landmarks, indices):
    p = [np.array([landmarks[i][0], landmarks[i][1]]) for i in indices]
    A = np.linalg.norm(p[1] - p[5])
    B = np.linalg.norm(p[2] - p[4])
    C = np.linalg.norm(p[0] - p[3])
    return (A + B) / (2.0 * C)

def get_gaze(landmarks):
    left = [landmarks[i] for i in [33, 133]]
    right = [landmarks[i] for i in [362, 263]]
    left_iris = landmarks[468]
    right_iris = landmarks[473]
    pos = lambda eye, iris: (iris[0] - eye[0][0]) / (eye[1][0] - eye[0][0] + 1e-6)
    avg = (pos(left, left_iris) + pos(right, right_iris)) / 2
    if avg < 0.4: return "RIGHT)) / (eye[1][0] - eye[0][0] + 1e-6)
    avg = (pos(left, left_iris) + pos(right, right_iris)) / 2
    if avg < 0.4: return "RIGHT"
    elif avg > 0.6: return "LEFT"
    return "CENTER"

# Main loop
while True:
    ret, frame = cap.read()
    if not ret: break
    frame = cv2.flip(frame, 1)
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = face_mesh.process(rgb)

    if results.multi_face_landmarks:
        landmarks = results.multi_face_landmarks[0]
        coords = [(int(p.x * frame_w), int(p.y * frame_h)) for p in landmarks.landmark]

        ear = calculate_ear(coords, [362, 385, 387, 263, 373, 380])
        
        # Detect blinks
        if ear < 0.23:
            blink_counter += 1
        else:
            # Process blinks
            if blink_counter >= 1 and current_time - last_action > cooldown:
                # Select current key or suggestion
                # ...
            blink_counter = 0

            # Process gaze direction
            gaze = get_gaze(coords)
            if gaze == "LEFT":
                # Move selection left
                # ...
            elif gaze == "RIGHT":
                # Move selection right
                # ...`}</pre>
              </div>

              <div className="mt-6 text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
                >
                  <Link href="https://github.com/galactic-typist/eye-tracking-keyboard" target="_blank">
                    View Full Source Code on GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative inline-block">
            <h2 className="text-2xl font-bold mb-4 gradient-text pink-glow">Ready to experience it yourself?</h2>
            <div className="absolute -top-4 -right-4 w-8 h-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 animate-ping"></div>
              <div className="absolute inset-1 rounded-full bg-white dark:bg-pink-950 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-pink-500" />
              </div>
            </div>
          </div>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Try our interactive demo or download the application to experience the future of hands-free typing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
            >
              <Link href="/demo">Try Interactive Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-pink-300 dark:border-pink-700 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
