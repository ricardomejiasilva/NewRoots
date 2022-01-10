import React, { useState } from "react";
import FAQItem2 from "./FAQItem2";

const FAQ2 = ({ data }) => {
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
      <FAQItem2
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
    <div className=" w-100% px-6 lgg1:px-0">
        <div className="py-20 md:py-20 lg:py-28 max-w-544 lg:max-w-1120 my-0 mx-auto lg:flex justify-between w-full">
            <div className="lg:inline-block mb-14 w-72 md:w-full lg:w-80 md:mx-auto lg:mx-0">
                <h2 className="line  text-brownLight text-7xl text-left lg:text-8xl uppercase font-body font-bold leading-11 pr-4">frequently asked questions</h2>
            </div>

            <div className="mx-auto lg:mx-0">
              <div className="">{renderedQuestionsAnswers}</div>
                
            </div>
        </div>
    </div>
      
  );
};

export default FAQ2;
