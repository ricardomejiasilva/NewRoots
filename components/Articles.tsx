import Article from "./Article";
import ThirdBtn from "./btns/ThirdBtn";
const Articles = () => {
    return (
        <div className="px-6 lgg:px-0">
            <div className="max-w-1120 my-0 mx-auto py-24">
                <h2 className="font-body font-bold text-8xl text-brownLight mb-7">RECENT RESOURCES</h2>
                <div className="lg:flex lg:justify-between mb-16">
                    <h3 className="text-secondary text-3xl max-w-3xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tellus tempus tortor id magna egestas.</h3>
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