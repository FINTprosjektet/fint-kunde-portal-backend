import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { createAdapter } from '../../actions/AdaptersAction';
import { withRouter } from "react-router-dom";
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {green} from 'material-ui/colors';
import {Add} from "material-ui-icons";
import {withStyles} from "material-ui";

const styles = theme => ({
  addButton: {
    margin: 0,
    top: 100,
    left: 'auto',
    bottom: 'auto',
    right: 50,
    position: 'fixed',
  }

});

class AdapterAdd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adapter: Object.assign({}, this.props.location.state),
      isSaving: false,
      isAdding: false
    };
    this.createAdapter = this.createAdapter.bind(this);
    this.updateAdapterState = this.updateAdapterState.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.saveAdapter = this.saveAdapter.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.adapter !== nextProps.adapter) {
      this.setState({adapter: Object.assign({}, nextProps.adapter)});

    }

    this.setState({saving: false, isAdding: false});
  }

  toggleAdd() {

    this.setState({isAdding: true});
  }

  saveAdapter(event) {
	    this.props.createAdapter(this.state.adapter, this.props.org);
  }


  updateAdapterState(event) {
    const field = event.target.name;
    const adapter = this.state.adapter;
    adapter[field] = event.target.value;
    return this.setState({adapter: adapter});
  }

  createAdapter(adapter, org) {
	    this.props.createAdapter(adapter,this.props.org)
  }

  state = {
		    open: false,
		  };
  handleClickOpen = () => {
	    this.setState({ open: true });
	  };

  handleClose = () => {
	this.createAdapter(this.state.adapter, this.props.org)
    this.setState({ open: false });
  };

  render() {
	  const {classes} = this.props;
      return (
      <div>
        <div>
        <Button variant="fab" color="secondary"  className={classes.addButton} onClick={this.handleClickOpen}><Add/></Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Ny adapter</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Vennligst fyll ut de obligatoriske feltene for å legge til ny adapter
            </DialogContentText>

              <TextField
              autoFocus
              margin="dense"
    	      required
    	      name="name"
    	      label="Adapter Navn"
    	      fullWidth
    	      onChange={this.updateAdapterState}
          />

          	<TextField
          	   name="shortDescription"
          	   label="Kort beskrivelse"
          	   fullWidth
          	   onChange={this.updateAdapterState}
          	/>

            <TextField
    	  	name="note"
    	  	label="Note"
    	  	fullWidth
    	  	multiline
            rows="4"
            onChange={this.updateAdapterState}
    	  />


          </DialogContent>
	          <DialogActions>
	            <Button onClick={this.handleClose} color="primary" style={{textTransform: 'none'}}>
	            Avbryt
	            </Button>
	            <Button onClick={this.handleClose}  color="primary" style={{textTransform: 'none'}}>
	            Legg til
	            </Button>
	          </DialogActions>
        </Dialog>
      </div>
     </div>
      )
  }
}


AdapterAdd.propTypes = {
		adapters : PropTypes.array.isRequired
};

function getAdapterById(adapters, id) {
  let adapter = adapters.find(adapter => adapter.id === id)
  return Object.assign({}, adapter)
}


function mapStateToProps(state) {
  let adapter = {name: '', note: '', shortDescription: ''};
    return {adapter: adapter};
}

function  matchDispatchToProps(dispatch){
    return bindActionCreators({createAdapter : createAdapter}, dispatch);
}
export default withRouter(connect(mapStateToProps, matchDispatchToProps)(AdapterAdd));
