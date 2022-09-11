

export default function (server) {
    server.get('/', (req, res) => {        
        res.sendFile('index.html', {root: './'});    
                                                             
    });

}