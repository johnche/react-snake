import React, { Component } from 'react';
import './App.css';
import Canvas from './canvas';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Canvas width={400} height={400}  rows={10} cols={10} />
			</div>
		);
	}
}

export default App;
