import { useState } from 'react';
import './faq.css';
import starIcon from '../../assets/images/icon-star.svg';
import minusIcon from '../../assets/images/icon-minus.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import { data } from './data';

const Faq = () => {
  const [faqData, setFaqData] = useState(data);

  const toggleFaq = (index) => {
    setFaqData(
      faqData.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <h1 className='faq-title'>
        <img src={starIcon} alt='star icon' />
        FAQs
      </h1>
      <ul className='faq-list'>
        {faqData.map((faq, i) => (
          <li key={i}>
            <button
              onClick={() => toggleFaq(i)}
              aria-expanded={faq.open ? 'true' : 'false'}
            >
              <span>{faq.question}</span>
              {faq.open ? (
                <img src={minusIcon} alt='minus icon' />
              ) : (
                <img src={plusIcon} alt='plus icon' />
              )}
            </button>
            {<p className={faq.open ? 'open' : ''}>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Faq;
