import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LIFE_TOPICS } from '@/content/life';
import { getVerseText } from '@/lib/bible';
import { useT } from '@/lib/i18n';
import { Badge, Card, SectionTitle } from '@/components/ui';

function safeGetTopic(id: string) {
  try {
    return LIFE_TOPICS.find((x) => x.id === id);
  } catch {
    return undefined;
  }
}

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

export default async function LifeTopicPage({ params }: { params: { topic: string } }) {
  const { t } = useT();
  const topic = safeGetTopic(params.topic);
  if (!topic) notFound();

  const passages = await Promise.all(
    topic.passages.map(async (p) => {
      try {
        const v = await getVerseText(p.ref);
        return { ...p, text: v.text };
      } catch {
        return { ...p, text: '' };
      }
    }),
  );

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/life" className="text-sm text-gold hover:underline">
          ← {t('life_topics')}
        </Link>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {topic.title}
        </h1>
      </div>

      <Card>
        <SectionTitle title={t('teaches')} />
        <div className="mt-3">
          <Paragraphs text={topic.teaches} />
        </div>
      </Card>

      <div>
        <SectionTitle title={t('key_passages')} className="mb-3" />
        <div className="space-y-3">
          {passages.map((p) => (
            <Card key={p.ref} className="border-l-4 border-l-gold">
              <Badge>{p.ref}</Badge>
              {p.text ? (
                <p className="font-display mt-2 italic leading-7 text-ink dark:text-parchment">
                  “{p.text}”
                </p>
              ) : null}
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{p.note}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <SectionTitle title={t('context')} />
        <div className="mt-3">
          <Paragraphs text={topic.context} />
        </div>
      </Card>

      <Card>
        <SectionTitle title={t('not_says')} />
        <div className="mt-3">
          <Paragraphs text={topic.notSays} />
        </div>
      </Card>

      <Card>
        <SectionTitle title={t('application')} />
        <div className="mt-3">
          <Paragraphs text={topic.application} />
        </div>
      </Card>

      <Card>
        <SectionTitle title={t('reflection')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          {topic.reflection.map((r, i) => (
            <li key={i} className="leading-7">
              {r}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="bg-gold/5">
        <SectionTitle title={t('prayer')} />
        <p className="font-display mt-3 italic leading-8 text-ink dark:text-parchment">
          {topic.prayer}
        </p>
      </Card>

      {topic.deeper.length > 0 && (
        <Card>
          <SectionTitle title={t('deeper')} />
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
            {topic.deeper.map((d, i) => (
              <li key={i} className="leading-7">
                {d}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
