 import React,{useState}  from 'react';
 import AddUser from '../AddUser/AddUser'; 
 import CardList from '../CardList/CardList';
import FilterInput from '../filterInput/FilterInput';
import Model from '../Model/Model';
import Button from '../layout/Button';
import './App.css';
import { Fragment } from 'react';

const App = () => {
//const inputEl= useRef(null);
const[cardToggle,setCardToggle]=useState(true);
const [filter,setFilter]=useState('');
const[showModal,setshowModal]=useState(false);
const[state,setState]=useState(
  [

                {
                  id: 1000,
                  name: 'kareem',
                  age: 31,
                  adress: 'hadyk el aharm',
                  phone: '01010987123',
                  type: 'boy',
                },
                {
                  id: 2000,
                  name: 'ahmed',
                  age: 24,
                  adress: 'hadyk el aharm',
                  phone: '01010987234',
                  type: 'boy',
                },
                {
                  id: 3000,
                  name: 'mina',
                  age: 24,
                  adress: 'hadyk el aharm',
                  phone: '01010987234',
                  type: 'boy',
                },
                {
                  id: 4000,
                  name: 'mariam',
                  age: 20,
                  adress: 'fayesl',
                  phone: '01010932123',
                  type: 'girl',
                
          },
          {
            id: 50000,
            name: 'soaad',
            age: 20,
            adress: 'fayesl',
            phone: '01010932123',
            type: 'girl',
    },
   
] );

const addNewUserHandler=(data)=>{
 setState((prevState)=>setState([...prevState,data]));
}
const deleteHandler=(e,SelectId)=>{
  //هات كل شيء الا اللي ضغط عليه 
  //const deleteOperation= state.filter((el,idx)=>idx !==clickIdx)
  //setState(deleteOperation);
  //console.log(state);
  setState((prevState)=>{
    return prevState.filter((el)=>el.id !==SelectId);
});
//console.log("inside",state);
};
//console.log("outside",state);

const toggleHandler=()=>{
  setCardToggle(!cardToggle);
}

// const testHandler=()=>{
//   console.log(inputEl.current.value);
// }

 const filterName=(name)=>{
  setFilter(name);
}
 

const Namehandler=()=>{
if(filter.length !==0){
  return state.filter((el)=>el.name.includes(filter));
}
return state;
};

 return (
  <Fragment>
  <div className="maincontainer">
    
    <div> List of Data boys</div>
    <div style={{display:"flex", marginBottom:"10px"}}>
      <Button onClick={()=>setCardToggle(toggleHandler)}  styles={{marginRight:'20px'}}>
      {cardToggle?'Hide Names':'Show Names'}
      </Button>



    <button className='button' onClick={()=>setshowModal(true)}>
        new record
        </button>

    </div>
    
    <div className={cardToggle?"show":"hide"}>
      <FilterInput filtration={filterName}/>

    <CardList namelist={Namehandler()}
     deleteFunc={deleteHandler}/>
    </div>
   
  </div>
   <Model show={showModal} closeModel={()=>setshowModal(false)}>
   <AddUser addNewUserHandler={addNewUserHandler} 
   closeModel={()=>setshowModal(false)}/>
  </Model>
  </Fragment>
 );
  };
  
export default App;

