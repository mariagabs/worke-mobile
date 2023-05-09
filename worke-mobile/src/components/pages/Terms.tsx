import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import styles from "../../styles";
import HeaderTitleButton from "../organisms/HeaderTitleButton";

interface Props {
  navigation: any;
  route: any;
}

const Terms: React.FC<Props> = ({ navigation, route }) => {
  const { type } = route.params;
  const texts = [
    {
      type: "privacy",
      text: `SEÇÃO 1 - INFORMAÇÕES GERAIS

A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do aplicativo worke, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
Esta Política de Privacidade aplica-se a todos os usuários e visitantes do aplicativo worke e integra os Termos e Condições Gerais de Uso do aplicativo worke.
O presente documento foi elaborado em conformidade com a Lei Geral de Proteçâo de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.

SEÇÃO 2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO VISITANTE?

Os dados pessoais do usuário e visitante são recolhidos pela plataforma da seguinte forma:
(Realizar pergunta de múltipla escolha com opção outras)
Quando o usuário cria uma conta/perfil na plataforma worke: esses dados são os dados de identificação básicos, como nome, e-mail, data de nascimento, sexo, peso e altura. A partir deles, podemos identificar o usuário e o visitante, além de garantir uma maior segurança e bem-estar às suas necessidade. Ficam cientes os usuários e visitantes de que seu perfil na plataforma estará acessível a todos demais usuários e visitantes da plataforma worke.
Quando um usuário e visitante acessa OU páginas do aplicativo worke: as informações sobre interação e acesso são coletadas pela empresa para garantir uma melhor experiência ao usuário e visitante. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma busca, o compartilhamento de um documento específico, comentários, visualizações de páginas, perfis, a URL de onde o usuário e visitante provêm, o navegador que utilizam e seus IPs de acesso, dentre outras que poderão ser armazenadas e retidas.

SEÇÃO 3 - QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E VISITANTE?

Os dados pessoais do usuário e visitante recolhidos são os seguintes:
Dados para a criação da conta/perfil na plataforma worke: nome, e-mail, data de nascimento, sexo, peso e altura.
Dados para otimização da navegação: acesso a páginas, interação com outros perfis e usuários e endereço de IP.
Dados sensíveis: a plataforma poderá coletar os seguintes dados sensíveis do usuário - dados relativos à saúde e orientação sexual.
Dados relacionados a contratos: diante da formalização do contrato de compra e venda ou de prestação de serviços entre a plataforma e o usuário e visitante poderão ser coletados e armazenados dados relativos a execução contratual, inclusive as comunicações realizada entre a empresa e o usuário.
outras

SEÇÃO 3 - PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO E VISITANTE?

(Realizar questão múltipla escolha com outras)
Os dados pessoais do usuário e do visitante coletados e armazenados pela plataforma worke tem por finalidade:
Bem-estar do usuário e visitante: aprimorar o produto e/ou serviço oferecido, facilitar, agilizar e cumprir os compromissos estabelecidos entre o usuário e a empresa, melhorar a experiência dos usuários e fornecer funcionalidades específicas a depender das características básicas do usuário.
Melhorias da plataforma: compreender como o usuário utiliza os serviços da plataforma, para ajudar no desenvolvimento de negócios e técnicas.
Anúncios: apresentar anúncios personalizados para o usuário com base nos dados fornecidos.
Comercial: os dados são usados para personalizar o conteúdo oferecido e gerar subsídio à plataforma para a melhora da qualidade no funcionamento dos serviços.
Previsão do perfil do usuário: tratamento automatizados de dados pessoais para avaliar o uso na plataforma.
Dados de cadastro: para permitir o acesso do usuário a determinados conteúdos da plataforma, exclusivo para usuários cadastrados
Dados de contrato: conferir às partes segurança jurídica e facilitar a conclusão do negócio.
Outras
O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, de modo que os direitos e obrigações aqui previstos permanecem aplicáveis.

SEÇÃO 4 - POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?

Os dados pessoais do usuário e visitante são armazenados pela plataforma durante o período necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.
Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.
Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei:
I - cumprimento de obrigação legal ou regulatória pelo controlador;
II - estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;
III - transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;
IV - uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.
SEÇÃO 5 - SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS
A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
Os dados relativas a cartões de crédito são criptografados usando a tecnologia "secure socket layer" (SSL) que garante a transmissão de dados de forma segura e confidencial, de modo que a transmissão dos dados entre o servidor e o usuário ocorre de maneira cifrada e encriptada.
A plataforma não se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiros. O site se compromete a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.
Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.
SEÇÃO 6 - COMPARTILHAMENTO DOS DADOS
O compartilhamento de dados do usuário ocorre apenas com os dados referentes a publicações realizadas pelo próprio usuário, tais ações são compartilhadas publicamente com os outros usuários.
Os dados do perfil do usuário são compartilhados publicamente em sistemas de busca e dentro da plataforma, sendo permitido ao usuário modificar tal configuração para que seu perfil não apareça nos resultados de busca de tais ferramentas.
SEÇÃO 6 - OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A TERCEIROS?
Os dados pessoais (não) podem ser compartilhados (com terceiros).
Os terceiros indicados recebem os dados na medida do necessário para permitir que eles realizem os serviços contratados.
Com relação aos fornecedores de serviços terceirizados como processadores de transação de pagamento, informamos que cada qual tem sua própria política de privacidade. Desse modo, recomendamos a leitura das suas políticas de privacidade para compreensão de quais informações pessoais serão usadas por esses fornecedores.
Os fornecedores podem ser localizados ou possuir instalações localizadas em países diferentes. Nessas condições, os dados pessoais transferidos podem se sujeitar às leis de jurisdições nas quais o fornecedor de serviço ou suas instalações estão localizados.
Ao acessar nossos serviços e prover suas informações, você está consentindo o processamento, transferência e armazenamento desta informação em outros países.
Ao ser redirecionado para um aplicativo ou site de terceiros, você não será mais regido por essa Política de Privacidade ou pelos Termos de Serviço da nossa plataforma. Não somos responsáveis pelas práticas de privacidade de outros sites e lhe incentivamos a ler as declarações de privacidade deles.

SEÇÃO 07 – COOKIES OU DADOS DE NAVEGAÇÃO

Os cookies referem-se a arquivos de texto enviados pela plataforma ao computador do usuário e visitante e que nele ficam armazenados, com informações relacionadas à navegação no site. Tais informações são relacionadas aos dados de acesso como local e horário de acesso e são armazenadas pelo navegador do usuário e visitante para que o servidor da plataforma possa lê-las posteriormente a fim de personalizar os serviços da plataforma.
O usuário e o visitante da plataforma worke manifesta conhecer e aceitar que pode ser utilizado um sistema de coleta de dados de navegação mediante à utilização de cookies.
O cookie persistente permanece no disco rígido do usuário e visitante depois que o navegador é fechado e será usado pelo navegador em visitas subsequentes ao site. Os cookies persistentes podem ser removidos seguindo as instruções do seu navegador. Já o cookie de sessão é temporário e desaparece depois que o navegador é fechado. É possível redefinir seu navegador da web para recusar todos os cookies, porém alguns recursos da plataforma podem não funcionar corretamente se a capacidade de aceitar cookies estiver desabilitada.

SEÇÃO 8 - CONSENTIMENTO

Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário está consentindo com a presente Política de Privacidade.
O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a veracidade das informações por ele disponibilizadas.
O usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve entrar em contato através do e-mail contato@letsworke.com

SEÇÃO 9 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE

Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o usuário e visitante revise-a com frequência.
As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na plataforma. Quando realizadas alterações os usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o usuário e visitante demonstra sua concordância com as novas normas.
Diante da fusão ou venda da plataforma à outra empresa os dados dos usuários podem ser transferidas para os novos proprietários para que a permanência dos serviços oferecidos.

SEÇÃO 10 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS

Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.
Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.`,
    },
    {
      type: "use",
      text: `1. Do objeto

A plataforma visa licenciar o uso de seu software, website, aplicativos e demais ativos de propriedade intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.
A plataforma caracteriza-se pela prestação do seguinte serviço: Saúde e bem-estar.

2. Da aceitação

O presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas ou jurídicas, usuárias do aplicativo.
Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidade cabíveis.
A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pela empresa. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los.

3. Do acesso dos usuários

Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.

4. Do cadastro

O acesso às funcionalidades da plataforma exigirá a realização de um cadastro prévio e, a depender dos serviços ou produtos escolhidos, o pagamento de determinado valor.
Ao se cadastrar o usuário deverá informar dados completos, recentes e válidos, sendo de sua exclusiva responsabilidade manter referidos dados atualizados, bem como o usuário se compromete com a veracidade dos dados fornecidos.
O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito.
Menores de 18 anos e aqueles que não possuírem plena capacidade civil deverão obter previamente o consentimento expresso de seus responsáveis legais para utilização da plataforma e dos serviços ou produtos, sendo de responsabilidade exclusiva dos mesmos o eventual acesso por menores de idade e por aqueles que não possuem plena capacidade civil sem a prévia autorização.
Mediante a realização do cadastro o usuário declara e garante expressamente ser plenamente capaz, podendo exercer e usufruir livremente dos serviços e produtos.
O usuário deverá fornecer um endereço de e-mail válido, através do qual o site realizará todas comunicações necessárias.
Após a confirmação do cadastro, o usuário possuirá um login e uma senha pessoal, a qual assegura ao usuário o acesso individual à mesma. Desta forma, compete ao usuário exclusivamente a manutenção de referida senha de maneira confidencial e segura, evitando o acesso indevido às informações pessoais.
Toda e qualquer atividade realizada com o uso da senha será de responsabilidade do usuário, que deverá informar prontamente a plataforma em caso de uso indevido da respectiva senha.
Não será permitido ceder, vender, alugar ou transferir, de qualquer forma, a conta, que é pessoal e intransferível.
Caberá ao usuário assegurar que o seu equipamento seja compatível com as características técnicas que viabilize a utilização da plataforma e dos serviços ou produtos.
O usuário poderá, a qualquer tempo, requerer o cancelamento de seu cadastro junto ao aplicativo worke. O seu descadastramento será realizado o mais rapidamente possível, desde que não sejam verificados débitos em aberto.
O usuário, ao aceitar os Termos e Política de Privacidade, autoriza expressamente a plataforma a coletar, usar, armazenar, tratar, ceder ou utilizar as informações derivadas do uso dos serviços, do site e quaisquer plataformas, incluindo todas as informações preenchidas pelo usuário no momento em que realizar ou atualizar seu cadastro, além de outras expressamente descritas na Política de Privacidade que deverá ser autorizada pelo usuário.

3. Das responsabilidades
É de responsabilidade do usuário:
a) defeitos ou vícios técnicos originados no próprio sistema do usuário;
b) a correta utilização da plataforma, dos serviços ou produtos oferecidos, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;
c) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;
d) pela proteção aos dados de acesso à sua conta/perfil (login e senha).

É de responsabilidade da plataforma worke:
a) indicar as características do serviço ou produto;
b) os defeitos e vícios encontrados no serviço ou produto oferecido desde que lhe tenha dado causa;
c) as informações que foram por ele divulgadas, sendo que os comentários ou informações divulgadas por usuários são de inteira responsabilidade dos próprios usuários;
d) os conteúdos ou atividades ilícitas praticadas através da sua plataforma.

A plataforma não se responsabiliza por links externos contidos em seu sistema que possam redirecionar o usuário à ambiente externo a sua rede.
Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.

11. Dos direitos autorais

O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, para acessar e fazer uso da plataforma e dos serviços e produtos por ela disponibilizados.
A estrutura do site ou aplicativo, as marcas, logotipos, nomes comerciais, layouts, gráficos e design de interface, imagens, ilustrações, fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio, programas de computador, banco de dados, arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual da razão social worke, observados os termos da Lei da Propriedade Industrial (Lei nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº 9.609/98), estão devidamente reservados.
Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso não gera qualquer direito de propriedade intelectual ao usuário, exceto pela licença limitada ora concedida.
O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, comercial ou não-comercial. Tais usos consistirão em violação dos direitos de propriedade intelectual da razão social worke, puníveis nos termos da legislação aplicável.

12. Das sanções
Sem prejuízo das demais medidas legais cabíveis, a razão social worke poderá, a qualquer momento, advertir, suspender ou cancelar a conta do usuário:
a) que violar qualquer dispositivo do presente Termo;
b) que descumprir os seus deveres de usuário;
c) que tiver qualquer comportamento fraudulento, doloso ou que ofenda a terceiros.

13. Da rescisão
A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável poderá, sem prévio aviso, ensejar a imediata rescisão unilateral por parte da razão social worke e o bloqueio de todos os serviços prestados ao usuário.

14. Das alterações
Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, por parte de worke, para adequar ou modificar os serviços, bem como para atender novas exigências legais. As alterações serão veiculadas aplicativo worke e o usuário poderá optar por aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de algum serviço.

15. Da política de privacidade

Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.

16. Do foro

Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.
Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.`,
    },
  ];

  const back = () => navigation.navigate("Settings");
  return (
    <View style={styles.container}>
      <HeaderTitleButton onPress={back} title=""></HeaderTitleButton>
      <View style={styles.terms}>
        <Text style={styles.titleTerms}>
          {type === "privacy"
            ? "POLÍTICA DE PRIVACIDADE"
            : "TERMOS E CONDIÇÕES GERAIS DE USO"}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textTerms}>
            {texts.find((x) => x.type === type).text}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Terms;
