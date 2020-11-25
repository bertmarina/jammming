import React from 'react';
import './SearchResults.css';

import {TrackList} from '../trackList/TrackList';

export class SearchResults extends React.Component {
  
  render() {
    return (
      <div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults} 
  onAdd={this.props.onAdd} 
  playlistTracks={this.props.playlistTracks}
  />
</div>
    );
  }
}