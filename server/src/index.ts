import express from 'express';
const app = express();

const port = process.env.PORT || 4545;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello Butt head!');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
