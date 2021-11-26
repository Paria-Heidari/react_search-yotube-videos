import React from 'react';


const VideoItems = ({video, onSelectedVideo}) => {
    return (
        <div onClick={()=> {onSelectedVideo(video)}} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
                <div className="content" style={{marginTop:5}}>
                    <div className="header">{video.snippet.title}</div>
                </div>
        </div>
    );
}



export default VideoItems;