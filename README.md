# FinApi

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
 
  exemplo request body: 
    {
      cpf: "00000000000",
      name:"Nome completo"
    }

- Put (http://localhost:3333/account)
 
  exemplo request header: 
      cpf: "00000000000"

  exemplo request body: 
    {
      name:"Nome completo"
    }

- Get (http://localhost:3333/account) 

  exemplo request header: 
      cpf: "00000000000"

- Delete (http://localhost:3333/account) 

  exemplo request header: 
      cpf: "00000000000"

- Get (http://localhost:3333/balance) 
  
  exemplo request header: 
      cpf: "00000000000"

- Get (http://localhost:3333/statement/)
  
  exemplo request header: 
      cpf: "00000000000"

- Get (http://localhost:3333/statement/date)
  
  exemplo request query:
      date: "2021-07-31" // Formato ANO-MES-DIA -> YYYY-MM-DD
  
  exemplo request header: 
      cpf: "00000000000"

- Post (http://localhost:3333/deposit/)
  
 exemplo request header: 
      cpf: "00000000000"
  
  exemplo request body: 
      {
        description: "Descrição de depósito",
        amount: 2000.00 // Tipo Float
      }

- Post (http://localhost:3333/withdraw/)
  
  exemplo request header: 
      cpf: "00000000000"
  
  request body: 
    {
      description: "Descrição de saque",
      amount: 2000.00 // Tipo Float
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
