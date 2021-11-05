import PrimaryBtnLight from "./btns/PrimaryBtnLight";
const Business = () => {
    return (
        <div className="px-12 lgg:px-0 business-bg max-w-1120 my-0 mx-auto py-28 text-center">
            <div className="max-w-lg my-0 mx-auto text-white brightness-100">
                <h2 className="text-8xl font-body font-bold pb-8">ARE YOU A BUSINESS?</h2>
                <p className="text-lg pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sit sed velit, in etiam. A arcu eget tellus nunc.</p>
                <PrimaryBtnLight link="/products" text="Use Our Products" />
            </div>
        </div>
    );
}

export default Business;