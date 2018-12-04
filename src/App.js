import React, { Component } from 'react';
import './App.css';
import superagent from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aqi: "",
      city: "Shanghai",
      fahrenheit: "",
      humidity: "",
      state: "Shanghai",
      temperature: "",
      wind_speed: ""
    };
  }

  beijing = () => {
    this.setState({
      city: "Beijing",
      state: "Beijing"
    })
  }

  changchun = () => {
    this.setState({
      city: "Changchun",
      state: "Jilin"
    })
  }

  chengdu = () => {
    this.setState({
      city: "Chengdu",
      state: "Sichuan"
    })
  }

  guangzhou = () => {
    this.setState({
      city: "Guangzhou",
      state: "Guangdong"
    })
  }

  jinan = () => {
    this.setState({
      city: "Jinan",
      state: "Shandong"
    })
  }

  shanghai = () => {
    this.setState({
      city: "Shanghai",
      state: "Shanghai",
      country: "China"
    })
  }

  shenzhen = () => {
    this.setState({
      city: "Shenzhen",
      state: "Guangdong"
    })
  }

  wuhan = () => {
    this.setState({
      city: "Wuhan",
      state: "Hubei"
    })
  }

  confirm = () => {

    const url = `http://api.airvisual.com/v2/city?city=${this.state.city}&state=${this.state.state}&country=China&key=aji8bXpLtizxQ8an7`;

    superagent.get(url, (err, res) => {

      this.setState({
        aqi: res.body.data.current.pollution.aqicn,
        humidity: res.body.data.current.weather.hu,
        temperature: res.body.data.current.weather.tp,
        wind_speed: res.body.data.current.weather.ws
      });

      this.setState({
        fahrenheit: Math.floor(1.8 * this.state.temperature + 32)
      });

    });
  }

  render() {
    return (
      <div className="App">
        <img id="background" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/China-outline.svg/1205px-China-outline.svg.png"/>
        <h1 id="header">How is the weather?</h1>
        
        <div id="weather_card">
        <br/>
          Temperature: {this.state.temperature}°C/{this.state.fahrenheit}°F<br/>
          Humidity: {this.state.humidity}%<br/>
          Wind Speed: {this.state.wind_speed}m/s<br/>
          Air Quality Index: {this.state.aqi}<br/>
        <br/>
        <button onClick={this.confirm}>Display</button>
        <br/>
        <br/>
        </div>
        
        <div className="cities" id="beijing">
          <input type="radio" name="city" onClick={this.beijing}/>Beijing
        </div>
        
        <div className="cities" id="changchun">
          <input type="radio" name="city" onClick={this.changchun}/>Changchun
        </div>
        
        <div className="cities" id="chengdu">
          <input type="radio" name="city" onClick={this.chengdu}/>Chengdu
        </div>
        
        <div className="cities" id="guangzhou">
          <input type="radio" name="city" onClick={this.guangzhou}/>Guangzhou
        </div>
        
        <div className="cities" id="jinan">
          <input type="radio" name="city" onClick={this.jinan}/>Jinan
        </div>
        
        <div className="cities" id="shanghai">
          <input defaultChecked type="radio" name="city" onClick={this.shanghai}/>Shanghai
        </div>
        
        <div className="cities" id="shenzhen">
          <input type="radio" name="city" onClick={this.shenzhen}/>Shenzhen
        </div>

        <div className="cities" id="wuhan">
            <input type="radio" name="city" onClick={this.wuhan}/>Wuhan
        </div>

      </div>
    );
  }
}

export default App;
