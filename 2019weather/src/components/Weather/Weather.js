import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
                {this.props.city && this.props.state && <p>Location:{this.props.city}  {this.props.state}</p>}

            </div>
        )
    }
}


export default Weather;