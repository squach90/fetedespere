// components/HomePage.tsx
"use client"; // Assure-toi que ce composant est un composant client

import { useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import "../styles/Zoom.css";

const HomePage: React.FC = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const css = `
        #my {
            zoom: 120%;
        }
        `;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <style>{css}</style>
      <h1 className="text-6xl font-bold text-gray-800 animate-pulse">
        Bienvenue Papa comment vas-tu ?
      </h1>
      <p className="mt-4 text-xl text-gray-600 italic">
        Les vrai geekos 🤓 reste dans leur grotte (N&apos;est ce pas ? 🧐 )
      </p>
      <Link href="/voeux">
        <Button className="mt-6">Clique ici pour voir tes vœux</Button>
      </Link>
      <Button onClick={handleConfetti} className="mt-4">
        Lance les confettis 🎉
      </Button>
    </div>
  );
};

export default HomePage;
