import React, { useState } from "react";
import LegalAccItem from "./LegalAccItem";


const LegalAccordion = ({data}) => {
  const [clicked, setClicked] = useState(null);

  const toggle = index =>{
    if(clicked === index){
        return setClicked(null)
    }

    setClicked(index)
}

  const renderedQuestionsAnswers = data.map((item:number, index:number) => {
    const ariaExpanded = index === clicked ? "true" : "false";
    return (
      <LegalAccItem
        key={index}
        item={item}
        index={index}
        clicked={clicked}
        ariaExpanded={ariaExpanded}
        onClick={() => {
          toggle(index);
        }}
      />
    );
  });

  return (
    
      <div className="mx-auto lg:mx-0 max-w-352 w-full">
        <div className="">{renderedQuestionsAnswers}</div>
      </div>
      
  );
};

export default LegalAccordion;
