import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { TextPage } from "@/components/TextPage";
import { STYLES } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";

const title = "Sobre nós";
const description =
  "Conheça o Letras Diferentes: um gerador gratuito de letras Unicode para copiar e colar, que funciona no navegador e não guarda o que você digita.";

export const metadata = buildMetadata({ title, description, path: "/sobre-nos" });

export default function AboutPage() {
  return (
    <TextPage title={title} description={description} path="/sobre-nos">
      <p>
        O <strong>Letras Diferentes</strong> é um site gratuito que transforma o seu texto em
        letras estilizadas para copiar e colar. Ele foi feito para quem quer personalizar a bio, o
        nome de perfil, mensagens ou o nick de um jogo sem instalar aplicativos nem criar conta.
      </p>

      <h2>O que o site oferece?</h2>
      <ul>
        <li>Um gerador com {STYLES.length} estilos de letras, atualizados em tempo real enquanto você digita.</li>
        <li>Páginas dedicadas a estilos e usos específicos, como letras cursivas e nicks para Free Fire.</li>
        <li>Explicações honestas sobre como os caracteres funcionam e onde podem falhar.</li>
      </ul>

      <h2>Como o gerador funciona?</h2>
      <p>
        As letras não são fontes: são caracteres do padrão Unicode que se parecem com letras
        estilizadas. A conversão é feita por código que roda no seu próprio navegador. O texto que
        você digita não é enviado para servidores nem guardado por nós.
      </p>
      <p>
        Uma atenção especial foi dada ao português: como o Unicode não tem letras estilizadas com
        acento, o gerador nunca apaga acentos nem a cedilha. Por padrão, as letras acentuadas
        ficam na forma normal, para aparecer certas em qualquer aparelho; quem quiser pode
        estilizá-las também, com o acento encaixado sobre a letra.
      </p>

      <h2>Nossos princípios</h2>
      <ul>
        <li>
          <strong>Transparência:</strong> dizemos claramente o que o gerador faz e quais são as
          limitações de compatibilidade e acessibilidade.
        </li>
        <li>
          <strong>Privacidade:</strong> não usamos contas, não guardamos o texto digitado e não
          usamos cookies de análise ou de publicidade no momento.
        </li>
        <li>
          <strong>Independência:</strong> não temos vínculo com Instagram, Meta, TikTok, Garena,
          Free Fire, WhatsApp, Discord ou qualquer outra plataforma mencionada no site.
        </li>
      </ul>

      <h2>Fale com a gente</h2>
      <p>
        Encontrou um erro, um estilo que não aparece no seu celular ou tem uma sugestão? Escreva
        para <ContactEmail /> ou use a <Link href="/contato">página de contato</Link>.
      </p>
    </TextPage>
  );
}
