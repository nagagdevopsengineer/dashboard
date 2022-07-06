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
    // console.log(routedetail)
    // const count = {}
    // for (const element of routedetail) {
    //   if (count[element]) {
    //     count[element] += 1
    //   } else {
    //     count[element] = 1
    //   }
    // }

    // console.log(count, "cc")
    // return count

    const obj = {
        "01": 0,
        "02": 0,
        "03": 0,
        "04": 0,
        "05": 0,
        "06": 0,
        "07": 0,
        "08": 0,
        "09": 0,
        10: 0,
        11: 0,
        12: 0
      }
  
      routedetail?.map((item) => {
        obj[item] = obj[item] + 1
      })
      
  
      let index = Object.keys(obj).sort()
  
      // iterate method
      let details = []
      index.forEach((key) => {
        console.log(key, obj[key])
        details.push(obj[key])
      })
  
      // or array of sorted object
      let sortedArrayOfObject = index.map((v) => {
        return { key: v, value: obj[v] }
      })
      
      return details
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
