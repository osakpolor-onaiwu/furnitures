import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import bars from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

export default function Navbar(props) {
   const initState={
       show:false
   }

   const [state,setState]=useState(initState)
   const toggle=()=>{
    setState({
        show:!state.show
    })
   }

   const Modals=()=>{
       let dropdown;
       const m=(
        <ul id='modM'>
            <li><img src={close} onClick={toggle} alt="open" /></li>
            <li className='linka'><NavLink className='navli' to='/'>home</NavLink></li>
            <li><NavLink className='navli' to='/shop'>shop</NavLink></li>
            <li><NavLink className='navli' to='/about'>about</NavLink></li>
            <li><NavLink className='navli' to='/contact'>contact</NavLink></li>
        </ul>
       )
       const x=document.getElementById('mobile')
       if(state.show===true){
           return dropdown=m
       }
    }
    return (
        <div id='parentDiv' >
            <nav id='desktop'>
                <ul>
                    <a style={{fontSize:'23px'}}href='#'>room</a>
                    <li className='link1'><NavLink className='navlink' to='/'>home</NavLink></li>
                    <li><NavLink className='navlink' to='/shop'>shop</NavLink></li>
                    <li><NavLink className='navlink' to='/about'>about</NavLink></li>
                    <li><NavLink className='navlink' to='/contact'>contact</NavLink></li>
                </ul>
            </nav>
            <div id='modParent'>{Modals()}</div>
            <nav id='mobile'>
            <ul >
                <li><img src={bars} alt="open" onClick={toggle} /></li>
                <a style={{fontSize:'23px'}}href='#'>room</a>
            </ul>
            </nav>
        </div>
    )
}
