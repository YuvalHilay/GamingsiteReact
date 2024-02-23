import React, { Component } from 'react';

class Wish extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      searchResults: []
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  performSearch = () => {
    const { siteData } = this.props;
    if (!siteData) {
        <p>אין מוצרים.</p> // Handle the case where siteData is not defined
      return;
    }

    const filteredResults = siteData.filter(item => {
      // Check if the 'title' property is defined before calling toLowerCase()
      if (item.title) {
        return item.title.toLowerCase().includes(this.state.searchQuery.toLowerCase());
      }//המרת מחרוזת
      return false;
    });

    this.setState({ searchResults: filteredResults });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for games in your wishlist"
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        <button onClick={this.performSearch}>Search</button>

        {this.state.searchResults.length > 0 ? (
          <ul>
            {this.state.searchResults.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <h1>No games found.</h1>
        )}
      </div>
    );
  }
}

export default Wish;
