import { objectType } from 'nexus'

export const Page = objectType({
  name: 'Page',
  definition (t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('heading')
    t.nullable.string('body')
    t.nonNull.string('slug')
  }
})
