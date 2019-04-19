import React from 'react';

class Form extends React.Component {

    state = {
        temperature: ""
    };


    async componentDidMount() {

        const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ff05166f3c7814d58199e22969528af4'
         const response = await fetch(url);
         const data = await response.json();
         console.log(data);
    }
    
    render() {

        return(
            <form>
                <input type="text" name="city" placeholder= "City"/>
                <input type="text" name="state" placeholder= "State"/>

                <button>Weather</button>

            </form>
        );

    }

};


export default Form;