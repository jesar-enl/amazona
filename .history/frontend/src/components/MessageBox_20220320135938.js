import Spinner from 'react-bootstrap/Spinner';

function MessageBox() {
  return (
    <Alert variant={props.variant || 'info'}></Alert>
  );
}

export default MessageBox;
