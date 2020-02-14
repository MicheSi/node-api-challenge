const express = require('express');

const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// custom middleware
function validateProjectId(req, res, next) {
    if (req.params.id) {
        req.project = req.params.id;
        next();
    } else {
        res.status(400).json({message: 'Invalid project id'})
    }
}

function validateProject(req, res, next) {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({message: 'Provide project name and description'});
    } else {
        next();
    }
}

function validateAction(req, res, next) {
    if (!req.body.project_id || !req.body.description || ! req.body.notes) {
        res.status(400).json({message: `Provide project id, description and notes`});
    } else if (req.body.description.length > 128) {
        res.status(400).json({message: 'Description character limit is 128 characters'});
    } else {
        next();
    }
}

// get requests
