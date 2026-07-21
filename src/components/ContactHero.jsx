import React, {useEffect, useMemo, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const prompts = [
  {key: 'from_name', label: 'Name:'},
  {key: 'user_email', label: 'Work email:'},
  {key: 'subject', label: 'Project focus:'},
  {key: 'message', label: 'Project details:'}
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
  const contactPhone = '305-322-0401';
  const contactPhoneHref = 'tel:+13053220401';
  const contactEmail = 'support@codeenclave.com';

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
      return 'Input required.';
    }

    if (key === 'user_email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return 'Enter a valid work email.';
    }

    return '';
  };

  const submitTerminalForm = async () => {
    setIsSubmitting(true);
    setErrorText('');

    try {
      const payload = new URLSearchParams();
      payload.append('from_name', formData.from_name);
      payload.append('user_email', formData.user_email);
      payload.append('subject', formData.subject);
      payload.append('message', formData.message);

      const response = await fetch('/backend/send-email.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: payload.toString()
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
      return `${promptPrefix}[Send Request]`;
    }

    return `${promptPrefix}${currentInput}`;
  }, [currentInput, showSubmit]);

  return (
    <div className='overlay-container mt-[-96px] pt-[96px]'>
      <div className='overlay-content absolute inset-x-0 bottom-5 px-4 md:hidden retro-display'>
        <div className='max-w-[1240px] mx-auto flex flex-col items-start gap-1'>
          <a href={contactPhoneHref} className='text-base sm:text-lg'>
            {`${promptPrefix}${contactPhone}`}
          </a>
          <a href={`mailto:${contactEmail}`} className='text-base sm:text-lg'>
            {`${promptPrefix}${contactEmail}`}
          </a>
        </div>
      </div>

      <div
        className='w-full max-w-[1240px] h-screen mx-auto px-4 text-left flex flex-col justify-center items-start overlay-content retro-display'
        onClick={() => inputRef.current?.focus()}
      >
        <div className='w-full md:flex md:items-start md:justify-between'>
          <h1 className={`${lineTextClass} md:py-6 h-[4.25rem] md:h-[5rem] w-full md:flex-1 flex items-center justify-start`}>
            {`${promptPrefix}Discuss your project`}
          </h1>
          <div className='hidden md:flex md:py-6 flex-col items-end gap-1 text-right'>
            <a href={contactPhoneHref} className='md:text-xl lg:text-2xl'>
              {`${promptPrefix}${contactPhone}`}
            </a>
            <a href={`mailto:${contactEmail}`} className='md:text-xl lg:text-2xl'>
              {`${promptPrefix}${contactEmail}`}
            </a>
          </div>
        </div>

        {showResultView ? (
          <>
            <p className={`${lineTextClass} w-full h-[4.5rem] md:h-[5rem] flex items-center`}>
              {submitResult === 'success' ? `${promptPrefix}Request received.` : `${promptPrefix}Unable to send request.`}
            </p>
            {submitResult === 'success' && (
              <p className={`${lineTextClass} w-full h-[4.5rem] md:h-[5rem] flex items-center`}>
                {`${promptPrefix}An engineer will follow up shortly.`}
              </p>
            )}
            <div className='w-full h-[4.5rem] md:h-[5rem] flex items-center'>
              {submitResult === 'success' ? (
                <Link to='/' className={lineTextClass}>{`${promptPrefix}[Return Home]`}</Link>
              ) : (
                <button
                  type='button'
                  onClick={() => window.location.reload()}
                  className={`${lineTextClass} bg-transparent border-0 p-0`}
                >
                  {`${promptPrefix}[Retry]`}
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
            <div className='w-full h-[18rem] md:h-[20rem] flex flex-col'>
              {prompts.map((prompt, index) => {
                const promptText = index < committedCount
                  ? `${promptPrefix}${prompt.label}`
                  : (index === committedCount && !showSubmit ? `${promptPrefix}${typedPrompt || '\u00A0'}` : '\u00A0\u00A0');

                const committedValue = completedEntries[index]?.value || '';
                const lineValue = index < committedCount
                  ? `${promptText} ${committedValue}`
                  : (index === committedCount && !showSubmit && isPromptReady ? `${promptText} ${currentInput}` : promptText);

                return (
                  <div key={prompt.key} className='w-full'>
                    <p className={`${lineTextClass} w-full h-[2.75rem] md:h-[3rem] flex items-center pl-[2ch] -indent-[2ch]`}>
                      {lineValue}
                      {index === committedCount && !showSubmit && isPromptReady && renderBlinkingCursor()}
                    </p>
                  </div>
                );
              })}

              <p className={`${lineTextClass} w-full h-[2.75rem] md:h-[3rem] flex items-center`}>
                {showSubmit ? inputLineText : '\u00A0\u00A0'}
                {showSubmit && renderBlinkingCursor()}
              </p>
            </div>

            <p className='text-red-300 text-lg w-full min-h-[2rem]'>
              {errorText ? `${promptPrefix}${errorText}` : '\u00A0'}
            </p>

            {isSubmitting && (
              <p className={`${lineTextClass} w-full pt-4`}>
                {`${promptPrefix}Sending request...`}
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
