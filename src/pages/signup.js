import React, {useState} from 'react';
import axios from 'axios';

function Signup() {

    const [formFields, setFormFields] = useState({
        name : '',
        email : '',
        password: ''
    })

    const [success, setSuccess] = useState('');

    async function submitData(event) {
        event.preventDefault();


        const request = await axios.post('http://localhost:3000/api/signup', formFields)

        if(request.status === 200)
        {
            setSuccess('utilisateur crée avec success');
        }
        
    }

    function getFieldData(event)
    {

      setFormFields((state)=>{
          return{
              ...state,
              [event.target.name]: event.target.value
          }
      })

    }

  return( <div>
      <form onSubmit={submitData}>
        <table>
            <tr>
                <td><input type='text' name='name' onChange={getFieldData} required placeholder='name' /></td>
                <td><input type='email' name='email' onChange={getFieldData} required placeholder='email' /></td>
                <td><input type='password' name='password' onChange={getFieldData} required placeholder='password' /></td>
                <td><input type='submit'value={'Sign up'} /></td>
            </tr>
        </table>
    </form>
    {success && success}
  </div>);
}

export default Signup;


