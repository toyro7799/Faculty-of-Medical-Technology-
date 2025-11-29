
import React from 'react';
import { Lecture, ClassType } from '../types';
import { MapPin, User, Clock, Users } from 'lucide-react';

interface LectureCardProps {
  lecture: Lecture;
  hideTime?: boolean;
}

export const LectureCard: React.FC<LectureCardProps> = ({ lecture, hideTime = false }) => {
  const isTheory = lecture.type === ClassType.TH;
  
  // Helper to check if text is valid (not empty and not TBA)
  const isValidText = (text?: string) => text && text !== 'TBA';

  return (
    <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Type Badge */}
      <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-xs font-bold tracking-wider ${
        isTheory ? 'bg-amber-100 text-amber-800' : 'bg-cyan-100 text-cyan-800'
      }`}>
        {isTheory ? 'THEORY' : 'PRACTICAL'}
      </div>

      {/* Time - Conditionally Rendered */}
      {!hideTime && (
        <div className="flex items-center text-slate-500 mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{lecture.timeSlot}</span>
        </div>
      )}

      {/* Subject */}
      <h4 className={`text-lg font-bold text-slate-800 mb-3 leading-tight ${hideTime ? 'mt-1' : ''}`}>
        {lecture.subject}
      </h4>

      {/* Details Grid */}
      <div className="space-y-2 text-sm">
        {isValidText(lecture.instructor) && (
          <div className="flex items-center text-slate-600">
            <User className="w-4 h-4 mr-2 text-slate-400" />
            <span className="truncate">{lecture.instructor}</span>
          </div>
        )}
        
        {isValidText(lecture.location) && (
          <div className="flex items-center text-slate-600">
            <MapPin className="w-4 h-4 mr-2 text-slate-400" />
            <span>{lecture.location}</span>
          </div>
        )}

        {isValidText(lecture.group) && (
          <div className="flex items-center text-slate-600">
            <Users className="w-4 h-4 mr-2 text-slate-400" />
            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-semibold text-slate-700">
              Group {lecture.group}
            </span>
          </div>
        )}
      </div>
      
      {/* Decorative side bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        isTheory ? 'bg-amber-400' : 'bg-cyan-400'
      }`}></div>
    </div>
  );
};
