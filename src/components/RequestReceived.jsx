import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const requestLines = [
  'Request received.',
  'Thank you for contacting Code Enclave LLC.',
  'An engineer will follow up shortly by email or phone.'
];

const RequestReceived = () => {
  const [typedLines, setTypedLines] = useState(() => Array(requestLines.length).fill(''));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [typedButton, setTypedButton] = useState('');
  const [buttonCharIndex, setButtonCharIndex] = useState(0);
  const [typedFollowup, setTypedFollowup] = useState('');
  const [followupCharIndex, setFollowupCharIndex] = useState(0);
  const promptPrefix = '> ';
  const buttonText = 'RETURN HOME';
  const followupText = 'We appreciate the opportunity to build with you.';
  const typingSpeed = 17;
  const lineTextClass = 'md:text-3xl sm:text-3xl text-xl';

  const renderTypedLine = (line, index) => {
    const isActiveLine = !showButton && lineIndex === index;
    const hasLineStarted = index < lineIndex || isActiveLine || line.length > 0;
    const safeLine = line || '\u00A0';

    return (
      <>
        {hasLineStarted ? promptPrefix : '\u00A0\u00A0'}
        {safeLine}
        {isActiveLine && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0, 1, 1] }}
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
    if (lineIndex >= requestLines.length) {
      if (!showButton) {
        setShowButton(true);
      }
      return;
    }

    const activeLine = requestLines[lineIndex];

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
  }, [showButton, buttonCharIndex]);

  const isButtonTypingComplete = typedButton.length >= buttonText.length;

  useEffect(() => {
    if (!isButtonTypingComplete) {
      return;
    }

    if (followupCharIndex > followupText.length) {
      return;
    }

    const followupTypeTimer = setTimeout(() => {
      setTypedFollowup(followupText.slice(0, followupCharIndex));
      setFollowupCharIndex((prevChar) => prevChar + 1);
    }, typingSpeed);

    return () => clearTimeout(followupTypeTimer);
  }, [isButtonTypingComplete, followupCharIndex]);

  const isFollowupTypingComplete = typedFollowup.length >= followupText.length;
  const showFinalPrompt = showButton && isButtonTypingComplete && isFollowupTypingComplete;

  return (
    <div className='overlay-container mt-[-96px] pt-[96px]'>
      <div className='w-full max-w-[1240px] h-screen mx-auto px-4 text-left flex flex-col justify-center items-start overlay-content retro-display'>
        <h1 className={`${lineTextClass} py-4 min-h-[3rem] md:min-h-[3.75rem] w-full flex items-center justify-start`}>
          {renderTypedLine(typedLines[0], 0)}
        </h1>
        <div className='w-full flex justify-start items-center min-h-[3rem] md:min-h-[3.75rem]'>
          <p className={`${lineTextClass} py-4`}>
            {renderTypedLine(typedLines[1], 1)}
          </p>
        </div>
        <p className={`${lineTextClass} tracking-tight py-10 h-[10rem] sm:h-[9rem] md:h-[8rem] lg:h-[7rem] pl-[2ch] -indent-[2ch]`}>
          {renderTypedLine(typedLines[2], 2)}
        </p>
        <div className='w-full min-h-[5rem] flex items-center'>
          <button className={`${lineTextClass} font-medium my-6 py-1 self-start bg-transparent border-0 ${showButton ? '' : 'invisible pointer-events-none'}`}>
            <Link to='/'>
              <span>{promptPrefix}</span>
              <span>[{typedButton || '\u00A0'}]</span>
            </Link>
          </button>
        </div>
        <p className={`${lineTextClass} w-full min-h-[3rem] leading-none pl-[2ch] -indent-[2ch]`}>
          {isButtonTypingComplete ? `${promptPrefix}${typedFollowup || '\u00A0'}` : '\u00A0\u00A0'}
        </p>
        <p className='w-full min-h-[2rem] font-black text-[2rem] leading-none'>
          {showFinalPrompt ? promptPrefix : '\u00A0\u00A0'}
          {showFinalPrompt ? (
            <motion.span
              animate={{ opacity: [1, 1, 0, 0, 1, 1] }}
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

export default RequestReceived;
