Passo a passo do deploy:
- git init
- heroku apps:destroy trybe-flix-back-end-ingrid-pp --confirm trybe-flix-back-end-ingrid-pp
- heroku create trybe-flix-back-end-ingrid-pp
- git add .
- git commit -m ""
- git push heroku master
//ou
- it push heroku branch:master
- heroku open

### ClearDB -> banco que esta na nuven
https://devcenter.heroku.com/articles/cleardb -> permite criar um banco, pra ficar disponivel
- COMANDO: heroku addons:create cleardb:ignite -> prepara um banco e seta os acessos desse banco na variavel CLEARDB_DATABASE_URL
- heroku config -> mostra o valor da minha variavel
    - os numeros e letras antes dos : (dois pontos) é o nome do usuario
    - O numeros e letras depois dos : é a senha do banco
    - Depois do @ tem o host
    - depois da / tem o nome do banco
    - Da ? ao final pode deletar
---> posso usar esses dados no workbench, assim me conecto ao banco que esta na rodando na nuven

Setando as variaveis de ambiente no heroku
- heroku config:set DB_USERNAME=numeros e letras antes dos : DB_PASSWORD=numeros e letras depois dos : DB_HOST=Depois do @ DB_NAME=depois da /

- heroku config -> mostra todas as variaveis
- colocar dados na tabela pelo workBench
