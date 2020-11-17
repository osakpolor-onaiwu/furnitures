import React from 'react'
import Main from './components/main'
import {HashRouter,Route,Switch} from 'react-router-dom';



const  App=()=>{
    return(
        <HashRouter>
            <Switch>
                <Route path='/' component={Main}/>
            </Switch>
        </HashRouter>
    )
}


export default App