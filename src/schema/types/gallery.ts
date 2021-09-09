import { inputObjectType, objectType } from 'nexus'
import { Context } from '../../context'

export const Gallery = objectType({
  name: 'Gallery',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('url')
    t.field('place', {
      type: 'Place',
      resolve: (parent, _, context:Context) => {
        return context.prisma.gallery.findUnique({
          where: { id: parent.id || undefined }
        }).place()
      }
    })
  }
})

export const GalleryCreateInput = inputObjectType({
  name: 'GalleryCreateInput',
  definition (t) {
    t.nonNull.string('url')
  }
})

export const GalleryUpdateInput = inputObjectType({
  name: 'GalleryUpdateInput',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.string('url')
  }
})
