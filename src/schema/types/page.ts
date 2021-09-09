import { inputObjectType, objectType } from 'nexus'

export const Page = objectType({
  name: 'Page',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('heading')
    t.string('body')
    t.nonNull.string('slug')
  }
})

export const PageCreateInput = inputObjectType({
  name: 'PageCreateInput',
  definition (t) {
    t.nonNull.string('heading')
    t.string('body')
    t.nonNull.string('slug')
  }
})

export const PageUpdateInput = inputObjectType({
  name: 'PageUpdateInput',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.string('heading')
    t.string('body')
    t.nonNull.string('slug')
  }
})
