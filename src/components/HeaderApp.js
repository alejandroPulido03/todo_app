import React from 'react';

class HeaderApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colorMode: 'light',
		};
	}
	render() {
		return (
			<header className={`header${this.state.colorMode}`}>
				<div className='app-header__container'>
					<h1 className='app-header__logo'>TODO</h1>
					<DarkModeBtn
						colorMode={this.state.colorMode}
						onClick={() => this.switchDarkMode()}
					></DarkModeBtn>
				</div>
			</header>
		);
	}

	switchDarkMode() {
		this.setState({
			colorMode: this.state.colorMode === 'light' ? 'dark' : 'light',
		});

		const cssVariables = {
			dark: {
				'--bg-color': 'hsl(235, 21%, 11%)',
				'--box-color': 'hsl(235, 24%, 19%)',
				'--text-color': 'hsl(234, 39%, 85%)',
				'--focus-text-color': 'hsl(236, 33%, 92%)',
				'--secondary-color': 'hsl(234, 11%, 52%)',
			},
			light: {
				'--bg-color': 'hsl(236, 33%, 92%)',
				'--box-color': 'hsl(0, 0%, 98%)',
				'--text-color': 'hsl(236, 9%, 61%)',
				'--focus-text-color': 'hsl(235, 19%, 35%)',
				'--secondary-color': 'hsl(233, 11%, 84%)',
			},
		};

		for (let cssVar in cssVariables[this.state.colorMode]) {
			document.documentElement.style.setProperty(
				cssVar,
				cssVariables[
					this.state.colorMode === 'light' ? 'dark' : 'light'
				][cssVar] //Updated with the other value because with the click the state isn't uploaded yet
			);
		}

		return;
	}
}

function DarkModeBtn(props) {
	return (
		<span
			className={`header-darkMode__toggle ${props.colorMode}`}
			onClick={() => props.onClick()}
		></span>
	);
}

export default HeaderApp;
