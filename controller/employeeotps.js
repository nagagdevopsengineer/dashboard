const lodash = require("lodash")

const { QueryTypes } = require("sequelize")
const moment = require("moment")

const { sequelize } = require("../models")
const { employeeotps } = require("../models")

const getAllemployeeOtps = async (queryInterface) => {
  console.log(queryInterface, "query")
  let db = new Date()
  console.log(db, db)
  try {
    console.log("here")

    const data = await sequelize.query(
      "SELECT is_boarded = true FROM employeeotps WHERE created_at = '2022-07-07T06:24:11.737Z'",
      {
        type: QueryTypes.SELECT
      }
    )
  
    return data
  } catch (error) {
    console.log(error)
    return {
      error: "Something went wrong",
      data: ""
    }
  }
}

const getAllRatings = async (queryInterface) => {
  console.log(queryInterface, "query")

  try {
    console.log("here")

    const data = await sequelize.query(
      "SELECT * FROM employeeotps WHERE ratings IS NOT NULL",
      {
        type: QueryTypes.SELECT
      }
    )
    let otps = []
    data?.map((item) => {
      otps.push(item.ratings)
    })
    console.log(otps, 'd')
    const obj = {
        "0":0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
  
      otps?.map((item) => {
        obj[item] = obj[item] + 1
      })
  
      let index = Object.keys(obj).sort()
  
      // iterate method
      let details = []
      index.forEach((key) => {
        console.log(key, obj[key])
        details.push(obj[key])
      })
  
      console.log(details)
  
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
  getAllemployeeOtps,
  getAllRatings
}
