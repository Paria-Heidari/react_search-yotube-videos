import React from "react";

// prob.video --> {video}
const VideoDetail = ({video})=>{
    if(!video){
        return<div>Loading ... </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="ui segmnet" style={{marginTop:20}}>
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );

}

export default VideoDetail;