import { Data } from "./Data";
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

const Accordion = () => {
    const [clicked, setClicked] = useState(null)

    

    const toggle = index =>{
        if(clicked === index){
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <div>
            <div>
                {Data.map((item, index) => {
                    return(
                        <>
                            <button 
                                className="border-b-2 border-light pb-2 mb-5 text-white"
                                aria-expanded={index === clicked ? "true" : "false"}
                                aria-controls={`item${index + 1}`}
                                onClick={() => toggle(index)} key={index}>
                                    <div className="flex justify-between items-center mb-5 ">
                                        <span className="text-3xl mr-32">{item.question}</span>
                                        <span>{clicked === index ? <AiOutlineClose/> : <AiOutlinePlus/>}</span>
                                    </div>
                                    {clicked === index ? (
                                        <span  id={`item${index + 1}`}
                                            className="text-lg ">
                                            {item.answer}
                                        </span>
                                    ) : null}
                            </button>
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default Accordion;