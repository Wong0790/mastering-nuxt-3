import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const lessonSelect = Prisma.validator<Prisma.LessonDefaultArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
  },
});

export type LessonOutline = Prisma.LessonGetPayload<typeof lessonSelect>;

const chapterSelect = Prisma.validator<Prisma.ChapterDefaultArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
    lessons: lessonSelect,
  },
});

export type ChapterOutline = Prisma.ChapterGetPayload<typeof chapterSelect>;

const courseSelect = Prisma.validator<Prisma.CourseDefaultArgs>()({
  select: {
    title: true,
    chapters: chapterSelect,
  },
});

export type CourseOutline = Prisma.CourseGetPayload<typeof courseSelect>;

export default defineEventHandler(() => {
  return prisma.course.findFirst(courseSelect);
});
