const lodash = require("lodash")
const { Op } = require("sequelize")
const { QueryTypes } = require("sequelize")
const moment = require("moment")
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const { sequelize } = require("../models")
const { Routes } = require("../models")

// console.log(Buses, 'bbb')
const getAllRoutes = async () => {
  try {
    console.log("here")
    const data = await sequelize.query("SELECT created_at FROM routes", {
      type: QueryTypes.SELECT
    })

    let routedetail = []
    data?.map((item) => {
      routedetail.push(moment(item.created_at).format("MM"))
    })
    console.log(routedetail)
    const count = {}
    for (const element of routedetail) {
      if (count[element]) {
        count[element] += 1
      } else {
        count[element] = 1
      }
    }

    console.log(count, "cc")
    return count
  } catch (error) {
    console.log(error)
    return {
      error: "Something went wrong",
      data: ""
    }
  }
}
module.exports = {
  getAllRoutes
}
