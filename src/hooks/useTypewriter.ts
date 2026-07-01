import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
}

export function useTypewriter(words: string[], options: UseTypewriterOptions = {}) {
  const {
    typingSpeed = 90,
    deletingSpeed = 55,
    pauseAfterType = 1800,
    pauseAfterDelete = 350,
  } = options;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && text === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pauseAfterDelete);
    } else {
      const nextText = isDeleting ? text.slice(0, -1) : currentWord.slice(0, text.length + 1);
      timeoutId = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return text;
}
