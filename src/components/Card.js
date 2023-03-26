import React from 'react';
import axios from 'axios';
import Avatar from './Avatar';
import Information from './Information';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estLoad: false,
            carte : []
        };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api')
            .then((response) => {
                const carte = response.data;
                this.setState({
                    carte : carte,
                    estLoad: true})
            })
    }

    nouveauUser = () => {
        this.setState({
            estLoad: false
        });
        axios.get('https://randomuser.me/api')
        .then((response) => {
            const carte = response.data;
            this.setState({
                carte: carte,
                estLoad: true
            })
        })
    }

    render() {
        if(!this.state.estLoad) {
            return (
                <p>Chargement</p>
            )
        }

        return (
            <div class="card">
                <div class="details">
                    <Avatar
                        avatar = { this.state.carte.results[0].picture.large }
                        nouveauUser = { this.nouveauUser }
                    />
                    <Information 
                        info = { this.state.carte.results[0] }
                    />
                    
                </div>
                
            </div>
        );
    }
}

export default (Card);

