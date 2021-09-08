import React from 'react'
import Star from './Star'

const createArray = (length) => [...Array(length)]

function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = React.useState(0)
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {[
        createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        )),
      ]}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}
export default StarRating
