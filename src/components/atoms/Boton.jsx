import { Button } from 'react-bootstrap';

function Boton(props) {
  return (
    <Button type="submit" variant="primary" className="w-100" onClick={props.onClick}>
      {props.texto}
    </Button>
  );
}

export default Boton;