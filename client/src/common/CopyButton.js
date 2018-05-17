import {IconButton} from "material-ui";
import {ContentCopy} from "material-ui-icons";
import React from 'react';


class CopyButton extends React.Component {

  render() {

    return (
      <IconButton>
        <ContentCopy/>
      </IconButton>
    );
  }

}

export default CopyButton;
