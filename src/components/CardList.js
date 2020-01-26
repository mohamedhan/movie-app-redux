import React from 'react';
import Card from "./Card";
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/actions'
const CardList = (props) => {
    return (
        // .filter(el => el.rating >= this.state.minRatingFilter &&
        //     el.title.toLowerCase().includes(searchName.toLowerCase()))
        <div className="movieApp">
            {props.movies.filter(el=>el.name.toLowerCase().includes(props.filtername)&& el.star>=props.ratingFilter).map(elm => (

                <Card e={elm} del={() => props.delete(elm.id)} />
            ))}
        </div>
    )
}

const mapStateToProps=state=>({
    movies:state.movie.movies,
    filtername:state.titleFilter,
    ratingFilter:state.ratingFilter
})

const mapDispatchToProps = dispatch => ({
delete: x => dispatch(deleteMovie(x))

}
)
;

const MovieListContainer = connect(mapStateToProps,
    mapDispatchToProps)(CardList)

export default MovieListContainer