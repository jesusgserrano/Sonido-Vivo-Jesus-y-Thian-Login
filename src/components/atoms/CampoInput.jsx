import { Form } from 'react-bootstrap';

function CampoInput(props) {
  return (
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
}

export default CampoInput;