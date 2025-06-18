'use client';

import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFilterStore, Status } from '@/lib/store';

export function FilterBar() {
  const {
    selectedClass,
    selectedUnits,
    selectedStatus,
    showWeakChapters,
    setSelectedStatus,
    setShowWeakChapters,
    resetFilters,
  } = useFilterStore();

  const hasActiveFilters = selectedClass.length > 0 || 
    selectedUnits.length > 0 || 
    selectedStatus !== null || 
    showWeakChapters;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Select
          value={selectedStatus || 'all'}
          onValueChange={(value) => setSelectedStatus(value === 'all' ? null : value as Status)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="not_started">Not Started</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Switch
            id="weak-chapters"
            checked={showWeakChapters}
            onCheckedChange={setShowWeakChapters}
          />
          <label htmlFor="weak-chapters">Show Weak Chapters Only</label>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Active Filters:</span>
          {selectedStatus && (
            <Badge variant="secondary" className="capitalize">
              {selectedStatus.replace('_', ' ')}
            </Badge>
          )}
          {showWeakChapters && (
            <Badge variant="secondary">Weak Chapters</Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="h-7 px-2"
          >
            <X className="h-4 w-4" />
            <span className="ml-1">Clear All</span>
          </Button>
        </div>
      )}
    </div>
  );
}