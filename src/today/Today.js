import React from 'react';
import { connect } from 'react-redux';

const Today = () => {
    return (
        <div>

        </div>
    );
};


function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, null)(Today);