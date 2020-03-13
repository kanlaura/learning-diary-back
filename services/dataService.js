require('dotenv').config();
const PASSWORD = process.env.PGPASSWORD;
const USER = process.env.PGUSER; 
const HOST = process.env.PGHOST;
const DB = process.env.PGDB;
const PORT = process.env.PGPORT;
const Pool = require('pg').Pool;


const conopts = {
    user: USER,
    password: PASSWORD,
    host: HOST,
    port: PORT,
    database: DB
}

const pool = new Pool(conopts);

async function getTopic() {
    let data = await pool.query("SELECT * FROM Topic ORDER BY id DESC")
    return data.rows;
}

async function createTopic(title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate) {
    response = await pool.query("INSERT INTO Topic (title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate])
    return (`New topic created`)
}


async function deleteAll() {
    await pool.query("DELETE FROM Topic")
    return (`All topics deleted!!`)
}


async function getOneTopic(id) {
    let data = await pool.query("SELECT * FROM Topic WHERE id = $1",
        [id])
    return data.rows;
}

async function deleteTopic(id) {
    await pool.query("DELETE FROM Topic WHERE id=$1", [id])
    return (`ID ${id} deleted!!`)
}

async function editTopic(id, title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate) {
    await pool.query("UPDATE Topic SET title = $2, description = $3, timetomaster = $4, timespent = $5, source = $6, startlearningdate = $7, inprogress = $8, finishlearningdate=$9 WHERE id = $1", [id, title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate])
    return (`Topic ${id} updated.`)
}

module.exports = { getTopic, createTopic, deleteAll, getOneTopic, deleteTopic, editTopic };