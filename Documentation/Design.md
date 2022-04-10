# Software Design

## Why KoaJs?

I enjoy using koa it is light, and the error handling is simplified.

I like that I need to install what I need, nothing else and the error handling makes my code neater. It supports me in creating a middleware that set all my HTTP errors. I usually create an Error class that has properties like status code, message and validation data. This error handling middleware set the appropriate value when an error is thrown.

The con of using koa is it has a small developer community.

## Why Postgres?

I would mostly choose MySQL over Postgres. It is a bias I am dealing with. MySQL GUI has issues with my system update. It isn't starting so I opted for Postgres.

## Why Populate database at API Level?

Initially, I populated the database at the start of the application. This was before I dockerized all the applications. I didn't think of starting when neither the database nor the table has been created.

This made me move it to the API level. The first call to the API will be slower but the following call will be faster.

## Why Did I Write My Search Function?

I tried writing a SQL script to search for the word but I was unsuccessful. Thus, I implemented caching which reduces database calls and my search function is `0(n)`. I think that is fine for an array of 21 objects

## Why Cached?

I would have used Memcache to cache the data but then this is a test app and the cache size is small. Hence, I decided to cache in-memory
