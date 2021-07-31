const { request, response } = require('express');
const express = require('express');
const { v4:uuidv4 } = require('uuid');
const app = express();
app.use(express.json())
const customers = [];

//Middleware
function veriryIfExistAcountCpf(request,response,next){
    const {cpf} = request.headers;
    const customer = customers.find((customer) => customer.cpf === cpf);
    
    
    if(!customer){
        return response.status(400).json({error: "Customer not found!"});
    }

    request.customer = customer;
    return next();
}

function getBalance(statement){
    const balance = statement.reduce((acc, operation)=>{
        if(operation.type == 'credit'){
            return acc + operation.amount;
        }else{
            return acc - operation.amount;
        }
    },0);

    return balance;
}

app.post("/account", (request,response)=>{
    const { cpf, name } = request.body;
    const customersAlreadyExists = customers.some((customer) => customer.cpf === cpf)
    
    if(customersAlreadyExists === true){
        response.status(400).json({error: "Custumers already exists!"})
    }

    customers.push({
        id : uuidv4(),
        name,
        cpf,
        statement: []
    })
    
    return response.status(201).send();
})

app.get("/statement/", veriryIfExistAcountCpf, (request,response)=>{
    const { customer } = request;
    
    return response.json(customer.statement)
})

app.post("/deposit/", veriryIfExistAcountCpf, (request,response)=>{
    const {description, amount} = request.body;
    const { customer } = request;
    
    const statementOperation = {
        description,
        amount,
        create_at: new Date(),
        type: "credit",
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
})

app.post("/withdraw/", veriryIfExistAcountCpf, (request,response)=>{
    const { description,amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);
    if(balance < amount){
        return response.status(400).json({error: "Insuficient founds!"})
    }

    const statementOperation = {
        description,
        amount,
        create_at: new Date(),
        type: "debit",
    };

    customer.statement.push(statementOperation);
    return response.status(201).send();    
})

app.get("/statement/date", veriryIfExistAcountCpf, (request,response)=>{
    const { customer } = request;
    const { date } = request.query;
    const dateFormat = new Date(date + " 00:00");
    const statement = customer.statement.filter((statement)=>
        new Date(statement.create_at).toDateString() === 
        new Date(dateFormat).toDateString()
    );
    
    return response.json(statement)
})

app.put("/account", veriryIfExistAcountCpf,(request, response)=>{
    const { customer } = request;
    const { name } = request.body;
    customer.name = name;

    return response.status(201).send()
});

app.get("/account",veriryIfExistAcountCpf,(request, response)=>{
    const { customer } = request;
    return response.status(201).json(customer)
});

app.delete("/account",veriryIfExistAcountCpf,(request, response)=>{
    const { customer } = request;
    
    customers.splice(customer,1)
    return response.status(200).json(customers)
});

app.get("/balance",veriryIfExistAcountCpf,(request, response)=>{
    const { customer } = request;
    const balance = getBalance(customer.statement)
    
    return response.status(200).json(balance)
});



app.listen(3333);