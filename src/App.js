
import  Carousel from './component/carousel/Carousel'
import Header from './component/heading/Header';
import Advice from './component/advice/Advice';
import { Container, Row } from 'react-bootstrap';
import Footer from './component/footer/Footer';

function App() {
  return (
    <Container>
       <Row className="justify-content-md-center" >
      <Header/>
      <Carousel/>
      <Advice/>
      <Footer/>
     
      </Row>
    </Container>
    
  );
}

export default App;
