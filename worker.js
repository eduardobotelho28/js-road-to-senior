self.onmessage = (message) => {
    
    console.log(message.data)

    for (i = 0; i<= 1_000_000_000; i++) {
        if(i === 1_000_000_000)
           self.postMessage('finalizou o loop')
    }

}