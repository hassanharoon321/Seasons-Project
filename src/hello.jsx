import React from "react";

class Hello extends React.Component{

    constructor(){
        super();
        console.log("constructor")
        this.state = {
            lat: null,
            errorMessage: ""
        }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {this.setState({
                lat: position.coords.latitude
            })},
            (err) => {
                this.setState({
                    errorMessage:err.message
                })}
        )
    }

    

    render(){
        if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
        return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading....</div>
    }
}

export default Hello;