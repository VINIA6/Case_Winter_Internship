// npm install mongoose
const Mongoose = require('mongoose')



Mongoose.connect('mongodb://localhost:27017/dataBaseACE', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida com sucesso!');
        // // Obter uma lista de todas as coleções existentes
        // const collections = Mongoose.connection.db.collections();

        // collections.then((results) => {
        // // Iterar sobre cada coleção e exibir o nome
        // results.forEach((collection) => {
        //     console.log(collection.collectionName);
        // });

        // // Fechar a conexão
        // Mongoose.connection.close();
        // });
    })
    
  .catch((error) => {
    console.error('Erro ao conectar-se ao MongoDB:', error);
  }); 
    

const UsersSchema = new Mongoose.Schema({
    nome:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

const model = Mongoose.model('usuarios',UsersSchema)

async function main() {
    
    try {
        const resultCadastrar = await model.create(
            {
                nome:'Vinícius de Assis Azevedo',
                username:'VINIA6',
                password:'123456',
            }
        )
        console.log('Result Cadastrar: ',resultCadastrar)
    } catch (error) {
        console.log('Error')
    }    

    const listItens = await model.find()
    console.log('Items',listItens)
}

main()