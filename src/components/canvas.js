import React from 'react';

class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: this.props.height,
			width: this.props.width,
			rows: this.props.rows,
			cols: this.props.cols,
			x_step: this.props.width/this.props.cols,
			y_step: this.props.height/this.props.rows
		};

		this.drawBorder = this.drawBorder.bind(this);
		this.drawCoordinates = this.drawCoordinates.bind(this);
		this.drawCell = this.drawCell.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		this.drawBorder(ctx);
		this.drawCoordinates(ctx);
		// create snake
		// create food
		setInterval(() => this.draw(ctx) , 600);
	}

	draw(ctx) {
		// move snake
		// draw snake
		//check for endgame
	}


	drawBorder(ctx) {
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(this.state.width, 0);
		ctx.lineTo(this.state.width, this.state.height);
		ctx.lineTo(0, this.state.height);
		ctx.lineTo(0, 0);
		ctx.stroke();
	}

	drawCoordinates(ctx) {
		ctx.beginPath();
		for (let i = 0; i <= this.state.cols; i++) {
			ctx.moveTo(i*this.state.x_step, 0);
			ctx.lineTo(i*this.state.x_step, this.state.height);
		}
		for (let i = 0; i <= this.state.rows; i++) {
			ctx.moveTo(0, i*this.state.y_step);
			ctx.lineTo(this.state.width, i*this.state.y_step);
		}
		ctx.strokeStyle = '#FF0000';
		ctx.stroke();
	}

	drawCell(ctx, x, y) {
		let xpos = x*this.state.x_step;
		let ypos = y*this.state.y_step;
		ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
		ctx.fillRect(xpos, ypos, this.state.x_step, this.state.y_step);
	}

	render() {
		return (
			<canvas ref="canvas" width={this.state.width} height={this.state.height} />
		);
	}
}

export default Canvas;
