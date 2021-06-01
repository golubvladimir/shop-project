import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Мобильные телефоны' },
      { name: 'Ноутбуки' }
    ]
  })

  const manufacturers = await prisma.manufacturer.createMany({
    data: [
      { name: 'Apple' },
      { name: 'Samsung' }
    ]
  })

  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Iphone 12 mini',
        categoryId: 1,
        manufacturerId: 1,
        date: new Date().toISOString(),
        description: 'Описание товара',
        quantity: 2
      },
      {
        name: 'Iphone 12',
        categoryId: 1,
        manufacturerId: 1,
        date: new Date().toISOString(),
        description: 'Описание товара',
        quantity: 2
      },
      {
        name: 'Iphone 12 Pro',
        categoryId: 1,
        manufacturerId: 1,
        date: new Date().toISOString(),
        description: 'Описание товара',
        quantity: 2
      }
    ]
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })