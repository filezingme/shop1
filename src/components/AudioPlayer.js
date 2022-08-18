import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer() {
  return (
    <div className='audio-player'>
        <ReactAudioPlayer autoPlay controls
            src={process.env.PUBLIC_URL+'/media/Wo-Men-Bu-Yi-Yang.mp3'}
        />
    </div>
  )
}

export default AudioPlayer