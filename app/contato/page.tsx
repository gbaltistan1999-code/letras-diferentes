import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { MailtoForm } from "@/components/MailtoForm";
import { TextPage } from "@/components/TextPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const title = "Contato";
const description =
  "Fale com o Letras Diferentes: tire dúvidas, sugira novos estilos de letras ou relate um problema no gerador.";

export const metadata = buildMetadata({ title, description, path: "/contato" });

export default function ContactPage() {
  return (
    <TextPage title={title} description={description} path="/contato">
      <p>
        Dúvidas, sugestões de novos estilos ou algum estilo que não aparece no seu aparelho? Envie
        um e-mail para: <ContactEmail />
      </p>
      <p>
        Ao relatar um problema, conte qual estilo você usou, em qual app colou e o modelo do seu
        celular ou navegador. Isso ajuda a entender o que aconteceu.
      </p>

      {siteConfig.contactEmail && (
        <>
          <h2>Escrever uma mensagem</h2>
          <MailtoForm email={siteConfig.contactEmail} />
        </>
      )}

      <h2>Antes de escrever</h2>
      <p>
        Muitas dúvidas já estão respondidas nas{" "}
        <Link href="/perguntas-frequentes">perguntas frequentes</Link>. Lembre-se de que não somos
        o suporte do Instagram, do Free Fire ou de outras plataformas — problemas de conta devem
        ser resolvidos diretamente com elas.
      </p>
      <p>
        Para pedidos sobre dados pessoais, veja a{" "}
        <Link href="/politica-de-privacidade">Política de privacidade</Link>.
      </p>
    </TextPage>
  );
}
