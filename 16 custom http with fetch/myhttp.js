class myHTTP{

    //with promise
    // get(url){
    //     return new Promise((resolve, reject) => {
    //     fetch(url)
    //         .then(res=>res.json())
    //         .then(data=>resolve(data))
    //         .catch(error=>reject(error))
    //     })
    // }

    // post(url,data){
    //     return new Promise((resolve,reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type' : 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(error => reject(error))
    //     })
    // }

    // put(url, data){
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type' : 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(error => reject(error))
    //     })
    // }

    // delete(url, data){
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type' : 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(response => response.json())
    //         .then(() => resolve('Deleted Successfully'))
    //         .catch(err => reject(err))
    //     })
    // }

    //with async await
    async get(url){
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    async post(url, post){
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()
        return data
    }

    async put(url, post){
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()
        return data
    }

    async delete(url, post){
        const res = await fetch(url, {
            method: 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        })

        const data = await 'Deleted Succesfully'
        return data
    }
}