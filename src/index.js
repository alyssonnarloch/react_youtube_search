import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDgTQmmiOMa4AwRjShx0iUrkJpEi6iI4ZA';

// Criação do component
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideos: null
        };
        
        YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            //this.setState({ videos: data });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        );
    };
}

// Coloca o componente na página
ReactDOM.render(<App />, document.querySelector('.container'));
