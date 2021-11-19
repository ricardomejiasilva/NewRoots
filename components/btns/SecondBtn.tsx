const SecondBtn = ({text} : {text : string}) => {
    return (
        <div>
            <button type="button" className="py-3 px-6 mb-6 border-2 hover:bg-secondary border-secondary text-secondary hover:text-white duration-100">{text}</button>
        </div>
    );
}

export default SecondBtn;