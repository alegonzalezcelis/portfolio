import React, { useRef, useEffect } from "react";

const Header = () => {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  const textArray = ["Desarrollador FrontEnd", "Ingeniero Informático"];
  const typingDelay = 50;
  const erasingDelay = 50;
  const newTextDelay = 1000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;
    // Resto del código de la función type
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;
    // Resto del código de la función erase
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });

  if (textArray.length) setTimeout(type, newTextDelay + 250);

  return (
    <>
      <header className="container w-full px-5 md:px-0 mx-auto flex flex-col justify-between text-white">
        <div className="mt-10">
          <h1 className="mb-4 mt-10 text-2xl md:text-6xl font-medium">Hola</h1>
          <h2 className="mb-4 text-2xl md:text-6xl font-medium">
            Soy <span className="font-semibold">Alejandro González Celis</span>
          </h2>
          <span
            ref={typedTextRef}
            className="text-2xl md:text-7xl text-sky font-bold"
          ></span>
          <span ref={cursorRef} className="text-sky"></span>
          <p className="my-4 text-md md:text-lg w-full md:w-1/2 text-justify font-semibold">
            Mi enfoque principal es crear interfaces de usuario intuitivas y
            atractivas que proporcionen una gran experiencia de usuario.
          </p>
          <div className="h-24 flex">
            <a href="mailto:alegonzalez1993@gmail.com" target="_blank">
              <button
                type="button"
                className="text-white hover:text-white border border-sky hover:bg-cyan focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:mt-10"
              >
                <i className="fa-solid fa-envelope text-xl w-3 h-4 mr-2"></i>
                Conversemos
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1bbCNYKOJMFidcjX0-iFTn4_Eh3vVINqf/view?usp=sharing"
              target="_blank"
            >
              <button
                type="button"
                className="text-white hover:text-white border border-sky hover:bg-cyan focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:mt-10"
              >
                <i className="fa-solid fa-file-arrow-down text-xl w-3 h-4 mr-2"></i>
                Currículum
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
