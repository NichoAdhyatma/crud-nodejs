const express = require("express");
const router = express.Router();
const Skill = require("../model/Skill.model")

router.get('/', (request, response) => {
    Skill.getSkill(response);
})

router.get('/:id', (request, response) => {
    const id = request.params.id;
    Skill.getSkillById(id, response);
})

router.post('/update', (request, response) => {
    const data = {
        'id': request.body.id,
        'name': request.body.name,
        'hero': request.body.hero,
        'damage': request.body.damage
    }
    Skill.updateSkillById(data, response);
})

router.post('/add', (request, response) => {
    const data = {
        'name': request.body.name,
        'hero': request.body.hero,
        'damage': request.body.damage
    }
    Skill.addSkill(data, response);
})

router.post('/remove', (request, response) => {
    const id = request.body.id
    Skill.removeSkill(id, response);
})

module.exports = router;