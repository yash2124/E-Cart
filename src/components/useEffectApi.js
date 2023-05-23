import React,{useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Estyle.css';
import { useNavigate } from 'react-router-dom';

const UseEffectApi = () => {
const navigate = useNavigate();
const [user,setUser]=useState([]);
// create state for pagination

const [currentPage ,setCurrentPage]=useState(1);
const postPerPage = 10;

const lastPostIndex = currentPage * postPerPage;
const firstPostIndex = lastPostIndex - postPerPage;
const [predisable, setPreDisable] = useState(true);
const [nxtdisable, setNxtDisable] = useState(false);

// slice 10 data for per page

const pageData =user.slice(firstPostIndex,lastPostIndex);
const len = user.length;



//console.log("datalength",len);
const getUsers = async  () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  setUser(data.products);


}

function nextPage (){

  if (currentPage !== lastPostIndex)
    setCurrentPage(currentPage + 1);

   console.log("currentpagee",lastPostIndex);

  if ( len === currentPage * postPerPage + 10 )
    {
       setNxtDisable(true);
    }  
  if ( len === currentPage * postPerPage + 20  )
   {
    setPreDisable(false);
   } 
    
}



function prevPage (){
  if (currentPage !== firstPostIndex)
     setCurrentPage(currentPage - 1);
  
    
  if ( len === lastPostIndex + 10 )
     {
        setPreDisable(true);
     }
   setNxtDisable(false);  
}

  useEffect(() => {
      getUsers();
  },[]);
  return (
    <>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='button-cont'>
            <button className='prev-btn' disabled={predisable} onClick={prevPage}>Prev page</button>
            <button className='next-btn' disabled={nxtdisable} onClick={nextPage}>Next Page</button>
          </div>
    <div className='container-fluid'>
        <div className='row text-center '>
         
               {

                   pageData.map((curr) =>{
                       return (

                        
                        <div className='main-cont' key={curr.id}>
                        <div className='img-cont'><img src={curr.images[0]} className='rounded' width="155" alt='Logo' /></div>
                        <div className='row-cont'>
                        <div className='name-cont'><span className='span-name'>{curr.title}</span></div>
                        <div className='price-cont'> 
                        <div className='inner-price'>
                           <span className='price'>Price</span><span className='number1'>$ {curr.price}</span>
                                     </div>
                                     <div className='inner-rating'>
            <span className='rating'>Rating</span><span className='number2'>{curr.rating}</span>
          </div>             
                        </div>
                        <div className='cat-cont'>
                        <div className='d-flex flex-column'>
            <span className='category'>Category</span><span className='number3'>{curr.category}</span>
          </div>
                        </div>
                        <div className='btn-cont'>
                          <button className='btn btn-primary'>Buy Now</button>
                        <button className='btn btn-danger' onClick={()=>navigate("/details",{state:{id:curr.id}})}>View Details</button>
                     
                        </div>
                        </div>            
                 </div>
               
                          )
                    })

                  
          }
          </div>
        </div>
    </>
  )
}

export default UseEffectApi
