import Article from "./Article";
import ThirdBtn from "./btns/ThirdBtn";
const Articles = ({bg}) => {
    return (
        <div className={`${bg} px-6 lgg1:px-0`}>
            <div className="max-w-1120 my-0 mx-auto py-24">
                <h2 className="font-body font-bold text-8xl text-brownLight mb-7">RECENT RESOURCES</h2>
                <div className="lg:flex lg:justify-between mb-16">
                    <h3 className="text-secondary text-3xl max-w-3xl mb-8">Learn more about important sustainability issues.</h3>
                    <div className="lg:mt-4">
                        <ThirdBtn link="/" text="View More" />
                    </div>

                </div>
                <div>
                    <Article />
                </div>
            </div>
        </div>
    );
}

export default Articles;