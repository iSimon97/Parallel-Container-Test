import { createServer } from 'http'

// Simple router implementation inspired by AdonisJS
class SimpleRouter {
  constructor() {
    this.routes = new Map()
  }
  
  get(path, handler) {
    this.routes.set(`GET:${path}`, handler)
  }
  
  handle(method, path) {
    const handler = this.routes.get(`${method}:${path}`)
    return handler || null
  }
}

// Create router instance
const router = new SimpleRouter()

// Define routes (AdonisJS style)
router.get('/', () => ({
  message: 'Hello from AdonisJS 6!',
  timestamp: new Date().toISOString(),
  framework: 'AdonisJS',
  version: '6.x',
  status: 'Server is running successfully!'
}))

router.get('/health', () => ({
  status: 'OK',
  uptime: process.uptime(),
  memory: process.memoryUsage(),
  version: process.version
}))

// HTTP server with routing
const server = createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`)
  const handler = router.handle(req.method, url.pathname)
  
  if (handler) {
    try {
      const result = handler()
      res.writeHead(200, { 
        'Content-Type': 'application/json',
        'X-Powered-By': 'AdonisJS'
      })
      res.end(JSON.stringify(result, null, 2))
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Internal Server Error' }))
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ 
      error: 'Not Found',
      message: `Route ${req.method} ${url.pathname} not found`
    }))
  }
})

const port = process.env.PORT || 3333
const host = process.env.HOST || '0.0.0.0'

server.listen(port, host, () => {
  console.log('🚀 AdonisJS application started')
  console.log(`📍 Server: http://${host}:${port}`)
  console.log(`🔗 Health: http://${host}:${port}/health`)
  console.log('✅ Ready to accept connections')
})