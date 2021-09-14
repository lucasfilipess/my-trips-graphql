import { objectType } from 'nexus'
import { Context } from '../../context'

export const Place = objectType({
  name: 'Place',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('slug')
    t.nonNull.string('name')
    t.nonNull.boolean('visited')
    t.nullable.string('description')
    t.nullable.field('location', {
      type: 'Location',
      resolve (parent, _, { prisma }: Context) {
        return prisma.place.findUnique({
          where: { id: parent.id || undefined }
        }).location()
      }
    })
    t.nullable.list.nullable.field('gallery', {
      type: 'Gallery',
      resolve: (parent, _, { prisma }: Context) => {
        return prisma.place.findUnique({
          where: { id: parent.id || undefined }
        }).gallery()
      }
    })
  }
})
