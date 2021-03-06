import React from "react";
import ReactDOM from "react-dom";
import DisplaySeasons from "./DisplaySeasons";
import 'semantic-ui-css/semantic.min.css';
import Spinning from "./Spinning";


class App extends React.Component{
        state = {
            lat: null,
            errorMessage: ""
        }
        
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            err => {
                this.setState({
                    errorMessage:err.message
                });
            }
        );

    }

    render(){
        if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div><DisplaySeasons lat = {this.state.lat}/></div>
        }

        return (<div><Spinning message="Please Accept Location Request"/></div>)
        
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)