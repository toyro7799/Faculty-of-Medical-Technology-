
import { Department, ClassType } from './types';

// Helper to create lectures quickly
const createLecture = (
  time: string,
  subject: string,
  type: ClassType,
  instructor: string,
  location: string,
  group?: string
) => ({
  id: Math.random().toString(36).substr(2, 9),
  timeSlot: time,
  subject,
  type,
  instructor,
  location,
  group,
});

export const SCHEDULE_DATA: Department[] = [
  {
    code: 'BS',
    name: 'Basic Sciences',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'BIOSTATISTICS I', ClassType.TH, 'مصطفى سليمان', 'المسرح', 'A'),
          createLecture('08:30-10:30', 'BASIC PARASITOLOGY', ClassType.TH, 'مروة عبد الكريم', 'A4', 'LM/PH'),
          createLecture('08:30-10:30', 'GENERAL BIOLOGY', ClassType.PR, 'مريم فوزي سليمان', 'GF2, GF8', 'C1/C2'),
          createLecture('08:30-10:30', 'ANATOMY', ClassType.PR, 'TBA', 'GF6', 'C3/C4'),
          createLecture('10:30-12:30', 'GENERAL BIOLOGY', ClassType.PR, 'مريم فوزي سليمان', 'GF2, GF8', 'C3/C4'),
          createLecture('10:30-12:30', 'ANATOMY', ClassType.PR, 'TBA', 'GF6', 'C1/C2'),
          createLecture('10:30-12:30', 'GENERAL CHEMISTRY', ClassType.TH, 'نجاة نوري عبد الله العدلي', 'المسرح', 'A'),
          createLecture('12:30-14:30', 'COMPUTER', ClassType.TH, 'محمد محمود أبو بكر', 'المسرح', 'C'),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'GENERAL CHEMISTRY', ClassType.PR, 'مصطفى سليمان', 'GF16, GF19', 'B1/B2'),
          createLecture('08:30-10:30', 'PHYSIOLOGY', ClassType.PR, 'عائشة سالم', 'GF2, GF8', 'B3/B4'),
          createLecture('08:30-10:30', 'PHYSICS', ClassType.TH, 'رشا يوسف محمد', 'المسرح', 'C'),
          createLecture('10:30-12:30', 'GENERAL CHEMISTRY', ClassType.PR, 'نجاة نوري', 'GF16, GF19', 'B3/B4'),
          createLecture('10:30-12:30', 'PHYSIOLOGY', ClassType.PR, 'عائشة سالم', 'GF2, GF8', 'B1/B2'),
          createLecture('10:30-12:30', 'GENERAL BIOLOGY', ClassType.TH, 'مريم فوزي', 'المسرح', 'C'),
          createLecture('12:30-14:30', 'COMPUTER', ClassType.TH, 'TBA', 'المسرح', 'B'),
          createLecture('14:30-16:30', 'COMPUTER', ClassType.TH, 'محمد محمود أبو بكر', 'المسرح', 'A'),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
          createLecture('08:30-10:30', 'GENERAL CHEMISTRY', ClassType.PR, 'مصطفى سليمان', 'GF16, GF19', 'A1/A2'),
          createLecture('08:30-10:30', 'PHYSIOLOGY', ClassType.PR, 'عائشة سالم', 'GF2, GF8', 'A3/A4'),
          createLecture('10:30-12:30', 'GENERAL CHEMISTRY', ClassType.PR, 'نجاة نوري', 'GF16, GF19', 'A3/A4'),
          createLecture('10:30-12:30', 'PHYSIOLOGY', ClassType.PR, 'عائشة سالم', 'GF2, GF8', 'A1/A2'),
          createLecture('10:30-12:30', 'FUND. OF MICROBIOLOGY', ClassType.TH, 'سالمة عبد الله', 'A2', 'GEN/PH'),
          createLecture('12:30-14:30', 'GENERAL BIOLOGY', ClassType.TH, 'مريم فوزي', 'المسرح', 'D'),
          createLecture('14:30-16:30', 'ANATOMY', ClassType.TH, 'TBA', 'المسرح', 'D'),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('08:30-10:30', 'ANATOMY', ClassType.TH, 'TBA', 'A6', 'D1/D2'),
          createLecture('08:30-10:30', 'GENERAL BIOLOGY', ClassType.PR, 'فاطمة عبد القادر', 'GF2, GF8', 'D3/D4'),
          createLecture('08:30-10:30', 'GENERAL CHEMISTRY', ClassType.TH, 'نجاة نوري', 'المسرح', 'B'),
          createLecture('10:30-12:30', 'ANATOMY', ClassType.PR, 'عائشة سالم', 'A5', 'D3/D4'),
          createLecture('10:30-12:30', 'GENERAL BIOLOGY', ClassType.PR, 'فاطمة عبد القادر', 'GF2, GF8', 'D1/D2'),
          createLecture('12:30-14:30', 'COMPUTER', ClassType.TH, 'محمد محمود الزحاف', 'المسرح', 'D'),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
          createLecture('08:30-10:30', 'PHYSIOLOGY', ClassType.TH, 'عائشة سالم', 'المسرح', 'B'),
          createLecture('12:30-14:30', 'PHYSIOLOGY', ClassType.TH, 'عائشة سالم', 'المسرح', 'A'),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
          createLecture('10:30-12:30', 'ANATOMY', ClassType.TH, 'TBA', 'المسرح', 'C'),
          createLecture('12:30-14:30', 'PHYSICS', ClassType.TH, 'رشا يوسف', 'المسرح', 'C'),
        ]
      }
    ]
  },
  {
    code: 'GEN',
    name: 'Genetics',
    color: 'bg-green-100 text-green-800 border-green-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'BIOTECHNOLOGY', ClassType.TH, 'نجلاء عبد الله', 'A2', ''),
          createLecture('10:30-12:30', 'BIOTECHNOLOGY', ClassType.PR, 'نجلاء عبد الله', '', ''),
          createLecture('12:30-14:30', 'CELL BIOLOGY', ClassType.TH, 'مريم فوزي', 'A2', ''),
          createLecture('14:30-16:30', 'IMMUNOGENETICS', ClassType.TH, 'أمل عبد الله', 'A2', ''),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'PHARMACOGENETICS', ClassType.TH, 'سدينا عطية', '', ''),
          createLecture('08:30-10:30', 'POP. AND EVOL. GENETICS', ClassType.TH, 'أسامة البرعصي', 'A2', ''),
          createLecture('10:30-12:30', 'POP. AND EVOL. GENETICS', ClassType.TH, 'أسامة البرعصي', 'معمل الحاسوب', ''),
          createLecture('10:30-12:30', 'GENETIC ENGINEERING I', ClassType.TH, 'سدينا عطية سليمان', 'A2', ''),
          createLecture('12:30-14:30', 'FUND. OF GENETICS', ClassType.TH, 'أسامة البرعصي', 'معمل الحاسوب', ''),
          createLecture('12:30-14:30', 'GENETIC ENGINEERING I', ClassType.PR, 'سدينا عطية', '', ''),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
          createLecture('08:30-10:30', 'PHARMACOGENETICS', ClassType.TH, 'سدينا عطية', 'A2', ''),
          createLecture('08:30-10:30', 'ENV. BIOTECHNOLOGY', ClassType.TH, 'نجلاء عبد الله', '', ''),
          createLecture('10:30-12:30', 'BIOINFORMATICS', ClassType.PR, 'مروان النعاس', '', ''),
          createLecture('10:30-12:30', 'ENV. BIOTECHNOLOGY', ClassType.PR, 'نجلاء عبد الله', '', ''),
          createLecture('10:30-12:30', 'CELL BIOLOGY', ClassType.PR, 'مريم فوزي', '', ''),
          createLecture('10:30-12:30', 'FUND. OF MICROBIOLOGY', ClassType.TH, 'نسرين الجدامي', 'A3', 'GEN/PH'),
          createLecture('12:30-14:30', 'BIOINFORMATICS', ClassType.TH, 'مروان النعاس', 'A2', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('08:30-10:30', 'MOLECULAR GENETICS', ClassType.TH, 'نجلاء عبد الله', 'A2', ''),
          createLecture('12:30-14:30', 'TISSUE CULTURE', ClassType.TH, 'أمل عبد الله', 'A2', ''),
          createLecture('14:30-16:30', 'TISSUE CULTURE', ClassType.PR, 'أمل عبد الله', 'GF8', ''),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
          createLecture('08:30-10:30', 'MICROBIAL GENETICS', ClassType.TH, 'سدينا عطية', 'A2', ''),
          createLecture('10:30-12:30', 'MICROBIAL GENETICS', ClassType.PR, 'سدينا عطية', 'A4', ''),
          createLecture('12:30-14:30', 'MOLECULAR PATHOLOGY', ClassType.TH, 'مروان النعاس', '', ''),
          createLecture('14:30-16:30', 'MOLECULAR PATHOLOGY', ClassType.PR, 'مروان النعاس', '', ''),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
          createLecture('08:30-10:30', 'CLINICAL TRAINING I', ClassType.PR, 'TBA', '', ''),
          createLecture('10:30-12:30', 'CLINICAL TRAINING I', ClassType.PR, 'TBA', '', ''),
        ]
      }
    ]
  },
  {
    code: 'LM',
    name: 'Laboratory Medicine',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'CLINICAL BIOCHEMISTRY II', ClassType.TH, 'عزيزة موسى', 'A3', ''),
          createLecture('10:30-12:30', 'CLINICAL PARASITOLOGY I', ClassType.TH, 'مروة عبد الكريم', 'A7', ''),
          createLecture('10:30-12:30', 'CLINICAL BIOCHEMISTRY II', ClassType.PR, 'عزيزة موسى', 'GF4', 'B'),
          createLecture('10:30-12:30', 'CLINICAL MICROBIOLOGY', ClassType.PR, 'نورية محمد', 'GF1', 'A'),
          createLecture('12:30-14:30', 'CLINICAL PARASITOLOGY I', ClassType.PR, 'مروة عبد الكريم', 'GF2', ''),
          createLecture('12:30-14:30', 'CLINICAL MICROBIOLOGY', ClassType.PR, 'نورية محمد', 'GF1', 'B'),
          createLecture('12:30-14:30', 'CLINICAL BIOCHEMISTRY II', ClassType.PR, 'عزيزة موسى', 'GF4', 'A'),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'CLINICAL HEMATOLOGY II', ClassType.TH, 'محبوبة مرعي', 'GF7', ''),
          createLecture('08:30-10:30', 'CLINICAL HISTPATHOLOGY I', ClassType.TH, 'زيد صالح', 'A5', ''),
          createLecture('10:30-12:30', 'CLINICAL HEMATOLOGY II', ClassType.TH, 'أمال سليمان', 'GF7', 'A'),
          createLecture('10:30-12:30', 'CLINICAL IMMUNOLOGY II', ClassType.PR, 'أمل عبد الله', 'GF3', 'B'),
          createLecture('10:30-12:30', 'CLINICAL HISTPATHOLOGY I', ClassType.TH, 'زيد صالح', 'A4', ''),
          createLecture('12:30-14:30', 'CLINICAL HEMATOLOGY II', ClassType.TH, 'أمال سليمان', 'GF7', 'B'),
          createLecture('12:30-14:30', 'CLINICAL IMMUNOLOGY II', ClassType.PR, 'أمل عبد الله', 'GF3', 'A'),
          createLecture('12:30-14:30', 'ENDOCRINOLOGY', ClassType.TH, 'عائشة سالم', 'A3', ''),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
          createLecture('08:30-10:30', 'FUND. OF MICROBIOLOGY', ClassType.TH, 'سالمة عبد الله', 'A3', ''),
          createLecture('08:30-10:30', 'CLINICAL HEMATOLOGY I', ClassType.TH, 'محبوبة مرعي', 'A6', ''),
          createLecture('08:30-10:30', 'CLINICAL IMMUNOLOGY II', ClassType.TH, 'أمل عبد الله', 'A8', ''),
          createLecture('10:30-12:30', 'CLINICAL TRINING', ClassType.PR, 'TBA', 'GF3, GF4', ''),
          createLecture('10:30-12:30', 'CLINICAL IMMUNOLOGY II', ClassType.TH, 'أمل عبد الله', 'A6', ''),
          createLecture('12:30-14:30', 'CLINICAL TRINING', ClassType.PR, 'TBA', 'GF3, GF4', ''),
          createLecture('12:30-14:30', 'BLOOD BANK', ClassType.TH, 'حميدة حسين', 'A4', ''),
        ]
      },
       {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('08:30-10:30', 'CLINICAL HEMATOLOGY I', ClassType.TH, 'محبوبة مرعي', 'A3', ''),
          createLecture('08:30-10:30', 'SYSTEMIC HISTOLOGY', ClassType.TH, 'حميدة حسين', 'GF3', ''),
          createLecture('10:30-12:30', 'CLINICAL HEMATOLOGY I', ClassType.PR, 'محبوبة مرعي', 'GF7', 'A'),
          createLecture('10:30-12:30', 'CLINICAL HISTPATHOLOGY I+II', ClassType.PR, 'زيد صالح', 'GF1', 'B'),
          createLecture('10:30-12:30', 'SYSTEMIC HISTOLOGY', ClassType.PR, 'حميدة حسين', 'GF3', ''),
          createLecture('12:30-14:30', 'CLINICAL HEMATOLOGY I', ClassType.PR, 'محبوبة مرعي', 'GF7', 'B'),
          createLecture('12:30-14:30', 'CLINICAL HISTPATHOLOGY I+II', ClassType.PR, 'زيد صالح', 'GF1', 'A'),
          createLecture('12:30-14:30', 'SYSTEMIC HISTOLOGY', ClassType.PR, 'حميدة حسين', 'GF6', ''),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
           createLecture('08:30-10:30', 'BASIC PARASITOLOGY', ClassType.PR, 'مروة عبد الكريم', 'A5', ''),
           createLecture('10:30-12:30', 'BASIC PARASITOLOGY', ClassType.PR, 'مروة عبد الكريم', 'A5', ''),
           createLecture('10:30-12:30', 'CLINICAL MICROBIOLOGY', ClassType.PR, 'نورية محمد', 'GF1', 'A'),
           createLecture('12:30-14:30', 'CLINICAL MICROBIOLOGY', ClassType.PR, 'نورية محمد', 'GF1', 'B'),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
           createLecture('08:30-10:30', 'FUND. OF MICROBIOLOGY', ClassType.TH, 'سالمة عبد الله', 'A2', 'B'),
           createLecture('08:30-10:30', 'CLINICAL HEMATOLOGY II', ClassType.TH, 'أمال سليمان', 'A1', ''),
           createLecture('10:30-12:30', 'BLOOD BANK', ClassType.PR, 'حميدة حسين', 'GF2', 'A'),
           createLecture('10:30-12:30', 'CLINICAL HEMATOLOGY II', ClassType.TH, 'أمال سليمان', 'A1', 'B'),
           createLecture('12:30-14:30', 'BLOOD BANK', ClassType.PR, 'حميدة حسين', 'GF2', 'B'),
           createLecture('12:30-14:30', 'CLINICAL HEMATOLOGY II', ClassType.TH, 'أمال سليمان', 'A1', 'A'),
        ]
      }
    ]
  },
  {
    code: 'RAD',
    name: 'Radiology',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'ELECTRICITY & ELECTRONICS I', ClassType.TH, 'رشا يوسف', 'A6', ''),
          createLecture('10:30-12:30', 'ELECTRICITY & ELECTRONICS I', ClassType.PR, 'رشا يوسف', '', ''),
          createLecture('10:30-12:30', 'INSTRUMENTS OF X RAY MACHINE', ClassType.TH, 'نرجس نصر', 'A5', ''),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'PRINCIPLES OF DIAGNOSTIC RADIOLOGY', ClassType.TH, 'زينب فرج', '', ''),
          createLecture('08:30-10:30', 'SPECIAL INVESTIGATIONS', ClassType.PR, 'الكاسح العوامي', 'A6', ''),
          createLecture('10:30-12:30', 'PRINCIPLES OF DIAGNOSTIC RADIOLOGY', ClassType.TH, 'زينب فرج', '', ''),
          createLecture('10:30-12:30', 'SPECIAL INVESTIGATIONS', ClassType.PR, 'الكاسح العوامي', 'A6', ''),
          createLecture('12:30-14:30', 'PRINCIPLES OF DIAGNOSTIC RADIOLOGY', ClassType.TH, 'زينب فرج', '', ''),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
           createLecture('08:30-10:30', 'RADIOGRAPHIC POSITIONING I', ClassType.TH, 'عدنان عبد الرازق', 'A5', ''),
           createLecture('08:30-10:30', 'NUCLEAR MEDICINE', ClassType.TH, 'زينب فرج', 'A7', ''),
           createLecture('10:30-12:30', 'RADIOGRAPHIC POSITIONING I', ClassType.PR, 'عدنان عبد الرازق', 'A5', ''),
           createLecture('10:30-12:30', 'NUCLEAR MEDICINE', ClassType.TH, 'زينب فرج', 'A7', ''),
           createLecture('12:30-14:30', 'RADIOGRAPHIC POSITIONING I', ClassType.PR, 'عدنان عبد الرازق', '', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('10:30-12:30', 'PATIENT CARE IN RADIOGRAPHY', ClassType.PR, 'عدنان عبد الرازق', '', ''),
          createLecture('12:30-14:30', 'PATIENT CARE IN RADIOGRAPHY', ClassType.PR, 'عدنان عبد الرازق', 'A8', ''),
          createLecture('14:30-16:30', 'PATIENT CARE IN RADIOGRAPHY', ClassType.PR, 'عدنان عبد الرازق', '', ''),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
          createLecture('08:30-10:30', 'MATHEMATICS', ClassType.TH, 'نرجس نصر', 'A6', ''),
          createLecture('10:30-12:30', 'RADIOBIOLOGY', ClassType.TH, 'نرجس نصر', 'A3', ''),
          createLecture('10:30-12:30', 'DENTAL X RAY', ClassType.PR, 'عدنان عبد الرازق', '', ''),
          createLecture('12:30-14:30', 'RADIOBIOLOGY', ClassType.TH, 'نرجس نصر', 'A5', ''),
          createLecture('12:30-14:30', 'DENTAL X RAY', ClassType.PR, 'عدنان عبد الرازق', '', ''),
          createLecture('14:30-16:30', 'DENTAL X RAY', ClassType.PR, 'عدنان عبد الرازق', '', ''),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
           createLecture('08:30-10:30', 'NUCLEAR MEDICINE', ClassType.TH, 'زينب فرج', 'A6', ''),
           createLecture('08:30-10:30', 'TRAINING', ClassType.PR, 'TBA', 'RADIOLOGY', ''),
           createLecture('10:30-12:30', 'RADIOGRAPHIC POSITIONING I', ClassType.TH, 'عدنان عبد الرازق', '', ''),
           createLecture('10:30-12:30', 'TRAINING', ClassType.PR, 'TBA', 'RADIOLOGY', ''),
           createLecture('12:30-14:30', 'TRAINING', ClassType.PR, 'TBA', 'RADIOLOGY', ''),
        ]
      }
    ]
  },
  {
    code: 'DENT',
    name: 'Dentistry',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'HEAD AND NECK DENTAL ANATOMY', ClassType.TH, 'يحيى عاشور', 'A5', ''),
          createLecture('08:30-10:30', 'REMOVABLE PARTIAL PROSTHODONTICS - II', ClassType.TH, 'هيثم عبد الكريم', 'A8', ''),
          createLecture('10:30-12:30', 'HEAD AND NECK DENTAL ANATOMY', ClassType.PR, 'يحيى عاشور', '', ''),
          createLecture('10:30-12:30', 'REMOVABLE PARTIAL PROSTHODONTICS - II', ClassType.PR, 'هيثم عبد الكريم', '', ''),
          createLecture('12:30-14:30', 'MAXILLOFACIAL PROSTHODONTICS', ClassType.PR, 'هيثم عبد الكريم', '', ''),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'DENTAL MORPHOLOGY I', ClassType.PR, 'وهيب عبد الكريم', 'A7', ''),
          createLecture('10:30-12:30', 'DENTAL MORPHOLOGY I', ClassType.TH, 'وهيب عبد الكريم', '', ''),
          createLecture('08:30-10:30', 'REMOVABLE COMPLETE PROSTHODONTICS - II', ClassType.TH, 'خالد عمر الهواري', '', ''),
          createLecture('10:30-12:30', 'REMOVABLE COMPLETE PROSTHODONTICS - II', ClassType.PR, 'خالد عمر الهواري', '', ''),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
          createLecture('08:30-10:30', 'FIXED PROSTHODONTICS I CROWN & BRIDGE I', ClassType.TH, 'يحيى عاشور', '', ''),
          createLecture('10:30-12:30', 'FIXED PROSTHODONTICS I CROWN & BRIDGE I', ClassType.PR, 'يحيى عاشور', '', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('08:30-10:30', 'DENTAL MATERIALS', ClassType.TH, 'خالد عمر الهواري', '', ''),
          createLecture('08:30-10:30', 'FIXED PROSTHODONTICS II CROWN & BRIDGE II', ClassType.TH, 'أشرف إبراهيم', 'A7', ''),
          createLecture('08:30-10:30', 'REMOVABLE PARTIAL PROSTHODONTICS - I', ClassType.PR, 'هيثم عبد الكريم', '', ''),
          createLecture('10:30-12:30', 'DENTAL MATERIALS', ClassType.PR, 'خالد عمر الهواري', '', ''),
          createLecture('10:30-12:30', 'FIXED PROSTHODONTICS II CROWN & BRIDGE II', ClassType.PR, 'أشرف إبراهيم', '', ''),
          createLecture('10:30-12:30', 'REMOVABLE PARTIAL PROSTHODONTICS - I', ClassType.TH, 'هيثم عبد الكريم', '', ''),
          createLecture('12:30-14:30', 'MAXILLOFACIAL PROSTHODONTICS', ClassType.TH, 'هيثم عبد الكريم', '', ''),
        ]
      },
       {
        dayName: 'الأربعاء',
        lectures: [
          createLecture('08:30-10:30', 'REMOVABLE COMPLETE PROSTHODONTICS - I', ClassType.TH, 'أشرف سعد', 'A4', ''),
          createLecture('10:30-12:30', 'REMOVABLE COMPLETE PROSTHODONTICS - I', ClassType.PR, 'أشرف سعد', '', ''),
          createLecture('12:30-14:30', 'REMOVABLE COMPLETE PROSTHODONTICS - I', ClassType.PR, 'أشرف سعد', '', ''),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
          createLecture('10:30-12:30', 'ORAL MICROBIOLOGY', ClassType.TH, 'عصام مصطفى', 'A7', ''),
          createLecture('10:30-12:30', 'ORGANIC CHEMISTRY', ClassType.TH, 'محمد الفخاخري', 'معمل الحاسوب', ''),
          createLecture('12:30-14:30', 'ORAL MICROBIOLOGY', ClassType.PR, 'عصام مصطفى', 'GF1', ''),
          createLecture('12:30-14:30', 'ORGANIC CHEMISTRY', ClassType.PR, 'محمد الفخاخري', 'GF16, GF19', ''),
        ]
      }
    ]
  },
  {
    code: 'DRUG',
    name: 'Pharmacy',
    color: 'bg-teal-100 text-teal-800 border-teal-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'PHARMACOGNOSY', ClassType.PR, 'أريج عطية', 'GF5', ''),
          createLecture('10:30-12:30', 'QUALITY CONTROL', ClassType.PR, 'محمود سعد', 'GF5', ''),
          createLecture('12:30-14:30', 'PHARMACOGNOSY', ClassType.TH, 'أريج عطية', 'GF6', ''),
          createLecture('12:30-14:30', 'QUALITY CONTROL', ClassType.TH, 'محمود سعد', 'A7', ''),
          createLecture('14:30-16:30', 'FUND. OF MICROBIOLOGY', ClassType.PR, 'أكرم مفتاح', 'GF1', ''),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'PHARMACOGNOSY', ClassType.PR, 'فدوى عبد القادر', 'GF5', ''),
          createLecture('10:30-12:30', 'PHARMACOGNOSY', ClassType.TH, 'فدوى عبد القادر', 'GF5', ''),
          createLecture('12:30-14:30', 'PHARMACOLOGY I', ClassType.TH, 'محمد الفخاخري', 'A6', ''),
          createLecture('14:30-16:30', 'PHARMACOLOGY I', ClassType.PR, 'محمد الفخاخري', 'GF5', ''),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
          createLecture('08:30-10:30', 'PHARMACEUTICAL ENGINEERING', ClassType.PR, 'مجدي مرعي', 'GF5', ''),
          createLecture('10:30-12:30', 'PHARMACEUTICAL ENGINEERING', ClassType.TH, 'مجدي مرعي', 'A8', ''),
          createLecture('12:30-14:30', 'ANALYTICAL CHEMISTRY', ClassType.PR, 'نجاة نوري', '', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('10:30-12:30', 'PHARMACEUTICS', ClassType.PR, 'محمود سعيد محمد', 'GF5', ''),
          createLecture('10:30-12:30', 'PHYSICAL PHARMACY', ClassType.TH, 'أريج عطية', 'A6', ''),
          createLecture('12:30-14:30', 'PHARMACEUTICS', ClassType.TH, 'محمود سعيد محمد', 'معمل الحاسوب', ''),
          createLecture('12:30-14:30', 'PHYSICAL PHARMACY', ClassType.PR, 'أريج عطية', 'GF5', ''),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
          createLecture('10:30-12:30', 'PHARMACOLOGY II', ClassType.TH, 'محمد الفخاخري', 'A6', ''),
          createLecture('12:30-14:30', 'PHARMACOLOGY II', ClassType.PR, 'محمد الفخاخري', 'معمل الحاسوب', ''),
        ]
      },
       {
        dayName: 'الخميس',
        lectures: [
          createLecture('08:30-10:30', 'ORGANIC CHEMISTRY I', ClassType.TH, 'عبير محمد فرج', 'A5', 'DRUG/DENTAL'),
          createLecture('10:30-12:30', 'ORGANIC CHEMISTRY I', ClassType.PR, 'عبير محمد فرج', 'GF16, GF19', ''),
        ]
      }
    ]
  },
  {
    code: 'PHG',
    name: 'Public Health',
    color: 'bg-red-100 text-red-800 border-red-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
          createLecture('08:30-10:30', 'EPIDEMIOLOGY OF C.D', ClassType.TH, 'TBA', 'A7', ''),
          createLecture('10:30-12:30', 'MATERNAL AND CHILD CARE', ClassType.TH, 'محمد فرج محمود', 'A2', ''),
          createLecture('12:30-14:30', 'MATERNAL AND CHILD CARE', ClassType.PR, 'محمد فرج محمود', 'A1', ''),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'FOOD HYGIENE AND SAFETY', ClassType.TH, 'فريحة حمد يونس', 'A4', 'PHG/PHN'),
          createLecture('10:30-12:30', 'HEALTH EDUCATION', ClassType.TH, 'حافظ إدريس', 'A5', 'PHG/PHN'),
          createLecture('12:30-14:30', 'CONCEPT OF HEALTH AND DISEASE', ClassType.TH, 'مراد صالح', 'A5', ''),
          createLecture('12:30-14:30', 'HEALTH EDUCATION', ClassType.PR, 'حافظ إدريس', 'PHG/PHN', ''),
        ]
      },
      {
        dayName: 'الاثنين',
        lectures: [
          createLecture('08:30-10:30', 'GENERAL EPIDEMIOLOGY', ClassType.TH, 'رجاء الناجي', 'PHG/PHN', ''),
          createLecture('10:30-12:30', 'ENVIRONMENTAL HEALTH', ClassType.TH, 'مراد صالح', 'A4', ''),
          createLecture('12:30-14:30', 'ENVIRONMENTAL HEALTH', ClassType.PR, 'مراد صالح', 'A3', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('08:30-10:30', 'ENVIRONMENTAL MICROBIOLOGY', ClassType.TH, 'عصام مصطفى', 'Lab', ''),
          createLecture('10:30-12:30', 'ENVIRONMENTAL MICROBIOLOGY', ClassType.PR, 'عصام مصطفى', 'Lab', ''),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
          createLecture('08:30-10:30', 'FUND. OF MICROBIOLOGY', ClassType.TH, 'سالمة عبد الله', 'GF1', ''),
          createLecture('08:30-10:30', 'MEDICAL ENTOMOLOGY', ClassType.TH, 'فاطمة عبد القادر', 'A7', ''),
          createLecture('10:30-12:30', 'MEDICAL ENTOMOLOGY', ClassType.PR, 'فاطمة عبد القادر', 'GF3', ''),
          createLecture('10:30-12:30', 'PRIMARY HEALTH CARE', ClassType.PR, 'زياد محمد', 'A2', 'PHG/PHN'),
          createLecture('10:30-12:30', 'PUBLIC HEALTH TRAINING', ClassType.PR, 'سارية مفتاح', '', ''),
          createLecture('08:30-10:30', 'PUBLIC HEALTH TRAINING', ClassType.PR, 'سارية مفتاح', 'Lab', ''),
          createLecture('12:30-14:30', 'PRIMARY HEALTH CARE', ClassType.PR, 'زياد محمد', 'A2', 'PHG/PHN'),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
          createLecture('10:30-12:30', 'BASIC PARASITOLOGY', ClassType.PR, 'مروة عبد الكريم', 'GF3', ''),
        ]
      }
    ]
  },
  {
    code: 'PHNUT',
    name: 'Nutrition',
    color: 'bg-pink-100 text-pink-800 border-pink-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
           createLecture('10:30-12:30', 'BASIC NUTRITION', ClassType.TH, 'حافظ إدريس', 'A4', ''),
        ]
      },
      {
        dayName: 'الأحد',
        lectures: [
           createLecture('10:30-12:30', 'NUTRITION DURING LIFE CYCLE', ClassType.TH, 'فريحة حمد يونس', 'A7', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('08:30-10:30', 'FOOD MICROBIOLOGY', ClassType.PR, 'فريحة حمد يونس', 'Lab', ''),
          createLecture('08:30-10:30', 'FOOD AND NUTRITION SECURITY', ClassType.TH, 'سارية مفتاح', 'A4', ''),
          createLecture('10:30-12:30', 'FOOD MICROBIOLOGY', ClassType.TH, 'فريحة حمد يونس', 'Lab', ''),
        ]
      }
    ]
  },
  {
    code: 'MC.CCA',
    name: 'Clinical Care',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    schedule: [
      {
        dayName: 'الأحد',
        lectures: [
          createLecture('08:30-10:30', 'MEDICINE', ClassType.TH, 'فوزية عبد النبي', 'A8', ''),
          createLecture('10:30-12:30', 'PHARMACOLOGY', ClassType.TH, 'سليم مفتاح', 'A8', ''),
        ]
      },
      {
        dayName: 'الثلاثاء',
        lectures: [
          createLecture('10:30-12:30', 'BASICS OF HIGH NURSING I', ClassType.TH, 'سليم مفتاح', 'A8', ''),
        ]
      },
      {
         dayName: 'الأربعاء',
         lectures: [
           createLecture('08:30-10:30', 'MEDICINE', ClassType.PR, 'فوزية عبد النبي', 'A8', 'A'),
           createLecture('10:30-12:30', 'MEDICINE', ClassType.PR, 'فوزية عبد النبي', 'A8', 'B'),
         ]
      }
    ]
  },
  {
    code: 'GR',
    name: 'General / Group',
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    schedule: [
      {
        dayName: 'السبت',
        lectures: [
           createLecture('14:30-16:30', 'GENERAL PATHOLOGY', ClassType.TH, 'زيد صالح', 'المسرح', 'ALL'),
        ]
      },
      {
        dayName: 'الأربعاء',
        lectures: [
           createLecture('14:30-16:30', 'BASIC IMMUNOLOGY', ClassType.TH, 'زكية شعيب', 'المسرح', 'ALL'),
        ]
      },
      {
        dayName: 'الخميس',
        lectures: [
           createLecture('08:30-10:30', 'BASIC PARASITOLOGY', ClassType.TH, 'مروة عبد الكريم', 'المسرح', 'ALL'),
        ]
      }
    ]
  }
];
