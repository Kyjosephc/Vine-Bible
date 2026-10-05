'use client';

import { useRef } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { createClient } from '@/lib/supabase/client';
import { QuizRunner } from './QuizRunner';

/**
 * QuizRunner wired to persist attempts. Renders nothing when there are no
 * questions; skips saving when logged out.
 */
export function QuizBlock({ questions, tag }: { questions: QuizQuestion[]; tag: string }) {
  const savedRef = useRef(false);

  if (!questions || questions.length === 0) return null;

  const handleComplete = async (score: number, total: number) => {
    if (savedRef.current) return;
    savedRef.current = true;
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) return;
      await supabase.from('quiz_attempts').insert({
        user_id: user.id,
        quiz_tag: tag,
        score,
        total,
      });
    } catch {
      // offline or misconfigured — the quiz itself already worked
    }
  };

  return <QuizRunner questions={questions} tag={tag} onComplete={handleComplete} />;
}
