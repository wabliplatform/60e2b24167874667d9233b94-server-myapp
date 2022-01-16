/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Proj } = require('../models/Proj');

/**
* Creates the data
*
* proj Proj data to be created
* returns proj
* */
const createproj = ({ proj }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Proj(proj).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* projId String the Id parameter
* no response value expected for this operation
* */
const deleteproj = ({ projId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Proj.findOneAndDelete({ _id:projId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllproj = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Proj.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* projId String the Id parameter
* returns proj
* */
const getproj = ({ projId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Proj.findById(projId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* projId String the Id parameter
* proj Proj data to be updated (optional)
* returns proj
* */
const updateproj = ({ projId, proj }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Proj.findOneAndUpdate({ _id:projId },proj).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createproj,
  deleteproj,
  getAllproj,
  getproj,
  updateproj,
};
