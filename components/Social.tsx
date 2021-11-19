import Image from "next/dist/client/image";
import ThirdBtn from "./btns/ThirdBtn";

const Social = () => {
    return (
        <div className="px-6 lgg:px-0">
            <div className="max-w-1120 my-0 mx-auto py-16 md:py-24">
                <h2 className="font-body font-bold text-7xl md:text-8xl text-brownLight mb-7">FOLLOW US</h2>
                <div className="lg:flex lg:justify-between items-end mb-12">
                    <h3 className="text-secondary text-2xl md:text-3xl max-w-3xl inline-block mb-6">Stay up to date on our latest tree-planting initiatives, product offerings, and shout-outs to our biggest fans. </h3>
                    <div className="inline-block mb-6">
                        <ThirdBtn link="/" text="Follow New Roots" />
                    </div>
                </div>

                <div className="lg:flex lg:justify-between text-center">
                    <div className="w-28 xxs:w-32 md:w-40 lg1:w-56 lgg:w-64 inline-block mr-4 lg:mr-0 mb-2">
                       <img src="/img/93.png"></img> 
                    </div>
                    <div className="w-28 xxs:w-32 md:w-40 lg1:w-56 lgg:w-64 inline-block md:mr-4 lg:mr-0 mb-2">
                        <img src="/img/94.png"></img>
                    </div>
                    <div className="w-28 xxs:w-32 md:w-40 lg1:w-56 lgg:w-64 inline-block mr-4 lg:mr-0 mb-2">
                        <img src="/img/95.png"></img>
                    </div>
                    <div className="w-28 xxs:w-32 md:w-40 lg1:w-56 lgg:w-64 inline-block md:mr-4 lg:mr-0 mb-2">
                        <img src="/img/96.png"></img>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Social;

