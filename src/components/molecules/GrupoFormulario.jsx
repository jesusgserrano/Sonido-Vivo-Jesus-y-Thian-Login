import { Form } from 'react-bootstrap';
import CampoInput from '../atoms/CampoInput';

function GrupoFormulario(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.label}</Form.Label>
      <CampoInput
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </Form.Group>
  );
}

export default GrupoFormulario;