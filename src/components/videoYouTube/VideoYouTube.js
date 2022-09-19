import React from 'react';
import './videoYouTube.css';

export const VideoYouTube = ({ video, activeRules }) => {
  const stringTrim = (str) => (str.length > 48 ? str.slice(0, 48) + '...' : str);
  const classRules = (str1, str2) => !activeRules ? str1 : str2;

  return (
    <div className={classRules('VideoYouTube-justify','VideoYouTube-column')}>
      {video.map((item) => (
        <div
          style={!activeRules ? null : {width : '700px'}}
          key={item.etag}
          className={classRules('VideoYouTube-iframe', 'VideoYouTube-bottom')}>
          <iframe
            className={classRules('cur', 'cur VideoYouTube-bottom')}
            width="240"
            height="128"
            src={`https://www.youtube.com/embed/${item.id.videoId}?fs=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
            video
          </iframe>
          <p className={classRules('', 'VideoYouTube-ml')}>{classRules(stringTrim(item.snippet.title),item.snippet.title)} </p>
        </div>
      ))}
    </div>
  );
};
