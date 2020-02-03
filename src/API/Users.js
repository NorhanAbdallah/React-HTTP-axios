import axios from 'axios' ;

export async function getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      return response;
}


  export async function deleteUser(id) {
      const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
      console.log(response);
      return response;
}

export async function editUser(id , values) {
    const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+id , values);
    console.log(response);
    return response;
}

export async function addUser(values) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users/' , values);
    console.log(response);
    return response;
}