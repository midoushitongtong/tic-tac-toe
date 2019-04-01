import React from 'react';
import './index.scss';

interface Props {
  currentPlayer: string;
}
interface State {}

export default class History extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render = (): JSX.Element => {
    const { props } = this;
    return (
      <section className="player-info-container">
        下一步: {props.currentPlayer}
      </section>
    );
  };
}
