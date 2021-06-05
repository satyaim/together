import React from 'react'
import ReactPlayer from 'react-player/lazy'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {videoFilePath: "", canPlay: false};
  }

  handleVideoUpload = (event) => {
    console.log( URL.createObjectURL(event.target.files[0]), ReactPlayer.canPlay(URL.createObjectURL(event.target.files[0])))
    this.setState({canPlay: ReactPlayer.canPlay(URL.createObjectURL(event.target.files[0]))})
    this.setState({videoFilePath: URL.createObjectURL(event.target.files[0])});
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleVideoUpload} />
        <ReactPlayer url={this.state.videoFilePath} width="100%" height="100%" controls={true} onError={e => console.log('onError', e)} />
      </div>
    );
  }
}

export default App;
