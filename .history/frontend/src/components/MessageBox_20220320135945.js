import Spinner from 'react-bootstrap/Spinner';

function MessageBox() {
  return (
    <Alert variant={props.variant || 'info'}>{props.}</Alert>
  );
}

export default MessageBox;
