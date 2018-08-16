import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

// Component es una clase de React
// lo que se hace es extender esa clase
// como una especie de constructor

// class Media extends React.Component {
class Media extends PureComponent {
  // ES6
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     author: props.author
  //   }
  //
  //   this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    author: 'Leonidas Esteban'
  }


  // ES7
  handleClick = (event) => {
    // console.log(this.props.title)
    this.setState({
      author: 'Ricardo Celis'
    })
  }

  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red',
        textAlign: 'center',
      }
    }
    return (
      // <div style={styles.container}>
      // El this hace referencia a la clase Media
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video','audio']),
}

export default Media
