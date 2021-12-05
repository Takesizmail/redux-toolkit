import React, { Component } from 'react';
import Title from '../base/Title';

interface IState {
	error: boolean;
	errorInfo: React.ErrorInfo | null
}

interface IProps {
	children: React.ReactNode;
}

/**
 * Error catcher for all App
 *
 */
class ErrorBoundary extends Component<IProps, IState> {
	state = {
		error: false,
		errorInfo: null
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log('ErrorInfo', errorInfo)
		this.setState({ error: true, errorInfo: errorInfo  })
	}

	render () {
		const {error, errorInfo} = this.state

		if (error) {
			return (
				// @ts-ignore
				<Title color='red' > UPS.... {errorInfo!.componentStack} </Title>
			);
		}

		return this.props.children
	}
}

export default ErrorBoundary;
