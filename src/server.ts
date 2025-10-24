import http from 'node:http'

const PORT = Number(process.env.PORT ?? 3000)
const startedAt = Date.now()

const server = http.createServer((req, res) => {
	const method = req.method ?? 'GET'
	const path = (req.url ?? '/').split('?')[0]

	if (method === 'GET' && path === '/health') {
		const body = JSON.stringify({
			ok: true,
			uptime: Math.floor((Date.now() - startedAt) / 1000), // seconds
			env: process.env.NODE_ENV ?? 'development',
		})
		res.statusCode = 200
		res.setHeader('content-type', 'application/json; charset=utf-8')
		res.setHeader('content-length', Buffer.byteLength(body))
		res.end(body)
		return
	}

	res.statusCode = 404
	res.setHeader('content-type', 'application/json; charset=utf-8')
	res.end(JSON.stringify({ error: 'not_found', path }))
})

server.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
