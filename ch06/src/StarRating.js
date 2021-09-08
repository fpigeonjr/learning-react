import React from 'react'
import Star from './Star'

const createArray = (length) => [...Array(length)]

function StarRating({ totalStars = 5 }) {
  return [createArray(totalStars).map((n, i) => <Star key={i} />)]
}
export default StarRating
