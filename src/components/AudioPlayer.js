import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer() {
  return (
    <div className='audio-player'>
        <ReactAudioPlayer controls
            src={process.env.PUBLIC_URL+'/media/Wo-Men-Bu-Yi-Yang.mp3'}
            autoPlay={false}
            onPlay={e => console.log("AudioPlayer: onPlay")}
        />
    </div>
  )
}

export default AudioPlayer