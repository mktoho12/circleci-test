'use strict'

const Sequelize = require('sequelize')

describe('postgresqlに接続できるかテスト', () => {
  it('とりあえず接続', done => {
    const sequelize = new Sequelize('postgres://postgres:postgres@localhost/myapp',
      { operatorsAliases: false })
    const User = sequelize.define('user', {
      name: Sequelize.STRING,
      description: Sequelize.TEXT
    })
    const Project = sequelize.define('project', {
      title: Sequelize.STRING,
      description: Sequelize.TEXT
    })
    Project.sync().then(() => {
      User.sync().then(() => {
        done()
      })
    })
  })
})

