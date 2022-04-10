# Software Design

## Why KoaJs?

I enjoy using koa it is light, and the error handling is simplified.

I like that I need to install what I need, nothing else and the error handling makes my code neater. It supports me creating a middleware which set all my http errors. I usually create an Error class which has properties like status code, message and validation data. This error handling middleware set appropriate value when an error is thrown.

THe con of using koa is it has a small developer community.

## Why Postgres?

I would mostly choose MySQL over Postgres. It is a bias I am dealing with. MySQL GUI has issues on my system update. It isn't starting so I opted for Postgres.

## Why Populate database in Api Level?

Initially, I populated the database on start of the application. This was before I dockerized all the application. I didn't think of starting and netiher the database nor the table is created yet.

This made me move it to the api level. The first call to the api will be slower but following call will be faster.

## Why Did I Write My Search Function?

I tried writing a sql script to search for the word but I was unsuccessful. Thus, I implemented caching which reduces database calls and my seach function is `0(n)`. I think that is fine for an array of 21 objects

## Why Cached?

I waould have used memcache to cache the data but then this is a test app and the cache size is small. Hence, I decided to cach in-memory
