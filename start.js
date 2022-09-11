import { PORT} from './env'

// Start server
export default function (server) {
    server.listen(PORT, () => {          
        console.log(`Now listening on port ${PORT}`); 
    });
}