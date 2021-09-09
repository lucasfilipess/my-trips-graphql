import { inputObjectType, objectType } from 'nexus'
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
    t.string('description')
    t.nonNull.int('locationId')
    t.nonNull.int('galleryId')
    t.nonNull.field('location', {
      type: 'Location',
      resolve (parent, _, context: Context) {
        return context.prisma.place
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .location()
      }
    })
    t.nonNull.list.nonNull.field('gallery', {
      type: 'Gallery',
      resolve: (parent, _, context: Context) => {
        return context.prisma.place
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .gallery()
      }
    })
  }
})

export const PlaceCreateInput = inputObjectType({
  name: 'PlaceCreateInput',
  definition (t) {
    t.nonNull.string('slug')
    t.nonNull.string('name')
    t.nonNull.boolean('visited')
    t.string('description')
    t.nonNull.field('location', { type: 'LocationCreateInput' })
    t.nonNull.list.nonNull.field('gallery', { type: 'GalleryCreateInput' })
  }
})

export const PlaceUpdateInput = inputObjectType({
  name: 'PlaceUpdateInput',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.string('slug')
    t.nonNull.string('name')
    t.nonNull.boolean('visited')
    t.string('description')
    t.nonNull.field('location', { type: 'LocationUpdateInput' })
    t.nonNull.list.nonNull.field('gallery', { type: 'GalleryUpdateInput' })
  }
})
