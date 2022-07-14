import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'
import uuid from 'react-uuid'

function Stars({count}) {

    if (count < 1 || count > 5 || !Number.isInteger(count)) {
        return false;
    }

    return (
        <ul class="card-body-stars u-clearfix">
            {[...Array(count)].map(el => {
                return <Star key={uuid()} />
            })}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
    count: 0,
}

export default Stars

