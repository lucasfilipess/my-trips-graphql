import { objectType } from 'nexus'
import { Context } from '../../context'

export const Location = objectType({
  name: 'Location',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.float('latitude')
    t.nonNull.float('longitude')
    t.nullable.field('place', {
      type: 'Place',
      resolve: (parent, _, { prisma }: Context) => {
        return prisma.location.findUnique({
          where: { id: parent.id || undefined }
        }).place()
      }
    })
  }
})
