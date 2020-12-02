import React from "react";

class Repo extends React.Component {
  state = {
    important: false,
  };

  changeImportance = () => {
    this.setState((prevState) => ({ important: !prevState.important }));
  };

  render() {
    const {
      name,
      description,
      forks,
      open_issues_count,
      stargazers_count,
      updated_at,
      owner: { avatar_url },
    } = this.props.details;

    const isImportant = this.state.important;
    const buttonText = isImportant ? "Unmark ❌ " : "Mark as Important 📌";

    return (
      <li className="repo-list">
        <div className="repo-list-img">
          <img src={avatar_url} />
        </div>
        <div className="repo-list-details">
          <h3>{name}</h3>
          <p>Description: {description}</p>
          <p>Forks: {forks}</p>
          <p>Open Issues: {open_issues_count}</p>
          <p>Stargazers: {stargazers_count}</p>
          <p>Last updated: {updated_at.split("T")[0]}</p>
          <button
            onClick={this.changeImportance}
            style={{
              backgroundColor: this.state.important ? "rebeccapurple" : "white",
              color: this.state.important ? "white" : "black",
            }}
          >
            {buttonText}
          </button>
        </div>
      </li>
    );
  }
}

export default Repo;
