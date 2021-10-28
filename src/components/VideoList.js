import React from 'react';
import VideoItems from "./VideoItems";


// props.videos
const VideoList = ({videos, onSelectedVideo}) =>{
    const renderedList = videos.map((video) => {
        return <VideoItems key={video.id.videoId} onSelectedVideo={onSelectedVideo} video={video}/>;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;