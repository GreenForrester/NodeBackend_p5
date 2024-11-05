// prismaclientfactory.ts

//if you are keeping 
import { PrismaClient as MongoDbClient } from '@prisma/client'
import { PrismaClient as PostgresDbClient } from '@prisma/client'

// Define types for your database clients
export type MongoDbClientType = MongoDbClient;
export type PostgresDbClientType = PostgresDbClient;

export class PrismaClientFactory {


  public static getMongoDbClient(): MongoDbClientType 
  {

        return new MongoDbClient(); 

  }

  /*
  public static getPostgresDbClient(): PostgresDbClientType 
  {

    return new PostgresDbClient({
      datasources: {
        db: {
          url: process.env.POSTGRESQL_URL || '', // Provide a default or ensure POSTGRESQL_URL is set
        },
      },
    });
  } */
}
