import SecondBtnLink from "../components/btns/SecondBtnLink";
const pagenotfound = () => {
    return (
        <>
            <div className="px-6 lgg1:px-0">
                <div className="max-w-1120 my-0 mx-auto pt-6 lg:py-24 lg:flex justify-between font-runda">
                    <div className="lg:hidden bg-found mb-10">
                        <div className="h-80"></div>
                    </div>

                    <div className="max-w-640 mb-20 md:mx-auto lg:mx-0">
                        <h1 className="line font-body font-extrabold text-7xl md:text-8xl lgg:text-9xl uppercase text-secondary mt-24 lg:mt-40 pb-4 leading-10 tracking-wide">page not found</h1>
                        <p className="text-lg leading-7 pb-8 lg:w-510 lgg:w-full">It looks like the page you’re looking for doesn’t exist.</p>
                        <SecondBtnLink text="Go back home" link="/" />
                    </div>

                    <div className="hidden lg:block relative ">
                        <div className="lgg:absolute lgg:-right-32">
                            <div className="bg-found max-w-608 w-full h-512 -mb-98 lg:-mb-0 mx-auto lg:mx-0">
                                <div className="mdd:w-456 lgg:w-608"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    );
}

export default pagenotfound;