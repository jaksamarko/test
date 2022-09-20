import React from 'react';
import gameConfig from './config';

class GameMain extends React.Component {
	state = { game: undefined } as { game: Phaser.Game | undefined };
	componentDidMount(): void {
		if (!this.state.game) this.state.game = new Phaser.Game(gameConfig);
	}

	componentWillUnmount(): void {
		this.state.game?.destroy(true);
		//this.setState({ game: undefined });
		this.state.game = undefined;
	}

	shouldComponentUpdate(): boolean {
		return false;
	}

	render(): React.ReactNode {
		return <div id="phaser-game" />;
	}
}

export default GameMain;
