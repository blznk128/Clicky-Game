import React, { Component } from "react";
import Card from "./Components/Card";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import narcos from "./narcos.json";


class App extends Component {
  state = {
    narcos,
    score: 0,
    highscore: 0
  };

  clicks = id => {
    this.state.narcos.find((o, i) => {
      if (o.id === id) {
        if(narcos[i].count === 0){
          narcos[i].count = narcos[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.narcos.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameEnds();
        }
      }
    });
  }
  gameEnds = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.narcos.forEach(card => {
      card.count = 0;
    });
    alert(`You Lost! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Narcos Click Game</Header>
        {this.state.narcos.map(card => (
          <Card
            clicks={this.clicks}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
