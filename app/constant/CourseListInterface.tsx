export type CourseList = {
  courseTitle: string;
  description: string;
  category: string;
  banner_image: string;
  chapters: Chapter[];
  flashcards: Flashcard[];
  qa: QA[];
  quiz: Quiz[];
  chapterComplete?: number[];
};

export type Chapter = {
  chapterName: string;
  content: Content[];
};

export type Content = {
  topic: string;
  explain: string;
  example: string;
  code: string;
};

export type Flashcard = {
  front: string;
  back: string;
};

export type QA = {
  question: string;
  answer: string;
};

export type Quiz = {
  question: string;
  options: string[];
  correctAns: string;
};
