import React from 'react';
import './styles.css';

class Other extends React.Component {
  state = {
    targetCard: null,
    interestCards: [
      {
        className: 'Sprinklers',
        URL:
          'http://www.greenturf.com/wp-content/uploads/2016/05/sprinkler-system.jpg'
      },
      {
        className: 'Furniture',
        URL:
          'https://i1.wp.com/bemethis.com/wp-content/uploads/2018/01/Funny-Furniture-Pictures-1.jpg?fit=576%2C432&ssl=1'
      },
      {
        className: 'Web-design',
        URL:
          'http://www.pngall.com/wp-content/uploads/2016/07/Web-Design-PNG-Image.png'
      },
      {
        className: 'Bacon',
        URL:
          'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bacon-PNG-Transparent-Image-1-500x500.png'
      },
      {
        className: 'Github',
        URL: 'http://octodex.github.com/images/stormtroopocat.jpg'
      },
      {
        className: 'Southpark',
        URL: 'https://data.whicdn.com/images/254820385/original.gif'
      },
      {
        className: 'React / Redux',
        URL:
          'https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png?w=640'
      },
      {
        className: 'Jest / Enzyme',
        URL:
          'https://camo.githubusercontent.com/31983294a16a373a7e752b57904f64cc030750db/68747470733a2f2f6a6573746a732e696f2f696d672f6a6573742e706e67'
      },
      {
        className: 'Vintage',
        URL:
          'https://raingearwipers.com/wp-content/uploads/2015/05/1957-chevy-6-color-1024x640.png'
      }
    ]
  };

  swapImage = targetCard => {
    this.setState({ targetCard });
  };

  render() {
    const { interestCards, targetCard } = this.state;
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
                onMouseEnter={this.swapImage.bind(null, className)}
                onMouseLeave={this.swapImage.bind(null, null)}
              >
                <img src={URL} alt={'interest img'} className={className} />
                <div
                  className={
                    targetCard === className
                      ? 'interest-text interest-text-hide'
                      : 'interest-text-hide'
                  }
                >
                  {className}
                </div>
              </div>
            );
          })}
        </section>
      </section>
    );
  }
}

export default Other;
