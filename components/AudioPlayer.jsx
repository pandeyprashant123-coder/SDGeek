import React from 'react';

const AudioPlayer = ({ source}) => {
  return <audio autoPlay src={source}></audio>;
};

export default AudioPlayer;
