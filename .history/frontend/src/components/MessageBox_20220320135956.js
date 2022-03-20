import Spinner from 'react-bootstrap/Spinner';

function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}

export default MessageBox;
