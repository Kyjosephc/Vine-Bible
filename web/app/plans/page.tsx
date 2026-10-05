import Link from 'next/link';
import { PLANS } from '@/lib/plans';
import { Card, SectionTitle, Badge } from '@/components/ui';

/**
 * Reading plans overview (server component). Plan schedules are generated
 * in code by web/lib/plans.ts; check-in state lives in reading_plan_progress.
 */
export default function PlansPage() {
  const plans = Object.values(PLANS);

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <SectionTitle>Reading Plans</SectionTitle>
      <p className="mt-2 text-sm text-slate-400">
        Pick a pace and check in each day. Your progress is saved to your account.
      </p>

      <div className="mt-6 space-y-4">
        {plans.map((plan) => (
          <Link key={plan.id} href={`/plans/${plan.id}`} className="block">
            <Card className="p-5 transition hover:border-[#C9A227]/50">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-xl text-slate-100">{plan.title}</h2>
                <Badge>
                  {plan.days.length} {plan.days.length === 1 ? 'day' : 'days'}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              <p className="mt-3 text-sm font-medium text-[#C9A227]">Start plan →</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
