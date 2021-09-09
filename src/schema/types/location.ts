import { inputObjectType, objectType } from 'nexus'
import { Context } from '../../context'

export const Location = objectType({
  name: 'Location',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.float('latitude')
    t.nonNull.float('longitude')
    t.field('place', {
      type: 'Place',
      resolve: (parent, _, context:Context) => {
        return context.prisma.location
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .place()
      }
    })
  }
})

export const LocationCreateInput = inputObjectType({
  name: 'LocationCreateInput',
  definition (t) {
    t.nonNull.float('latitude')
    t.nonNull.float('longitude')
  }
})

export const LocationUpdateInput = inputObjectType({
  name: 'LocationUpdateInput',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.float('latitude')
    t.nonNull.float('longitude')
  }
})
