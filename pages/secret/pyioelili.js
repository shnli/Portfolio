import { useState, useEffect } from "react";
import Link from "next/link";

export default function Mom() {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsEnglish(!isEnglish);
    }, 3000);
    return () => clearInterval(timer);
  }, [isEnglish]);

  const handleCelebrateHover = () => {
    const confettiContainer = document.getElementById("confetti-container");

    const confetti = document.createElement("div");
    confetti.classList.add(
      "absolute",
      "text-6xl",
      "animate-confetti",
      "pointer-events-none"
    );
    confetti.innerHTML = "💖";

    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    confetti.style.left = `${randomX}px`;
    confetti.style.top = `${randomY}px`;

    confettiContainer.appendChild(confetti);

    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  };
  return (
    <div className="h-screen font-jost bg-off_white text-lg">
      <div className="flex flex-col justify-center items-center text-center gap-12 h-full z-10 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white">
        <div className="absolute bottom-0 right-24 m-auto z-0 hidden md:flex">
          <img
            src="./mothersday/heart.gif"
            alt="flowers"
            className="min-w-[100px]"
          ></img>
        </div>
        <div className="absolute bottom-0 left-24 z-0 hidden md:flex">
          <img
            src="./mothersday/heart.gif"
            alt="flowers"
            className="min-w-[100px] transform scale-x-[-1]"
          ></img>
        </div>
        <div className="font-merriweather text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <img
            src="./mothersday/landing_mom.png"
            alt="MOMMY"
            className="animate-[wiggle_1s_ease-in-out_infinite] top-36 left-0 right-0 m-auto min-w-[300px] absolute z-20"
          ></img>
          <div
            className={`absolute top-36 left-0 right-0 m-auto transition-opacity duration-1000 ${
              isEnglish ? "opacity-100" : "opacity-0"
            }`}
          >
            Happy Mother&apos;s Day!
          </div>
          <div
            className={`absolute top-36 left-0 right-0 m-auto transition-opacity duration-1000 ${
              isEnglish ? "opacity-0" : "opacity-100"
            }`}
          >
            母亲节快乐, 妈妈!
          </div>
        </div>

        <div className="absolute bottom-36 left-0 right-0 m-auto flex items-center justify-center">
          <Link href="/motes">
            <div
              className="hover:bg-black hover:text-off_white hover:cursor-pointer border-[1px] rounded-lg border-black px-4 py-2"
              onMouseEnter={handleCelebrateHover}
            >
              <div className="">Let&apos;s Celebrate</div>
            </div>
          </Link>
        </div>
        <div className="absolute bottom-8 left-0 right-0 m-auto flex items-center justify-center text-sm opacity-50">
          For my Mama, I love you. May 12, 2024
        </div>
      </div>
      <div
        id="confetti-container"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></div>
    </div>
  );
}
