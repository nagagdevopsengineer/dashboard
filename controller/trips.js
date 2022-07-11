const lodash = require("lodash")

const { QueryTypes } = require("sequelize")
const moment = require("moment")

const { sequelize } = require("../models")
const { trips } = require("../models")

const getAllTrips = async (queryInterface) => {
  console.log(queryInterface, "query")
  let today = new Date().toISOString().split('T')[0]

  try {
    console.log("here")

    const data = await sequelize.query(
      `SELECT COUNT(*) FROM trips  WHERE  scheduledtime  >= starttime `,
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

const getTotalTrips = async (queryInterface) => {
    console.log(queryInterface, "query")
    let today = new Date().toISOString().split('T')[0]
  
    try {
      console.log("here")
  
      const data = await sequelize.query(
        `SELECT COUNT(*) FROM trips `,
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




module.exports = {
    getAllTrips,
    getTotalTrips
 
}
