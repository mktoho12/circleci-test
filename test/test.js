'use strict'

const Sequelize = require('sequelize')
const assert = require('assert')

describe('postgresqlに接続するテスト', () => {

  let sequelize

  before(() => {
    sequelize = new Sequelize('postgres://postgres:postgres@localhost/myapp',
      { operatorsAliases: false })
  })

  after(() => {
    sequelize.close()
  })

  it('とりあえず接続', done => {
    const Project = sequelize.define('project', {
      title: Sequelize.STRING,
      description: Sequelize.TEXT
    })
    Project.sync().then(() => {
      assert.ok(true)
      done()
    }).catch(done)
  })

})
