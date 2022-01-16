/**
 * The ProjController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProjService');
const createproj = async (request, response) => {
  await Controller.handleRequest(request, response, service.createproj);
};

const deleteproj = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteproj);
};

const getAllproj = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllproj);
};

const getproj = async (request, response) => {
  await Controller.handleRequest(request, response, service.getproj);
};

const updateproj = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateproj);
};


module.exports = {
  createproj,
  deleteproj,
  getAllproj,
  getproj,
  updateproj,
};
