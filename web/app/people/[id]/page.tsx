import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPerson } from '@/content/people';
import { getVerseText } from '@/lib/bible';
import { useT } from '@/lib/i18n';
import { Badge, Card, SectionTitle } from '@/components/ui';

export default async function PersonPage({ params }: { params: { id: string } }) {
  const { t } = useT();
  let person: ReturnType<typeof getPerson>;
  try {
    person = getPerson(params.id);
  } catch {
    person = undefined;
  }
  if (!person) notFound();

  const withText = await Promise.all(
    person.keyPassages.map(async (ref) => {
      try {
        const v = await getVerseText(ref);
        return { ref, text: v.text };
      } catch {
        return { ref, text: '' };
      }
    }),
  );

  const related = person.related
    .map((id) => {
      try {
        return getPerson(id);
      } catch {
        return undefined;
      }
    })
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/people" className="text-sm text-gold hover:underline">
          ← {t('people_title')}
        </Link>
        <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 font-display text-2xl font-semibold text-gold">
          {person.name.charAt(0)}
        </div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {person.name}
        </h1>
        <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{person.who}</p>
      </div>

      <Card>
        <SectionTitle title={t('Their story')} />
        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {person.context}
        </p>
      </Card>

      {person.family.length > 0 && (
        <Card>
          <SectionTitle title={t('Family')} />
          <div className="mt-3 flex flex-wrap gap-2">
            {person.family.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>
        </Card>
      )}

      {person.events.length > 0 && (
        <div>
          <SectionTitle title={t('Key events')} className="mb-3" />
          <ol className="relative space-y-3 border-l-2 border-gold/30 pl-6">
            {person.events.map((e, i) => (
              <li key={i} className="relative text-sm leading-7 text-slate-700 dark:text-slate-300">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full border-2 border-gold bg-parchment dark:bg-ink"
                />
                {e}
              </li>
            ))}
          </ol>
        </div>
      )}

      {withText.length > 0 && (
        <div>
          <SectionTitle title={t('key_passages')} className="mb-3" />
          <div className="space-y-3">
            {withText.map((p) => (
              <Card key={p.ref} className="border-l-4 border-l-gold">
                <Badge>{p.ref}</Badge>
                {p.text ? (
                  <p className="font-display mt-2 italic leading-7 text-ink dark:text-parchment">
                    “{p.text}”
                  </p>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      )}

      {person.lessons.length > 0 && (
        <Card className="bg-gold/5">
          <SectionTitle title={t('What we learn')} />
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {person.lessons.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </Card>
      )}

      {person.faithExamples.length > 0 && (
        <Card>
          <SectionTitle title={t('Examples of faith')} />
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {person.faithExamples.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Card>
      )}

      {person.failures.length > 0 && (
        <Card>
          <SectionTitle title={t('Failures — and grace')} />
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {person.failures.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Card>
      )}

      {related.length > 0 && (
        <div>
          <SectionTitle title={t('Related people')} className="mb-3" />
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link key={r.id} href={`/people/${r.id}`}>
                <Badge className="transition hover:border-gold">{r.name}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
