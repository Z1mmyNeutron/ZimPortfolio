import React from 'react'
import Grid from '@material-ui/core/Grid'
import profile from '../images/profile.jpeg'


class AboutMe extends React.Component{
    render(){
        return(
            <div>
                <Grid padding={20} container spacing={24}>
                    <Grid  item xs={1} spacing={8}></Grid> 


                    <Grid item xs={10} >
                        <p style={{textAlign:"center"}}>
                            <b>Christina Zimmer</b>
                        </p> 
                        <Grid padding={20} container spacing={24}>
                            <Grid  item xs={4} spacing={8}>
                                <img src={profile} alt="profile" style={{width:"100%", borderRadius:10}}/>
                            </Grid> 
                            <Grid item xs={8} spacing={8} style={{backgroundColor:"pink", justifyContent:"center", alignItems:"center"}}>
                                    <p>Christina Zimmer University of South Carolina GPA RESUME ECT</p>
                            </Grid>
                        </Grid>       
                    </Grid>
                    
                    <Grid item xs={1} spacing={8}></Grid>
                </Grid>
                
            </div>
        );
    }
}
export default AboutMe