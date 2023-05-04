const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

const read = () => {
    return readFromFile('db/db.json', 'utf8')
}

const getNotes = () => {
    return read().then((notes)=>{
    let parseNotes;
    try {
        parseNotes = [].concat(JSON.parse(notes))
    } catch (err) {
        parseNotes = []
    } return parseNotes

    })
}

module.exports = {getNotes}