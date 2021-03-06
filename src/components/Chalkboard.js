import React, { Component } from 'react';

class Chalkboard extends Component {
  render() {
    return (
      <section className="Chalkboard">
        <div className="phraseContainer">
          {this.props.chalkboardPhrases.map((phrase, index) =>
            <p key={index}>
              {phrase}
            </p>
          )}
          <p>{this.props.currentPhrase}</p>
        </div>
      </section>
    );
  }
}

export default Chalkboard;
