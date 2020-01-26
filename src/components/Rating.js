import React from 'react'
import ratingFilter from '../actions/actions'
import {connect} from 'react-redux'
// ★ ☆

const Rating = ({count, onChangeRating = () => {}}) => {
    let stars = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            stars.push(<span onClick={() => onChangeRating(i+1)} key={i}>★</span>)
        }
        else {
            stars.push(<span onClick={() => onChangeRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div className="movieRating">{stars}</div>
    )
}

export default Rating