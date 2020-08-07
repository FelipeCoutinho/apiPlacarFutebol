module.exports ={
   "type": "postgres",
   "url":process.env.DATABASE_URL,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/dist/src/entity/**/*.js"
   ],
   "migrations": [
      "rc/dist/src/migration/**/*.js"
   ],
   "subscribers": [
      "rc/dist/src/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}