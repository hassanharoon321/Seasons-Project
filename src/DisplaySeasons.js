import React from "react";
import 'semantic-ui-css/semantic.min.css';
import './Style.css';

const seasonConfig = {
    summer :{
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter:{
        text:"Burr it is cold!",
        iconName:"snowflake"
    }
}

const getSeason = (lat,month)=>{

    if(month>2 && month<9){
        return lat > 0 ? "summer" : "winter";
    }else{
        return lat > 0 ? "winter" : "summer"; 
    }
}

const DisplaySeasons = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth())
    
    const {text,iconName} = seasonConfig[season] 
    return(
        <div>
            <i className={ `icon-left massive ${iconName} icon` }/>
            <h1 className="hello">{text}</h1>
            <i className={ `icon-right massive ${iconName} icon` }/>

        </div>
    )
}

export default DisplaySeasons;