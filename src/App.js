
import  Carousel from './component/Carousel'
import Header from './component/Header';
import Advice from './component/Advice';
import { Container, Row } from 'react-bootstrap';
import Footer from './component/Footer';

function App() {
  return (
    <Container>
       <Row className="justify-content-md-center">
      <Header/>
      <Carousel/>
      <Advice/>
      <Footer/>
     
      </Row>
    </Container>
    
  );
}

export default App;
