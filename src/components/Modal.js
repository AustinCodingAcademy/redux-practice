import React from 'react';
import Modal from 'react-modal';
import store from '../store'

class LoadingModal extends React.Component {
  state={
    isLoading:false
  }

  componentDidMount() {
    store.subscribe(()=> {
      this.setState({isLoading: store.getState().isLoading})
    });
  }

  render() {
    const {
      props,
    } = this;

    return (
      <Modal
        isOpen={props.isLoading}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={
          ()=>{
            store.dispatch({type:"SET_IS_LOADING", value: false})
          }
          }>close</button>
        <div>Loading .......</div>

      </Modal>
    );
  }
}

export default LoadingModal;











const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
