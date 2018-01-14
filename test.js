'use strict'

const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:postgres@localhost/myapp',
  { operatorsAliases: false })
const Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})
Project.sync()

