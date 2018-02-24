import React, { Component } from 'react';


import styled from 'styled-components';

const Wrapper = styled.div`

    display: grid;

    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1em;

    justify-items: stretch; /* Center, Start, End */
    align-items: stretch;  /* Center, Start, End */

    .box1 {
        
        /* align-self: start; */
        grid-column: 1 / 3;
        grid-row: 1 / 3;

    }

    .box2 {
        /* align-self: end; */
        grid-column: 3;
        grid-row: 1 / 3;
    }

    .box3 {
        /* justify-self: end; */
        grid-column: 2 / 4;
        grid-row: 3;
    }

    .box4 {
        grid-column: 1;
        grid-row: 2 / 4;
        border: 1px solid black;

    }

    & > div {
        background: #eee;
        padding: 1em;
    }

    & > div:nth-child(odd) {
        background: #ddd;
    }
`;

const HeaderWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr minmax(auto, 700px) 1fr;
    grid-gap: 1em;

    & > div {
        grid-column: 2 / 3;
    }

    & > .full {
        grid-column: 1 / -1;
        background-size: cover;
        background-position: center;
        height: 500px;
    }

`;

class Basic3 extends Component {
    state = {}
    render() {
      return (
        <div>
          <Wrapper>
            <div className="box box1">1</div>
            <div className="box box2">2</div>
            <div className="box box3">3</div>
            <div className="box box4">4</div>
          </Wrapper>

          <HeaderWrapper>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Donec
                quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt. Cras dapibus. Vivamus elementum semper
                nisi. Aenean vulputate eleifend tellus. Aenean
                leo ligula, porttitor eu, consequat vitae, eleifend
                ac, enim. Aliquam lorem ante, dapibus in, viverra
                quis, feugiat a, tellus. Phasellus viverra nulla
                ut metus varius laoreet. Quisque rutrum. Aenean
                imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
                Nam eget dui.
            </div>
            <div className="full" style={{ backgroundImage: 'url(\'https://via.placeholder.com/1920x640/FF3030\')' }} />
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui.
            </div>
          </HeaderWrapper>
        </div>
      );
    }
}

export default Basic3;
