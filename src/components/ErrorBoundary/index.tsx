import React, { Component } from 'react';
import Title from '../base/Title';

interface IState {
	error: boolean;
}

interface IProps {
	children: React.ReactNode;
}

class ErrorBoundary extends Component<IProps, IState> {
	state = {
		error: false
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({ error: true })
	}

	render () {
		if (this.state.error){
			return (
				<Title color='red' > UPS.... </Title>
			);
		}

		return this.props.children
	}
}

export default ErrorBoundary;
