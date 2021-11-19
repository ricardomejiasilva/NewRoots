import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
const FAQItem = ({
    ariaExpanded,
    item,
    index,
    clicked,
    onClick,
  }) => (
    <div className="text-white border-b-2 border-light pb-2 mb-5 max-w-544 md:mx-auto lg:mx-0" key={item.question}>
        <button 
            aria-expanded={ariaExpanded}
            aria-controls={`item${index + 1}`}
            onClick={onClick}
            className="flex justify-between items-center mb-5 w-full md:w-544 text-left">
                <span className="text-xl md:text-3xl">{item.question}</span>
                <span className="ml-2 text-xl md:text-2xl">{clicked === index ? <AiOutlineClose/> : <AiOutlinePlus/>}</span>
        </button>
        <div>
            {clicked === index ? (
                <span  
                    id={`item${index + 1}`}
                    className="md:text-lg">
                    {item.answer}
                </span>
            ) : null}
        </div>
    </div>
  );
  
  export default FAQItem;