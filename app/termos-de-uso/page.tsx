import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { TextPage } from "@/components/TextPage";
import { buildMetadata } from "@/lib/seo";
import { legalLastUpdated, siteConfig } from "@/lib/site-config";

const title = "Termos de uso";
const description =
  "Termos de uso do Letras Diferentes: regras de uso aceitável do gerador, limitações de compatibilidade, propriedade intelectual e responsabilidades.";

export const metadata = buildMetadata({ title, description, path: "/termos-de-uso" });

// TODO(owner): have these terms reviewed by a legal professional before launch.
export default function TermsPage() {
  return (
    <TextPage title={title} description={description} path="/termos-de-uso" updated={legalLastUpdated}>
      <p>
        Ao usar o site <strong>{siteConfig.name}</strong>, você concorda com estes termos. Se não
        concordar, por favor não utilize o site.
      </p>

      <h2>1. O serviço</h2>
      <p>
        O {siteConfig.name} oferece, gratuitamente, uma ferramenta que converte texto em
        caracteres Unicode com aparência estilizada, além de conteúdo informativo sobre o tema. A
        conversão acontece no seu navegador. Não é necessário criar conta.
      </p>

      <h2>2. Uso aceitável</h2>
      <p>Você se compromete a não usar o site nem o texto gerado para:</p>
      <ul>
        <li>se passar por outra pessoa, empresa ou marca, ou criar perfis falsos;</li>
        <li>enganar pessoas, aplicar golpes ou praticar phishing (por exemplo, imitando endereços ou nomes oficiais);</li>
        <li>enviar spam ou burlar filtros de moderação e regras de outras plataformas;</li>
        <li>publicar conteúdo ilegal, ofensivo, discriminatório ou que viole direitos de terceiros;</li>
        <li>sobrecarregar, copiar em massa ou tentar prejudicar o funcionamento do site.</li>
      </ul>
      <p>
        Você é responsável pelo texto que cria e por onde o publica, devendo respeitar também os
        termos de cada plataforma (redes sociais, jogos etc.).
      </p>

      <h2>3. Propriedade intelectual</h2>
      <p>
        Os caracteres Unicode são um padrão aberto e o texto que você digita é seu. O código, o
        design e os textos explicativos do site pertencem aos seus responsáveis e não podem ser
        copiados para outros sites sem autorização. Nomes como Instagram, Free Fire, TikTok,
        WhatsApp e Discord são marcas de seus respectivos donos e aparecem apenas para fins de
        referência.
      </p>

      <h2>4. Compatibilidade</h2>
      <p>
        A aparência das letras depende do aparelho, do sistema e do app onde o texto é exibido.
        Não garantimos que todos os estilos funcionem em todos os dispositivos ou que sejam aceitos
        em todos os campos de todas as plataformas. Veja o <Link href="/aviso-legal">Aviso legal</Link>.
      </p>

      <h2>5. Disponibilidade</h2>
      <p>
        Buscamos manter o site sempre no ar, mas ele pode ficar indisponível por manutenção,
        falhas técnicas ou motivos alheios ao nosso controle. Podemos alterar, adicionar ou remover
        estilos e funcionalidades a qualquer momento.
      </p>

      <h2>6. Isenção de garantias e limitação de responsabilidade</h2>
      <p>
        O site é oferecido “no estado em que se encontra”. Na medida permitida pela legislação
        brasileira, incluindo o Código de Defesa do Consumidor, não nos responsabilizamos por
        prejuízos decorrentes do uso do texto gerado — por exemplo, recusa de um nome por uma
        plataforma, custos de troca de nick em jogos ou exibição incorreta em determinado
        aparelho. Recomendamos testar o texto antes de qualquer alteração definitiva ou paga.
      </p>

      <h2>7. Links externos</h2>
      <p>
        O site pode conter links para páginas de terceiros. Não controlamos esse conteúdo e não
        respondemos por ele.
      </p>

      <h2>8. Privacidade</h2>
      <p>
        O tratamento de dados está descrito na{" "}
        <Link href="/politica-de-privacidade">Política de privacidade</Link> e na{" "}
        <Link href="/politica-de-cookies">Política de cookies</Link>.
      </p>

      <h2>9. Alterações e legislação aplicável</h2>
      <p>
        Estes termos podem ser atualizados; a data da última versão aparece no topo da página.
        Eles são regidos pelas leis da República Federativa do Brasil.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <ContactEmail />
      </p>
    </TextPage>
  );
}
