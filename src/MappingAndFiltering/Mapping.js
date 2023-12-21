import React, { useEffect, useState } from 'react'



const Mapping = () => {

        const [ users, setUsers] = useState([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((json) => console.log(json));
        }, []);
    
    const mapData = () => {
        let mappedArray = users.map((user) => user.id * 2)
        console.log(mappedArray);
    }
    
  return (
      <div className='MappingF'>
          <h1>Users</h1>
          <div>
              <div>
                  {users.map((user) => (
                      
                      <div>
                          <p>{user.name }</p>
                          <p>{user.username}</p>
                      </div>
                  ))}
                  <button onClick={mapData}>see mapped arrya</button>
                  <p>name</p>
                  <p>something</p>
              </div>
          </div>
        
              
      </div>
      )
    }

export default Mapping