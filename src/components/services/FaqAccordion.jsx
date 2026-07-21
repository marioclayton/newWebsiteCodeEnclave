import React, {useState} from 'react';

const FaqAccordion = ({items, accent = 'amber'}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const borderClass = accent === 'cyan' ? 'border-cyan-300/70' : accent === 'white' ? 'border-white/70' : 'border-amber-300/70';

  return (
    <div className='w-full flex flex-col gap-4'>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.q} className={`border ${borderClass} bg-black/45 rounded-md`}>
            <h3>
              <button
                type='button'
                className='w-full text-left px-5 py-4 flex items-center justify-between'
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className='text-lg md:text-xl font-semibold'>
                  {`> ${item.q}`}
                </span>
                <span className='text-2xl font-bold pl-4' aria-hidden='true'>
                  {isOpen ? '-' : '+'}
                </span>
              </button>
            </h3>
            {isOpen && (
              <p className='px-5 pb-5 text-base md:text-lg leading-relaxed'>
                {`> ${item.a}`}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
