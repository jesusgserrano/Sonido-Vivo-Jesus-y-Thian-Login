import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormularioLogin from '../components/organisms/FormularioLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  function alCambiarInput(e) {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  function alEnviar(e) {
    e.preventDefault();
    setError('');

    if (email === '' || password === '') {
      setError('Por favor completa todos los campos.');
      return;
    }

    setCargando(true);
    setTimeout(function () {
      setCargando(false);
      alert('Sesión iniciada con: ' + email);
    }, 1000);
  }

  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className="text-center mb-4">
            <h1 className="fw-bold">Sonido Vivo</h1>
            <p className="text-muted">Tienda de Instrumentos Musicales</p>
          </div>

          <FormularioLogin
            email={email}
            password={password}
            error={error}
            cargando={cargando}
            onChange={alCambiarInput}
            onSubmit={alEnviar}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;