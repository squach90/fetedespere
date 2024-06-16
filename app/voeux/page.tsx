// pages/voeux.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import styles from "../styles/Voeux.module.css";

const Voeux: React.FC = () => {
  useEffect(() => {
    // Lancer les confettis lors du chargement de la page
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className={styles.bigzoom}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bonne fête des pères !</h1>
        <p className={styles.message}>Je t&apos;aime papa.</p>
        <div className={styles.animation}>
          <span className={styles.heart}>❤️</span>
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <Button className={styles.button}>Cliquez pour un cadeau</Button>
        </a>
      </div>
    </div>
  );
};

export default Voeux;
