import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header';
import Index from './Router/Index';
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <Row>
      <Col>
        <BrowserRouter>        
          <Header />‌
          <Index />
        </BrowserRouter>

      </Col>
    </Row>
  );
}

export default App;
