'use client';

import { Book, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const statusColors = {
  not_started: 'bg-gray-500',
  in_progress: 'bg-blue-500',
  completed: 'bg-green-500',
};

export function ChapterCard({ chapter }: { chapter: any }) {
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce((a: number, b: number) => a + b, 0);
  const progress = (chapter.questionSolved / totalQuestions) * 100;

  const latestYear = 2025;
  const previousYear = 2024;
  const latestYearQuestions = chapter.yearWiseQuestionCount[latestYear];
  const previousYearQuestions = chapter.yearWiseQuestionCount[previousYear];
  const trend = latestYearQuestions > previousYearQuestions ? 'up' : 'down';

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold line-clamp-2">{chapter.chapter}</CardTitle>
          <Book className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={chapter.isWeakChapter ? "destructive" : "secondary"}>
            {chapter.isWeakChapter ? 'Weak Chapter' : chapter.unit}
          </Badge>
          <Badge className={statusColors[chapter.status]}>
            {chapter.status.replace('_', ' ')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            Questions: {chapter.questionSolved}/{totalQuestions}
          </div>
          <div className="flex items-center gap-1">
            {trend === 'up' ? (
              <ArrowUp className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDown className="h-4 w-4 text-red-500" />
            )}
            <span>{latestYearQuestions} Qs</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}