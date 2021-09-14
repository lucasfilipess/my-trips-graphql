# GraphQL Server

- [**Express GraphQL**](https://github.com/graphql/express-graphql): Express middleware for GraphQL HTTP servers   
- [**GraphQL Nexus**](https://nexusjs.org/docs/): GraphQL schema definition and resolver implementation 
- [**Prisma Client**](https://www.prisma.io/docs/concepts/components/prisma-client): Databases access (ORM)                  
- [**Prisma Migrate**](https://www.prisma.io/docs/concepts/components/prisma-migrate): Database migrations               
- [**PostgreSQL**](https://www.postgresql.org/)

## Contents

- [Getting Started](#getting-started)
- [Using the GraphQL API](#using-the-graphql-api)

## Getting started

### 1. Download and install dependencies

```
git clone https://github.com/lucasfilipess/my-trips-graphql.git
```

Install npm dependencies:

```
cd my-trips-graphql

npm install
or   
yarn 
```
### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

```
npx prisma db seed
```

### 3. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
or 
yarn dev
```

Navigate to [http://localhost:3333/graphql](http://localhost:3333/graphql) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).


## Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.