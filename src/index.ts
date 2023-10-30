import { server } from './server/Server';

server.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on ${process.env.PORT}`);
});