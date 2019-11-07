import React from 'react'
import ContactMe from './Components/ContactMe.js'
import AboutMe from './Components/AboutMe.js'
import GraphicDesign from './Components/GraphicDesign.js'


class App extends React.Component{
    render(){
        return(
        <body>
            <ContactMe/>
            <AboutMe/>
            <GraphicDesign/>
        </body>
        )
    }
}
export default App 