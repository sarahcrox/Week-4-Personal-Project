import React, {Component} from 'react'
import Reveal from './Reveal'
// import axios from '.axios'

class LipsAreSealed extends Component {
    constructor(){
        super();
        this.state = {
            hiddenSecrets: ''
        }
//         this.componentDidMount = this.componentDidMount.bind(this)
    }

//     componentDidMount(){
//         // axios.get('/api/hiddenSecrets')
//             .then(res => {
//                 this.setState({
//                     hiddenSecrets: res.data
//                 })
//             })
    // }

    render(){
        return(
            <img src="assets/IMG_1209.PNG" alt= 'Lips' height='220px'/>
        )
    }
}

export default LipsAreSealed

// // import React, { Component } from 'react'
// // import Grass from './Grass'
// // import axios from 'axios'

// import Pokemon from './Pokemon';

// // class Finder extends Component {
// //     constructor(){
// //         super();
// //         this.state={
// //             wildPokemon: []
// // //         }
// //         this.componentDidMount = this.componentDidMount.bind(this)
// //     }

//     // componentDidMount(){
//     //     axios.get('/api/wild-pokemon')
//     //         .then(res => {
//     //             this.setState({
//     //                 wildPokemon: res.data
//     //             })
//     //         })
//     // }


//     render() {
//         const pokemonList = this.state.wildPokemon.map(element => {
//             return <Grass 
//                         key={element.id}
//                         pokemon={element}
//                         catchPokemon={this.props.catchPokemon}
//                         refreshFn={this.componentDidMount}
//                     />
//         })
//         return (
//             <div className='finder-box'>
//                 {pokemonList}
//             </div>
//         )
//     }
// }

// export default Finder

// // Get-Random Pokemon