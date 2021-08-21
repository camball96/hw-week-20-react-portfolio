import React from 'react';
import Resume from '../Assets/resume.pdf'

function ResumePage(){

    return(
        <div className='layout'>
            <h1>Resume</h1>
            <button class="ui button" style={{marginBottom:20}}>
                <a href={Resume} download>Download resume here</a>
            </button>
            <p className="paragraph" style={{color:'white', padding:20, backgroundColor: 'grey', borderRadius: 10, fontSize: 18,}}><b>Use the button above here to download the latest version of my resume. I cover my past work as well as the coding skills I currently have!</b> <br></br>
            accumsan ex nec, molestie tellus. Fusce gravida consequat mi, vel auctor dui tincidunt ac. 
            Vivamus interdum sit amet ex et auctor. Cras purus nunc, varius id elit at, congue pretium turpis. Proin leo dolor, maximus nec diam eu, pharetra tincidunt nisi. Curabitur neque erat, consequat ut lacus et, egestas 
            varius nulla. Sed ultricies, nibh id fermentum auctor, mi erat lobortis augue, eget pellentesque urna elit a nisl. Morbi ligula dolor, venenatis id pretium quis, hendrerit pulvinar velit. Curabitur non nisl sed lorem ultricies dictum. 
            Vestibulum hendrerit eleifend orci, sed laoreet velit commodo eu. Quisque convallis erat quis nunc fringilla tincidunt. Proin ipsum ligula, rhoncus et volutpat dictum, consectetur quis lacus. Duis rhoncus auctor mauris, non imperdiet urna fermentum id. </p>
        </div>
    )
}


export default ResumePage;