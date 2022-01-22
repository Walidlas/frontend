import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import {Formik, Form} from 'formik'
  import React, { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

  import axios from 'axios'
  
  export default function SignupChakra() {
    const [showPassword, setShowPassword] = useState(false);

    const [formFields, setFormFields] = useState({
        name : '',
        email : '',
        password: ''
    })
    

    function getFieldData(event)
    {

      setFormFields((state)=>{
          return{
              ...state,
              [event.target.name]: event.target.value
          }
      })


      console.log(event.target.value)
    }

    async function submitData(event) {
        event.preventDefault();

        // return console.log(formFields);

        const request = await axios.post('http://localhost:3000/api/signup', formFields, {
            headers: {
                'content-type': 'application/json'
            }
        })

        if(request.status == 200)
        {
            // setSuccess('utilisateur crée avec success');
            console.log('utilisateur crée avec success');
        }else{
            console.log(request)
        }
        
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} width={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

                <form onSubmit={submitData}>
                    <Box
                   rounded={'lg'}
                    bg={'white'}
                   boxShadow={'lg'}
                   p={8}>
                   <Stack spacing={4}>
       
                         <FormControl id="name" isRequired>
                           <FormLabel>Nom Complet</FormLabel>
                           <Input type="text" name='name' onChange={getFieldData}  />
                         </FormControl>
                     <FormControl id="email" isRequired>
                       <FormLabel>Email address</FormLabel>
                       <Input type="email" name='email' onChange={getFieldData}  />
                     </FormControl>
                     <FormControl id="password" isRequired>
                       <FormLabel>Mot de passe</FormLabel>
                       <InputGroup>
                         <Input type={showPassword ? 'text' : 'password'} name='password' onChange={getFieldData}/>
                         <InputRightElement h={'full'}>
                           <Button
                             variant={'ghost'}
                             onClick={() =>
                               setShowPassword((showPassword) => !showPassword)
                             }>
                             {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                         </InputRightElement>
                       </InputGroup>
                     </FormControl>
                     <Stack spacing={10} pt={2}>
                       <Input type={'submit'} value={'Sign UP'}  size="lg"
                         bg={'blue.400'}
                         color={'white'}
                         _hover={{
                           bg: 'blue.500',
                         }} />
                     </Stack>
                     <Stack pt={6}>
                       <Text align={'center'}>
                         Already a user? <Link href='/signin' color={'blue.400'}>Login</Link>
                       </Text>
                     </Stack>
                   </Stack>
                 </Box>
                    </form>
        </Stack>
      </Flex>
    );
  }