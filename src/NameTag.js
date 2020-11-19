import { render } from "@testing-library/react"

import React from 'react';
import './NameTag.css';
import Badge from './Badge.js';

// class NameTag extends React.Component {

//     render() {
//         let color = this.props.color

//         return(
//             <div className="NameTag">
//                 <img src={this.props.image} />
//                 <br/>
//                 {this.props.name} {this.props.tag}
//             </div>
//         )
//     }
    
// }

function NameTag(props) {
    let color = props.color
    let name = props.name
    let tag = props.tag
    let image = props.image
    let type = props.type

    let output = ""

    switch (type) {
        case "inline":
        default:
            output = (
                <p>아 슬슬 집중이안돼요</p>
            )
            break;
        case "break-all":
            output = (
                <p>큰1입니다</p>
            )
    }

    // let color_stat = (typeof(color) == "undefined")? "no color":`color: ${color}`
    let color_stat = (<Badge color={color} />)

    let tag_app = (
        <div className="NameTag">
            <img src={image} />
            <br/>
            {color_stat}
            {output}
            {name} {tag}
        </div>
    );
    

    return tag_app;
}

export default NameTag;