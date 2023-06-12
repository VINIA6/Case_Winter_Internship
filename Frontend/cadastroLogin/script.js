url = 'http://localhost:5050/caduser'

let btnCadastrar = document.querySelector('#meuBotao');

btnCadastrar.addEventListener("click",(event)=>{
  event.preventDefault();
  let formCadastro = document.querySelector('#formCadastro');
  
  var formData = {
    name:formCadastro.nome.value,
    username:formCadastro.email.value,
    password: formCadastro.password.value,
    confirmPassword: formCadastro.Confirmpassword.value,
  };

  addNewUser(formData)

});

async function addNewUser(newUser){
  try {
      const resp = await axios.post(url,newUser);
      console.log(resp)
  } catch (error) {
      console.log(error);
  }
}

