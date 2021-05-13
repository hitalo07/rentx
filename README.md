# Sobre o projeto
Aplicativo para aluguel de veículos

## Instalação

Subir os containers
```
docker-compose up -d
```
### Consumir API com Swagger
```
http://localhost:3333/api-docs/
```

# Requisitos do sistema
## Cadastro de carro

**RF**
* Deve ser possível cadastrar um novo carro.

**RN**
* Não deve ser possível cadastrar um carro com uma placa já existente.
* O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de carros

**RF**
* Deve ser possível listar todos os carros disponíveis.
* Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
* Deve ser possível listar todos os carros disponíveis pelo nome da marca.
* Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
* O usuário não precisa estar logado no sistema.


## Cadastro de especificação no carro

**RF**
* Deve ser possível cadastrar uma especificação para um carro.

**RN**
* Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
* Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário administrador.


## Cadastro de imagens do carro

**RF**
* Deve ser possível cadastrar a imagem do carro.

**RNF**
* Utilizar o multer para upload dos arquivos.

**RN**
* O Usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário administrador.


## Aluguel de carro

**RF**
* Deve ser possível cadastrar um aluguel

**RN**
* O aluguel deve ter no mínima de 24 horas.
* Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário.
* Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.
