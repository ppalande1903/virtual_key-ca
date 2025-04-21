"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Download, Github, Check, Copy } from "lucide-react"
import Link from "next/link"

export default function DownloadPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            Download Galactic Typist
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Get the full eye-tracking keyboard application running on your computer
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="overflow-hidden border-pink-200 dark:border-pink-800 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/20 h-full">
            <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 border-b border-pink-200 dark:border-pink-800">
              <CardTitle className="text-pink-600 dark:text-pink-400">Download & Installation</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">System Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">Python 3.8 or higher</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">Webcam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">Windows, macOS, or Linux</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">Download Options</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300">
                      <Download className="mr-2 h-4 w-4" />
                      Download Installer (Windows)
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300">
                      <Download className="mr-2 h-4 w-4" />
                      Download Installer (macOS)
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-pink-300 dark:border-pink-700 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
                    >
                      <Link href="https://github.com/galactic-typist/eye-tracking-keyboard" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        View Source on GitHub
                      </Link>
                    </Button>
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
          <Card className="overflow-hidden border-pink-200 dark:border-pink-800 shadow-xl shadow-pink-200/20 dark:shadow-pink-900/20 h-full">
            <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 border-b border-pink-200 dark:border-pink-800">
              <CardTitle className="text-pink-600 dark:text-pink-400">Manual Installation</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
                    Install from Source Code
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Follow these steps to install and run the application from source:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-pink-600 dark:text-pink-400 mb-1">1. Clone the repository</h4>
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">
                          git clone https://github.com/galactic-typist/eye-tracking-keyboard.git
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-1 right-1 h-8 w-8 p-0"
                          onClick={() =>
                            copyToClipboard("git clone https://github.com/galactic-typist/eye-tracking-keyboard.git")
                          }
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-pink-600 dark:text-pink-400 mb-1">2. Install dependencies</h4>
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">
                          pip install -r requirements.txt
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-1 right-1 h-8 w-8 p-0"
                          onClick={() => copyToClipboard("pip install -r requirements.txt")}
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-pink-600 dark:text-pink-400 mb-1">3. Run the application</h4>
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">python main.py</div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-1 right-1 h-8 w-8 p-0"
                          onClick={() => copyToClipboard("python main.py")}
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">Troubleshooting</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">
                        Make sure your webcam is properly connected and accessible
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">
                        For MediaPipe installation issues, see the{" "}
                        <Link
                          href="https://google.github.io/mediapipe/getting_started/install.html"
                          className="text-pink-500 hover:underline"
                          target="_blank"
                        >
                          official documentation
                        </Link>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">
                        For additional help, visit our{" "}
                        <Link href="/support" className="text-pink-500 hover:underline">
                          support page
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
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
              <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Python Script</h3>
              <p className="text-muted-foreground mb-6">
                Here's the Python script for the eye-tracking keyboard. Save this as <code>main.py</code>:
              </p>

              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto max-h-96 text-sm font-mono relative">
                <Button
                  size="sm"
                  className="absolute top-2 right-2 bg-pink-500 hover:bg-pink-600"
                  onClick={() =>
                    copyToClipboard(`import cv2
import mediapipe as mp
import numpy as np
import time
import pygame
import pyttsx3
import threading
from gaze_tracking.predictor import WordPredictor  # Use correct folder name here

# Initialize TTS and sound
engine = pyttsx3.init()
pygame.init()
try:
    click_sound = pygame.mixer.Sound("click.wav")
except:
    click_sound = None

# --- Language Support ---
# Define language options and their corresponding TTS voices
LANGUAGES = {
    "en": {"name": "English", "voice": None, "keyboard": "QWERTY"},
    "hi": {"name": "Hindi", "voice": None, "keyboard": "Hindi"}  # Example
}

# Find available voices for each language (simplified)
voices = engine.getProperty('voices')
for lang, lang_data in LANGUAGES.items():
    for voice in voices:
        if lang_data["name"].lower() in voice.name.lower():  # Basic check
            LANGUAGES[lang]["voice"] = voice.id
            break
    if LANGUAGES[lang]["voice"] is None:
        print(f"Warning: No suitable voice found for {lang_data['name']}")

CURRENT_LANGUAGE = "en"  # Default language

# --- UI Settings ---
FONT_SIZE = 1.2  # Default font size
TEXT_COLOR = (90, 70, 120) # Dark purple text
KEYBOARD_OPACITY = 0.9  # Adjust keyboard opacity

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

# --- Keyboard Layouts ---
KEYBOARD_LAYOUTS = {
    "QWERTY": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L", "_",
        "Z", "X", "C", "V", "B", "N", "M", "←", "🔊"
    ],
    "Hindi": [  # Example Hindi layout - needs actual mapping
        "अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ",
        "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ",
        "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न",
        "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "←", "🔊"
    ]
}

# Keyboard setup
keys_set = KEYBOARD_LAYOUTS["QWERTY"] # Default

# Fallback to these dimensions if we can't detect the screen size
# Most monitors will be at least this size
DEFAULT_SCREEN_WIDTH = 1280
DEFAULT_SCREEN_HEIGHT = 720

# Initialize video capture first to help with resolution detection
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

# Get camera resolution to help determine screen size
ret, frame = cap.read()
if ret:
    cam_height, cam_width = frame.shape[:2]
    print(f"Camera resolution: {cam_width}x{cam_height}")
    # Use camera resolution as minimum screen size
    DEFAULT_SCREEN_WIDTH = max(DEFAULT_SCREEN_WIDTH, cam_width)
    DEFAULT_SCREEN_HEIGHT = max(DEFAULT_SCREEN_HEIGHT, cam_height)

# Create main window
cv2.namedWindow("Gaze Keyboard", cv2.WINDOW_NORMAL)
cv2.setWindowProperty("Gaze Keyboard", cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)

# Try to get screen dimensions from pygame as a more reliable source
pygame.display.init()
info = pygame.display.Info()
SCREEN_WIDTH = info.current_w
SCREEN_HEIGHT = info.current_h

# Fallback if pygame doesn't work
if SCREEN_WIDTH <= 0 or SCREEN_HEIGHT <= 0:
    print("Using default dimensions")
    SCREEN_WIDTH = DEFAULT_SCREEN_WIDTH
    SCREEN_HEIGHT = DEFAULT_SCREEN_HEIGHT

print(f"Screen dimensions: {SCREEN_WIDTH}x{SCREEN_HEIGHT}")

# Adjust these values to maintain proportions
KEYBOARD_HEIGHT_RATIO = 0.40  # 40% of the total height
TEXT_AREA_HEIGHT_RATIO = 0.15  # 15% of the total height
WEBCAM_HEIGHT_RATIO = 0.45  # 45% of the total height

# Calculate component heights
KEYBOARD_HEIGHT = int(SCREEN_HEIGHT * KEYBOARD_HEIGHT_RATIO)
TEXT_AREA_HEIGHT = int(SCREEN_HEIGHT * TEXT_AREA_HEIGHT_RATIO)
WEBCAM_HEIGHT = int(SCREEN_HEIGHT * WEBCAM_HEIGHT_RATIO)

# Initialize UI components with dynamic sizes
keyboard = np.zeros((KEYBOARD_HEIGHT, SCREEN_WIDTH, 3), np.uint8)
text_area = np.zeros((TEXT_AREA_HEIGHT, SCREEN_WIDTH, 3), np.uint8)
webcam_display = np.zeros((WEBCAM_HEIGHT, SCREEN_WIDTH, 3), np.uint8)

# TTS Functions for threading
def speak_text(text_to_speak):
    """Speak text in a separate thread to avoid blocking the UI"""
    global CURRENT_LANGUAGE
    if not text_to_speak:
        return

    engine.stop()  # Stop any current speech
    voice_id = LANGUAGES[CURRENT_LANGUAGE]["voice"]
    if voice_id:
        engine.setProperty('voice', voice_id)
    engine.say(text_to_speak)
    engine.runAndWait()

def speak_async(text_to_speak):
    """Start a new thread for speaking"""
    speech_thread = threading.Thread(target=speak_text, args=(text_to_speak,))
    speech_thread.daemon = True  # Thread will close when main program exits
    speech_thread.start()

def draw_key(index, text, is_active):
    global FONT_SIZE, TEXT_COLOR
    # Calculate key dimensions based on screen width and keyboard height
    key_width = SCREEN_WIDTH // 10
    key_height = KEYBOARD_HEIGHT // 4

    x = (index % 10) * key_width
    y = (index // 10) * key_height

    padding = int(key_width * 0.08)  # 8% padding

    # Draw key with rounded corners
    color = KEY_ACTIVE if is_active else KEY_INACTIVE

    # Main key rectangle
    cv2.rectangle(keyboard,
                 (x+padding, y+padding),
                 (x+key_width-padding, y+key_height-padding),
                 color, -1)

    # Add subtle shadow effect
    if not is_active:
        cv2.rectangle(keyboard,
                     (x+padding, y+padding),
                     (x+key_width-padding, y+key_height-padding),
                     KEY_BORDER, 2)
    else:
        # Highlight effect for active key
        cv2.rectangle(keyboard,
                     (x+padding-2, y+padding-2),
                     (x+key_width-padding+2, y+key_height-padding+2),
                     (150, 120, 200), 2)

    # Text with better positioning
    font = cv2.FONT_HERSHEY_DUPLEX  # More modern font

    # Scale font based on key size
    font_scale = min(key_width, key_height) / 100.0
    scale = font_scale * (1.2 if len(text) == 1 else 0.9) * FONT_SIZE  # Use the global font size

    # Calculate text position for centering
    text_size = cv2.getTextSize(text, font, scale, 1)[0]
    text_x = x + (key_width - text_size[0]) // 2
    text_y = y + (key_height + text_size[1]) // 2

    # Text with subtle shadow for depth
    if is_active:
        cv2.putText(keyboard, text, (text_x+1, text_y+1), font, scale, (120, 100, 160), 1)
    cv2.putText(keyboard, text, (text_x, text_y), font, scale, TEXT_COLOR, 2)

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
    if avg < 0.4: return "RIGHT"
    elif avg > 0.6: return "LEFT"
    return "CENTER"

def create_rounded_rectangle(img, top_left, bottom_right, color, thickness, radius=None):
    """Draw a rectangle with rounded corners"""
    x1, y1 = top_left
    x2, y2 = bottom_right
    
    # If radius is None, calculate based on rectangle size
    if radius is None:
        radius = min(int((x2-x1) * 0.05), int((y2-y1) * 0.05), 20)  # Max 20px radius
    
    # Draw main rectangle
    cv2.rectangle(img, (x1+radius, y1), (x2-radius, y2), color, thickness)
    cv2.rectangle(img, (x1, y1+radius), (x2, y2-radius), color, thickness)
    
    # Draw the corners
    if thickness == -1:  # Filled rectangle
        cv2.circle(img, (x1+radius, y1+radius), radius, color, thickness)
        cv2.circle(img, (x2-radius, y1+radius), radius, color, thickness)
        cv2.circle(img, (x1+radius, y2-radius), radius, color, thickness)
        cv2.circle(img, (x2-radius, y2-radius), radius, color, thickness)
    else:
        cv2.circle(img, (x1+radius, y1+radius), radius, color, thickness)
        cv2.circle(img, (x2-radius, y1+radius), radius, color, thickness)
        cv2.circle(img, (x1+radius, y2-radius), radius, color, thickness)
        cv2.circle(img, (x2-radius, y2-radius), color, thickness)

# Predictor
predictor = WordPredictor()
suggestions = ["", "", ""]
last_spoken_suggestion = ""  # Track last spoken suggestion to avoid repetition

text = ""
letter_index = 0
blink_counter = 0
last_action = time.time()
cooldown = 0.4
suggest_active = False

# --- Settings Variables --
FONT_SIZE = 1.0
TEXT_COLOR = (90, 70, 120)

# Status indicators
status_text = "Ready"
status_color = (100, 180, 100)  # Green by default

while True:
    ret, frame = cap.read()
    if not ret: break
    frame = cv2.flip(frame, 1)
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = face_mesh.process(rgb)

    frame_h, frame_w = frame.shape[:2]
    current_time = time.time()
    
    # Reset status each loop
    status_text = "Ready"
    status_color = (100, 180, 100)
    ear_value = 0

    if results.multi_face_landmarks:
        landmarks = results.multi_face_landmarks[0]
        coords = [(int(p.x * frame_w), int(p.y * frame_h)) for p in landmarks.landmark]

        left_ear = calculate_ear(coords, [362, 385, 387, 263, 373, 380])
        right_ear = calculate_ear(coords, [33, 160, 158, 133, 153, 144])
        ear = (left_ear + right_ear) / 2
        ear_value = ear

        # Update status based on eye state
        if ear < 0.23:
            status_text = "Blink Detected"
            status_color = (50, 150, 250)  # Blue for blink
            blink_counter += 1
        else:
            gaze = get_gaze(coords)
            if gaze == "LEFT":
                status_text = "Looking Left"
                status_color = (180, 120, 200)  # Purple for left
            elif gaze == "RIGHT":
                status_text = "Looking Right"
                status_color = (180, 120, 200)  # Purple for right
                
            # Process blinks
            if blink_counter >= 1 and current_time - last_action > cooldown:
                print("Blink Detected ✅")
                if suggest_active:
                    text += " " + suggestions[letter_index % 3]
                else:
                    selected_key = keys_set[letter_index]
                    if selected_key == "←":
                        text = text[:-1]
                    elif selected_key == "_":
                        text += " "
                    elif selected_key == "🔊":
                        speak_async(text.strip())
                    else:
                        text += selected_key
                last_action = current_time
            blink_counter = 0

        # Process gaze direction for navigation
        if current_time - last_action > 0.3:
            if gaze == "LEFT":
                letter_index = max(letter_index - 1, 0)
                last_action = current_time
                
                # Speak the new suggestion when navigating in suggestion mode
                if suggest_active and letter_index < len(suggestions) and suggestions[letter_index]:
                    current_suggestion = suggestions[letter_index]
                    if current_suggestion != last_spoken_suggestion:
                        speak_async(current_suggestion)
                        last_spoken_suggestion = current_suggestion
                
            elif gaze == "RIGHT":
                max_index = 2 if suggest_active else len(keys_set) - 1
                letter_index = min(letter_index + 1, max_index)
                last_action = current_time
                
                # Speak the new suggestion when navigating in suggestion mode
                if suggest_active and letter_index < len(suggestions) and suggestions[letter_index]:
                    current_suggestion = suggestions[letter_index]
                    if current_suggestion != last_spoken_suggestion:
                        speak_async(current_suggestion)
                        last_spoken_suggestion = current_suggestion

    # Draw keyboard with enhanced UI - recreate for proper scaling
    keyboard = np.zeros((KEYBOARD_HEIGHT, SCREEN_WIDTH, 3), np.uint8)
    keyboard[:] = BG_COLOR
    suggest_active = text and text[-1] == " "
    
    # Add subtle background pattern - scale with screen size
    pattern_spacing = max(int(SCREEN_WIDTH / 30), 1)  # Ensure pattern_spacing is at least 1
    for i in range(0, SCREEN_WIDTH, pattern_spacing):
        cv2.line(keyboard, (i, 0), (i, KEYBOARD_HEIGHT), (245, 240, 250), 1)
    for i in range(0, KEYBOARD_HEIGHT, pattern_spacing):
        cv2.line(keyboard, (0, i), (SCREEN_WIDTH, i), (245, 240, 250), 1)
    
    if suggest_active:
        # Get the last typed word for suggestions
        last_word = text.strip().split(" ")[-1] if text.strip() else ""
        
        # Get word suggestions based on last complete word as context and current partial word
        words = text.strip().split(" ")
        context = words[-2] if len(words) >= 2 else ""
        current_word = words[-1] if words else ""
        
        # Fix: Pass context as a parameter to suggest() method
        suggestions = predictor.suggest(current_word, context)
        suggestions += [""] * (3 - len(suggestions))
        
        # Speak the currently focused suggestion if it's new
        if letter_index < len(suggestions) and suggestions[letter_index] and suggestions[letter_index] != last_spoken_suggestion:
            speak_async(suggestions[letter_index])
            last_spoken_suggestion = suggestions[letter_index]
        
        # Draw suggestion section with better styling
        cv2.rectangle(keyboard, (0, 0), (SCREEN_WIDTH, KEYBOARD_HEIGHT // 4), (240, 235, 250), -1)
        for i in range(3):
            # Calculate positions for wider suggestion keys
            suggestion_width = SCREEN_WIDTH // 3
            x = i * suggestion_width
            # Draw rounded rectangle for suggestions
            create_rounded_rectangle(keyboard, 
                                    (x + int(suggestion_width*0.05), int(KEYBOARD_HEIGHT*0.05)), 
                                    (x + int(suggestion_width*0.95), int(KEYBOARD_HEIGHT*0.20)), 
                                    KEY_ACTIVE if i == letter_index % 3 else KEY_INACTIVE, -1)
            create_rounded_rectangle(keyboard, 
                                    (x + int(suggestion_width*0.05), int(KEYBOARD_HEIGHT*0.05)), 
                                    (x + int(suggestion_width*0.95), int(KEYBOARD
                                    (x + int(suggestion_width*0.95), int(KEYBOARD*0.20)),
                                    KEY_BORDER, 2)
            
            # Add text with shadow effect - scale font to screen size
            font = cv2.FONT_HERSHEY_DUPLEX
            font_scale = max(SCREEN_HEIGHT / 1080 * 0.9, 0.6)  # Scale based on screen height
            text_size = cv2.getTextSize(suggestions[i], font, font_scale, 1)[0]
            text_x = x + (suggestion_width - text_size[0]) // 2
            text_y = int(KEYBOARD_HEIGHT * 0.15)
            cv2.putText(keyboard, suggestions[i], (text_x, text_y), font, font_scale, TEXT_COLOR, 1)
        
        # Instruction header with nicer styling
        cv2.rectangle(keyboard, (0, KEYBOARD_HEIGHT // 4), (SCREEN_WIDTH, int(KEYBOARD_HEIGHT * 0.35)), (180, 155, 220), -1)
        font_scale = max(SCREEN_HEIGHT / 1080 * 0.8, 0.5)
        cv2.putText(keyboard, "Blink to select word suggestion", 
                   (SCREEN_WIDTH // 3, int(KEYBOARD_HEIGHT * 0.32)), 
                   cv2.FONT_HERSHEY_SIMPLEX, font_scale, (255, 255, 255), 1)
    else:
        # Reset last spoken suggestion when not in suggestion mode
        last_spoken_suggestion = ""
        
        # Use selected keyboard layout
        selected_keyboard_layout = LANGUAGES[CURRENT_LANGUAGE]["keyboard"]
        keys_set = KEYBOARD_LAYOUTS.get(selected_keyboard_layout, KEYBOARD_LAYOUTS["QWERTY"]) # Use QWERTY as fallback
        
        for i in range(len(keys_set)):
            draw_key(i, keys_set[i], i == letter_index)
        
        # Instruction header with nicer styling - scale with screen
        header_height = int(KEYBOARD_HEIGHT * 0.1)
        cv2.rectangle(keyboard, (0, 0), (SCREEN_WIDTH, header_height), (180, 155, 220), -1)
        font_scale = max(SCREEN_HEIGHT / 1080 * 0.8, 0.5)  # Minimum scale of 0.5
        instruction = "Look left/right to move, blink to select"
        text_size = cv2.getTextSize(instruction, cv2.FONT_HERSHEY_SIMPLEX, font_scale, 1)[0]
        text_x = (SCREEN_WIDTH - text_size[0]) // 2  # Center text
        cv2.putText(keyboard, instruction, 
                   (text_x, int(header_height * 0.7)), 
                   cv2.FONT_HERSHEY_SIMPLEX, font_scale, (255, 255, 255), 1)

    # Create an improved text area with better styling - recreate for proper scaling
    text_area = np.zeros((TEXT_AREA_HEIGHT, SCREEN_WIDTH, 3), np.uint8)
    text_area[:] = TEXT_AREA_BG
    
    # Calculate padding based on screen size
    padding_x = int(SCREEN_WIDTH * 0.02)
    padding_y = int(TEXT_AREA_HEIGHT * 0.15)
    
    # Use a more readable font
    font = cv2.FONT_HERSHEY_DUPLEX
    font_scale = max(SCREEN_HEIGHT / 1080 * FONT_SIZE * 1.2, 0.7)  # Adjust scale relative to screen height
    text_size = cv2.getTextSize(text, font, font_scale, 1)[0]
    
    # Dynamically adjust position to keep text centered
    text_x = padding_x
    text_y = TEXT_AREA_HEIGHT // 2 + text_size[1] // 2
    
    # Enhanced text shadow for better readability
    cv2.putText(text_area, text, (text_x+2, text_y+2), font, font_scale, (40, 30, 60), 2)  # Shadow
    cv2.putText(text_area, text, (text_x, text_y), font, font_scale, TEXT_COLOR, 2)  # Main text

    # Display webcam feed - Scale to fit properly - recreate for proper scaling
    webcam_display = cv2.resize(frame, (SCREEN_WIDTH, WEBCAM_HEIGHT))

    # Combine all parts
    combined_display = np.vstack((webcam_display, text_area, keyboard))
    
    # Display status text - with shadow for better readability - scale with screen
    font_scale = max(SCREEN_HEIGHT / 1080 * 1.1, 0.6)
    status_size = cv2.getTextSize(status_text, cv2.FONT_HERSHEY_DUPLEX, font_scale, 1)[0]
    status_x = (SCREEN_WIDTH - status_size[0]) // 2
    status_y = WEBCAM_HEIGHT + TEXT_AREA_HEIGHT + KEYBOARD_HEIGHT - int(KEYBOARD_HEIGHT * 0.05) # Bottom aligned
    cv2.putText(combined_display, status_text, (status_x + 1, status_y + 1), cv2.FONT_HERSHEY_DUPLEX, font_scale, (20, 20, 30), 2) # Shadow
    cv2.putText(combined_display, status_text, (status_x, status_y), cv2.FONT_HERSHEY_DUPLEX, font_scale, status_color, 2)

    cv2.imshow("Gaze Keyboard", combined_display)

    key = cv2.waitKey(1)
    if key == 27: # ESC
        break
    elif key == ord(' '): # Spacebar - simulate blink
        if suggest_active:
            text += " " + suggestions[letter_index % 3]
        else:
            selected_key = keys_set[letter_index]
            if selected_key == "←":
                text = text[:-1]
            elif selected_key == "_":
                text += " "
            elif selected_key == "🔊":
                speak_async(text.strip())
            else:
                text += selected_key
        last_action = current_time

    elif key == ord('Q') or key == ord('q'):  # Q - adjust to left
         letter_index = max(letter_index - 1, 0)
    elif key == ord('E') or  key == ord('e'):  # E - adjust to the right
         max_index = 2 if suggest_active else len(keys_set) - 1
         letter_index = min(letter_index + 1, max_index)
    # --- Settings ---
    elif key == ord('+'):  # Increase font size
        FONT_SIZE = min(FONT_SIZE + 0.1, 2.0)
    elif key == ord('-'):  # Decrease font size
        FONT_SIZE = max(FONT_SIZE - 0.1, 0.5)
    elif key == ord('L') or key == ord('l'):
        # Cycle through languages - needs more sophisticated handling for real use
        lang_codes = list(LANGUAGES.keys())
        current_index = lang_codes.index(CURRENT_LANGUAGE)
        next_index = (current_index + 1) % len(lang_codes)
        CURRENT_LANGUAGE = lang_codes[next_index]
        keys_set = KEYBOARD_LAYOUTS.get(LANGUAGES[CURRENT_LANGUAGE]["keyboard"], KEYBOARD_LAYOUTS["QWERTY"])

    elif key == ord('C') or key == ord('c'):
        #Cycle Through Colors
        color_options = [(90, 70, 120), (0, 0, 0), (255, 255, 255)] #Dark Purple, Black, White
        current_index = color_options.index(tuple(TEXT_COLOR))
        next_index = (current_index + 1) % len(color_options)
        TEXT_COLOR = color_options[next_index]

cap.release()
cv2.destroyAllWindows()`)
                  }
                >
                  Copy Full Code
                </Button>
                <pre>{`import cv2
import mediapipe as mp
import numpy as np
import time
import pygame
import pyttsx3
import threading
from gaze_tracking.predictor import WordPredictor  # Use correct folder name here

# Initialize TTS and sound
engine = pyttsx3.init()
pygame.init()
try:
    click_sound = pygame.mixer.Sound("click.wav")
except:
    click_sound = None

# --- Language Support ---
# Define language options and their corresponding TTS voices
LANGUAGES = {
    "en": {"name": "English", "voice": None, "keyboard": "QWERTY"},
    "hi": {"name": "Hindi", "voice": None, "keyboard": "Hindi"}  # Example
}

# Find available voices for each language (simplified)
voices = engine.getProperty('voices')
for lang, lang_data in LANGUAGES.items():
    for voice in voices:
        if lang_data["name"].lower() in voice.name.lower():  # Basic check
            LANGUAGES[lang]["voice"] = voice.id
            break
    if LANGUAGES[lang]["voice"] is None:
        print(f"Warning: No suitable voice found for {lang_data['name']}")

CURRENT_LANGUAGE = "en"  # Default language

# --- UI Settings ---
FONT_SIZE = 1.2  # Default font size
TEXT_COLOR = (90, 70, 120) # Dark purple text
KEYBOARD_OPACITY = 0.9  # Adjust keyboard opacity

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

# --- Keyboard Layouts ---
KEYBOARD_LAYOUTS = {
    "QWERTY": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L", "_",
        "Z", "X", "C", "V", "B", "N", "M", "←", "🔊"
    ],
    "Hindi": [  # Example Hindi layout - needs actual mapping
        "अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ",
        "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ",
        "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न",
        "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "←", "🔊"
    ]
}

# Keyboard setup
keys_set = KEYBOARD_LAYOUTS["QWERTY"] # Default

# ... (code continues)
`}</pre>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Create the WordPredictor class</h4>
                <p className="text-muted-foreground mb-4">
                  Create a file named <code>gaze_tracking/predictor.py</code> with the following content:
                </p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto max-h-60 text-sm font-mono relative">
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 bg-pink-500 hover:bg-pink-600"
                    onClick={() =>
                      copyToClipboard(`class WordPredictor:
    def __init__(self):
        # Common English words for prediction
        self.frequent_words = [
            "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
            "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
            "this", "but", "his", "by", "from", "they", "we", "say", "her", "she"
        ]
        
        # Word associations for better prediction
        self.dictionary = {
            'h': ["hello", "hi", "hey", "how", "help"],
            'w': ["world", "welcome", "why", "what", "when"],
            't': ["the", "this", "that", "they", "there"],
            'a': ["and", "all", "about", "are", "as"],
            'i': ["in", "is", "it", "if", "into"],
            'y': ["you", "your", "yes", "yet", "year"],
            'n': ["no", "not", "now", "new", "never"],
        }
    
    def suggest(self, input_text, context=""):
        """Suggest words based on current input and context"""
        if not input_text:
            return self.get_frequent_words(context)
        
        prefix = input_text.lower()
        first_char = prefix[0]
        
        # Get words starting with the same letter
        candidates = self.dictionary.get(first_char, [])
        
        # Filter candidates that match the prefix
        candidates = [word for word in candidates if word.startswith(prefix)]
        
        # If we have context, prioritize words that often follow it
        if context:
            candidates = self.prioritize_by_context(candidates, context)
        
        # If we don't have enough candidates, add some frequent words
        if len(candidates) < 3:
            frequent_candidates = [
                word for word in self.frequent_words 
                if word.startswith(prefix) and word not in candidates
            ][:3-len(candidates)]
            
            candidates = candidates + frequent_candidates
        
        # Return top 3 suggestions (or fewer if not available)
        return candidates[:3]
    
    def get_frequent_words(self, context):
        """Get frequent words, potentially influenced by context"""
        if not context:
            return self.frequent_words[:3]
        
        # Simple context-based suggestion
        context_lower = context.lower()
        if context_lower == "how":
            return ["are", "is", "do"]
        elif context_lower == "i":
            return ["am", "will", "have"]
        elif context_lower == "they":
            return ["are", "will", "have"]
        else:
            return self.frequent_words[:3]
    
    def prioritize_by_context(self, candidates, context):
        """Prioritize words based on context"""
        context_lower = context.lower()
        
        # Simple word pairs for demonstration
        common_pairs = {
            "i": ["am", "will", "have", "can", "would"],
            "you": ["are", "will", "have", "can", "would"],
            "they": ["are", "will", "have", "can", "would"],
            "we": ["are", "will", "have", "can", "would"],
            "can": ["you", "i", "we", "they", "it"],
            "will": ["you", "i", "we", "they", "it"],
            "would": ["you", "i", "we", "they", "it"],
            "hello": ["world", "there", "everyone", "friend", "all"],
            "thank": ["you", "everyone", "all", "god", "goodness"],
            "good": ["morning", "afternoon", "evening", "night", "day"],
        }
        
        follow_words = common_pairs.get(context_lower, [])
        
        # Sort candidates by whether they're common follow words
        return sorted(candidates, key=lambda word: 
                     (follow_words.index(word) if word in follow_words else len(follow_words)))
`)
                    }
                  >
                    Copy Code
                  </Button>
                  <pre>{`class WordPredictor:
    def __init__(self):
        # Common English words for prediction
        self.frequent_words = [
            "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
            "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
            "this", "but", "his", "by", "from", "they", "we", "say", "her", "she"
        ]
        
        # Word associations for better prediction
        self.dictionary = {
            'h': ["hello", "hi", "hey", "how", "help"],
            'w': ["world", "welcome", "why", "what", "when"],
            't': ["the", "this", "that", "they", "there"],
            'a': ["and", "all", "about", "are", "as"],
            'i': ["in", "is", "it", "if", "into"],
            'y': ["you", "your", "yes", "yet", "year"],
            'n': ["no", "not", "now", "new", "never"],
        }
    
    def suggest(self, input_text, context=""):
        """Suggest words based on current input and context"""
        # ... (method implementation)
`}</pre>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Project Structure</h4>
                <p className="text-muted-foreground mb-4">Make sure your project has the following structure:</p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono">
                  <pre>{`eye-tracking-keyboard/
├── main.py                  # Main application file
├── gaze_tracking/
│   ├── __init__.py          # Empty file to make the directory a package
│   └── predictor.py         # Word prediction module
└── requirements.txt         # Dependencies`}</pre>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Requirements</h4>
                <p className="text-muted-foreground mb-4">
                  Create a <code>requirements.txt</code> file with the following dependencies:
                </p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono relative">
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 bg-pink-500 hover:bg-pink-600"
                    onClick={() =>
                      copyToClipboard(`opencv-python>=4.5.0
mediapipe>=0.8.9
numpy>=1.19.0
pygame>=2.0.0
pyttsx3>=2.90`)
                    }
                  >
                    Copy Code
                  </Button>
                  <pre>{`opencv-python>=4.5.0
mediapipe>=0.8.9
numpy>=1.19.0
pygame>=2.0.0
pyttsx3>=2.90`}</pre>
                </div>
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
            <h2 className="text-2xl font-bold mb-4 gradient-text pink-glow">Need help with installation?</h2>
            <div className="absolute -top-4 -right-4 w-8 h-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 animate-ping"></div>
              <div className="absolute inset-1 rounded-full bg-white dark:bg-pink-950 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-pink-500" />
              </div>
            </div>
          </div>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Our support team is available to help you get the application up and running on your system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
            >
              <Link href="/support">Contact Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-pink-300 dark:border-pink-700 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
            >
              <Link href="/demo">View Online Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
