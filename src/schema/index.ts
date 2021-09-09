import path from 'path'
import { makeSchema } from 'nexus'
import * as types from './types'

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, '../../schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts')
  },
  contextType: {
    module: require.resolve('../context.ts'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma'
      }
    ]
  }
})
