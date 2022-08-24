const express = require('express')
const app = express()
const axios = require('axios')

app.get('/', (req, res) => {
	res.send('<h1>LINE Broadcast</h1>')
})

app.get('/webhook', async (req, res) => {
	const { data } = await axios.get('https://line-api.nbs.co.th/groups')

	res.json(data)
})

app.listen(process.env.PORT || 3000, () => console.log('app is running'))
