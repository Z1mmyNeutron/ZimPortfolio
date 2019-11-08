import React from 'react'
import Grid from '@material-ui/core/Grid';

class GraphicDesign extends React.Component{
    render(){
        return(
            <div>
                <Grid padding={20} container spacing={24}>
                    <Grid  item xs={1} spacing={8} style={{backgroundColor:"red"}}>
                    </Grid> 
                          <Grid  item xs={2} spacing={8} style={{backgroundColor:"lime"}}>
                    </Grid> 
                   
                         <Grid  item xs={4} spacing={8} style={{backgroundColor:"orange"}}>
                    </Grid> 
                   
                    <Grid item xs={5} style={{backgroundColor:"purple"}}>
                        <p style={{textAlign:"center"}}>
                            <b>Obsession/Personal Art Statement</b>
                        </p>
                    </Grid>
                    <Grid item xs={1} spacing={8} style={{backgroundColor:"pink"}}>
                    </Grid>
                </Grid>
                <br/>
                <Grid padding={20} container spacing={24}>
                    <Grid  item xs={4} spacing={8} style={{backgroundColor:"lime"}}>
                    </Grid> 
                    <Grid item xs={4} style={{backgroundColor:"purple"}}>
                        <p style={{textAlign:"center"}}>
                            <b>Obsession/Personal Art Statement</b>
                        </p>
                    </Grid>
                    <Grid item xs={4} spacing={8} style={{backgroundColor:"pink"}}>
                    </Grid>
                </Grid>
             </div>
        );
    }
}
export default GraphicDesign