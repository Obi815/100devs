const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age':29,
        'birthName': 'Sheyaa Bin Abramham-Joeseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age':29,
        'birthName': 'Chancelor Johnathon Bennet',
        'birthLocation': 'Chicago Illinois'
    },
    'dylan': {
        'age':29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:rapperName', (request, respose) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        respose.json(rappers[rappersName])
    }else{
        respose.json(rappers['Dylan'])
    }
    // respose.json(rappers)
})

app.listen(PORT, () => {
    console.log(`The serving is running on on port ${PORT}! You better go catch it!`)
})