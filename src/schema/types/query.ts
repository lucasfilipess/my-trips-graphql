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
      resolve: (_parent, args, context: Context) => {
        const first = args.first ?? undefined
        const slug = args.slug ?? undefined
        return context.prisma.page.findMany({
          where: {
            slug
          },
          take: first
        })
      }
    })

    t.nullable.list.nonNull.field('place', {
      type: 'Place',
      args: {
        first: intArg(),
        slug: stringArg()
      },
      resolve: (_parent, args, context: Context) => {
        const first = args.first ?? undefined
        const slug = args.slug ?? undefined
        return context.prisma.place.findMany({
          where: {
            slug
          },
          take: first
        })
      }
    })
  }
})
