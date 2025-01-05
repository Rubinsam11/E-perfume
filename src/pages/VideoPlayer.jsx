import './Home.css';
import React from 'react';

/**
 * VideoPlayer Component
 * @param {string} src - The video file source URL
 * @param {string} poster - The poster image displayed before the video starts playing
 * @param {boolean} controls - Whether to show player controls (default: true)
 * @param {boolean} loop - Whether the video should loop (default: true)
 * @param {boolean} muted - Whether the video should start muted (default: true)
 * @returns {JSX.Element} The video player component
 */
const VideoPlayer = ({ src, poster, controls = true, loop = true, muted = true }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <video
        src={src}
        poster={poster}
        autoPlay
        loop={loop}
        muted={muted}
        controls={controls}
        style={{
          width: '100%',
          maxWidth: '200%',
          height: 'auto',
          borderRadius: '10px',
          border: '2px solid #ccc',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
