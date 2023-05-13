import React from 'react'

const ApiData = ({apidata}) => {
  return (
    <div>
      {apidata.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            
          </div>
        )
      })}
    </div>
  )
}

export default ApiData