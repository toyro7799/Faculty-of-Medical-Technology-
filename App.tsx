
import React, { useState, useMemo } from 'react';
import { SCHEDULE_DATA } from './constants';
import { Department, Lecture } from './types';
import { DepartmentCard } from './components/DepartmentCard';
import { DaySelector } from './components/DaySelector';
import { LectureCard } from './components/LectureCard';
import { ArrowLeft, Calendar, Search, Clock, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  const [selectedDeptCode, setSelectedDeptCode] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state
  const selectedDept = useMemo(
    () => SCHEDULE_DATA.find(d => d.code === selectedDeptCode),
    [selectedDeptCode]
  );

  const activeSchedule = useMemo(() => {
    if (!selectedDept || !selectedDay) return null;
    return selectedDept.schedule.find(s => s.dayName === selectedDay);
  }, [selectedDept, selectedDay]);

  // Group lectures by time
  const groupedLectures = useMemo(() => {
    if (!activeSchedule) return [];
    
    const groups: Record<string, Lecture[]> = {};
    activeSchedule.lectures.forEach(l => {
      const t = l.timeSlot;
      if (!groups[t]) groups[t] = [];
      groups[t].push(l);
    });

    return Object.entries(groups)
      .sort(([t1], [t2]) => t1.localeCompare(t2))
      .map(([time, lectures]) => ({ time, lectures }));
  }, [activeSchedule]);

  // Helper to determine frame color based on time
  const getTimeSlotStyle = (time: string) => {
    if (time.includes('08:30')) return 'bg-emerald-50 border-emerald-200 text-emerald-900';
    if (time.includes('10:30')) return 'bg-sky-50 border-sky-200 text-sky-900';
    if (time.includes('12:30')) return 'bg-indigo-50 border-indigo-200 text-indigo-900';
    if (time.includes('14:30')) return 'bg-orange-50 border-orange-200 text-orange-900';
    return 'bg-gray-50 border-gray-200 text-gray-900';
  };

  // Handlers
  const handleBack = () => {
    if (selectedDay) {
      setSelectedDay(null);
    } else {
      setSelectedDeptCode(null);
    }
  };

  const handleFullReset = () => {
    setSelectedDay(null);
    setSelectedDeptCode(null);
  };

  // Filtered Depts for search
  const filteredDepartments = useMemo(() => {
    if (!searchQuery) return SCHEDULE_DATA;
    return SCHEDULE_DATA.filter(d => 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* Branding Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 text-center sm:text-left">
           <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                   {/* Logo Image - Pointing to local file */}
                   <img 
                     src="logo.png" 
                     alt="Faculty Logo" 
                     className="w-full h-full object-contain"
                     onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Show fallback icon if image fails
                        e.currentTarget.parentElement?.classList.add('fallback-icon-visible');
                     }}
                   />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 fallback-icon text-blue-200">
                      <GraduationCap className="w-12 h-12" />
                   </div>
                   <style>{`.fallback-icon-visible .fallback-icon { opacity: 1; }`}</style>
              </div>
           </div>
           
           <div>
             <h1 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
               Faculty of Medical Technology
             </h1>
             <p className="text-blue-600 font-bold tracking-[0.2em] text-sm sm:text-base mt-1">
               DERNA
             </p>
           </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10 shadow-sm transition-all">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {(selectedDeptCode) && (
              <button 
                onClick={handleBack}
                className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </button>
            )}
            <h1 className="text-sm font-bold flex items-center gap-2 text-slate-500 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-slate-400" />
              Academic Schedule
            </h1>
          </div>
          {selectedDeptCode && (
             <button onClick={handleFullReset} className="text-xs font-semibold text-slate-500 hover:text-blue-600">
               Home
             </button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pt-6">
        
        {/* View 1: Department Selection */}
        {!selectedDeptCode && (
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Select Department</h2>
              <p className="text-slate-500 mb-4">Choose a department to view the weekly schedule.</p>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search departments..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDepartments.map((dept) => (
                <DepartmentCard 
                  key={dept.code} 
                  department={dept} 
                  onClick={() => {
                    setSelectedDeptCode(dept.code);
                    // Automatically select the first day if available to save a click
                    if(dept.schedule.length > 0) {
                      setSelectedDay(dept.schedule[0].dayName);
                    }
                  }} 
                />
              ))}
              {filteredDepartments.length === 0 && (
                <div className="col-span-full text-center py-12 text-slate-400">
                  No departments found matching "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        )}

        {/* View 2 & 3: Day Selection & Schedule */}
        {selectedDept && (
          <div className="animate-fade-in-up">
            {/* Dept Header */}
            <div className={`p-6 rounded-2xl mb-6 ${selectedDept.color.replace('bg-opacity-30', 'bg-opacity-20')} border border-opacity-20`}>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-white bg-opacity-80 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                  {selectedDept.code}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-1">{selectedDept.name}</h2>
              <p className="opacity-80 text-sm">Weekly Academic Plan</p>
            </div>

            {/* Day Selector */}
            <DaySelector 
              days={selectedDept.schedule} 
              selectedDay={selectedDay} 
              onSelect={setSelectedDay} 
            />

            {/* Schedule List */}
            {activeSchedule ? (
              <div className="space-y-6">
                 <div className="flex items-center justify-between mb-2 px-1">
                    <h3 className="text-xl font-bold text-slate-800">
                      {activeSchedule.dayName}
                    </h3>
                    <span className="text-xs font-medium bg-slate-200 text-slate-600 px-2 py-1 rounded-full">
                      {activeSchedule.lectures.length} Lectures
                    </span>
                 </div>
                
                {groupedLectures.map(({ time, lectures }) => (
                  <div 
                    key={time} 
                    className={`rounded-2xl border-2 p-5 ${getTimeSlotStyle(time)} shadow-sm`}
                  >
                    <div className="flex items-center gap-2 mb-4 border-b border-black/5 pb-2">
                       <Clock className="w-5 h-5 opacity-70" />
                       <h4 className="font-bold text-lg tracking-tight">{time}</h4>
                    </div>
                    
                    <div className="grid gap-4">
                      {lectures.map((lecture) => (
                        <LectureCard key={lecture.id} lecture={lecture} hideTime={true} />
                      ))}
                    </div>
                  </div>
                ))}
                
                {groupedLectures.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
                    <p className="text-slate-400">No lectures scheduled for {selectedDay}.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
                <p className="text-slate-400">Please select a day to view the schedule.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
