import React from 'react'

function Loading() {
  return (
    <img id="imgloading" src={process.env.PUBLIC_URL + `/assets/images/loading.gif`} title="loading" alt="loading" />
  )
}

export default Loading