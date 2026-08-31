import html from './index.html' with { type: 'text' }

Deno.serve(() =>
  new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
)

const win = new Deno.BrowserWindow({ title: '期算' })
win.addEventListener('close', () => win.close())
