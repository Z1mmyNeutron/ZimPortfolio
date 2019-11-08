import React from 'react'
import ContactMe from './components/ContactMe.js'
import AboutMe from './components/AboutMe.js'
import GraphicDesign from './components/GraphicDesign.js'


class App extends React.Component{
    render(){
        return(
        <body>
            <AboutMe/>
            <br/>
            <GraphicDesign/>
            <br/>
            <ContactMe/>
            
        </body>
        )
    }
}
export default App 