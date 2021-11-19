const SecondBtnLight = ({text} : {text : string}) => {
    return (
        <div>
            <button type="button" className="py-3 px-6 mr-6 mb-6 bg-main hover:bg-white border-2 border-white hover:text-primary text-white duration-100">{text}</button>
        </div>
    );
}

export default SecondBtnLight;