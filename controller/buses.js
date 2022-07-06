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
    console.log(busdetail)
    const count = {}
    for (const element of busdetail) {
      if (count[element]) {
        count[element] += 1
      } else {
        count[element] = 1
      }
    }

    console.log(count, "cc")

    const obj = {
      JAN: 0,
      FEB: 0,
      MAR: 0,
      APR: 0,
      MAY: 0,
      JUN: 0,
      JUL: 0,
      AUG: 0,
      SEP: 0,
      OCT: 0,
      NOV: 0,
      DEC: 0
    }
    const abc = []
    Object.keys(obj).map((item) => {
      console.log(item, obj[item])

      abc.push(obj[item])
    })
    console.log(abc, "abc")
    return count
    //   let query = `SELECT created_at from buses`;
    // //   query += ` FROM ${queryInterface.sequelize.options.schema}.buses;`;
    // return  queryInterface.sequelize.query(query);
    //   return {
    //     error: '',
    //     data: busDetails
    //   };
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
