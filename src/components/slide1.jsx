import React from 'react'
import Navbar from './navbar'
import arrow from '../images/icon-arrow.svg'
import rightarrow from '../images/icon-angle-right.svg'
import leftarrow from '../images/icon-angle-left.svg'

export default function Slide3({moveleft,moveright}) {
    // moveleft and moveright fuctions are recevied as props from the main component
    //slide3 and slide2 are sent as argument to the moveright and moveleft functions
    return (
            <section id='section1'>
                    <div id='diva' className='A1'>
                        <Navbar/>
                        <div className='ai1'>
                            <img  src={leftarrow} onClick={()=>moveleft('slide3')} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright('slide2')} alt='right'/>
                        </div>
                    </div>
                    <div className='B'>
                        <div id='divb1' className='b1'>
                        <h1>Discover innovative ways to decorate</h1>
                        <p>
                        We provide unmatched quality, comfort, 
                        and style for property owners across the country. 
                        Our experts combine form and function in bringing 
                        your vision to life. Create a room in your  
                        own style with our collection and make your 
                        property a reflection of you and what you love.
                        </p>
                        <h5>SHOP NOW <img src={arrow}/></h5>
                        </div>
                        <div className='b2'>
                            <img  src={leftarrow} onClick={()=>moveleft('slide3')} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright('slide2')} alt='right'/>
                        </div>
                    </div>
                </section>

    )
}
