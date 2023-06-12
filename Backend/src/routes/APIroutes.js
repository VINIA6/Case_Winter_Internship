const express = require('express');
const Mongoose = require('mongoose');
const CadSchema = require('../database/mongodb/schemas/cadSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


Mongoose.connect('mongodb://localhost:27017/dataBaseACE', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar-se ao MongoDB:', error);
    }); 

const model = Mongoose.model('usuarios',CadSchema)
const router = express.Router();

router.get('/login', async (req,res)=>{


    const { email, password } = req.body;

    // Procura o usuário pelo email
    const user = users.find((user) => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verifica a senha
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Senha invalida' });
    }

    // // Gera o token de autenticação
    // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    // res.json({ token });

})

router.post('/caduser', express.json(), async (req,res)=>{
    const data = await req.body;

    console.log(data)
    
    try {
        let dataConfi = await model.find({ name: data.name });
        if (!dataConfi) {
            console.log(true)
            if(data.password === data.confirmPassword){
                const resultCadastrar = await model.create(
                    {
                        name:data.name,
                        username:data.username,
                        password: data.password,
                    }
                )
                console.log('Result Cadastrar: ',resultCadastrar);
                res.status(200).send('Cadastro feito com sucesso.');
            }
            else{
                res.status(500).send('A confirmação da senha está diferente.');
            }
        }
        else{
            res.status(500).send('Você já possui cadastro.');
        }

    } catch (error) {
            res.status(500).send('Erro no cadastro.');
    }
})

module.exports = router;