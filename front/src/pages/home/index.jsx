import { useEffect, useState, useRef} from 'react';
import './style.css';
import svg from '../../assets/svg.svg';
import React, { useEffect, useState } from 'react';
import api from '../../services/api'

function App() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function createUsers(){
   await api.post('/usuarios', {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value
   })
  }

  async function deleterUsers(id){
    await api.delete('/usuarios/${id}')
  }  

  useEffect( () => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        {}
        <input name='nome' type='text' placeholder='Nome' ref={inputName} />
        <input name='idade' type='number' placeholder='Idade' ref={inputAge} />
        <input name='email' type='email' placeholder='Email' ref={inputEmail} />
        <button type='button' onClick={createUsers}> Cadastrar </button>
      </form>

      {}

      <h2>Usuários Cadastrados</h2>
      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado ainda.</p>
      ) : (
        users.map(user => (
          <div key={user.id} className="card"> {}
            <div>
              <p>Nome:  <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onCluck={() => deleteUsers(user.id)}>
              <img src={svg} alt="Ícone de ação" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;