import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PEOPLE } from '@/content/people';
import { getVerseText } from '@/lib/bible';
import { useT } from '@/lib/i18n';
import { Badge, Card, SectionTitle } from '@/components/ui';

interface PersonLike {
  id: string;
  name: string;
  role?: string;
  description?: string;
  bio?: string;
  refs?: string[];
  keyPassages?: { ref: string; note?: string }[];
  related?: string[];
}

function safeGetPerson(id: string): PersonLike | undefined {
  try {
    return ((PEOPLE ?? []) as unknown as PersonLike[]).find((p) => p.id === id);
  } catch {
    return undefined;
  }
}

export default async function PersonPage({ params }: { params: { id: string } }) {
  const { t } = useT();
  const person = safeGetPerson(params.id);
  if (!person) notFound();

  const bio = person.bio ?? person.description ?? '';
  const passages = person.keyPassages ?? (person.refs ?? []).map((ref) => ({ ref, note: '' }));
  const withText = await Promise.all(
    passages.map(async (p) => {
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
        <Link href="/people" className="text-sm text-gold hover:underline">
          ← {t('people_title')}
        </Link>
        <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 font-display text-2xl font-semibold text-gold">
          {person.name.charAt(0)}
        </div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {person.name}
        </h1>
        {person.role ? <p className="mt-1 font-medium text-gold">{person.role}</p> : null}
      </div>

      {bio ? (
        <Card>
          <div className="lesson-body">
            {bio.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Card>
      ) : null}

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
                {p.note ? (
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {p.note}
                  </p>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      )}

      {person.related && person.related.length > 0 && (
        <Card>
          <SectionTitle title={t('search_people')} />
          <div className="mt-3 flex flex-wrap gap-2">
            {person.related.map((r) => (
              <Badge key={r}>{r}</Badge>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
