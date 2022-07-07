
const express = require('express');
const router = express.Router();
const {
    
    getAllBuses,
   
  } = require('../controller/buses');
const { getAllRoutes } = require('../controller/routes');
  const {getAllemployeeOtps, getAllRatings} = require('../controller/employeeotps')
//   const {getAllRatings} = require('../controller/employeeotps')

// router.route('/all').get(async (req, res) => {
//     const response = await getAllBrands();
//     res.send({
//       response
//     });
//   });


// const busController = require("../controller/bus").bus

// module.exports = app => {
//   app.get("/api", (req, res) => {
//     res.status(200).send({
//       data: "Welcome Node Sequlize API v1",
//     })
//   })
//   app.get("/api/buses", busController.getAllUsers)
// }

router.route('/all').get(async (req, res) => {
    const response = await getAllBuses();
    res.send({
      response
    });
  });
 

router.route('/routesall').get(async (req, res) => {
    const response = await getAllRoutes();
    res.send({
      response
    });
  });
  
router.route('/employeeotps').get(async (req, res) => {
    const response = await getAllemployeeOtps();
    res.send({
      response
    });
  });

  router.route('/ratings').get(async (req, res) => {
    const response = await getAllRatings();
    res.send({
      response
    });
  });
  


  module.exports={
    routes:router
}
//   module.exports = router;