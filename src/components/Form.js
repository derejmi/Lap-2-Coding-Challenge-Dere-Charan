import React from "react";

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
    debugger;
    fetch(url)
      .then((r) => r.json())
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
