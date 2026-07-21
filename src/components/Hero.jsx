import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const heroLines = [
  'CODE ENCLAVE LLC',
  'Custom Web and Software Engineering',
  '> Built for performance, scale, and business growth.'
];

const Hero = () => {
  const [typedLines, setTypedLines] = useState(() => Array(heroLines.length).fill(''));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [typedButton, setTypedButton] = useState('');
  const [buttonCharIndex, setButtonCharIndex] = useState(0);
  const [typedScrollHint, setTypedScrollHint] = useState('');
  const [scrollHintCharIndex, setScrollHintCharIndex] = useState(0);
  const [isStaticHero, setIsStaticHero] = useState(false);
  const promptPrefix = '> ';
  const buttonText = 'Engineer Your Next Solution';
  const scrollHintText = 'Scroll to explore';
  const typingSpeed = 17;
  const lineTextClass = 'md:text-4xl sm:text-3xl text-2xl';

  useEffect(() => {
    const updateStaticHeroPreference = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const useStaticHero = prefersReducedMotion;

      setIsStaticHero(useStaticHero);

      if (useStaticHero) {
        setTypedLines(heroLines);
        setLineIndex(heroLines.length);
        setCharIndex(0);
        setShowButton(true);
        setTypedButton(buttonText);
        setButtonCharIndex(buttonText.length + 1);
        setTypedScrollHint(scrollHintText);
        setScrollHintCharIndex(scrollHintText.length + 1);
      }
    };

    updateStaticHeroPreference();
    window.addEventListener('resize', updateStaticHeroPreference);

    return () => {
      window.removeEventListener('resize', updateStaticHeroPreference);
    };
  }, []);

  const renderTypedLine = (line, index) => {
    const isActiveLine = !showButton && lineIndex === index;
    const hasLineStarted = index < lineIndex || isActiveLine || line.length > 0;
    const safeLine = line || '\u00A0';

    return (
      <>
        {hasLineStarted ? promptPrefix : '\u00A0\u00A0'}
        {safeLine}
        {!isStaticHero && isActiveLine && (
          <motion.span
            animate={{opacity: [1, 1, 0, 0, 1, 1]}}
            transition={{
              duration: 1.04,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.44, 0.45, 0.9, 0.91, 1]
            }}
            className='font-black text-[1.05em]'
          >
            _
          </motion.span>
        )}
      </>
    );
  };

  useEffect(() => {
    if (isStaticHero) {
      return;
    }

    if (lineIndex >= heroLines.length) {
      if (!showButton) {
        setShowButton(true);
      }
      return;
    }

    const activeLine = heroLines[lineIndex];

    if (charIndex <= activeLine.length) {
      const typeTimer = setTimeout(() => {
        setTypedLines((prevLines) => {
          const nextLines = [...prevLines];
          nextLines[lineIndex] = activeLine.slice(0, charIndex);
          return nextLines;
        });
        setCharIndex((prevChar) => prevChar + 1);
      }, typingSpeed);

      return () => clearTimeout(typeTimer);
    }

    const nextLineTimer = setTimeout(() => {
      setLineIndex((prevLine) => prevLine + 1);
      setCharIndex(0);
    }, 110);

    return () => clearTimeout(nextLineTimer);
  }, [charIndex, lineIndex, showButton, isStaticHero]);

  useEffect(() => {
    if (isStaticHero) {
      return;
    }

    if (!showButton) {
      return;
    }

    if (buttonCharIndex > buttonText.length) {
      return;
    }

    const buttonTypeTimer = setTimeout(() => {
      setTypedButton(buttonText.slice(0, buttonCharIndex));
      setButtonCharIndex((prevChar) => prevChar + 1);
    }, typingSpeed);

    return () => clearTimeout(buttonTypeTimer);
  }, [showButton, buttonCharIndex, isStaticHero]);

  const isButtonTypingComplete = typedButton.length >= buttonText.length;

  useEffect(() => {
    if (isStaticHero) {
      return;
    }

    if (!isButtonTypingComplete) {
      return;
    }

    if (scrollHintCharIndex > scrollHintText.length) {
      return;
    }

    const scrollHintTypeTimer = setTimeout(() => {
      setTypedScrollHint(scrollHintText.slice(0, scrollHintCharIndex));
      setScrollHintCharIndex((prevChar) => prevChar + 1);
    }, typingSpeed);

    return () => clearTimeout(scrollHintTypeTimer);
  }, [isButtonTypingComplete, scrollHintCharIndex, isStaticHero]);

  const isScrollHintTypingComplete = typedScrollHint.length >= scrollHintText.length;
  const showFinalPrompt = showButton && isButtonTypingComplete && isScrollHintTypingComplete;

  return (

    


    <div className='overlay-container mt-[-96px] pt-[96px]'>
      <div className='w-full max-w-[1240px] h-screen mx-auto px-4 text-left flex flex-col justify-center items-start overlay-content retro-display'>
        
        <h1 className={`${lineTextClass} md:py-6 min-h-[3.25rem] md:min-h-[4rem] w-full flex items-center justify-start`}>
          {renderTypedLine(typedLines[0], 0)}
        </h1>
        <div className='w-full flex justify-start items-center min-h-[3rem] md:min-h-[3.75rem]'>
          <p className={`${lineTextClass} py-4`}>
          {renderTypedLine(typedLines[1], 1)}
          </p>
        </div>
        <p className={`${lineTextClass} w-full tracking-tight py-10 h-[12rem] sm:h-[11rem] md:h-[10rem] lg:h-[9rem] pl-[2ch] -indent-[2ch]`}>
          {renderTypedLine(typedLines[2], 2)}
        </p>
        <div className='w-full min-h-[5rem] flex items-center'>
          <Link
            to='/services'
            className={`${lineTextClass} font-medium my-6 py-1 self-start text-left p-0 m-0 inline-block ${showButton ? '' : 'invisible pointer-events-none'}`}
          >
            <span>{promptPrefix}</span>
            <span>[{typedButton || '\u00A0'}]</span>
          </Link>
        </div>
        <p className={`${lineTextClass} w-full min-h-[3rem] leading-none`}>
          {isButtonTypingComplete ? `${promptPrefix}${typedScrollHint || '\u00A0'}` : '\u00A0\u00A0'}
        </p>
        <p className='w-full min-h-[2rem] font-black text-[2rem] leading-none'>
          {showFinalPrompt ? promptPrefix : '\u00A0\u00A0'}
          {showFinalPrompt && !isStaticHero ? (
            <motion.span
              animate={{opacity: [1, 1, 0, 0, 1, 1]}}
              transition={{
                duration: 1.04,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.44, 0.45, 0.9, 0.91, 1]
              }}
            >
              _
            </motion.span>
          ) : showFinalPrompt ? (
            <span>_</span>
          ) : (
            <span>{'\u00A0'}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Hero;