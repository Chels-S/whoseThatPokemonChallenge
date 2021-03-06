import React, { Component } from 'react'
import './PokeFetch.css';



class PokeFetch extends Component {
  constructor() {
    super()
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      visible: false,
      timer: 10
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
        setInterval(() => this.tick(), 1000);
        this.resetTimer()
      })
      .catch((err) => console.log(err))
    }


    tick(){
      if (this.state.timer > 0){
        this.setState({
            timer: this.state.timer - 1
        })
      }
      if(this.state.timer === 0){
        clearInterval(this.state.timer)
      }
    }

    resetTimer(){
      if (this.state.timer === 0){
        this.setState({
          timer: this.state.timer = 10
        })
      }

    }

    fadeIn(){

    }
    
    
    componentWillUnmount(){
      
    }


  // componentDidMount(){
  //   this.myInterval = setInterval(() => {
  //     const{seconds} = this.state
      
  //     if (seconds > 0) {
  //       this.setState(({seconds}) => ({
  //         seconds: seconds - 1
  //       }))
  //     }
  //     if(seconds === 0){
  //       clearInterval(this.myInterval)
  //     }
  //   }, 1000)
  // }

  // componentWillUnmount(){
  //   clearInterval(this.myInterval)
  // }
 
  

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <h1 className={'timer'} >{this.state.timer}</h1>
        <div className={'pokeWrap'}>
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }
}

export default PokeFetch;