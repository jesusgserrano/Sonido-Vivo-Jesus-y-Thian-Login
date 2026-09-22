import { Form, Alert } from 'react-bootstrap';
import GrupoFormulario from '../molecules/GrupoFormulario';
import Boton from '../atoms/Boton';

function FormularioLogin(props) {
  return (
    <Form onSubmit={props.onSubmit} className="p-4 border rounded bg-white shadow-sm">
      <h3 className="text-center mb-4">Iniciar Sesión</h3>

      {props.error && <Alert variant="danger">{props.error}</Alert>}

      <GrupoFormulario
        label="Correo Electrónico"
        type="email"
        placeholder="ejemplo@correo.cl"
        name="email"
        value={props.email}
        onChange={props.onChange}
      />

      <GrupoFormulario
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        name="password"
        value={props.password}
        onChange={props.onChange}
      />

      <Boton texto={props.cargando ? "Iniciando..." : "Ingresar"} />
    </Form>
  );
}

export default FormularioLogin;