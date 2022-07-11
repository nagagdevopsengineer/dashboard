
const express = require('express');
const router = express.Router();
const {
    
    getAllBuses,
   
  } = require('../controller/buses');
const { getAllRoutes } = require('../controller/routes');
  const {getAllemployeeOtps, getAllRatings, getAllboarding, getAllEmployeeOtps} = require('../controller/employeeotps')
  const {getAllTrips, getTotalTrips} = require('../controller/trips')

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
  router.route('/alltrips').get(async (req, res) => {
    const response = await getAllTrips();
    res.send({
      response
    });
  });
  router.route('/allemployeeotps').get(async (req, res) => {
    const response = await getAllEmployeeOtps();
    res.send({
      response
    });
  });

  router.route('/totaltrips').get(async (req, res) => {
    const response = await getTotalTrips();
    res.send({
      response
    });
  });
  


  module.exports={
    routes:router
}
//   module.exports = router;