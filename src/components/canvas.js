import React from 'react';

class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: this.props.height,
			width: this.props.width,
			rows: 10,
			cols: 10
		};
		this.drawBorder = this.drawBorder.bind(this);
		this.drawCoordinates = this.drawCoordinates.bind(this);
		this.drawCell = this.drawCell.bind(this);
	}

	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		this.drawBorder(ctx);
		this.drawCoordinates(ctx);
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
		let x_step = this.state.width/this.state.cols;
		let y_step = this.state.height/this.state.rows;
		for (let i = 0; i <= this.state.cols; i++) {
			ctx.moveTo(i*x_step, 0);
			ctx.lineTo(i*x_step, this.state.height);
		}
		for (let i = 0; i <= this.state.rows; i++) {
			ctx.moveTo(0, i*y_step);
			ctx.lineTo(this.state.width, i*y_step);
		}
		ctx.strokeStyle = '#FF0000';
		ctx.stroke();
	}

	drawCell(ctx, x, y) {
		let x_step = this.state.width/this.state.cols;
		let y_step = this.state.height/this.state.rows;
		ctx.fillStyle = 'blue';
		ctx.fillRect(x, y, x + x_step, y + y_step);
	}

	render() {
		return (
			<canvas ref="canvas" width={this.state.width} height={this.state.height} />
		);
	}
}

export default Canvas;
