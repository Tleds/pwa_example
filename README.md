Nome do desenvolvedor: Tiago Luca
Nome da aplicação: mestre_zaza_pwa

A aplicação é bem simples e tem como objetivo a visualização de programas de treino no celular do cliente
que podem ser contratados também atravéz so website mestrezaza.com.br.

Página inicial: É a página de entrada da aplicação, nela o usuário faz a autenticação para ter acesso ao res
tante do sistema.
    ![Alt text](/public/images/home_print.png?raw=true "Entrar")

Página de registro: É a página onde o usuário se cadastra para acessar a plataforma.
    ![Alt text](/public/images/register_print.png?raw=true "Inscrever-se")

Pagina home: É a página inicial depois que o usuário se autentica, nela você visualiza os últimos vídeos postados
do mestre zaza.
    ![Alt text](/public/images/home_ini_print.png?raw=true "Inicial")

Página de notificação: É a página que o usuário visualiza todas as notificações da conta dele.
    ![Alt text](/public/images/home_ini_print.png?raw=true "Notificações")

Página de planos: É a página onde o usuário contrata os programas de treino.
    ![Alt text](/public/images/plans_print.png?raw=true "Planos")

Página de planos final: É a página de agradecimento ao usuário depois que ele compra um programa de treino.
    ![Alt text](/public/images/plans_final_print.png?raw=true "Planos final")

Página de treinos: É a página onde tem todos os planos contratados pelo usuário.
    ![Alt text](/public/images/trainings_print.png?raw=true "Treinos")

Página de detalhes do treino: É a página onde o usuário consegue visualizar o programa de treino que ele comprou.
    ![Alt text](/public/images/trainings_details_print.png?raw=true "Treinos Detalhe")

Nós usamos o fetch para fazer as requisições dos dados do usuário em um servidor remoto, porém, devido 
a alguns problemas na API as requisições não foram feitas. A lógica de armazenamento seria de armazenar apenas
o token do usuário e deixar a responsabilidade para a API guardar de forma segura estes dados em uma base de dados
postgress. O usuário precisaria então apenas do token, que receberia logo depois de efetuar o login na plataforma.

    A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
    SIM
    A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?
    SIM
    A aplicação armazena e usa de forma relevante dados complexos do usuário?
    NÃO, pois o objetivo seria utilizar um API externa para ter essa responsabilidade.
    A aplicação possui um manifesto para instalação no dispositivo do usuário?
    SIM
    A aplicação possui um service worker que permite o funcionamento off-line?
    SIM
    O código da minha aplicação possui comentários explicando cada operação?
    NÃO, acredito que comentários sujam mais o código do que explicam algo, por isso 
    foco muito mais em programar de uma maneira simples que todos entendam do que comentar o código
    A aplicação está funcionando corretamente?
    SIM
    A aplicação está completa?
    NÃO, faltou a comunicação com o servidor para solicitação dos dados necessários.