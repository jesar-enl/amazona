export default MessageBox() {
    return (
        <Alert variant={props.variant || 'info'}>{props.children}</Alert>
    )
}