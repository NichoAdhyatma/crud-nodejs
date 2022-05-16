const { response } = require('express');
const db = require("../config");

exports.getSkill = (response) => {

    const sql = `SELECT * FROM skill`;

    //jalankan query
    db.query(sql, (error, result) => {
        if (error) return console.log("error", error);

        //response data
        const skills = {
            title: "MOBILE LEGEND SKILL LIST",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('skill', { skills });
        response.end();
    })
}

exports.getSkillById = (id, response) => {
    //query data
    const sql = `SELECT * FROM skill WHERE id = ${id}`;

    db.query(sql, (error, result) => {
        //response data
        const skill = {
            title: "MOBILE LEGEND SKILL UPDATE",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('skillDetail', { skill });
        response.end();
    })
}

exports.updateSkillById = (data, response) => {
    const id = data.id
    const name = data.name
    const hero = data.hero
    const damage = data.damage

    const sql = `UPDATE skill SET name = '${name}', hero = '${hero}', damage= ${damage} WHERE id = ${id}`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/skill')
        response.end()
    })
}

exports.addSkill = (data, response) => {
    const name = data.name
    const hero = data.hero
    const damage = data.damage

    const sql = `INSERT INTO skill (name,hero,damage) VALUES('${name}','${hero}',${damage})`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/skill')
        response.end()
    })
}

exports.removeSkill = (id, response) => {
    const sql = `DELETE FROM skill WHERE id = ${id}`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/skill')
        response.end()
    })
}