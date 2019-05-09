'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceQualificationChangeNotification = function listenToServiceQualificationChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceQualificationChangeNotification(req, res, next);
};

module.exports.listenToServiceQualificationCreateNotification = function listenToServiceQualificationCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceQualificationCreateNotification(req, res, next);
};

module.exports.listenToServiceQualificationDeleteNotification = function listenToServiceQualificationDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceQualificationDeleteNotification(req, res, next);
};
