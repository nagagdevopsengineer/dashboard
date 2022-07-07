
const express = require('express');
const router = express.Router();
const {
    
    getAllBuses,
   
  } = require('../controller/buses');
const { getAllRoutes } = require('../controller/routes');
  const {getAllemployeeOtps, getAllRatings, getAllboarding} = require('../controller/employeeotps')

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
  router.route('/boardedemp').get(async (req, res) => {
    const response = await getAllboarding();
    res.send({
      response
    });
  });
  


  module.exports={
    routes:router
}
//   module.exports = router;