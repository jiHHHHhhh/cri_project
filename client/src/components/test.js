import React, { Component } from 'react';

class King extends Component {

    render() {

        return (
            <div>
                안녕! 너는 프롭이니?! <b>{this.props.name}</b>
            </div>
        );

    }

}

export default King;