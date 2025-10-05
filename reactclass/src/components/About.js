import React from 'react';
//About component
function About() {
    const colorz = { //Inline css block
        color: 'red'
    };
    return (<div>
        <h2>About Section</h2>

        <p style={colorz}> <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus facilisis elit nec fringilla. Aenean sed rhoncus ex. Morbi aliquet vitae eros et eleifend. Nam maximus ullamcorper sem ultricies fermentum. Donec porta nunc nibh, sodales dictum urna venenatis quis. Nullam gravida consequat justo nec ullamcorper. Praesent cursus, turpis vitae varius vulputate, est massa lacinia elit, quis scelerisque nisl urna at enim. Aenean dignissim augue vitae consectetur volutpat. Pellentesque ut tortor dapibus, blandit diam quis, accumsan ipsum.</b></p>

        </div>
    );
}

export default About;