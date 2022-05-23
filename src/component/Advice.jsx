import {useEffect,useState} from "react";
import {Button} from "react-bootstrap";
import axios from 'axios';
import "./advice.css"



  function  Advice() {
    const [isLoading, setLoading] = useState(true);
    const [datal, setData] = useState('');
    


    function fetchData(){
      axios.get('https://api.adviceslip.com/advice')
      .then(function (response) {
        setData(response.data.slip)
      })
      .catch(function (error) {
        console.log(error);
      });
     
  }
  
    useEffect(() => {
      if (isLoading) {
        setLoading(true)
          setLoading(false);
      
      }
    }, [isLoading]);
  
    const handleClick = () => {
      setLoading(true);
      fetchData()

    }
  
    return (
      <>
     
       <Button variant="secondary" size="md"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Get Advice'}
      </Button>
      <div className="advice">
      <h2 >{datal.advice}</h2>
      </div>
      </>
    );
  }
  export default Advice
  