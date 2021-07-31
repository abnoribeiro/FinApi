# FinApi
Api básica node

Api desenvolvida para estudo de casos com node, simulando operações básicas de uma financeira.

# Requisitos

- [x]  Deve ser possível criar uma conta
- [x]  Deve ser possível buscar o extrato bancário do cliente
- [x]  Deve ser possível realizar um depósito
- [x]  Deve ser possível realizar um saque
- [x]  Deve ser possível buscar o extrato bancario do cliente por data
- [x]  Deve ser possível atualizar dados da conta do cliente
- [x]  Deve ser possível obter dados da conta do cliente
- [x]  Deve ser possível deletar uma conta
- [x]  Deve ser possível retornar o balance (Extrato)

# Regras de negócio

- [x]  Não deve ser possível cadastrar uma conta com CPF já existente
- [x]  Não deve ser possível fazer depósito em uma conta não existente
- [x]  Não deve ser possível buscar extrato em uma conta não existente
- [x]  Não deve ser possível fazer saque em uma conta não existente
- [x]  Não deve ser possível excluir uma conta não existente
- [x]  Não deve ser possível fazer saque quando o saldo for insuficiente

#Endpoints

- Post (http://localhost:3333/account) 
  request body: 
    {
      cpf: "",
      name:""
    }

- Put (http://localhost:3333/account) 
  request header: 
      cpf: ""
  request body: 
    {
      name:""
    }

- Get (http://localhost:3333/account) 
  request header: 
      cpf: ""

- Delete (http://localhost:3333/account) 
  request header: 
      cpf: ""

- Get (http://localhost:3333/balance) 
  request header: 
      cpf: ""

- Get (http://localhost:3333/statement/)
  request header: 
      cpf: ""

- Get (http://localhost:3333/statement/date)
  request query:
      date: "YYYY-MM-DD"
  
  request header: 
      cpf: ""

- Post (http://localhost:3333/deposit/)
  request header: 
      cpf: ""
  
  request body: 
      {
        description: "",
        amount: ""
      }

- Post (http://localhost:3333/withdraw/)
  request header: 
      cpf: ""
  
  request body: 
    {
      description: "",
      amount: ""
    }

#Tipos de rotas ultilizadas

- Post
- Get
- Put
- Delete

# Tecnologias ultilizadas:
- Node / Javascript  
- Express 
- Uuid
- Insomnia
