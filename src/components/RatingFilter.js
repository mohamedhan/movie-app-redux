import React from 'react'
import Rating from './Rating'
import {connect} from 'react-redux'
import {ratingFilter} from '../actions/actions'
const RatingFilter = ({onChange=()=>{}, count=0}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Search by Rating</span>
        <Rating
            count={count}
            // onChangeRating={(newRating) =>{
            //     onChange(newRating)
            // }}
            onChangeRating={onChange}
             />
      </div>
)


const mapStateToProps=state=>({
    count:state.ratingFilter
})
const mapDispatchToProps=dispatch=>({
    onChange:(newRating)=>{dispatch(ratingFilter(newRating))}
})

export default connect(mapStateToProps,mapDispatchToProps)(RatingFilter) 