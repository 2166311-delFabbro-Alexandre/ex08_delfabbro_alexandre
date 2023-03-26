import React from 'react';


class NomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.info.name.title + " " + this.props.info.name.first + " " + this.props.info.name.last
        };
    }

    render() {
        return (
            <div>
                <p id="user_title">Hi, My name is</p>
                <p id="user_value" >{ this.state.name }</p>
            </div>
            // <ul class="values_list horizontal_center" id="values_list">
            //     <li data-title="Hi, My name is" data-value="Jared Wade" data-label="name" class="  "></li>
            //     <li data-title="My email address is" data-value="jared.wade@example.com" data-label="email" data-caps="false" class="  "></li>
            //     <li data-title="My birthday is" data-value="12/2/1963" data-label="birthday" class="     "></li>
            //     <li data-title="My address is" data-value="2448 Mcgowen St" data-label="location" class="     "></li>
            //     <li data-title="My phone number is" data-value="(386) 431-8812" data-label="phone" class="         "></li>
            //     <li data-title="My password is" data-value="obsidian" data-label="pass" data-caps="false" class="       active"></li>
            // </ul>
        );
    }
}

export default NomComponent;