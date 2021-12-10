import { useEffect, useRef} from "react";
import useScrollListener from "../hooks/scroll";


const Quote = () => {
    const scroll = useScrollListener();
    const triggerElement = useRef(null)
    const line1= useRef(null)
    const line2 = useRef(null)

    useEffect(() => {
        let pageTop = triggerElement.current.getBoundingClientRect().top; 
        let pageBottom = triggerElement.current.getBoundingClientRect().bottom;

        if(triggerElement.current.getBoundingClientRect().top <= window.innerHeight){
            if(window.innerWidth >= 768){
                line1.current.style.left = `${(-pageTop * .1) + 30 }%` 
                line2.current.style.right = `${(-pageTop * .1) + 45 }%` 
            }

            if(window.innerWidth <= 768){
                line1.current.style.left = `${(-pageTop * .1) - 80 }%` 
                line2.current.style.right = `${(-pageTop * .1) - 35 }%` 
            }
        }
    }, [scroll.y])

    return (
        <section ref={triggerElement} id="quote" className="img_bg m-0 text-white relative pb-16 md:pb-32">
            <div className="overflow-hidden w-full ">
                <div className="line1 relative h-72">
                    <p ref={line1} className="test-scroll-top absolute whitespace-nowrap text-10xl font-bold opacity-10">We’re restoring</p>
                </div>
                <div className="line2 relative h-80" style={{"right": `${null}px`}}>
                    <p ref={line2} className="test-scroll-bottom absolute whitespace-nowrap text-10xl font-bold opacity-10">the future</p>
                </div>
            </div>

            
            <div className="lgt absolute px-6 w-full lg:max-w-928 top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4">
                <div className="mb-16 lg:flex ">
                    <div className="text-6xl mr-10 font-body h-16">
                        <p className="text-10xl font-bold">“</p>
                    </div>
                    <h2 className="text-3xl md:text-27 leading-13 md:leading-11 tracking-wider pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget non a elit duis et senectus nulla arcu.</h2>
                </div>
                <div>
                    <p className="text-right -mt-6 text-lg">- National Forest Foundation</p>
                </div>
            </div>
        </section>
    );
}

export default Quote;