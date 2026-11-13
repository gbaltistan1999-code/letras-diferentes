import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { TextPage } from "@/components/TextPage";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";
import { buildMetadata } from "@/lib/seo";
import { legalLastUpdated, siteConfig } from "@/lib/site-config";

const title = "Política de cookies";
const description =
  "Quais cookies e armazenamento local o Letras Diferentes usa, para que servem e como alterar ou retirar o seu consentimento a qualquer momento.";

export const metadata = buildMetadata({ title, description, path: "/politica-de-cookies" });

// TODO(owner): update the table if analytics/marketing services are ever enabled
// (siteConfig.cookieCategories) — list each cookie, provider, purpose and duration.
export default function CookiePolicyPage() {
  return (
    <TextPage title={title} description={description} path="/politica-de-cookies" updated={legalLastUpdated}>
      <p>
        Cookies são pequenos arquivos que os sites guardam no seu navegador. Tecnologias
        parecidas, como o armazenamento local (localStorage), funcionam de forma semelhante. Esta
        página explica o que o <strong>{siteConfig.name}</strong> usa, seguindo a LGPD e as
        orientações da ANPD sobre cookies.
      </p>

      <h2>O que usamos hoje</h2>
      <p>
        Atualmente, o site usa <strong>apenas armazenamento necessário</strong>. Não usamos
        cookies de análise, de publicidade, de redes sociais ou de rastreamento.
      </p>
      <div className="not-prose my-5 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead className="bg-warm text-ink">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Nome</th>
              <th scope="col" className="px-4 py-3 font-semibold">Tipo</th>
              <th scope="col" className="px-4 py-3 font-semibold">Finalidade</th>
              <th scope="col" className="px-4 py-3 font-semibold">Duração</th>
            </tr>
          </thead>
          <tbody className="text-ink-soft">
            <tr className="border-t border-line">
              <td className="px-4 py-3 font-mono text-xs">{CONSENT_STORAGE_KEY}</td>
              <td className="px-4 py-3">Necessário (localStorage, primário)</td>
              <td className="px-4 py-3">Guardar a sua escolha sobre cookies para não repetir o aviso.</td>
              <td className="px-4 py-3">Até você limpar os dados do navegador.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        O texto digitado no gerador <strong>não</strong> é guardado em cookies nem no
        armazenamento local.
      </p>

      <h2>Categorias</h2>
      <ul>
        <li>
          <strong>Necessários:</strong> indispensáveis para o funcionamento do site e para lembrar
          a sua escolha de consentimento. Ficam sempre ativos.
        </li>
        <li>
          <strong>Análise (opcional):</strong> não utilizados no momento.
        </li>
        <li>
          <strong>Marketing (opcional):</strong> não utilizados no momento.
        </li>
      </ul>
      <p>
        Se um dia passarmos a usar cookies opcionais, eles ficarão desativados até que você
        permita, e esta página será atualizada com os detalhes de cada um.
      </p>

      <h2>Como alterar ou retirar o consentimento</h2>
      <p>
        Você pode rever a sua escolha a qualquer momento: <CookieSettingsButton />. Também é
        possível apagar os dados do site nas configurações do seu navegador — nesse caso, o aviso
        de cookies aparecerá novamente.
      </p>

      <h2>Mais informações</h2>
      <p>
        Veja também a <Link href="/politica-de-privacidade">Política de privacidade</Link>. Dúvidas:{" "}
        <ContactEmail />
      </p>
    </TextPage>
  );
}
