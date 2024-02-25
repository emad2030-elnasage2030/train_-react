import React ,{useState}  from 'react';
import Button from '../layout/Button';
import Form from '../layout/Form';


const AddUser = ({addNewUserHandler,closeModel}) => {
//     const [input, setinput]= useState({
//         name:'',
//        Age:'',
//        adress:'',
//        phone:''
//     });
    // const inputHandler =(e)=>{
      
    //     const key=e.target.id;
    //     const value=e.target.value;
    //     setinput((prevstate)=>{
          
    //         return{...prevstate,[key]:value};
        
    // });
//};

const [name,setName]=useState('');
const [age,setage]=useState('');
const [phone,setphone]=useState('');
const [address,setaddress]=useState('');
const [type,settype]=useState('');

//لتمعنه انه يحمل
const onSubmitHandelder=(e)=>{
    e.preventDefault();

    addNewUserHandler({
      //  id:Math.round( Math.random()*3),
        name,
        age,
        address,
        phone,
        type,
      });
    //   setName('');
    //   setage('');
    //   setphone('');
    //   setaddress('');
    //   settype('');
    //   closeModel();
    };

   
    return (
        <form onSubmit={onSubmitHandelder}>
        <Form.Controller>
        <label htmlFor='Name' >Name</label>
        <input type='text' id='name' placeholder='Enter Name'
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
        </Form.Controller>
        <Form.Controller>
        <label htmlFor='age' >Age</label>
        <input type='text' id='name' 
        placeholder='Enter Age'value={age}
        onChange={(e)=>setage(e.target.value)}/>
        </Form.Controller>
        <Form.Controller>
        <label htmlFor='adress' >adress</label>
        <input type='text' id='adress' placeholder='Enter Age'
        value={address}
        onChange={(e)=>setaddress(e.target.value)}/>
        </Form.Controller>
        <Form.Controller>
        <label htmlFor='phone' >phone</label>
        <input type='text' id='phone' placeholder='Enter phone'
        value={phone}
        onChange={(e)=>setphone(e.target.value)}/>
        </Form.Controller>
       

        <Form.Controller>
        <label htmlFor=' type' > type</label>
        <input type='type' id='type' placeholder='Enter  type'
        value={type}
        onChange={(e)=>settype(e.target.value)}/>
        </Form.Controller>
        
        
  
        <div style={{marginTop:'20px'}}>
        <button type="submit" style={{ marginRight: 20 }}>
        Save
       </button>
        <Button type='reset'>Reset</Button>
        </div>
        </form>
    );
}

export default AddUser;
