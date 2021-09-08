import React from 'react'
import Star from './Star'

const createArray = (length) => [...Array(length)]

function StarRating({ totalStars = 5, selectedStars = 0 }) {
  // const [selectedStars, setSelectedStars] = React.useState(0)
  return (
    <>
      {[
        createArray(totalStars).map((n, i) => (
          <Star key={i} selected={selectedStars > i} />
        )),
      ]}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}
export default StarRating
