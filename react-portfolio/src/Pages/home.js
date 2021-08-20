import React from "react";
import { Grid } from 'semantic-ui-react';
import backOfTheSurf from '../Assets/backOfTheSurf.png';
import '../App.css'


//Technically about us page
function Home() {


    return (
        <div className='layout'>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Grid.Row>
                            <h1 style={{
                                marginBottom: 50,
                                fontSize: 50,
                            }}>About Me</h1>
                        </Grid.Row>
                        <Grid.Row style={{
                            marginBottom: 30,
                        }}>
                            <img src={backOfTheSurf} style={{width:'700px'}} />
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row className='paragraph' style={{marginTop:120, color:'white', padding:20, backgroundColor: 'grey', borderRadius: 10, fontSize: 18,}}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam nec purus tristique commodo. Proin sed justo euismod, accumsan ex nec, molestie tellus. Fusce gravida consequat mi, vel auctor dui tincidunt ac. 
                            Vivamus interdum sit amet ex et auctor. Cras purus nunc, varius id elit at, congue pretium turpis. Proin leo dolor, maximus nec diam eu, pharetra tincidunt nisi. Curabitur neque erat, consequat ut lacus et, egestas 
                            varius nulla. Sed ultricies, nibh id fermentum auctor, mi erat lobortis augue, eget pellentesque urna elit a nisl. Morbi ligula dolor, venenatis id pretium quis, hendrerit pulvinar velit. Curabitur non nisl sed lorem ultricies dictum. 
                            Vestibulum hendrerit eleifend orci, sed laoreet velit commodo eu. Quisque convallis erat quis nunc fringilla tincidunt. Proin ipsum ligula, rhoncus et volutpat dictum, consectetur quis lacus. Duis rhoncus auctor mauris, non imperdiet urna fermentum id.
                            </p>
                        </Grid.Row>
                    </Grid.Column>    
                </Grid.Row>
            </Grid>
        </div>
    )
}


export default Home;
