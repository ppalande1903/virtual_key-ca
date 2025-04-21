"use client"

export class WordPredictor {
  private dictionary: Record<string, string[]>
  private frequentWords: string[]

  constructor() {
    // Common English words for prediction
    this.frequentWords = [
      "the",
      "be",
      "to",
      "of",
      "and",
      "a",
      "in",
      "that",
      "have",
      "I",
      "it",
      "for",
      "not",
      "on",
      "with",
      "he",
      "as",
      "you",
      "do",
      "at",
      "this",
      "but",
      "his",
      "by",
      "from",
      "they",
      "we",
      "say",
      "her",
      "she",
      "or",
      "an",
      "will",
      "my",
      "one",
      "all",
      "would",
      "there",
      "their",
      "what",
      "so",
      "up",
      "out",
      "if",
      "about",
      "who",
      "get",
      "which",
      "go",
      "me",
    ]

    // Word associations for better prediction
    this.dictionary = {
      h: ["hello", "hi", "hey", "how", "help"],
      w: ["world", "welcome", "why", "what", "when"],
      t: ["the", "this", "that", "they", "there"],
      a: ["and", "all", "about", "are", "as"],
      i: ["in", "is", "it", "if", "into"],
      y: ["you", "your", "yes", "yet", "year"],
      n: ["no", "not", "now", "new", "never"],
      s: ["so", "see", "say", "some", "such"],
      m: ["my", "me", "more", "most", "make"],
      c: ["can", "come", "could", "call", "change"],
      d: ["do", "day", "down", "did", "don't"],
      f: ["for", "from", "find", "first", "few"],
      g: ["go", "get", "good", "give", "great"],
      l: ["like", "look", "love", "life", "long"],
      p: ["people", "part", "place", "point", "put"],
      r: ["right", "really", "read", "run", "room"],
      b: ["be", "but", "by", "back", "because"],
      e: ["even", "every", "eye", "early", "each"],
      j: ["just", "job", "join", "jump", "joy"],
      k: ["know", "keep", "kind", "key", "kill"],
      o: ["of", "on", "one", "only", "other"],
      u: ["up", "use", "us", "under", "until"],
      v: ["very", "view", "voice", "value", "visit"],
      x: ["x-ray", "xylophone", "xenon", "xerox", "xmas"],
      z: ["zero", "zone", "zoom", "zebra", "zeal"],
    }
  }

  // Suggest words based on current input and context
  suggest(input: string, context = ""): string[] {
    if (!input) {
      return this.getFrequentWords(context)
    }

    const prefix = input.toLowerCase()
    const firstChar = prefix.charAt(0)

    // Get words starting with the same letter
    let candidates = this.dictionary[firstChar] || []

    // Filter candidates that match the prefix
    candidates = candidates.filter((word) => word.startsWith(prefix))

    // If we have context, prioritize words that often follow it
    if (context) {
      candidates = this.prioritizeByContext(candidates, context)
    }

    // If we don't have enough candidates, add some frequent words
    if (candidates.length < 3) {
      const frequentCandidates = this.frequentWords
        .filter((word) => word.startsWith(prefix) && !candidates.includes(word))
        .slice(0, 3 - candidates.length)

      candidates = [...candidates, ...frequentCandidates]
    }

    // Return top 3 suggestions (or fewer if not available)
    return candidates.slice(0, 3)
  }

  // Get frequent words, potentially influenced by context
  private getFrequentWords(context: string): string[] {
    if (!context) {
      return this.frequentWords.slice(0, 3)
    }

    // Simple context-based suggestion
    const contextLower = context.toLowerCase()
    if (contextLower === "how") {
      return ["are", "is", "do"]
    } else if (contextLower === "i") {
      return ["am", "will", "have"]
    } else if (contextLower === "they") {
      return ["are", "will", "have"]
    } else if (contextLower === "can") {
      return ["you", "i", "we"]
    } else if (contextLower === "would") {
      return ["you", "like", "be"]
    } else {
      return this.frequentWords.slice(0, 3)
    }
  }

  // Prioritize words based on context
  private prioritizeByContext(candidates: string[], context: string): string[] {
    const contextLower = context.toLowerCase()

    // Simple word pairs for demonstration
    const commonPairs: Record<string, string[]> = {
      i: ["am", "will", "have", "can", "would"],
      you: ["are", "will", "have", "can", "would"],
      they: ["are", "will", "have", "can", "would"],
      we: ["are", "will", "have", "can", "would"],
      can: ["you", "i", "we", "they", "it"],
      will: ["you", "i", "we", "they", "it"],
      would: ["you", "i", "we", "they", "it"],
      hello: ["world", "there", "everyone", "friend", "all"],
      thank: ["you", "everyone", "all", "god", "goodness"],
      good: ["morning", "afternoon", "evening", "night", "day"],
    }

    const followWords = commonPairs[contextLower] || []

    // Sort candidates by whether they're common follow words
    return [...candidates].sort((a, b) => {
      const aIndex = followWords.indexOf(a)
      const bIndex = followWords.indexOf(b)

      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
      } else if (aIndex !== -1) {
        return -1
      } else if (bIndex !== -1) {
        return 1
      } else {
        return 0
      }
    })
  }
}
