const lodash = require("lodash")
// const  {queryInterface, sequelize} = require('sequelize');
const { QueryTypes } = require("sequelize")
const moment = require("moment")
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const { sequelize } = require("../models")
const { buses } = require("../models")

console.log(buses, "bbb")
const getAllBuses = async (queryInterface) => {
  console.log(queryInterface, "query")
  try {
    console.log("here")

    const data = await sequelize.query("SELECT created_at FROM buses", {
      type: QueryTypes.SELECT
    })
    let busdetail = []
    data?.map((item) => {
      busdetail.push(moment(item.created_at).format("MM"))
    })
    
    const count = {}

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

    busdetail?.map((item) => {
      obj[item] = obj[item] + 1
    })
    

    let index = Object.keys(obj).sort()

    // iterate method
    let details = []
    index.forEach((key) => {
      console.log(key, obj[key])
      details.push(obj[key])
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
  getAllBuses
}
