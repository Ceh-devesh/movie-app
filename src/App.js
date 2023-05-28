import "./App.css";
import React from "react";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=45f0782a&s=war"
      );
      
      this.setState({
        movie: response.data.Search,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1 className="h1"></h1>
        <Card movieList={this.state.movie} />
      </div>
    );
  }
}

export default App;