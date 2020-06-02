# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Make sure that your .env is correctly set .

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Model

Make model and migration file

```bash
adonis make:model Tweet -m
adonis make:model Reply -m
adonis make:model Favorite -m
```
