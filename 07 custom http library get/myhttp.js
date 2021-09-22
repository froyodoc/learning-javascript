// function myHTTP() {
//     this.http = new XMLHttpRequest();
// }

// myHTTP.prototype.get = function (url) {
//     this.http.open('GET', url, true)
//     this.http.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText)
//         }
//     }
//     this.http.send()
// }

function myHTTP(){
    this.http = new XMLHttpRequest();
}

myHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true)
    this.http.onload = function(){
        if(this.status === 200){
            callback(this.responseText)
        } else {
            callback('The are error is' + this.status)
        }
    }
    this.http.send()
}

//post request
myHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function(){
        callback(null, this.responseText)
    }
    this.http.send(JSON.stringify(data))
}

//put request
myHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function(){
        callback(null, this.responseText)
    }
    this.http.send(JSON.stringify(data))
}

//delete request
myHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true)
    this.http.onload = function(){
        if(this.status === 200){
            callback(null, 'This post is deleted')
        } else {
            callback('There are errors' + this.status)
        }
    }
    this.http.send()
}
