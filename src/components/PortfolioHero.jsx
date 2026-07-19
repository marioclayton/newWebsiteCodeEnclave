import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const portfolioLines = [
  'Selected Projects',
  '> Where Vision Meets Code',
  '> A collection of digital experiences engineered for performance'
];

const PortfolioHero = () => {
  const [typedLines, setTypedLines] = useState(() => Array(portfolioLines.length).fill(''));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [typedButton, setTypedButton] = useState('');
  const [buttonCharIndex, setButtonCharIndex] = useState(0);
  const [typedScrollHint, setTypedScrollHint] = useState('');
  const [scrollHintCharIndex, setScrollHintCharIndex] = useState(0);
  const promptPrefix = '> ';
  const buttonText = 'Get started';
  const scrollHintText = 'Scroll down for more';
  const typingSpeed = 17;
  const lineTextClass = 'md:text-4xl sm:text-3xl text-2xl';

  useEffect(() => {
    if (lineIndex >= portfolioLines.length) {
      if (!showButton) {
        setShowButton(true);
      }
      return;
    }

    const activeLine = portfolioLines[lineIndex];

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
  }, [charIndex, lineIndex, showButton]);

  useEffect(() => {
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
  }, [showButton, buttonCharIndex, typingSpeed]);

  const isButtonTypingComplete = typedButton.length >= buttonText.length;

  useEffect(() => {
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
  }, [isButtonTypingComplete, scrollHintCharIndex, typingSpeed]);

  const renderTypedLine = (line, index) => {
    const isActiveLine = lineIndex === index && lineIndex < portfolioLines.length;
    const hasLineStarted = index < lineIndex || isActiveLine || line.length > 0;
    const safeLine = line || '\u00A0';

    return (
      <>
        {hasLineStarted ? promptPrefix : '\u00A0\u00A0'}
        {safeLine}
        {isActiveLine && (
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

  const isScrollHintTypingComplete = typedScrollHint.length >= scrollHintText.length;
  const showFinalPrompt = showButton && isButtonTypingComplete && isScrollHintTypingComplete;

  return (
    <div className='overlay-container mt-[-96px] pt-[96px]'>
      <div className='max-w-[800px] w-[90%] sm:w-[82%] lg:w-[60%] h-screen ml-[6%] sm:ml-[12%] lg:ml-[20%] pr-4 sm:pr-6 md:pr-10 text-left flex flex-col justify-center items-start overlay-content retro-display'>
        <h1 className={`${lineTextClass} md:py-6 h-[4.25rem] md:h-[5rem] w-full flex items-center justify-start`}>
          {renderTypedLine(typedLines[0], 0)}
        </h1>
        <p className={`${lineTextClass} py-4 h-[8rem] sm:h-[7rem] md:h-[6rem] w-full pl-[2ch] -indent-[2ch]`}>
          {renderTypedLine(typedLines[1], 1)}
        </p>
        <p className={`${lineTextClass} py-4 h-[12rem] sm:h-[11rem] md:h-[10rem] lg:h-[9rem] w-full pl-[2ch] -indent-[2ch]`}>
          {renderTypedLine(typedLines[2], 2)}
        </p>
        <div className='w-full min-h-[5rem] flex items-center'>
          <button
            className={`${lineTextClass} font-medium my-6 py-1 self-start bg-transparent border-0 ${showButton ? '' : 'invisible pointer-events-none'}`}
          >
            <Link to='/Quote'>
              <span>{promptPrefix}</span>
              <span>[{typedButton || '\u00A0'}]</span>
            </Link>
          </button>
        </div>
        <p className={`${lineTextClass} w-full min-h-[3rem] leading-none`}>
          {isButtonTypingComplete ? `${promptPrefix}${typedScrollHint || '\u00A0'}` : '\u00A0\u00A0'}
        </p>
        <p className='w-full min-h-[2rem] font-black text-[2rem] leading-none'>
          {showFinalPrompt ? promptPrefix : '\u00A0\u00A0'}
          {showFinalPrompt ? (
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
          ) : (
            <span>{'\u00A0'}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default PortfolioHero;
