const Quote = () => {
    return (
        <div id="quote" className="img_bg m-0 text-white relative">
            <div className="overflow-hidden">
                <div className="scroll-top font-bold text-10xl text-white opacity-10 h-64">
                    We’re restoring
                </div>
                <div className="scroll-bottom font-bold text-10xl text-white opacity-10 h-68">
                    <p>the future</p> 
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
            
        </div>
    );
}

export default Quote;