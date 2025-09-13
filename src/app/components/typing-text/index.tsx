"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextWithImageProps {
  text: string;
  imageSrc: string;
  speed?: number; // ms per character
  repeatDelay?: number; // delay before repeating (ms)
  imageDelay?: number; // delay before image appears after typing (ms)
}

export default function TypingTextWithImage({
  text,
  imageSrc,
  speed = 50,
  repeatDelay = 2000,
  imageDelay = 500,
}: TypingTextWithImageProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Finished typing
      timeout = setTimeout(() => setShowImage(true), imageDelay); // show image
      timeout = setTimeout(() => setIsDeleting(true), repeatDelay); // start deleting after repeatDelay
    } else if (isDeleting && index > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed / 2);
      setShowImage(false); // hide image when deleting
    } else if (isDeleting && index === 0) {
      // Reset to type again
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, repeatDelay, imageDelay]);

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="text-sm font-semibold">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
      {showImage && (
        <motion.img
          src={imageSrc}
          alt="Illustration"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-64 mt-4 rounded-lg shadow-lg"
        />
      )}
    </div>
  );
}
