import { ContactEmail } from "@/components/ContactEmail";
import { TextPage } from "@/components/TextPage";
import { buildMetadata } from "@/lib/seo";
import { legalLastUpdated, siteConfig } from "@/lib/site-config";

const title = "Aviso legal";
const description =
  "Aviso legal do Letras Diferentes: finalidade da ferramenta, limites de compatibilidade e ausência de vínculo com redes sociais e jogos.";

export const metadata = buildMetadata({ title, description, path: "/aviso-legal" });

export default function DisclaimerPage() {
  return (
    <TextPage title={title} description={description} path="/aviso-legal" updated={legalLastUpdated}>
      <h2>Finalidade</h2>
      <p>
        O <strong>{siteConfig.name}</strong> gera caracteres Unicode com aparência estilizada
        para fins informativos e de entretenimento. As letras não são fontes tipográficas e não
        alteram a fonte de nenhum aplicativo.
      </p>

      <h2>Exibição e compatibilidade</h2>
      <p>
        A forma como cada caractere aparece depende do aparelho, do sistema operacional, do
        navegador e do app de quem lê. Alguns estilos podem aparecer como quadradinhos, pontos de
        interrogação ou com acentos deslocados. Não garantimos que o texto gerado seja exibido da
        mesma forma em todos os dispositivos.
      </p>

      <h2>Regras de outras plataformas</h2>
      <p>
        Redes sociais, jogos e outros serviços podem restringir caracteres especiais em nomes de
        usuário, nicks e outros campos, limitar a quantidade de caracteres ou cobrar pela troca de
        nome. Essas regras são definidas por cada plataforma e podem mudar sem aviso. As
        instruções do site são orientações gerais; confira sempre as regras e os custos exibidos
        na própria plataforma antes de confirmar qualquer alteração.
      </p>

      <h2>Ausência de vínculo</h2>
      <p>
        O {siteConfig.name} é um site independente e não é afiliado, patrocinado, endossado ou
        associado a Instagram, Meta, Facebook, WhatsApp, TikTok, X, Discord, Telegram, Garena,
        Free Fire ou qualquer outra empresa ou marca citada. Todas as marcas pertencem aos seus
        respectivos titulares.
      </p>

      <h2>Acessibilidade</h2>
      <p>
        Textos estilizados podem não ser lidos corretamente por leitores de tela e outras
        tecnologias assistivas. Recomendamos usá-los com moderação e manter informações
        importantes em texto comum.
      </p>

      <h2>Contato</h2>
      <p>
        Encontrou alguma informação incorreta? Escreva para <ContactEmail />.
      </p>
    </TextPage>
  );
}
