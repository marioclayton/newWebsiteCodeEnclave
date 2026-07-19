import React, {useEffect, useMemo, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const prompts = [
  {key: 'from_name', label: 'Your name:'},
  {key: 'user_email', label: 'Your email:'},
  {key: 'subject', label: 'Subject:'},
  {key: 'message', label: 'Message:'}
];

const ContactHero = () => {
  const [formData, setFormData] = useState({from_name: '', user_email: '', subject: '', message: ''});
  const [promptIndex, setPromptIndex] = useState(0);
  const [typedPrompt, setTypedPrompt] = useState('');
  const [promptCharIndex, setPromptCharIndex] = useState(0);
  const [isPromptReady, setIsPromptReady] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [completedEntries, setCompletedEntries] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState('idle');
  const [showResultView, setShowResultView] = useState(false);
  const [errorText, setErrorText] = useState('');

  const inputRef = useRef(null);

  const promptPrefix = '> ';
  const typingSpeed = 17;
  const lineTextClass = 'md:text-3xl sm:text-2xl text-xl';

  const activePrompt = prompts[promptIndex];
  const committedCount = completedEntries.length;

  useEffect(() => {
    if (showResultView || showSubmit || promptIndex >= prompts.length) {
      return;
    }

    const activeLabel = activePrompt.label;

    if (promptCharIndex <= activeLabel.length) {
      const typeTimer = setTimeout(() => {
        setTypedPrompt(activeLabel.slice(0, promptCharIndex));
        setPromptCharIndex((prevChar) => prevChar + 1);
      }, typingSpeed);

      return () => clearTimeout(typeTimer);
    }

    setIsPromptReady(true);
  }, [activePrompt, promptCharIndex, promptIndex, showResultView, showSubmit]);

  useEffect(() => {
    if ((isPromptReady || showSubmit) && !showResultView) {
      inputRef.current?.focus();
    }
  }, [isPromptReady, showSubmit, showResultView]);

  const resetCurrentPromptTyping = () => {
    setTypedPrompt('');
    setPromptCharIndex(0);
    setIsPromptReady(false);
  };

  const validatePromptInput = (key, value) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return 'Input required to continue.';
    }

    if (key === 'user_email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return 'Enter a valid email address.';
    }

    return '';
  };

  const submitTerminalForm = async () => {
    setIsSubmitting(true);
    setErrorText('');

    try {
      const response = await fetch('http://codeenclave.com/backend/send-email.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitResult('success');
      } else {
        setSubmitResult('error');
      }
    } catch (_error) {
      setSubmitResult('error');
    } finally {
      setIsSubmitting(false);
      setShowResultView(true);
    }
  };

  const handleTerminalKeyDown = async (e) => {
    if (e.key !== 'Enter' || isSubmitting) {
      return;
    }

    e.preventDefault();

    if (showSubmit) {
      await submitTerminalForm();
      return;
    }

    if (!isPromptReady || !activePrompt) {
      return;
    }

    const validationError = validatePromptInput(activePrompt.key, currentInput);

    if (validationError) {
      setErrorText(validationError);
      return;
    }

    const committedValue = currentInput.trim();

    setFormData((prevData) => ({
      ...prevData,
      [activePrompt.key]: committedValue
    }));

    setCompletedEntries((prevEntries) => [
      ...prevEntries,
      {label: activePrompt.label, value: committedValue}
    ]);

    setCurrentInput('');
    setErrorText('');

    if (promptIndex === prompts.length - 1) {
      setShowSubmit(true);
      return;
    }

    setPromptIndex((prevIndex) => prevIndex + 1);
    resetCurrentPromptTyping();
  };

  const renderBlinkingCursor = () => (
    <>
      {'\u00A0'}
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
    </>
  );

  const inputLineText = useMemo(() => {
    if (showSubmit) {
      return `${promptPrefix}[Submit]`;
    }

    return `${promptPrefix}${currentInput}`;
  }, [currentInput, showSubmit]);

  return (
    <div className='overlay-container mt-[-96px] pt-[96px]'>
      <div
        className='max-w-[900px] w-[90%] sm:w-[82%] lg:w-[60%] h-screen ml-[6%] sm:ml-[12%] lg:ml-[20%] pr-4 sm:pr-6 md:pr-10 text-left flex flex-col justify-center items-start overlay-content retro-display'
        onClick={() => inputRef.current?.focus()}
      >
        <h1 className={`${lineTextClass} md:py-6 h-[4.25rem] md:h-[5rem] w-full flex items-center justify-start`}>
          {`${promptPrefix}Contact us`}
        </h1>

        {showResultView ? (
          <>
            <p className={`${lineTextClass} w-full h-[4.5rem] md:h-[5rem] flex items-center`}>
              {submitResult === 'success' ? `${promptPrefix}Success.` : `${promptPrefix}Error, please try again later.`}
            </p>
            {submitResult === 'success' && (
              <p className={`${lineTextClass} w-full h-[4.5rem] md:h-[5rem] flex items-center`}>
                {`${promptPrefix}We will be in touch.`}
              </p>
            )}
            <div className='w-full h-[4.5rem] md:h-[5rem] flex items-center'>
              {submitResult === 'success' ? (
                <Link to='/' className={lineTextClass}>{`${promptPrefix}[Home]`}</Link>
              ) : (
                <button
                  type='button'
                  onClick={() => window.location.reload()}
                  className={`${lineTextClass} bg-transparent border-0 p-0`}
                >
                  {`${promptPrefix}[Try again]`}
                </button>
              )}
            </div>
            <p className='w-full min-h-[2rem] font-black text-[1.5rem] leading-none'>
              {promptPrefix}
              {renderBlinkingCursor()}
            </p>
          </>
        ) : (
          <>
            <div className='w-full h-[32rem] md:h-[38rem] flex flex-col'>
              {prompts.map((prompt, index) => {
                const promptText = index < committedCount
                  ? `${promptPrefix}${prompt.label}`
                  : (index === committedCount && !showSubmit ? `${promptPrefix}${typedPrompt || '\u00A0'}` : '\u00A0\u00A0');

                const committedValue = completedEntries[index]?.value || '';
                const inputText = index < committedCount
                  ? `${promptPrefix}${committedValue}`
                  : (index === committedCount && !showSubmit && isPromptReady ? `${promptPrefix}${currentInput}` : '\u00A0\u00A0');

                return (
                  <div key={prompt.key} className='w-full'>
                    <p className={`${lineTextClass} w-full h-[3.75rem] md:h-[4.5rem] flex items-center pl-[2ch] -indent-[2ch]`}>
                      {promptText}
                    </p>
                    <p className={`${lineTextClass} w-full h-[3.75rem] md:h-[4.5rem] flex items-center`}>
                      {inputText}
                      {index === committedCount && !showSubmit && isPromptReady && renderBlinkingCursor()}
                    </p>
                  </div>
                );
              })}

              <p className={`${lineTextClass} w-full h-[3.75rem] md:h-[4.5rem] flex items-center`}>
                {showSubmit ? inputLineText : '\u00A0\u00A0'}
                {showSubmit && renderBlinkingCursor()}
              </p>
            </div>

            <p className='text-red-300 text-lg w-full min-h-[2rem]'>
              {errorText ? `${promptPrefix}${errorText}` : '\u00A0'}
            </p>

            {isSubmitting && (
              <p className={`${lineTextClass} w-full pt-4`}>
                {`${promptPrefix}Sending...`}
              </p>
            )}

            <input
              ref={inputRef}
              value={currentInput}
              onChange={(e) => {
                setCurrentInput(e.target.value);
                if (errorText) {
                  setErrorText('');
                }
              }}
              onKeyDown={handleTerminalKeyDown}
              className='absolute opacity-0 pointer-events-none'
              aria-label='terminal input'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ContactHero;
