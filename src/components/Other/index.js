import React from 'react';
import './styles.css';

class Other extends React.Component {
  state = {
    altImageDisplay: false,
    targetCard: null,
    interestCards: [
      {
        className: 'Overwatch',
        URL: 'https://i.imgur.com/72n7QdH.png'
      },
      {
        className: 'Fortnite',
        URL:
          'http://purepng.com/public/uploads/large/giddy-up-fortnite-skin-3lu.png'
      },
      {
        className: 'Body-building',
        URL:
          'http://pluspng.com/img-png/weightlifter-png-hd-weightlifting-zeppelin-logo-request-by-foutley-pluspng-com-weightlifting-png-1000.png'
      }
    ]
  };

  swapImage = (altImageDisplay, targetCard) => {
    this.setState({ altImageDisplay, targetCard });
  };

  render() {
    const { interestCards } = this.state;
    return (
      <section className="other-section">
        <h1 className="other-title">
          {' '}
          <i className="fab fa-pagelines" /> Hobbies
        </h1>
        <section className="interest-board">
          {interestCards.map(card => {
            const { URL, className, hoverURL } = card;
            return (
              <div
                className="interest-card"
                onMouseEnter={this.swapImage.bind(null, true, className)}
                onMouseLeave={this.swapImage.bind(null, false, null)}
              >
                <img src={URL} alt={'interest img'} className={className} />
                <div className={`${className}-text`}>{className}</div>
              </div>
            );
          })}
        </section>
        <footer>© 2018 Paul Kim</footer>
      </section>
    );
  }
}

export default Other;
