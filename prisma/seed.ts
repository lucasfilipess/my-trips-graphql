import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const pageData: Prisma.PageCreateInput[] = [
  {
    heading: 'About',
    slug: 'about',
    body: '<p><a title="https://lecode.dev/" href="https://lecode.dev/"></a>Hi guys, this is my site where I put the places I&#39;ve been, and some that I still want to go to, some photos and things I liked about these places, I hope you like it!</p><p>If you like, you can find my social media at: <a target=\'_blank\' title="https://lecode.dev/" href="https://lecode.dev/">LeCode</a></p>'
  }
]

const placeData: Prisma.PlaceCreateInput[] = [
  {
    slug: 'rio-de-janeiro-rio-de-janeiro',
    name: 'Rio de Janeiro, Rio de Janeiro',
    visited: true,
    location: {
      create: {
        latitude: -22.9068467,
        longitude: -43.1728965
      }
    },
    description: '<p>Rio de Janeiro is a large Brazilian city by the sea, famous for the beaches of Copacabana and Ipanema, the 38-meter tall statue of Christ the Redeemer atop Corcovado, and the Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its large favelas. The exciting Carnival, with floats, extravagant costumes, and samba dancers, is considered the biggest in the world.</p>',
    gallery: {
      create: [
        {
          url: 'https://media.graphcms.com/mWSIH01RSQuYGTQytKsO'
        },
        {
          url: 'https://media.graphcms.com/QVLt3wYQT8SvbQBz91BG'
        },
        {
          url: 'https://media.graphcms.com/C6nSnYx3SdynlhHHoVKc'
        },
        {
          url: 'https://media.graphcms.com/iylqFwVRueYPKaIhX0fg'
        },
        {
          url: 'https://media.graphcms.com/0S02JCI6TxOFqTaAnHY1'
        }
      ]
    }
  },
  {
    slug: 'angra-dos-reis-rio-de-janeiro',
    name: 'Angra dos Reis, Rio de Janeiro',
    visited: true,
    location: {
      create: {
        latitude: -23.006885,
        longitude: -44.3185105
      }
    },
    description: '<p>Angra dos Reis is a Brazilian municipality in the southwestern state of Rio de Janeiro. It comprises 365 islands and a small harbor surrounded by a steep, tree-lined coastline. The region is known for its countless beaches and the biodiversity of Ilha Grande, the largest island. Vila do Abraão is the main village on the island and has restaurants, bars, and the Church of São Sebastião, in the center. A trail leads to the ruins of the Cândido Mendes prison.</p>',
    gallery: {
      create: [
        {
          url: 'https://media.graphcms.com/4MoXTnZPQUyi5vQra8Yt'
        },
        {
          url: 'https://media.graphcms.com/7JKJOXsmQ66l9CFMSEM2'
        },
        {
          url: 'https://media.graphcms.com/446r47Y7TTmv9QouUE5Q'
        },
        {
          url: 'https://media.graphcms.com/Hdh9ac9DSXHgdePVJ8OO'
        },
        {
          url: 'https://media.graphcms.com/vsIhIjqMSKSrT6YNLXel'
        }
      ]
    }
  },
  {
    slug: 'gramado-rio-grande-do-sul',
    name: 'Gramado, Rio Grande do Sul',
    visited: false,
    location: {
      create: {
        latitude: -29.3745686,
        longitude: -50.876435
      }
    },
    description: '<p>Gramado is a mountain resort town located in the southernmost state of Brazil, Rio Grande do Sul. Influenced by 19th century German settlers, the town has a Bavarian feel with alpine chalets, chocolatier and craft shops. Gramado is also known for its Christmas lights displays and hydrangeas in spring bloom. Lago Negro offers boats and forest hikes, while the Serra Gaúcha mountains have hiking and mountaineering trails.</p>',
    gallery: {
      create: [
        {
          url: 'https://media.graphcms.com/1JReqbhaTS6E8wNMwf4W'
        },
        {
          url: 'https://media.graphcms.com/BHGf9fXtRvWiVxXA8I3w'
        },
        {
          url: 'https://media.graphcms.com/SQLTqQejS12kwYpLZt8T'
        },
        {
          url: 'https://media.graphcms.com/4aKSktO1ShCWZCfu18sx'
        },
        {
          url: 'https://media.graphcms.com/pi1NvhEPSViqhXKP2Uz4'
        }
      ]
    }
  }
]

async function main () {
  console.log('Start seeding ...')

  for (const page of pageData) {
    const response = await prisma.page.create({
      data: page
    })
    console.log(`Created page with id: ${response.id}`)
  }

  for (const place of placeData) {
    const response = await prisma.place.create({
      data: place
    })
    console.log(`Created place with id: ${response.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
