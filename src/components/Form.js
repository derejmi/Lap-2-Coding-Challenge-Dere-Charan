import React from "react";
import Repo from "./Repo";
import Greeting from "./Greeting";
import "./form.css";

class Form extends React.Component {
  state = { nameInput: "" };

  updateInput = (e) => {
    const username = e.target.value;
    this.setState({ nameInput: username });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchGithubData(this.state.nameInput);
    this.setState({ nameInput: "" });
  };

  fetchGithubData = (username) => {
    const url = `https://api.github.com/users/${username}/repos`;
    fetch(url)
      .then((r) => r.json())
      .then((data) =>
        data.sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
      )
      .then((data) => this.setState({ userData: data }))
      .catch((err) => {
        console.warn(`Sorry but...${err}`);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="nameInput"
            placeholder="Enter your username..."
            onChange={this.updateInput}
            value={this.state.nameInput}
          />
          <input type="submit" value="Find Repos!" />
        </form>
        {this.state.userData && <Greeting details={this.state.userData[0]} />}
        {this.state.userData &&
          this.state.userData.map((repo, idx) => {
            return (
              <Repo
                key={`Repo ${idx + 1}`}
                index={`Repo ${idx + 1}`}
                details={this.state.userData[idx]}
              />
            );
          })}
      </div>
    );
  }
}

export default Form;
