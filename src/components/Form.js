import React from "React";

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
      .then((r) => r.json)
      .then((data) => this.setState({ userData: data }))
      .catch((err) => {
        console.warn(`Sorry but...${err}`);
      });
  };

  render() {
    return (
      <form onSubmit={this.handSubmit}>
        <input
          type="text"
          name="nameInput"
          placeholder="Enter a username..."
          value={this.state.nameInput}
          onChange={this.handleInput}
        />

        <input type="submit" value="Find Repos!" />
      </form>
    );
  }
}

export default Form;
