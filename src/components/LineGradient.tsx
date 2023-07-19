import React from 'react'

interface Props {
  width: string
}

function LineGradient(props: Props) {
  const { width } = props;
  
  return (
    <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>
  )
}

export default LineGradient