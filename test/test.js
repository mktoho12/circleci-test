'use strict'

const Sequelize = require('sequelize')

describe('postgresqlに接続できるかテスト', () => {
  it('とりあえず接続', done => {
    const sequelize = new Sequelize('postgres://postgres:postgres@localhost/myapp',
//    const sequelize = new Sequelize('sqlite:myapp.db',
      { operatorsAliases: false })
    const Project = sequelize.define('project', {
      title: Sequelize.STRING,
      description: Sequelize.TEXT
    })
    Project.sync().then(done).catch(done)
  })
})

