import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
    const [isload,setIsLoad]= useState(true);
    const [isError,setIsError]= useState(false);
    const [user, setUser] = useState('default user');

    useEffect(()=>{
        
        fetch(url)
        .then((resp)=> {
            if(resp.status >=200 && resp.status <=299){
                return resp.json();
            }
            else{
                setIsLoad(false);
                setIsError(true);
            }
        })
        .then((user)=> {
            const {login}= user;
            setUser(login);
            setIsLoad(false);
        })
        .catch(error=>console.log(error));
    },[]);

    if(isload){
        return <div>
            <h1>loading...</h1>
        </div>
    }
    if(isError){
        return <div>
            <h1>Error...</h1>
        </div>
    }
  return <div>
      <h1>{user}</h1>
  </div>;
};

export default MultipleReturns;