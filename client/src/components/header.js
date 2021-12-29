import React, { Component, useState } from 'react';
import axios from 'axios';



class Header extends Component {

  constructor(props) {
    super(props);
    // state 초기값 설정
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;		// state 조회
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => {
            this.setState({		// this.setState를 통해 state 업데이트
              count: count + 1
            });
          }}>
            Click me
          </button>
          
        </div>
      );
    }
  }

export default Header;