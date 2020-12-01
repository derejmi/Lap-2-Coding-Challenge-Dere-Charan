import React from "react";
import "./repo.css";

class Repo extends React.Component {
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
          <p>Date: {updated_at}</p>
        </div>
      </li>
    );
  }
}

export default Repo;
