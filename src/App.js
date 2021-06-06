import React from 'react'
import ReactPlayer from 'react-player/lazy'
import client from './feathers';
import Login from './login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {videoFilePath: "", canPlay: false};
  }

  componentDidMount() {
    console.log("did mount()")
    // Try to authenticate with the JWT stored in localStorage
    client.authenticate().catch(() => this.setState({ login: null }));
    // On successfull login
    client.on('authenticated', login => {
      console.log("authenticated", login)
      this.setState({ login });
    });
  }
  handleVideoUpload = (event) => {
    console.log( URL.createObjectURL(event.target.files[0]), ReactPlayer.canPlay(URL.createObjectURL(event.target.files[0])))
    this.setState({canPlay: ReactPlayer.canPlay(URL.createObjectURL(event.target.files[0]))})
    this.setState({videoFilePath: URL.createObjectURL(event.target.files[0])});
  };

  render() {
    if(this.state.login) {
      return <div>
        <input type="file" onChange={this.handleVideoUpload} />
        <ReactPlayer url={this.state.videoFilePath} width="100%" height="100%" controls={true} onError={e => console.log('onError', e)} />
      </div>
    }
    return <Login />;
  }
}

export default App;
