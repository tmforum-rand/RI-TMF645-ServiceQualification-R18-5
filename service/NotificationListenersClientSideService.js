'use strict';

//Minimal Service with filtering (equality match only) and attribute selection
//Error Handing Need to define a global error hqndler
//Paging and Range based Iterator to be added
//Notification to be added add listener and implement hub

const util = require('util');
const uuid = require('uuid');

const mongoUtils = require('../utils/mongoUtils');
const swaggerUtils = require('../utils/swaggerUtils');
const notificationUtils = require('../utils/notificationUtils');

const {sendDoc} = require('../utils/mongoUtils');

const {setBaseProperties, traverse, 
       addHref, processCommonAttributes } = require('../utils/operationsUtils');

const {validateRequest} = require('../utils/ruleUtils');

const {processAssignmentRules} = require('../utils/operations');

const {getPayloadType, getPayloadSchema, getResponseType} = require('../utils/swaggerUtils');

const {updateQueryServiceType, updatePayloadServiceType, cleanPayloadServiceType} = require('../utils/swaggerUtils');

const {TError, TErrorEnum, sendError} = require('../utils/errorUtils');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.listenToServiceQualificationChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceQualificationChangeNotification
   * Example of a client listener for receiving the notification ServiceQualificationChangeNotification
   *
   * data ServiceQualificationChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceQualificationChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceQualificationChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceQualificationChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceQualificationChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceQualificationChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceQualificationChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceQualificationCreateNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceQualificationCreateNotification
   * Example of a client listener for receiving the notification ServiceQualificationCreateNotification
   *
   * data ServiceQualificationCreateNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceQualificationCreateNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceQualificationCreateNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceQualificationCreateNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceQualificationCreateNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceQualificationCreateNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceQualificationCreateNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceQualificationDeleteNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceQualificationDeleteNotification
   * Example of a client listener for receiving the notification ServiceQualificationDeleteNotification
   *
   * data ServiceQualificationDeleteNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceQualificationDeleteNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceQualificationDeleteNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceQualificationDeleteNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceQualificationDeleteNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceQualificationDeleteNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceQualificationDeleteNotification: error=" + error.toString());
      sendError(res, error);
    });



};



