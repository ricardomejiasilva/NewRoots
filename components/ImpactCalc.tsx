import { useState } from "react";
const ImpactCalc = () => {
    const [client, setClient] = useState(false)
    const [cups, setCups] = useState('2')
    const [time, setTime] = useState('years')

    let co2Lbs = 0
    let trees = 0
    let o2 = 0
    let action = ''
    let stamp = 'YEARS'

    if (client) action ='serve'
    else action ='drink'

    const handleClick = () => {
        setClient(!client)
        if (!client) setCups('250')
        else setCups('2')
    }

    const calcImpact = () => {
        let timeLine = 365
        if (time === 'week') {
            timeLine = 7
        } else if (time === 'month'){
            timeLine = 30
        } else {
            timeLine = 365
        }
        
        co2Lbs = Math.round(((parseInt(cups) * timeLine * 0.1) + Number.EPSILON) * 100) / 100; 
        trees = Math.round(((parseInt(cups) * timeLine * 0.01) + Number.EPSILON) * 100) / 100;
        if(client){
            o2 = Math.round(((trees / 0.25 / 365) + Number.EPSILON) * 100) / 100;
        } else{
            o2 = Math.round(((trees / 0.25) + Number.EPSILON) * 100) / 100;
            stamp ='DAYS'
        }
        
        if (isNaN(co2Lbs) == true) co2Lbs = 0
        if (isNaN(trees) == true) trees = 0
        if (isNaN(o2) == true) o2 = 0
    
    }

    return (
        <div className="roots w-100% px-6 lgg:px-0 pt-96 mdd:pt-0 pb-16">
            {calcImpact()}
            <div className="pt-28 pb-16 max-w-1120 my-0 mx-auto text-center">
                <h2 className="text-white text-7xl xxs:text-8xl font-body font-bold">CALCULATE YOUR IMPACT</h2>
                <p className="text-white text-lg mb-6">Choose how many cups a day you use, and timespan, and see how much impact you’d make.</p>
                <div className="bg-white rounded-xl text-xs w-170 py-0.5 my-0 mx-auto mb-12">
                    <button onClick={handleClick} className={client ? "inline-block text-primary bg-white px-3 py-1 rounded-2xl cursor-pointer" :"inline-block text-white bg-primary px-3 py-1 rounded-2xl cursor-pointer" }>
                        <span className="" >INDIVIDUALS</span>
                    </button>
                    <button onClick={handleClick} className={client ? "inline-block text-white bg-primary ml-0.5 px-3 py-1 rounded-2xl cursor-pointer" : "inline-block text-primary bg-white ml-0.5 px-3 py-1 rounded-2xl cursor-pointer" }>
                        <span className="" >CAFES</span>
                    </button>
                </div>
                
                <div className="bg-main py-6">
                    <div className="text-white pb-8 text-2xl">
                        <p className="leading-10 text-sky">If I {action} 
                            <input className="bg-transparent w-20 border-b-2 border-sky text-center text-secondary text-2xl font-bold placeholder-secondary focus:outline-none" 
                            type="text" 
                            value={cups}
                            onChange={(e) => setCups(e.target.value)}
                            name="cups" 
                            id="cups" />
                            New Roots 12oz cup per day, in a 
                                <select className="select-menu bg-transparent w-32 border-b-2 border-secondary text-center text-secondary text-2xl font-bold placeholder-secondary  outline-light"  
                                value={time} 
                                onChange={(e) => setTime(e.target.value)} 
                                name="time" 
                                id="time" >
                                    <option className="!text-sm" defaultValue="year" value="year">YEAR</option>
                                    <option className="!text-sm" value="month">MONTH</option>
                                    <option className="!text-sm" value="week">WEEK</option>
                                </select>
                            , I will:
                        </p>
                    </div>

                    <div className="bg-main mx-auto max-w-1120 text-center mb-3">
                        <div className="md:flex md:justify-center px-4">
                            <div className="flex flex-col justify-center bg-white mt w-60 xxs:w-72 h-44 mb-4 mx-auto md:mr-8">
                                <p className="text-primary text-xs font-bold">SAVE</p>
                                <p className="font-body font-bold text-7xl text-secondary">{co2Lbs} LBS</p>
                                <p className="w-44 mx-auto text-primary">of carbon dioxide from the atmosphere</p>
                            </div>
                            <div className="flex flex-col justify-center bg-white mb-4 w-60 xxs:w-72 h-44 mx-auto md:mr-8">
                                <p className="text-primary text-xs font-bold">PLANT</p>
                                <p className="font-body font-bold text-7xl text-secondary">{trees} TREES</p>
                                <p className="text-primary">in the U.S.</p>
                            </div>
                            <div className="flex flex-col justify-center bg-white w-60 xxs:w-72 h-44 mx-auto">
                                <p className="text-primary text-xs font-bold">SAVE</p>
                                <p className="font-body font-bold text-7xl text-secondary">{o2} {stamp}</p>
                                <p className=" text-primary">of oxygen for one person</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-secondary text-sm mb-6 px-5">*source for where these numbers are coming from to communicate we’re not making them up</p>
                </div>
            </div>
        </div>
    );
}

export default ImpactCalc;