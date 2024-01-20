import React from 'react'

const Video = ({src}) => {
  return (
    <div>
      <video width="600" height="600" controls autoPlay="true">
          <source src={`/assets/${src}.mp4` }type="video/mp4"/>
          {/* <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          /> */}
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Video