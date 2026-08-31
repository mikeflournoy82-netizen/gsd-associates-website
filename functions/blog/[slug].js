/**
 * Cloudflare Pages Function: Blog Router
 * 
 * Intercepts /blog/* requests and routes them to /blog/:slug/index.html
 * This overrides Cloudflare Pages' default index.html behavior
 * 
 * File location: functions/blog/[slug].js
 * Matches: /blog/* routes
 */

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Extract slug from /blog/slug-name (remove /blog/ prefix and trailing slash)
  const match = pathname.match(/^\/blog\/([^/]+)\/?$/);
  
  if (!match) {
    // Not a blog post route, pass through
    return context.next();
  }

  const slug = match[1];
  
  // Rewrite to the actual file path
  const rewritePath = `/blog/${slug}/index.html`;
  
  // Fetch the rewritten path
  const rewriteUrl = new URL(request.url);
  rewriteUrl.pathname = rewritePath;
  
  try {
    const response = await context.env.ASSETS.fetch(rewriteUrl, request);
    
    // If we get a 200, return it
    if (response.status === 200) {
      return response;
    }
    
    // If 404, pass through (let Cloudflare handle it)
    if (response.status === 404) {
      return context.next();
    }
    
    return response;
  } catch (err) {
    // On error, pass through to default behavior
    console.error(`Error fetching /blog/${slug}/index.html:`, err);
    return context.next();
  }
}
