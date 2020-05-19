# Deno testing

Deno runtime: <https://deno.land/>

There are 2 scripts:

## fetch.ts

Minimal example which fetch a web resource

Run with

```sh
deno run --allow-net fetch.ts
```

## server.ts

Minimal server which listen on port 8000 and has a enpoint /api which respond with an JSON. All other URL's respond with a basic minimalistic web site.

Run with:

```sh
deno run --allow-net --allow-read=./public server.ts
```
