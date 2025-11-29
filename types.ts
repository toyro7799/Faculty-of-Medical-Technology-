export enum ClassType {
  TH = 'TH', // Theory - Nazari
  PR = 'PR', // Practical - Amali
}

export interface Lecture {
  id: string;
  timeSlot: string;
  subject: string;
  type: ClassType;
  instructor: string;
  location: string;
  group?: string;
  notes?: string;
}

export interface DaySchedule {
  dayName: string; // e.g., "السبت" (Saturday)
  lectures: Lecture[];
}

export interface Department {
  code: string; // e.g., "BS"
  name: string; // e.g., "Basic Sciences"
  arabicName?: string;
  color: string;
  schedule: DaySchedule[];
}

export type ScheduleData = Department[];