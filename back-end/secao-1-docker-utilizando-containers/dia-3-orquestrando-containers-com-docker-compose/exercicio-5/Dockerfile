# COLOCAR IMAGEM BASE
# imagem:tag
FROM node:16.19.0-alpine

# DEFINIR PASTA PADRÃO 
WORKDIR /exercicio-5

# COPIAR ARQUIVOS PARA INSTALAÇÃO
# COPY ./package.json /exercicio-5/package.json
COPY ./package.json .

# FAZER INSTALAÇÃO

# RUN roda na construção da imagem
# ENTRYPOINT e CMD rodam com o container em execução

RUN npm install

# COPIAR CÓDIGO

# COPY tudo_do_local dentro_da_pasta_do_container
COPY . .

# EXECUTAR O PROJETO
ENTRYPOINT [ "npm", "start" ]