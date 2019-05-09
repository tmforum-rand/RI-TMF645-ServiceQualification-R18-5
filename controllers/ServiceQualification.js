'use strict';

var url = require('url');

var ServiceQualification = require('../service/ServiceQualificationService');

module.exports.createServiceQualification = function createServiceQualification (req, res, next) {
  ServiceQualification.createServiceQualification(req, res, next);
};

module.exports.deleteServiceQualification = function deleteServiceQualification (req, res, next) {
  ServiceQualification.deleteServiceQualification(req, res, next);
};

module.exports.listServiceQualification = function listServiceQualification (req, res, next) {
  ServiceQualification.listServiceQualification(req, res, next);
};

module.exports.patchServiceQualification = function patchServiceQualification (req, res, next) {
  ServiceQualification.patchServiceQualification(req, res, next);
};

module.exports.retrieveServiceQualification = function retrieveServiceQualification (req, res, next) {
  ServiceQualification.retrieveServiceQualification(req, res, next);
};
