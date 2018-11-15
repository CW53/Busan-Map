export class Container extends React.Component {
  render () {
    const style = {
      width:'100vw',
      height:'100vh'
    };
    return (
      <div>
      <Map google={this.props.google} 
      /Map>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyCxdfL196c-Bc35cOZjylFRfQye1kyNO-U
})(Container)