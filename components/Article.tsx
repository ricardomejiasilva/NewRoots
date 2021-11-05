import Image from "next/dist/client/image";

const Article = () => {
    return (
        <div className="md:flex md:justify-between">
           <div className="max-w-352 md:mr-8 mb-16 md:mb-0">
                <img src="/img/174.jpg"/>
                <div>
                    <p className="text-xs text-primary pb-4 mt-4">SEP 8, 2021 <span className="px-2">•</span> Article</p>
                    <h4 className="text-2xl text-secondary font-bold tracking-normal">This is a title of an article that might wrap to three lines or more</h4>
                </div>
            </div> 
            <div className="max-w-352 md:mr-8 mb-16 md:mb-0">
                <img src="/img/175.png"/>
                <div>
                    <p className="text-xs text-primary pb-4 mt-4">SEP 8, 2021 <span className="px-2">•</span> Article</p>
                    <h4 className="text-2xl text-secondary font-bold tracking-normal">This is a title of an article that might wrap to three lines or more</h4>
                </div>
            </div> 
            <div className="max-w-352 md:mr-8">
                <img src="/img/176.png"></img>
                <div>
                    <p className="text-xs text-primary pb-4 mt-4">SEP 8, 2021 <span className="px-2">•</span> Article</p>
                    <h4 className="text-2xl text-secondary font-bold tracking-normal">This is a title of an article that might wrap to three lines or more</h4>
                </div>
            </div> 
        </div>
        
        
    );
}

export default Article;