"use client";

import { useId, useState } from "react";

/**
 * Prepares an email in the visitor's own mail app (mailto:). Nothing is sent
 * from the website itself, and we never show a "message sent" confirmation.
 */
export function MailtoForm({ email }: { email: string }) {
  const id = useId();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ subject: subject || "Contato pelo site", body: message });
    // URLSearchParams encodes spaces as "+", which some mail apps show literally.
    window.location.href = `mailto:${email}?${params.toString().replace(/\+/g, "%20")}`;
    setOpened(true);
  }

  const field =
    "mt-1 block w-full rounded-lg border border-line bg-surface px-3 py-2.5 outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft";

  return (
    <form onSubmit={handleSubmit} className="not-prose mt-4 space-y-4 rounded-2xl border border-line bg-surface p-5">
      <div>
        <label htmlFor={`${id}-assunto`} className="text-sm font-semibold text-ink">
          Assunto
        </label>
        <input
          id={`${id}-assunto`}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={120}
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`${id}-mensagem`} className="text-sm font-semibold text-ink">
          Mensagem
        </label>
        <textarea
          id={`${id}-mensagem`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          maxLength={2000}
          className={field}
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-11 items-center rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-black"
      >
        Abrir no meu app de e-mail
      </button>
      <p role="status" className="text-sm text-ink-soft">
        {opened
          ? "Tentamos abrir o seu app de e-mail com a mensagem preenchida. Revise e envie por lá. Se nada abriu, copie o endereço acima e escreva diretamente."
          : "Este formulário não envia a mensagem pelo site: ele apenas abre o seu app de e-mail com o texto preenchido."}
      </p>
    </form>
  );
}
