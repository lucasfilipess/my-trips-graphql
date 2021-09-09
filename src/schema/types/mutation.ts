import {
  nonNull,
  arg,
  objectType
} from 'nexus'

export const Mutation = objectType({
  name: 'Mutation',
  definition (t) {
    t.field('createPage', {
      type: 'Page',
      args: {
        data: nonNull(
          arg({
            type: 'PageCreateInput'
          })
        )
      },
      resolve: (_, args, context) => {
        const { data } = args
        return context.prisma.page.create({
          data
        })
      }
    })

    t.field('createPlace', {
      type: 'Place',
      args: {
        data: nonNull(
          arg({
            type: 'PlaceCreateInput'
          })
        )
      },
      resolve: (_, args, context) => {
        const { data } = args
        return context.prisma.place.create({
          data: {
            ...data,
            location: {
              create: data.location
            },
            gallery: {
              create: data.gallery
            }
          }
        })
      }
    })

    t.field('updatePage', {
      type: 'Page',
      args: {
        data: nonNull(
          arg({
            type: 'PageUpdateInput'
          })
        )
      },
      resolve: (_, args, context) => {
        const { data } = args
        return context.prisma.page.update({
          where: {
            id: data.id || undefined
          },
          data
        })
      }
    })

    t.field('updatePlace', {
      type: 'Place',
      args: {
        data: nonNull(
          arg({
            type: 'PlaceUpdateInput'
          })
        )
      },
      resolve: (_, args, context) => {
        const { data } = args
        return context.prisma.place.update({
          where: {
            id: data.id || undefined
          },
          data: {
            ...data,
            location: {
              update: data.location
            },
            gallery: {
              update: data.gallery
            }
          }
        })
      }
    })
  }
})
