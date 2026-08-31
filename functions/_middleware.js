/**
 * Cloudflare Pages Middleware: Blog Router
 * 
 * Intercepts /blog/* requests and routes them to /blog/:slug/index.html
 * This is the guaranteed entry point for all requests
 */

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only intercept /blog/* routes (but not /blog/ or /blog/index.html)
  if (pathname.startsWith('/blog/') && !pathname.endsWith('/index.html') && pathname !== '/blog/') {
    // Extract slug from /blog/slug-name
    const match = pathname.match(/^\/blog\/([^/]+)\/?$/);
    
    if (match) {
      const slug = match[1];
      const rewritePath = `/blog/${slug}/index.html`;
      
      console.log(`[Blog Router] Intercepting /blog/${slug}/ → rewriting to ${rewritePath}`);
      
      // Create a new request for the rewritten path
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = rewritePath;
      
      try {
        const response = await context.env.ASSETS.fetch(rewriteUrl.toString());
        
        if (response.status === 200) {
          console.log(`[Blog Router] ✅ Served ${rewritePath}`);
          return response;
        }
      } catch (err) {
        console.error(`[Blog Router] Error fetching ${rewritePath}:`, err);
      }
    }
  }

  // For all other requests, pass through to default handler
  return context.next();
}
