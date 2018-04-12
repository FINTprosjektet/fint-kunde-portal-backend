import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import {bindActionCreators} from 'redux';

class KlienterForm extends React.Component {
  constructor(props) {
    super(props);

  }
  
  submitForm(klienter) {
	  this.props.createKlienter(klienter)
	}

  render() {
	const {handleSubmit, submitForm} = this.props;
    return (
      <div>
      <form onSubmit={()=> this.submitForm()}>
      
          <TextInput
            name="name"
            label="name"
            value={this.props.klienter.name}
            onChange={this.props.onChange}/>

   
          <TextInput
            name="note"
            label="note"
            value={this.props.klienter.note}
            onChange={this.props.onChange}/>


          <TextInput
          name="shortDescription"
          label="ShortDescription"
          value={this.props.klienter.shortDescription}
          onChange={this.props.onChange}/>
	      
 

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
          <a href="/klienter/klienter"><button type="button">Cancel</button></a>             		
        </form>
                
      </div>
  );
  }
}



export default KlienterForm;
