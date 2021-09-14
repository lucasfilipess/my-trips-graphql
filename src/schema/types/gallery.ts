import { objectType } from 'nexus'
import { Context } from '../../context'

export const Gallery = objectType({
  name: 'Gallery',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('url')
    t.nullable.field('place', {
      type: 'Place',
      resolve: (parent, _, { prisma }: Context) => {
        return prisma.gallery.findUnique({
          where: { id: parent.id || undefined }
        }).place()
      }
    })
  }
})
