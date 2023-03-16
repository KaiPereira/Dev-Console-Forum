function send(message) {

    if (message) {
        var myHeaders = new Headers({
            "Content-Type": "application/json"
        });
    
        var raw = JSON.stringify({
            "message": message
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("https://dev-console-forum.kaipereira2021.repl.co/create-message", requestOptions)
            .catch(error => console.log('error', error))
    }
}


function forumMessageUpdate() {

    var message = "";

    window.setInterval(() => {
        var myHeaders = new Headers({
            "Content-Type": "application/json"
        });
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        fetch("https://dev-console-forum.kaipereira2021.repl.co/get-new-messages", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (message !== result) {
                    console.log(result, message)
                    message = result
                }
            })
            .catch(error => console.log('error', error))
    }, 2000)
}


function getPreviousMessages() {
    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev-console-forum.kaipereira2021.repl.co/all", requestOptions)
        .then(response => response.text())
        .then(results => {
            const resultsParsed = JSON.parse(results)

            resultsParsed.pop()

            resultsParsed.map((result) => {
                console.log(result.message)
            })
        })
        .catch(error => console.log('error', error))
}


getPreviousMessages()
forumMessageUpdate()