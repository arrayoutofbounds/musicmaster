import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{

	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	search(){
		console.log('this.state', this.state)
	}

	render(){
		return(
			<div className="App">
				<div className="App-title">Music Master</div>
				<FormGroup>
					<InputGroup>
						<FormControl type="text" placeholder="Search for an artist..." 
							value={this.state.query} 
							onKeyPress={event => {
									if(event.key == "Enter"){
										this.search();
									}
								}
							} 
							onChange={event => {this.setState({query:event.target.value})}}
						/>
						<InputGroup.Addon onClick={() => this.search()}>
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
				<div className="Profile">
					<div>Artist Picture</div>
					<div>Artist Name</div>
				</div>
				<div className="Gallery">
					Gallery
				</div>
			</div>
		)
	}

}

export default App;