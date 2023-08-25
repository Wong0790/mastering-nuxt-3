/*
  Warnings:

  - You are about to drop the column `test` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `text` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "test",
ADD COLUMN     "text" TEXT NOT NULL;
