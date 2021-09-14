import {
  intArg,
  objectType,
  stringArg
} from 'nexus'
import { Context } from '../../context'

export const Query = objectType({
  name: 'Query',
  definition (t) {
    t.nullable.list.nonNull.field('page', {
      type: 'Page',
      args: {
        first: intArg(),
        slug: stringArg()
      },
      resolve: (_parent, args, { prisma }: Context) => {
        const first = args.first || undefined
        const slug = args.slug || undefined
        return prisma.page.findMany({
          where: {
            slug
          },
          take: first
        })
      }
    })

    t.nullable.list.nullable.field('place', {
      type: 'Place',
      args: {
        first: intArg(),
        slug: stringArg()
      },
      resolve: (_parent, args, { prisma }: Context) => {
        const first = args.first || undefined
        const slug = args.slug || undefined
        return prisma.place.findMany({
          where: {
            slug
          },
          take: first
        })
      }
    })
  }
})
