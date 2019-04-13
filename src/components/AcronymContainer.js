import React, { Component } from 'react';
import AcronymLetter from './AcronymLetter';

class AcronymContainer extends Component {
  render() {
    return (
      <section 
        className="AcronymContainer"
        onMouseOver={this.toggleShowDetails}
        onMouseLeave={this.toggleShowDetails}
      >
        {this.props.stages.map(stage =>
          <AcronymLetter 
            key={stage.id}
            stage={stage}
            findNextWords={this.props.findNextWords}
          />
        )}
      </section>
    );
  }
}

export default AcronymContainer;