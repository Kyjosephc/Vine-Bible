import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getApologeticsTopic } from '@/content/apologetics';
import { useT } from '@/lib/i18n';
import { Badge, Card, SectionTitle } from '@/components/ui';

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((p, i) => (
        <p key={i} className="mb-3 leading-7 text-slate-700 dark:text-slate-300">
          {p}
        </p>
      ))}
    </>
  );
}

export default function ApologeticsTopicPage({ params }: { params: { topic: string } }) {
  const { t } = useT();
  const topic = getApologeticsTopic(params.topic);
  if (!topic) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/apologetics" className="text-sm text-gold hover:underline">
          ← {t('Defending the Faith')}
        </Link>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {topic.question}
        </h1>
        <p className="mt-3 rounded-xl bg-gold/10 px-4 py-3 text-sm font-medium leading-7 text-ink dark:text-parchment">
          {topic.shortAnswer}
        </p>
      </div>

      <Card>
        <div className="mt-1">
          <Paragraphs text={topic.intro} />
        </div>
      </Card>

      <div>
        <SectionTitle title={t('The evidence')} className="mb-3" />
        <div className="space-y-3">
          {topic.evidence.map((e, i) => (
            <Card key={i}>
              <div className="flex items-center gap-2">
                <Badge>{e.kind === 'evidence' ? t('Evidence') : t('Interpretation')}</Badge>
              </div>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink dark:text-parchment">
                {e.title}
              </h3>
              <p className="mt-1 text-sm leading-7 text-slate-700 dark:text-slate-300">{e.text}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-l-4 border-l-gold">
        <SectionTitle title={t('Honest uncertainties')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {topic.uncertainties.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <SectionTitle title={t('What this doesn\u2019t prove')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {topic.doesntProve.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </Card>

      <div>
        <SectionTitle title={t('What Scripture says')} className="mb-3" />
        <div className="space-y-3">
          {topic.scripture.map((s) => (
            <Card key={s.ref} className="border-l-4 border-l-gold">
              <Badge>{s.ref}</Badge>
              {s.quote ? (
                <p className="font-display mt-2 italic leading-7 text-ink dark:text-parchment">
                  “{s.quote}”
                </p>
              ) : null}
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{s.note}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gold/5">
        <SectionTitle title={t('Reflect')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {topic.reflection.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Card>

      {topic.related.length > 0 && (
        <div>
          <SectionTitle title={t('Keep exploring')} className="mb-3" />
          <div className="grid gap-2 sm:grid-cols-2">
            {topic.related.map((r) => (
              <Link key={r.href} href={r.href}>
                <Card className="transition hover:border-gold/50">
                  <p className="text-sm font-semibold text-gold">{r.label} →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
