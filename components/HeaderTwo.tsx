import React, { Component } from 'react'
import { useState } from 'react';
import DigitRoll from 'digit-roll-react'
import PrimaryBtn from './btns/PrimaryBtn';
import ThirdBtn from './btns/ThirdBtn';

export default class HeaderTwo extends React.Component {
    state = { num: 10853 }
 
    //generate random numbers
    refresh = () => {
      this.setState({
        num: 10853 + 1
      })
    }
   
    componentDidMount() {
      setInterval(this.refresh, 2500)
    }


    render () {
        return (
            <div className="px-6 lgg1:px-0">
                <div className="max-w-1120 my-0 mx-auto py-24 mdd:flex justify-between font-runda">
                    <div className="text-center max-w-736 my-0 mx-auto mb-20">
                        <p className=" text-primary mb-10">Planted  10,000 trees and counting</p>
                        <h1 className="line font-body font-extrabold text-8xl md:text-3xl uppercase text-secondary max-w-27 my-0 mx-auto pb-8 leading-8 tracking-normal"><DigitRoll num={this.state.num} length={5} divider="," /></h1>
                        <p className="text-lg leading-7 pb-8">Our paper-based cartons are 92% renewable and way less destructive to our planet than single-use plastic bottles and aluminum cans.</p>
                        <div>
                            <div className="inline-block mr-6 mb-6">
                                <PrimaryBtn link="/" text="Make an Impact"/>
                            </div>
                            <div className="inline-block">
                                <ThirdBtn link="/products" text="See Our Products"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

