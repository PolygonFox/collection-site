import React, { Component } from 'react';


import styled from 'styled-components';

const Wrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;

    /* This sets the height of all rows */
    /* grid-auto-rows: 100px; */

    /* This gives all the rows a specific minimum height, but when one of the column items are heigher, 
        all column items will take that height. (foundation equalizer like) */
    grid-auto-rows: minmax(100px, auto); 

    .nested {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 70px;
        grid-gap: 1em;

        & > div {
            border: 1px solid black;
        }
    }

    & > div, .nested > div {
        background: #eee;
        padding: 1em;
    }

    & > div:nth-child(odd), .nested > div:nth-child(odd) {
        background: #ddd;
    }
`;

class Basic2 extends Component {
    state = {}
    render() {
      return (
        <Wrapper>
          <div>
                    Lorem ipsum dolor sit
          </div>
          <div>
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
                sitLorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
                dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit
                Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor
                sit Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum
                dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit Lorem
                ipsum dolor sit Lorem ipsum dolor sit
          </div>
          <div>
            <div className="nested">
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>
          </div>
          <div>
                    Lorem ipsum dolor sit
          </div>
          <div>
                    Lorem ipsum dolor sit
          </div>
          <div>
                    Lorem ipsum dolor sit
          </div>
          <div>
                    Lorem ipsum dolor sit
          </div>
        </Wrapper>
      );
    }
}

export default Basic2;
