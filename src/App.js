import React, { Component } from 'react';
import peta from './assets/peta.png';
import 'semantic-ui-css/semantic.min.css';
import { Icon,Button } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // titikX: null,
      // titikY: null,
      // idData: null,
      dataApi: [],
      dataApiKoordinat: [],
    };
    // this.koordinat = this.koordinat.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  // koordinat(e) {
  //   this.setState({
  //     titikX: e.clientX,
  //     titikY: e.clientY
  //   });
  // }

  handleButton(e) {
    // console.log(e.target.value);
    axios
      .get(`http://localhost:3001/koordinat/${e.target.value}`)
      .then((json) => {
        this.setState({
          dataApiKoordinat: json.data.titikXY,
        });
        console.log(this.state.dataApiKoordinat);
      });
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/koordinat`).then((json) => {
      this.setState({
        dataApi: json.data,
      });
      // console.log(this.state.dataApi);
    });
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then((response) => response.json())
    // .then((json) => {
    //   this.setState({
    //     dataApi: json
    //   })
    //   console.log(json);
    // });
  }
  render() {
    return (
      <div>
        {
          <img src={peta} alt="Peta" />
        }
        {
          // <div style={{position: "absolute", left: this.state.titikX, top: this.state.titikY}}>
          //   <Icon name="circle" size="tiny"/>
          // </div>
          // <p>{this.state.idData}</p>
        }

        {
          this.state.dataApiKoordinat.map((data,index)=>{
            return (
              <div key={index}>
                {
                  // data.titikXY.map((values,keys)=>{
                  //   return (
                  //     <div key={keys} style={{position: "absolute", left: values.titikX, top: values.titikY}}>
                  //       <Icon name="circle" size="tiny"/>
                  //     </div>
                  //   );
                  // })
                }
                <div style={{position: "absolute", left: data.titikX, top: data.titikY}}>
                    <Icon name="circle" size="tiny"/>
                  </div>
              </div>
            );
          })
        }

        {
          this.state.dataApi.map((data,index)=>{
            return (
              <div key={index}>
                <Button value={data.id} onClick={this.handleButton} primary>{data.jalan}</Button>
                <br/>
                <br/>
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default App;
