import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
const LegalAccItem = ({
    ariaExpanded,
    item,
    index,
    clicked,
    onClick,
  }) => (
    <div className=" border-b-2 border-line pb-2 mb-5 max-w-352 w-full md:mx-auto lg:mx-0" key={item.section}>
        <button 
            aria-expanded={ariaExpanded}
            aria-controls={`item${index + 1}`}
            onClick={onClick}
            className="flex justify-between items-center mb-5 w-full text-left">
                <span className="text-secondary text-xl font-semibold md:text-2xl">{item.section}</span>
                <span className="ml-2 text-xl md:text-2xl">{clicked === index ? <AiOutlineClose/> : <AiOutlinePlus/>}</span>
        </button>
        <div>
            {clicked === index ? (
                <span  
                    id={`item${index + 1}`}
                    className=" md:text-lg ">
                    {item.topic.map((point:string, index:number)=>{
                        return(
                            <div className="pb-2">
                                <a className="bottom" href={item.id[index]}>
                                    {point}</a><br /> 
                            </div>
                        )
                    })}
                </span>
            ) : null}
        </div>
    </div>
  );
  
  export default LegalAccItem;