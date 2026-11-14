import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { TextPage } from "@/components/TextPage";
import { buildMetadata } from "@/lib/seo";
import { legalLastUpdated, siteConfig } from "@/lib/site-config";

const title = "Política de privacidade";
const description =
  "Saiba como o Letras Diferentes trata dados: o texto digitado é convertido no seu navegador e não é enviado nem armazenado. Direitos previstos na LGPD.";

export const metadata = buildMetadata({ title, description, path: "/politica-de-privacidade" });

/*
 * TODO(owner, before launch — review with a legal professional):
 *  - Identify the data controller (controlador) by name and, if applicable,
 *    the encarregado (DPO) contact required by LGPD art. 41.
 *  - Name the hosting provider and confirm what its server logs record and
 *    for how long.
 *  - Update this page if analytics, ads or any third-party service is added.
 */
export default function PrivacyPage() {
  return (
    <TextPage title={title} description={description} path="/politica-de-privacidade" updated={legalLastUpdated}>
      <p>
        Esta política explica como o site <strong>{siteConfig.name}</strong> trata informações
        pessoais, de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº
        13.709/2018).
      </p>

      <h2>1. Resumo</h2>
      <ul>
        <li>O texto que você digita no gerador é convertido no seu navegador e <strong>não é enviado nem armazenado</strong> por nós.</li>
        <li>Não há cadastro, login ou conta de usuário.</li>
        <li>Não usamos cookies de análise, de publicidade ou de rastreamento.</li>
        <li>Guardamos no seu navegador apenas as suas preferências: a escolha sobre cookies e o tema (claro ou escuro).</li>
      </ul>

      <h2>2. Texto digitado no gerador</h2>
      <p>
        A conversão do texto em letras diferentes é feita por código JavaScript que roda no seu
        próprio dispositivo. O conteúdo digitado não é transmitido para servidores, não é
        registrado e não fica salvo no armazenamento do navegador: ao fechar ou recarregar a
        página, ele é apagado. Ao tocar em “Copiar”, o texto vai apenas para a área de
        transferência do seu dispositivo.
      </p>

      <h2>3. Armazenamento local (localStorage)</h2>
      <p>
        Usamos o armazenamento local do navegador para guardar duas preferências: a sua escolha
        sobre cookies (quais categorias foram aceitas ou recusadas e a data da escolha) e, se você
        usar o botão de tema, se prefere o tema claro ou escuro. Esses dados ficam no seu
        dispositivo, não são enviados para nós e servem apenas para lembrar essas escolhas nas
        próximas visitas. Detalhes na{" "}
        <Link href="/politica-de-cookies">Política de cookies</Link>.
      </p>

      <h2>4. Dados técnicos de acesso</h2>
      <p>
        Como em qualquer site, ao acessar as páginas o seu navegador se comunica com o servidor da
        empresa que hospeda o site. Esse provedor pode registrar automaticamente dados técnicos —
        como endereço IP, tipo de navegador, página acessada e data e hora — em registros de
        servidor (logs), usados para segurança, prevenção de abusos e funcionamento do serviço.
        Não usamos esses registros para identificar visitantes nem para fins de publicidade.
      </p>

      <h2>5. Contato por e-mail</h2>
      <p>
        Se você nos escrever por e-mail, receberemos o seu endereço de e-mail e o conteúdo da
        mensagem. Usamos essas informações apenas para responder ao seu contato, com base no
        nosso legítimo interesse em atender a sua solicitação, e as guardamos somente pelo tempo
        necessário para isso.
      </p>

      <h2>6. Compartilhamento com terceiros</h2>
      <p>
        Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais. O site
        não carrega scripts de análise, anúncios, redes sociais ou outros serviços de terceiros.
        Os links para sites externos (como o do Unicode Consortium) levam a páginas com políticas
        de privacidade próprias.
      </p>

      <h2>7. Seus direitos como titular</h2>
      <p>Pela LGPD (art. 18), você pode solicitar, a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos dados seus e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
        <li>portabilidade dos dados;</li>
        <li>informações sobre com quem os dados foram compartilhados;</li>
        <li>revogação do consentimento, quando ele for a base do tratamento.</li>
      </ul>
      <p>
        Você pode alterar ou retirar o seu consentimento sobre cookies a qualquer momento pelo
        link “Configurações de cookies”, no rodapé. Também pode apresentar reclamação à Autoridade
        Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Crianças e adolescentes</h2>
      <p>
        O site não exige cadastro e não coleta intencionalmente dados de crianças ou
        adolescentes. Se você acredita que recebemos dados de um menor (por exemplo, por e-mail),
        entre em contato para que possamos excluí-los.
      </p>

      <h2>9. Segurança</h2>
      <p>
        O site é servido por conexão segura (HTTPS). Como não coletamos o texto digitado nem
        mantemos contas, a quantidade de dados pessoais tratados é mínima.
      </p>

      <h2>10. Alterações desta política</h2>
      <p>
        Esta política pode ser atualizada, por exemplo, se um novo serviço for adicionado ao site.
        A data da última atualização aparece no topo da página. Se passarmos a usar cookies
        opcionais, pediremos o seu consentimento antes de ativá-los.
      </p>

      <h2>11. Contato e controlador</h2>
      <p>
        O responsável pelo tratamento dos dados é o responsável pelo site {siteConfig.name}. Para
        exercer os seus direitos ou tirar dúvidas sobre privacidade, escreva para: <ContactEmail />
      </p>
    </TextPage>
  );
}
