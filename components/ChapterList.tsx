'use client';

import { useMemo } from 'react';
import { ChapterCard } from '@/components/ChapterCard';
import { useFilterStore, Subject } from '@/lib/store';
import allChapters from '@/lib/all_subjects_chapter_data.json';

interface ChapterListProps {
  subject: Subject;
}

export function ChapterList({ subject }: ChapterListProps) {
  const { selectedClass, selectedUnits, selectedStatus, showWeakChapters } = useFilterStore();

  const filteredChapters = useMemo(() => {
    return allChapters.filter((chapter) => {
      if (chapter.subject.toLowerCase() !== subject) return false;
      
      if (selectedClass.length && !selectedClass.includes(chapter.class)) return false;
      if (selectedUnits.length && !selectedUnits.includes(chapter.unit)) return false;
      if (selectedStatus && chapter.status !== selectedStatus) return false;
      if (showWeakChapters && !chapter.isWeakChapter) return false;
      
      return true;
    });
  }, [subject, selectedClass, selectedUnits, selectedStatus, showWeakChapters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredChapters.map((chapter) => (
        <ChapterCard key={chapter.chapter} chapter={chapter} />
      ))}
    </div>
  );
}