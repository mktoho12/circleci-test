'use strict'

const Sequelize = require('sequelize')
const assert = require('assert')

let sequelize

before(() => {
  console.log('Root level before')
  sequelize = new Sequelize('postgres://postgres:postgres@localhost/myapp',
    { operatorsAliases: false })
})

after(() => {
  console.log('Root level after')
  sequelize.close()
})

beforeEach(() => {
  console.log('Root level before each')
})

afterEach(() => {
  console.log('Root level after each')
})

describe('postgresqlに接続するテスト', () => {

  before(() => {
    console.log('describe01 before')
  })

  after(() => {
    console.log('describe01 after')
  })

  beforeEach(() => {
    console.log('describe01 before each')
  })

  afterEach(() => {
    console.log('describe01 after each')
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

  it('もういっこテスト', () => {
    assert.ok(true)
  })

})

describe('フックのテスト', () => {
  before(() => {
    console.log('describe02 lbefore')
  })

  after(() => {
    console.log('describe02 after')
  })

  beforeEach(() => {
    console.log('describe02 before each')
  })

  afterEach(() => {
    console.log('describe02 after each')
  })

  it('さらにテスト', () => {
    assert.ok(true)
  })

  it('さらにもういっこテスト', () => {
    assert.ok(true)
  })

})

