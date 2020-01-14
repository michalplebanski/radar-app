import * as React from 'react';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

  async componentDidMount() {
			let r = await fetch('/test');
			let res = await r.json();
			this.setState({ data: res.users });
	}

	render() {
		return (
			<main className="container my-5">
				<ul className="radar">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					{this.state.data.map(item => {
						const style = {
							bottom: `${(item.Distance*70/410)+58}px`,
							left: `${item.Angle*600/90}px`
						}
						return <li className="point" style={style} key={item.id}>.</li>
					})}
        		</ul>
			</main>
		);
	}
}

export default App;
