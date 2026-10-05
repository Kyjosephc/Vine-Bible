'use client';

import { useMemo } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { InteractiveQuiz, toInteractiveList } from './interactive';

interface QuizRunnerProps {
  questions: QuizQuestion[];
  tag: string;
  onComplete: (score: number, total: number) => void;
}

/**
 * QuizRunner now renders through the unified interactive library
 * (InteractiveQuiz), so every question kind gets the same warm feedback:
 * the explanation is always shown after an answer. The props contract is
 * unchanged — QuizBlock still persists attempts to quiz_attempts.
 */
export function QuizRunner({ questions, tag, onComplete }: QuizRunnerProps) {
  const interactive = useMemo(() => toInteractiveList(questions), [questions]);
  return <InteractiveQuiz questions={interactive} tag={tag} onComplete={onComplete} />;
}
