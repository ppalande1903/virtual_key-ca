"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Eye, ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function DemoPage() {
  const router = useRouter()

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
            <div className="aspect-video bg-gradient-to-br from-pink-900 to-purple-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-white z-10 p-6">
                <h2 className="text-2xl font-bold mb-4">Full Application Required</h2>
                <p className="mb-6">
                  The eye-tracking keyboard requires Python and specific libraries that cannot run directly in a web
                  browser.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  <Link href="/download">
                    <Eye className="mr-2 h-4 w-4" />
                    Download Full Application
                  </Link>
                </Button>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Why Download?</h3>
                <p className="text-muted-foreground mb-4">
                  The eye-tracking keyboard uses advanced computer vision libraries that require:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li className="text-muted-foreground">
                    <strong className="text-pink-600 dark:text-pink-400">OpenCV and MediaPipe</strong> for precise
                    facial landmark detection
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-pink-600 dark:text-pink-400">Direct webcam access</strong> for
                    high-performance video processing
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-pink-600 dark:text-pink-400">PyTTSx3</strong> for natural text-to-speech
                    capabilities
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-pink-600 dark:text-pink-400">Low-latency processing</strong> for real-time
                    eye tracking
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Features</h3>
                <ul className="space-y-2 list-disc pl-6">
                  <li className="text-muted-foreground">Precise eye movement tracking</li>
                  <li className="text-muted-foreground">Blink detection for key selection</li>
                  <li className="text-muted-foreground">AI-powered word prediction</li>
                  <li className="text-muted-foreground">Text-to-speech capabilities</li>
                  <li className="text-muted-foreground">Multiple language support</li>
                  <li className="text-muted-foreground">Customizable interface</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
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
          onClick={() => router.push("/download")}
        >
          Download Application
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
