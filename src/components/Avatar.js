import React from 'react';



class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estLoad : false,
            avatar : this.props.avatar
        };
    }

    render() {
        return (
            <div class="user_photo horizontal_center" id="user_photo">
                        <a class="refresh" onClick={ this.props.nouveauUser }>Nouveau</a>
                        <img src={ this.state.avatar } />
                    </div>
        );
    }
}

export default Avatar;