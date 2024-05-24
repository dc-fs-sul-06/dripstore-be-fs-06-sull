/*
  Warnings:

  - You are about to drop the `_CollectionToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CollectionToProduct" DROP CONSTRAINT "_CollectionToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CollectionToProduct" DROP CONSTRAINT "_CollectionToProduct_B_fkey";

-- DropTable
DROP TABLE "_CollectionToProduct";

-- CreateTable
CREATE TABLE "_ProductCollection" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductCollection_AB_unique" ON "_ProductCollection"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductCollection_B_index" ON "_ProductCollection"("B");

-- AddForeignKey
ALTER TABLE "_ProductCollection" ADD CONSTRAINT "_ProductCollection_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductCollection" ADD CONSTRAINT "_ProductCollection_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
