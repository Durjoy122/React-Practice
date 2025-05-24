import { useEffect, useState } from 'react'
import faq from './API/faq.json'
import Faq from './Faq';

function Accordion() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(()=> {
    setData(faq);
  },[]);

  const handleToggle = (id) => {
     setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>The Accordion</h1>
        <ul className="section-accordion">
          {data.map((item) => {
            const { id } = item;
            return (
                <Faq
                    key={id}
                    isActive={activeId === id}
                    question={item.question}
                    answer={item.answer}
                    onToggle={() => handleToggle(id)}
                />
            );
         })}
        </ul>
    </>
  )
}

export default Accordion;