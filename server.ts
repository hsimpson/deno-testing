import { serve } from 'https://deno.land/std/http/server.ts';
//import { readFileStr } from 'https://deno.land/std/fs/mod.ts';
import { readFileStr } from 'https://deno.land/std/fs/read_file_str.ts';

const PORT = 8000;
const s = serve({
  port: PORT,
});

console.log(`server listen on port ${PORT}`);

async function getJson(): Promise<any> {
  const body = await readFileStr('./public/api.json');

  return {
    body,
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };
}

async function getHtml(): Promise<any> {
  const body = await readFileStr('./public/index.html');

  return {
    body,
    headers: new Headers({
      'Content-Type': 'text/html; charset=utf-8',
    }),
  };
}

for await (const req of s) {
  //console.log(req);

  if (req.url === '/api') {
    req.respond(await getJson());
  } else {
    req.respond(await getHtml());
  }
}

// Make sure we're a module
export {};
