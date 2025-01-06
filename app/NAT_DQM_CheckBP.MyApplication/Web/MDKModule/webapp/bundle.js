(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/MyApplication/i18n/i18n.properties":
/*!**************************************************************!*\
  !*** ./build.definitions/MyApplication/i18n/i18n.properties ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "A_AddressEmailAddress=A AddressEmailAddress\nA_AddressEmailAddress_Detail=A AddressEmailAddress Detail\nCreate_A_AddressEmailAddress_Detail=Create A AddressEmailAddress Detail\nUpdate_A_AddressEmailAddress_Detail=Update A AddressEmailAddress Detail\nA_AddressPhoneNumber=A AddressPhoneNumber\nA_AddressPhoneNumber_Detail=A AddressPhoneNumber Detail\nCreate_A_AddressPhoneNumber_Detail=Create A AddressPhoneNumber Detail\nUpdate_A_AddressPhoneNumber_Detail=Update A AddressPhoneNumber Detail\nA_BPContactToAddress=A BPContactToAddress\nA_BPContactToAddress_Detail=A BPContactToAddress Detail\nCreate_A_BPContactToAddress_Detail=Create A BPContactToAddress Detail\nUpdate_A_BPContactToAddress_Detail=Update A BPContactToAddress Detail\nCreate_A_AddressEmailAddress=Create A AddressEmailAddress\nCreate_A_AddressFaxNumber=Create A AddressFaxNumber\nCreate_A_AddressPhoneNumber=Create A AddressPhoneNumber\nCreate_A_AddressHomePageURL=Create A AddressHomePageURL\nA_AddressFaxNumber_Detail=A AddressFaxNumber Detail\nUpdate_A_AddressFaxNumber_Detail=Update A AddressFaxNumber Detail\nA_AddressHomePageURL_Detail=A AddressHomePageURL Detail\nUpdate_A_AddressHomePageURL_Detail=Update A AddressHomePageURL Detail"

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/AppUpdateFailure.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/AppUpdateFailure.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/MyApplication/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/AppUpdateSuccess.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/AppUpdateSuccess.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MyApplication/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MyApplication/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/ClientIsMultiUserMode.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/ClientIsMultiUserMode.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/GetClientSupportVersions.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/GetClientSupportVersions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/GetClientVersion.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/GetClientVersion.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/OnWillUpdate.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/OnWillUpdate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/MyApplication/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Application/ResetAppSettingsAndLogout.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/MyApplication/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_Cancel.js":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_Cancel.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressEmailAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressEmailAddress'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.js":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressEmailAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressEmailAddress',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteConfirmation.js":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteConfirmation.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MyApplication/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.js":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressEmailAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressEmailAddress'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.js":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressEmailAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressEmailAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_Cancel.js":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_Cancel.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressFaxNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressFaxNumber'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteConfirmation.js":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteConfirmation.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MyApplication/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.js":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressFaxNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressFaxNumber'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.js":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressFaxNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressFaxNumber'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_Cancel.js":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_Cancel.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressHomePageURL')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressHomePageURL'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteConfirmation.js":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteConfirmation.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MyApplication/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.js":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressHomePageURL')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressHomePageURL'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.js":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressHomePageURL')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressHomePageURL'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_Cancel.js":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_Cancel.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressPhoneNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressPhoneNumber'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.js":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressPhoneNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressPhoneNumber',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteConfirmation.js":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteConfirmation.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MyApplication/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.js":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressPhoneNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressPhoneNumber'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.js":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressPhoneNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressPhoneNumber'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_Cancel.js":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_Cancel.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateRelatedEntity)
/* harmony export */ });
function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.js":
/*!****************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateRelatedEntity)
/* harmony export */ });
function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.js":
/*!******************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateRelatedEntity)
/* harmony export */ });
function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.js":
/*!******************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateRelatedEntity)
/* harmony export */ });
function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.js":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteConfirmation.js":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteConfirmation.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MyApplication/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.js":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.js":
/*!************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToCreate)
/* harmony export */ });
function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToCreate)
/* harmony export */ });
function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToCreate)
/* harmony export */ });
function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToCreate)
/* harmony export */ });
function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.js":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Logging/LogLevels.js":
/*!********************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Logging/LogLevels.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Logging/SetTraceCategories.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Logging/SetTraceCategories.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Logging/SetUserLogLevel.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Logging/SetUserLogLevel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Logging/ToggleLogging.js":
/*!************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Logging/ToggleLogging.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Logging/TraceCategories.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Logging/TraceCategories.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Logging/UserLogSetting.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Logging/UserLogSetting.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplication/Rules/Service/Initialize.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/MyApplication/Rules/Service/Initialize.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _BusinessPartnerA2X = context.executeAction('/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnline.action');

    //You can add more service initialize actions here

    return Promise.all([_BusinessPartnerA2X]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/MyApplication/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let myapplication_actions_application_appupdate_action = __webpack_require__(/*! ./MyApplication/Actions/Application/AppUpdate.action */ "./build.definitions/MyApplication/Actions/Application/AppUpdate.action")
let myapplication_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./MyApplication/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/MyApplication/Actions/Application/AppUpdateFailureMessage.action")
let myapplication_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./MyApplication/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/MyApplication/Actions/Application/AppUpdateProgressBanner.action")
let myapplication_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./MyApplication/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/MyApplication/Actions/Application/AppUpdateSuccessMessage.action")
let myapplication_actions_application_logout_action = __webpack_require__(/*! ./MyApplication/Actions/Application/Logout.action */ "./build.definitions/MyApplication/Actions/Application/Logout.action")
let myapplication_actions_application_navtoabout_action = __webpack_require__(/*! ./MyApplication/Actions/Application/NavToAbout.action */ "./build.definitions/MyApplication/Actions/Application/NavToAbout.action")
let myapplication_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./MyApplication/Actions/Application/NavToActivityLog.action */ "./build.definitions/MyApplication/Actions/Application/NavToActivityLog.action")
let myapplication_actions_application_navtosupport_action = __webpack_require__(/*! ./MyApplication/Actions/Application/NavToSupport.action */ "./build.definitions/MyApplication/Actions/Application/NavToSupport.action")
let myapplication_actions_application_onwillupdate_action = __webpack_require__(/*! ./MyApplication/Actions/Application/OnWillUpdate.action */ "./build.definitions/MyApplication/Actions/Application/OnWillUpdate.action")
let myapplication_actions_application_reset_action = __webpack_require__(/*! ./MyApplication/Actions/Application/Reset.action */ "./build.definitions/MyApplication/Actions/Application/Reset.action")
let myapplication_actions_application_resetmessage_action = __webpack_require__(/*! ./MyApplication/Actions/Application/ResetMessage.action */ "./build.definitions/MyApplication/Actions/Application/ResetMessage.action")
let myapplication_actions_application_usermenupopover_action = __webpack_require__(/*! ./MyApplication/Actions/Application/UserMenuPopover.action */ "./build.definitions/MyApplication/Actions/Application/UserMenuPopover.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_createentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_deleteentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteEntity.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_updateentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_create_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Create.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Create.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_detail_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Detail.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Detail.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_edit_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action")
let myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_list_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_List.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_List.action")
let myapplication_actions_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_deleteentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteEntity.action")
let myapplication_actions_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_updateentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action")
let myapplication_actions_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_detail_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Detail.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Detail.action")
let myapplication_actions_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_edit_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action")
let myapplication_actions_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_deleteentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteEntity.action")
let myapplication_actions_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_updateentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action")
let myapplication_actions_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_detail_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Detail.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Detail.action")
let myapplication_actions_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_edit_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_createentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_deleteentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteEntity.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_updateentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_create_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Create.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Create.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_detail_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_edit_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action")
let myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_list_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_List.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_List.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_deleteentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteEntity.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_detailpopover_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DetailPopover.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DetailPopover.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_updateentity_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_create_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Create.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Create.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressemailaddress_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressfaxnumber_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addresshomepageurl_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressphonenumber_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_detail_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Detail.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Detail.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_edit_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.action")
let myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_list_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_List.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_List.action")
let myapplication_actions_businesspartnera2x_service_initializeonline_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnline.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnline.action")
let myapplication_actions_businesspartnera2x_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnlineFailureMessage.action")
let myapplication_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./MyApplication/Actions/CloseModalPage_Cancel.action */ "./build.definitions/MyApplication/Actions/CloseModalPage_Cancel.action")
let myapplication_actions_closemodalpage_complete_action = __webpack_require__(/*! ./MyApplication/Actions/CloseModalPage_Complete.action */ "./build.definitions/MyApplication/Actions/CloseModalPage_Complete.action")
let myapplication_actions_closepage_action = __webpack_require__(/*! ./MyApplication/Actions/ClosePage.action */ "./build.definitions/MyApplication/Actions/ClosePage.action")
let myapplication_actions_createentityfailuremessage_action = __webpack_require__(/*! ./MyApplication/Actions/CreateEntityFailureMessage.action */ "./build.definitions/MyApplication/Actions/CreateEntityFailureMessage.action")
let myapplication_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./MyApplication/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/MyApplication/Actions/CreateEntitySuccessMessage.action")
let myapplication_actions_deleteconfirmation_action = __webpack_require__(/*! ./MyApplication/Actions/DeleteConfirmation.action */ "./build.definitions/MyApplication/Actions/DeleteConfirmation.action")
let myapplication_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./MyApplication/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/MyApplication/Actions/DeleteEntityFailureMessage.action")
let myapplication_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./MyApplication/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/MyApplication/Actions/DeleteEntitySuccessMessage.action")
let myapplication_actions_draftdiscardentity_action = __webpack_require__(/*! ./MyApplication/Actions/DraftDiscardEntity.action */ "./build.definitions/MyApplication/Actions/DraftDiscardEntity.action")
let myapplication_actions_drafteditentity_action = __webpack_require__(/*! ./MyApplication/Actions/DraftEditEntity.action */ "./build.definitions/MyApplication/Actions/DraftEditEntity.action")
let myapplication_actions_draftsaveentity_action = __webpack_require__(/*! ./MyApplication/Actions/DraftSaveEntity.action */ "./build.definitions/MyApplication/Actions/DraftSaveEntity.action")
let myapplication_actions_genericbannermessage_action = __webpack_require__(/*! ./MyApplication/Actions/GenericBannerMessage.action */ "./build.definitions/MyApplication/Actions/GenericBannerMessage.action")
let myapplication_actions_genericmessagebox_action = __webpack_require__(/*! ./MyApplication/Actions/GenericMessageBox.action */ "./build.definitions/MyApplication/Actions/GenericMessageBox.action")
let myapplication_actions_genericnavigation_action = __webpack_require__(/*! ./MyApplication/Actions/GenericNavigation.action */ "./build.definitions/MyApplication/Actions/GenericNavigation.action")
let myapplication_actions_generictoastmessage_action = __webpack_require__(/*! ./MyApplication/Actions/GenericToastMessage.action */ "./build.definitions/MyApplication/Actions/GenericToastMessage.action")
let myapplication_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./MyApplication/Actions/Logging/LogUploadFailure.action */ "./build.definitions/MyApplication/Actions/Logging/LogUploadFailure.action")
let myapplication_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./MyApplication/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/MyApplication/Actions/Logging/LogUploadSuccessful.action")
let myapplication_actions_logging_uploadlog_action = __webpack_require__(/*! ./MyApplication/Actions/Logging/UploadLog.action */ "./build.definitions/MyApplication/Actions/Logging/UploadLog.action")
let myapplication_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./MyApplication/Actions/Logging/UploadLogProgress.action */ "./build.definitions/MyApplication/Actions/Logging/UploadLogProgress.action")
let myapplication_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./MyApplication/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/MyApplication/Actions/UpdateEntityFailureMessage.action")
let myapplication_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./MyApplication/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/MyApplication/Actions/UpdateEntitySuccessMessage.action")
let myapplication_globals_application_appdefinition_version_global = __webpack_require__(/*! ./MyApplication/Globals/Application/AppDefinition_Version.global */ "./build.definitions/MyApplication/Globals/Application/AppDefinition_Version.global")
let myapplication_globals_application_applicationname_global = __webpack_require__(/*! ./MyApplication/Globals/Application/ApplicationName.global */ "./build.definitions/MyApplication/Globals/Application/ApplicationName.global")
let myapplication_globals_application_supportemail_global = __webpack_require__(/*! ./MyApplication/Globals/Application/SupportEmail.global */ "./build.definitions/MyApplication/Globals/Application/SupportEmail.global")
let myapplication_globals_application_supportphone_global = __webpack_require__(/*! ./MyApplication/Globals/Application/SupportPhone.global */ "./build.definitions/MyApplication/Globals/Application/SupportPhone.global")
let myapplication_i18n_i18n_properties = __webpack_require__(/*! ./MyApplication/i18n/i18n.properties */ "./build.definitions/MyApplication/i18n/i18n.properties")
let myapplication_jsconfig_json = __webpack_require__(/*! ./MyApplication/jsconfig.json */ "./build.definitions/MyApplication/jsconfig.json")
let myapplication_pages_application_about_page = __webpack_require__(/*! ./MyApplication/Pages/Application/About.page */ "./build.definitions/MyApplication/Pages/Application/About.page")
let myapplication_pages_application_support_page = __webpack_require__(/*! ./MyApplication/Pages/Application/Support.page */ "./build.definitions/MyApplication/Pages/Application/Support.page")
let myapplication_pages_application_useractivitylog_page = __webpack_require__(/*! ./MyApplication/Pages/Application/UserActivityLog.page */ "./build.definitions/MyApplication/Pages/Application/UserActivityLog.page")
let myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_create_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Create.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Create.page")
let myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_detail_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Detail.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Detail.page")
let myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_edit_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Edit.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Edit.page")
let myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_list_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_List.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_List.page")
let myapplication_pages_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_detail_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Detail.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Detail.page")
let myapplication_pages_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_edit_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Edit.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Edit.page")
let myapplication_pages_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_detail_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Detail.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Detail.page")
let myapplication_pages_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_edit_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Edit.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Edit.page")
let myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_create_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Create.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Create.page")
let myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_detail_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Detail.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Detail.page")
let myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_edit_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Edit.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Edit.page")
let myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_list_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_List.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_List.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_create_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Create.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Create.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_detail_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Detail.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Detail.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_edit_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Edit.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Edit.page")
let myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_list_page = __webpack_require__(/*! ./MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_List.page */ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_List.page")
let myapplication_pages_main_page = __webpack_require__(/*! ./MyApplication/Pages/Main.page */ "./build.definitions/MyApplication/Pages/Main.page")
let myapplication_rules_application_appupdatefailure_js = __webpack_require__(/*! ./MyApplication/Rules/Application/AppUpdateFailure.js */ "./build.definitions/MyApplication/Rules/Application/AppUpdateFailure.js")
let myapplication_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./MyApplication/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/MyApplication/Rules/Application/AppUpdateSuccess.js")
let myapplication_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./MyApplication/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/MyApplication/Rules/Application/ClientIsMultiUserMode.js")
let myapplication_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./MyApplication/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/MyApplication/Rules/Application/GetClientSupportVersions.js")
let myapplication_rules_application_getclientversion_js = __webpack_require__(/*! ./MyApplication/Rules/Application/GetClientVersion.js */ "./build.definitions/MyApplication/Rules/Application/GetClientVersion.js")
let myapplication_rules_application_onwillupdate_js = __webpack_require__(/*! ./MyApplication/Rules/Application/OnWillUpdate.js */ "./build.definitions/MyApplication/Rules/Application/OnWillUpdate.js")
let myapplication_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./MyApplication/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/MyApplication/Rules/Application/ResetAppSettingsAndLogout.js")
let myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_cancel_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_Cancel.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_Cancel.js")
let myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_createentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.js")
let myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_deleteconfirmation_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteConfirmation.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteConfirmation.js")
let myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_updateentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.js")
let myapplication_rules_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_edit_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.js")
let myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_cancel_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_Cancel.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_Cancel.js")
let myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_deleteconfirmation_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteConfirmation.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteConfirmation.js")
let myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_updateentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.js")
let myapplication_rules_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_edit_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.js")
let myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_cancel_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_Cancel.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_Cancel.js")
let myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_deleteconfirmation_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteConfirmation.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteConfirmation.js")
let myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_updateentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.js")
let myapplication_rules_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_edit_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.js")
let myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_cancel_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_Cancel.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_Cancel.js")
let myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_createentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.js")
let myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_deleteconfirmation_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteConfirmation.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteConfirmation.js")
let myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_updateentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.js")
let myapplication_rules_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_edit_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_cancel_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_Cancel.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_Cancel.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_deleteconfirmation_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteConfirmation.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteConfirmation.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_updateentity_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressemailaddress_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressfaxnumber_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addresshomepageurl_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressphonenumber_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.js")
let myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_edit_js = __webpack_require__(/*! ./MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.js */ "./build.definitions/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.js")
let myapplication_rules_logging_loglevels_js = __webpack_require__(/*! ./MyApplication/Rules/Logging/LogLevels.js */ "./build.definitions/MyApplication/Rules/Logging/LogLevels.js")
let myapplication_rules_logging_settracecategories_js = __webpack_require__(/*! ./MyApplication/Rules/Logging/SetTraceCategories.js */ "./build.definitions/MyApplication/Rules/Logging/SetTraceCategories.js")
let myapplication_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./MyApplication/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/MyApplication/Rules/Logging/SetUserLogLevel.js")
let myapplication_rules_logging_togglelogging_js = __webpack_require__(/*! ./MyApplication/Rules/Logging/ToggleLogging.js */ "./build.definitions/MyApplication/Rules/Logging/ToggleLogging.js")
let myapplication_rules_logging_tracecategories_js = __webpack_require__(/*! ./MyApplication/Rules/Logging/TraceCategories.js */ "./build.definitions/MyApplication/Rules/Logging/TraceCategories.js")
let myapplication_rules_logging_userlogsetting_js = __webpack_require__(/*! ./MyApplication/Rules/Logging/UserLogSetting.js */ "./build.definitions/MyApplication/Rules/Logging/UserLogSetting.js")
let myapplication_rules_service_initialize_js = __webpack_require__(/*! ./MyApplication/Rules/Service/Initialize.js */ "./build.definitions/MyApplication/Rules/Service/Initialize.js")
let myapplication_services_businesspartnera2x_service = __webpack_require__(/*! ./MyApplication/Services/BusinessPartnerA2X.service */ "./build.definitions/MyApplication/Services/BusinessPartnerA2X.service")
let myapplication_styles_styles_css = __webpack_require__(/*! ./MyApplication/Styles/Styles.css */ "./build.definitions/MyApplication/Styles/Styles.css")
let myapplication_styles_styles_json = __webpack_require__(/*! ./MyApplication/Styles/Styles.json */ "./build.definitions/MyApplication/Styles/Styles.json")
let myapplication_styles_styles_less = __webpack_require__(/*! ./MyApplication/Styles/Styles.less */ "./build.definitions/MyApplication/Styles/Styles.less")
let myapplication_styles_styles_nss = __webpack_require__(/*! ./MyApplication/Styles/Styles.nss */ "./build.definitions/MyApplication/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	myapplication_actions_application_appupdate_action : myapplication_actions_application_appupdate_action,
	myapplication_actions_application_appupdatefailuremessage_action : myapplication_actions_application_appupdatefailuremessage_action,
	myapplication_actions_application_appupdateprogressbanner_action : myapplication_actions_application_appupdateprogressbanner_action,
	myapplication_actions_application_appupdatesuccessmessage_action : myapplication_actions_application_appupdatesuccessmessage_action,
	myapplication_actions_application_logout_action : myapplication_actions_application_logout_action,
	myapplication_actions_application_navtoabout_action : myapplication_actions_application_navtoabout_action,
	myapplication_actions_application_navtoactivitylog_action : myapplication_actions_application_navtoactivitylog_action,
	myapplication_actions_application_navtosupport_action : myapplication_actions_application_navtosupport_action,
	myapplication_actions_application_onwillupdate_action : myapplication_actions_application_onwillupdate_action,
	myapplication_actions_application_reset_action : myapplication_actions_application_reset_action,
	myapplication_actions_application_resetmessage_action : myapplication_actions_application_resetmessage_action,
	myapplication_actions_application_usermenupopover_action : myapplication_actions_application_usermenupopover_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_createentity_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_createentity_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_deleteentity_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_deleteentity_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_updateentity_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_updateentity_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_create_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_create_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_detail_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_detail_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_edit_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_edit_action,
	myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_list_action : myapplication_actions_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_list_action,
	myapplication_actions_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_deleteentity_action : myapplication_actions_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_deleteentity_action,
	myapplication_actions_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_updateentity_action : myapplication_actions_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_updateentity_action,
	myapplication_actions_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_detail_action : myapplication_actions_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_detail_action,
	myapplication_actions_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_edit_action : myapplication_actions_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_edit_action,
	myapplication_actions_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_deleteentity_action : myapplication_actions_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_deleteentity_action,
	myapplication_actions_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_updateentity_action : myapplication_actions_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_updateentity_action,
	myapplication_actions_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_detail_action : myapplication_actions_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_detail_action,
	myapplication_actions_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_edit_action : myapplication_actions_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_edit_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_createentity_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_createentity_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_deleteentity_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_deleteentity_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_updateentity_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_updateentity_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_create_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_create_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_detail_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_detail_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_edit_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_edit_action,
	myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_list_action : myapplication_actions_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_list_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createentity_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createentity_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_deleteentity_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_deleteentity_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_detailpopover_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_detailpopover_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_updateentity_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_updateentity_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_create_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_create_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressemailaddress_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressemailaddress_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressfaxnumber_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressfaxnumber_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addresshomepageurl_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addresshomepageurl_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressphonenumber_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressphonenumber_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_detail_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_detail_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_edit_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_edit_action,
	myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_list_action : myapplication_actions_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_list_action,
	myapplication_actions_businesspartnera2x_service_initializeonline_action : myapplication_actions_businesspartnera2x_service_initializeonline_action,
	myapplication_actions_businesspartnera2x_service_initializeonlinefailuremessage_action : myapplication_actions_businesspartnera2x_service_initializeonlinefailuremessage_action,
	myapplication_actions_closemodalpage_cancel_action : myapplication_actions_closemodalpage_cancel_action,
	myapplication_actions_closemodalpage_complete_action : myapplication_actions_closemodalpage_complete_action,
	myapplication_actions_closepage_action : myapplication_actions_closepage_action,
	myapplication_actions_createentityfailuremessage_action : myapplication_actions_createentityfailuremessage_action,
	myapplication_actions_createentitysuccessmessage_action : myapplication_actions_createentitysuccessmessage_action,
	myapplication_actions_deleteconfirmation_action : myapplication_actions_deleteconfirmation_action,
	myapplication_actions_deleteentityfailuremessage_action : myapplication_actions_deleteentityfailuremessage_action,
	myapplication_actions_deleteentitysuccessmessage_action : myapplication_actions_deleteentitysuccessmessage_action,
	myapplication_actions_draftdiscardentity_action : myapplication_actions_draftdiscardentity_action,
	myapplication_actions_drafteditentity_action : myapplication_actions_drafteditentity_action,
	myapplication_actions_draftsaveentity_action : myapplication_actions_draftsaveentity_action,
	myapplication_actions_genericbannermessage_action : myapplication_actions_genericbannermessage_action,
	myapplication_actions_genericmessagebox_action : myapplication_actions_genericmessagebox_action,
	myapplication_actions_genericnavigation_action : myapplication_actions_genericnavigation_action,
	myapplication_actions_generictoastmessage_action : myapplication_actions_generictoastmessage_action,
	myapplication_actions_logging_loguploadfailure_action : myapplication_actions_logging_loguploadfailure_action,
	myapplication_actions_logging_loguploadsuccessful_action : myapplication_actions_logging_loguploadsuccessful_action,
	myapplication_actions_logging_uploadlog_action : myapplication_actions_logging_uploadlog_action,
	myapplication_actions_logging_uploadlogprogress_action : myapplication_actions_logging_uploadlogprogress_action,
	myapplication_actions_updateentityfailuremessage_action : myapplication_actions_updateentityfailuremessage_action,
	myapplication_actions_updateentitysuccessmessage_action : myapplication_actions_updateentitysuccessmessage_action,
	myapplication_globals_application_appdefinition_version_global : myapplication_globals_application_appdefinition_version_global,
	myapplication_globals_application_applicationname_global : myapplication_globals_application_applicationname_global,
	myapplication_globals_application_supportemail_global : myapplication_globals_application_supportemail_global,
	myapplication_globals_application_supportphone_global : myapplication_globals_application_supportphone_global,
	myapplication_i18n_i18n_properties : myapplication_i18n_i18n_properties,
	myapplication_jsconfig_json : myapplication_jsconfig_json,
	myapplication_pages_application_about_page : myapplication_pages_application_about_page,
	myapplication_pages_application_support_page : myapplication_pages_application_support_page,
	myapplication_pages_application_useractivitylog_page : myapplication_pages_application_useractivitylog_page,
	myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_create_page : myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_create_page,
	myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_detail_page : myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_detail_page,
	myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_edit_page : myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_edit_page,
	myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_list_page : myapplication_pages_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_list_page,
	myapplication_pages_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_detail_page : myapplication_pages_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_detail_page,
	myapplication_pages_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_edit_page : myapplication_pages_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_edit_page,
	myapplication_pages_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_detail_page : myapplication_pages_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_detail_page,
	myapplication_pages_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_edit_page : myapplication_pages_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_edit_page,
	myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_create_page : myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_create_page,
	myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_detail_page : myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_detail_page,
	myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_edit_page : myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_edit_page,
	myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_list_page : myapplication_pages_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_list_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_create_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_create_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_detail_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_detail_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_edit_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_edit_page,
	myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_list_page : myapplication_pages_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_list_page,
	myapplication_pages_main_page : myapplication_pages_main_page,
	myapplication_rules_application_appupdatefailure_js : myapplication_rules_application_appupdatefailure_js,
	myapplication_rules_application_appupdatesuccess_js : myapplication_rules_application_appupdatesuccess_js,
	myapplication_rules_application_clientismultiusermode_js : myapplication_rules_application_clientismultiusermode_js,
	myapplication_rules_application_getclientsupportversions_js : myapplication_rules_application_getclientsupportversions_js,
	myapplication_rules_application_getclientversion_js : myapplication_rules_application_getclientversion_js,
	myapplication_rules_application_onwillupdate_js : myapplication_rules_application_onwillupdate_js,
	myapplication_rules_application_resetappsettingsandlogout_js : myapplication_rules_application_resetappsettingsandlogout_js,
	myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_cancel_js : myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_cancel_js,
	myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_createentity_js : myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_createentity_js,
	myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_deleteconfirmation_js : myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_deleteconfirmation_js,
	myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_updateentity_js : myapplication_rules_businesspartnera2x_a_addressemailaddress_a_addressemailaddress_updateentity_js,
	myapplication_rules_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_edit_js : myapplication_rules_businesspartnera2x_a_addressemailaddress_navtoa_addressemailaddress_edit_js,
	myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_cancel_js : myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_cancel_js,
	myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_deleteconfirmation_js : myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_deleteconfirmation_js,
	myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_updateentity_js : myapplication_rules_businesspartnera2x_a_addressfaxnumber_a_addressfaxnumber_updateentity_js,
	myapplication_rules_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_edit_js : myapplication_rules_businesspartnera2x_a_addressfaxnumber_navtoa_addressfaxnumber_edit_js,
	myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_cancel_js : myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_cancel_js,
	myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_deleteconfirmation_js : myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_deleteconfirmation_js,
	myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_updateentity_js : myapplication_rules_businesspartnera2x_a_addresshomepageurl_a_addresshomepageurl_updateentity_js,
	myapplication_rules_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_edit_js : myapplication_rules_businesspartnera2x_a_addresshomepageurl_navtoa_addresshomepageurl_edit_js,
	myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_cancel_js : myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_cancel_js,
	myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_createentity_js : myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_createentity_js,
	myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_deleteconfirmation_js : myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_deleteconfirmation_js,
	myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_updateentity_js : myapplication_rules_businesspartnera2x_a_addressphonenumber_a_addressphonenumber_updateentity_js,
	myapplication_rules_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_edit_js : myapplication_rules_businesspartnera2x_a_addressphonenumber_navtoa_addressphonenumber_edit_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_cancel_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_cancel_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressemailaddress_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressfaxnumber_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addresshomepageurl_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createa_addressphonenumber_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createentity_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_createentity_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_deleteconfirmation_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_deleteconfirmation_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_updateentity_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_a_bpcontacttoaddress_updateentity_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressemailaddress_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressemailaddress_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressfaxnumber_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressfaxnumber_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addresshomepageurl_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addresshomepageurl_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressphonenumber_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_createa_addressphonenumber_js,
	myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_edit_js : myapplication_rules_businesspartnera2x_a_bpcontacttoaddress_navtoa_bpcontacttoaddress_edit_js,
	myapplication_rules_logging_loglevels_js : myapplication_rules_logging_loglevels_js,
	myapplication_rules_logging_settracecategories_js : myapplication_rules_logging_settracecategories_js,
	myapplication_rules_logging_setuserloglevel_js : myapplication_rules_logging_setuserloglevel_js,
	myapplication_rules_logging_togglelogging_js : myapplication_rules_logging_togglelogging_js,
	myapplication_rules_logging_tracecategories_js : myapplication_rules_logging_tracecategories_js,
	myapplication_rules_logging_userlogsetting_js : myapplication_rules_logging_userlogsetting_js,
	myapplication_rules_service_initialize_js : myapplication_rules_service_initialize_js,
	myapplication_services_businesspartnera2x_service : myapplication_services_businesspartnera2x_service,
	myapplication_styles_styles_css : myapplication_styles_styles_css,
	myapplication_styles_styles_json : myapplication_styles_styles_json,
	myapplication_styles_styles_less : myapplication_styles_styles_less,
	myapplication_styles_styles_nss : myapplication_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/MyApplication/Styles/Styles.css":
/*!***********************************************************!*\
  !*** ./build.definitions/MyApplication/Styles/Styles.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/MyApplication/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MyApplication/Styles/Styles.less":
/*!************************************************************!*\
  !*** ./build.definitions/MyApplication/Styles/Styles.less ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/MyApplication/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MyApplication/Styles/Styles.nss":
/*!***********************************************************!*\
  !*** ./build.definitions/MyApplication/Styles/Styles.nss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/Application/About.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/Application/About.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/MyApplication/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/MyApplication/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/MyApplication/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/MyApplication/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MyApplication/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/Application/Support.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/Application/Support.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/MyApplication/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/MyApplication/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/MyApplication/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/MyApplication/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MyApplication/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/Application/UserActivityLog.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/Application/UserActivityLog.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/MyApplication/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/MyApplication/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/MyApplication/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/MyApplication/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/MyApplication/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/MyApplication/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/MyApplication/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/MyApplication/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Create.page":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Create.page ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_AddressEmailAddress_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultEmailAddress","Caption":"IsDefaultEmailAddress","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"EmailAddress","_Name":"EmailAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SearchEmailAddress","_Name":"SearchEmailAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_AddressEmailAddress_Create"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Detail.page":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Detail.page ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressEmailAddress","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_AddressEmailAddress_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{AddressID}","Subhead":"{Person}","BodyText":"","Footnote":"{IsDefaultEmailAddress}","Description":"{OrdinalNumber}","StatusText":"{EmailAddress}","StatusImage":"","SubstatusImage":"","SubstatusText":"{SearchEmailAddress}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"AddressID","Value":"{AddressID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Person","Value":"{Person}","_Type":"KeyValue.Type.Item"},{"KeyName":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"IsDefaultEmailAddress","Value":"{IsDefaultEmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"EmailAddress","Value":"{EmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"SearchEmailAddress","Value":"{SearchEmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_AddressEmailAddress_Detail"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Edit.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Edit.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressEmailAddress","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_A_AddressEmailAddress_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","Value":"{AddressID}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Person","_Name":"Person","Value":"{Person}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"_Name":"IsDefaultEmailAddress","Caption":"IsDefaultEmailAddress","Value":"{IsDefaultEmailAddress}","_Type":"Control.Type.FormCell.Switch"},{"Caption":"EmailAddress","_Name":"EmailAddress","Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SearchEmailAddress","_Name":"SearchEmailAddress","Value":"{SearchEmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_AddressEmailAddress_Edit"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_List.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_List.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_AddressEmailAddress)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Detail.action","StatusImage":"","Title":"{AddressID}","Footnote":"{IsDefaultEmailAddress}","PreserveIconStackSpacing":false,"StatusText":"{EmailAddress}","Subhead":"{Person}","SubstatusText":"{SearchEmailAddress}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"A_AddressEmailAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_AddressEmailAddress_List"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Detail.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Detail.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressFaxNumber","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_AddressFaxNumber_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{AddressID}","Subhead":"{Person}","BodyText":"","Footnote":"{IsDefaultFaxNumber}","Description":"{OrdinalNumber}","StatusText":"{FaxCountry}","StatusImage":"","SubstatusImage":"","SubstatusText":"{FaxNumber}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"AddressID","Value":"{AddressID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Person","Value":"{Person}","_Type":"KeyValue.Type.Item"},{"KeyName":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"IsDefaultFaxNumber","Value":"{IsDefaultFaxNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"FaxCountry","Value":"{FaxCountry}","_Type":"KeyValue.Type.Item"},{"KeyName":"FaxNumber","Value":"{FaxNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"FaxNumberExtension","Value":"{FaxNumberExtension}","_Type":"KeyValue.Type.Item"},{"KeyName":"InternationalFaxNumber","Value":"{InternationalFaxNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_AddressFaxNumber_Detail"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Edit.page":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Edit.page ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressFaxNumber","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_A_AddressFaxNumber_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","Value":"{AddressID}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Person","_Name":"Person","Value":"{Person}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"_Name":"IsDefaultFaxNumber","Caption":"IsDefaultFaxNumber","Value":"{IsDefaultFaxNumber}","_Type":"Control.Type.FormCell.Switch"},{"Caption":"FaxCountry","_Name":"FaxCountry","Value":"{FaxCountry}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FaxNumber","_Name":"FaxNumber","Value":"{FaxNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FaxNumberExtension","_Name":"FaxNumberExtension","Value":"{FaxNumberExtension}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalFaxNumber","_Name":"InternationalFaxNumber","Value":"{InternationalFaxNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_AddressFaxNumber_Edit"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Detail.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Detail.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressHomePageURL","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_AddressHomePageURL_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{AddressID}","Subhead":"{Person}","BodyText":"","Footnote":"{ValidityStartDate}","Description":"{OrdinalNumber}","StatusText":"{IsDefaultURLAddress}","StatusImage":"","SubstatusImage":"","SubstatusText":"{SearchURLAddress}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"AddressID","Value":"{AddressID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Person","Value":"{Person}","_Type":"KeyValue.Type.Item"},{"KeyName":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"ValidityStartDate","Value":"{ValidityStartDate}","_Type":"KeyValue.Type.Item"},{"KeyName":"IsDefaultURLAddress","Value":"{IsDefaultURLAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"SearchURLAddress","Value":"{SearchURLAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"KeyValue.Type.Item"},{"KeyName":"URLFieldLength","Value":"{URLFieldLength}","_Type":"KeyValue.Type.Item"},{"KeyName":"WebsiteURL","Value":"{WebsiteURL}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_AddressHomePageURL_Detail"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Edit.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Edit.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressHomePageURL","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_A_AddressHomePageURL_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","Value":"{AddressID}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Person","_Name":"Person","Value":"{Person}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Mode":"Date","_Name":"ValidityStartDate","Value":"{ValidityStartDate}","Caption":"ValidityStartDate","_Type":"Control.Type.FormCell.DatePicker","IsEditable":false},{"_Name":"IsDefaultURLAddress","Caption":"IsDefaultURLAddress","Value":"{IsDefaultURLAddress}","_Type":"Control.Type.FormCell.Switch","IsEditable":false},{"Caption":"SearchURLAddress","_Name":"SearchURLAddress","Value":"{SearchURLAddress}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"URLFieldLength","_Name":"URLFieldLength","Value":"{URLFieldLength}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WebsiteURL","_Name":"WebsiteURL","Value":"{WebsiteURL}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_AddressHomePageURL_Edit"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Create.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Create.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_AddressPhoneNumber_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DestinationLocationCountry","_Name":"DestinationLocationCountry","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultPhoneNumber","Caption":"IsDefaultPhoneNumber","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"PhoneNumber","_Name":"PhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumberExtension","_Name":"PhoneNumberExtension","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalPhoneNumber","_Name":"InternationalPhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumberType","_Name":"PhoneNumberType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_AddressPhoneNumber_Create"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Detail.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Detail.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressPhoneNumber","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_AddressPhoneNumber_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{AddressID}","Subhead":"{Person}","BodyText":"","Footnote":"{DestinationLocationCountry}","Description":"{OrdinalNumber}","StatusText":"{IsDefaultPhoneNumber}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PhoneNumber}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"AddressID","Value":"{AddressID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Person","Value":"{Person}","_Type":"KeyValue.Type.Item"},{"KeyName":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"DestinationLocationCountry","Value":"{DestinationLocationCountry}","_Type":"KeyValue.Type.Item"},{"KeyName":"IsDefaultPhoneNumber","Value":"{IsDefaultPhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PhoneNumber","Value":"{PhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PhoneNumberExtension","Value":"{PhoneNumberExtension}","_Type":"KeyValue.Type.Item"},{"KeyName":"InternationalPhoneNumber","Value":"{InternationalPhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PhoneNumberType","Value":"{PhoneNumberType}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_AddressPhoneNumber_Detail"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Edit.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Edit.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressPhoneNumber","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_A_AddressPhoneNumber_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","Value":"{AddressID}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Person","_Name":"Person","Value":"{Person}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","Value":"{OrdinalNumber}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"DestinationLocationCountry","_Name":"DestinationLocationCountry","Value":"{DestinationLocationCountry}","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultPhoneNumber","Caption":"IsDefaultPhoneNumber","Value":"{IsDefaultPhoneNumber}","_Type":"Control.Type.FormCell.Switch"},{"Caption":"PhoneNumber","_Name":"PhoneNumber","Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumberExtension","_Name":"PhoneNumberExtension","Value":"{PhoneNumberExtension}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalPhoneNumber","_Name":"InternationalPhoneNumber","Value":"{InternationalPhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumberType","_Name":"PhoneNumberType","Value":"{PhoneNumberType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","Value":"{AddressCommunicationRemarkText}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_AddressPhoneNumber_Edit"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_List.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_List.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_AddressPhoneNumber)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action","StatusImage":"","Title":"{AddressID}","Footnote":"{DestinationLocationCountry}","PreserveIconStackSpacing":false,"StatusText":"{IsDefaultPhoneNumber}","Subhead":"{Person}","SubstatusText":"{PhoneNumber}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"A_AddressPhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_AddressPhoneNumber_List"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Create.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Create.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_BPContactToAddress_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"RelationshipNumber","_Name":"RelationshipNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerCompany","_Name":"BusinessPartnerCompany","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BusinessPartnerPerson","_Name":"BusinessPartnerPerson","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"ValidityEndDate","Caption":"ValidityEndDate","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressNumber","_Name":"AddressNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AdditionalStreetPrefixName","_Name":"AdditionalStreetPrefixName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AdditionalStreetSuffixName","_Name":"AdditionalStreetSuffixName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressTimeZone","_Name":"AddressTimeZone","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CareOfName","_Name":"CareOfName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CityCode","_Name":"CityCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CityName","_Name":"CityName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CompanyPostalCode","_Name":"CompanyPostalCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"County","_Name":"County","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryServiceNumber","_Name":"DeliveryServiceNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryServiceTypeCode","_Name":"DeliveryServiceTypeCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"District","_Name":"District","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FormOfAddress","_Name":"FormOfAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FullName","_Name":"FullName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HomeCityName","_Name":"HomeCityName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HouseNumber","_Name":"HouseNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HouseNumberSupplementText","_Name":"HouseNumberSupplementText","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Language","_Name":"Language","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBox","_Name":"POBox","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxDeviatingCityName","_Name":"POBoxDeviatingCityName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxDeviatingCountry","_Name":"POBoxDeviatingCountry","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxDeviatingRegion","_Name":"POBoxDeviatingRegion","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"POBoxIsWithoutNumber","Caption":"POBoxIsWithoutNumber","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"POBoxLobbyName","_Name":"POBoxLobbyName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxPostalCode","_Name":"POBoxPostalCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PostalCode","_Name":"PostalCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PrfrdCommMediumType","_Name":"PrfrdCommMediumType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Region","_Name":"Region","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetName","_Name":"StreetName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetPrefixName","_Name":"StreetPrefixName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetSuffixName","_Name":"StreetSuffixName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"TaxJurisdiction","_Name":"TaxJurisdiction","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"TransportZone","_Name":"TransportZone","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressRepresentationCode","_Name":"AddressRepresentationCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactPersonBuilding","_Name":"ContactPersonBuilding","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactPersonPrfrdCommMedium","_Name":"ContactPersonPrfrdCommMedium","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactRelationshipDepartment","_Name":"ContactRelationshipDepartment","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactRelationshipFunction","_Name":"ContactRelationshipFunction","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CorrespondenceShortName","_Name":"CorrespondenceShortName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Floor","_Name":"Floor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InhouseMail","_Name":"InhouseMail","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultAddress","Caption":"IsDefaultAddress","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"RoomNumber","_Name":"RoomNumber","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_Create"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.page":
/*!*********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.page ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_AddressEmailAddress)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultEmailAddress","Caption":"IsDefaultEmailAddress","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"EmailAddress","_Name":"EmailAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SearchEmailAddress","_Name":"SearchEmailAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_CreateA_AddressEmailAddress"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.page":
/*!******************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.page ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_AddressFaxNumber)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultFaxNumber","Caption":"IsDefaultFaxNumber","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"FaxCountry","_Name":"FaxCountry","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FaxNumber","_Name":"FaxNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FaxNumberExtension","_Name":"FaxNumberExtension","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalFaxNumber","_Name":"InternationalFaxNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_CreateA_AddressFaxNumber"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.page":
/*!********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.page ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_AddressHomePageURL)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"ValidityStartDate","Caption":"ValidityStartDate","_Type":"Control.Type.FormCell.DatePicker"},{"_Name":"IsDefaultURLAddress","Caption":"IsDefaultURLAddress","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"SearchURLAddress","_Name":"SearchURLAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"URLFieldLength","KeyboardType":"Number","_Name":"URLFieldLength","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WebsiteURL","_Name":"WebsiteURL","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_CreateA_AddressHomePageURL"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.page":
/*!********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.page ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_A_AddressPhoneNumber)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"AddressID","_Name":"AddressID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OrdinalNumber","_Name":"OrdinalNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DestinationLocationCountry","_Name":"DestinationLocationCountry","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultPhoneNumber","Caption":"IsDefaultPhoneNumber","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"PhoneNumber","_Name":"PhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumberExtension","_Name":"PhoneNumberExtension","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalPhoneNumber","_Name":"InternationalPhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PhoneNumberType","_Name":"PhoneNumberType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressCommunicationRemarkText","_Name":"AddressCommunicationRemarkText","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_CreateA_AddressPhoneNumber"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Detail.page":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Detail.page ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_BPContactToAddress","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_BPContactToAddress_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{AdditionalStreetPrefixName}","Subhead":"{RelationshipNumber}","BodyText":"","Footnote":"{BusinessPartnerPerson}","Description":"{BusinessPartnerCompany}","StatusText":"{ValidityEndDate}","StatusImage":"","SubstatusImage":"","SubstatusText":"{AddressID}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"RelationshipNumber","Value":"{RelationshipNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"BusinessPartnerCompany","Value":"{BusinessPartnerCompany}","_Type":"KeyValue.Type.Item"},{"KeyName":"BusinessPartnerPerson","Value":"{BusinessPartnerPerson}","_Type":"KeyValue.Type.Item"},{"KeyName":"ValidityEndDate","Value":"{ValidityEndDate}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressID","Value":"{AddressID}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressNumber","Value":"{AddressNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"AdditionalStreetPrefixName","Value":"{AdditionalStreetPrefixName}","_Type":"KeyValue.Type.Item"},{"KeyName":"AdditionalStreetSuffixName","Value":"{AdditionalStreetSuffixName}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressTimeZone","Value":"{AddressTimeZone}","_Type":"KeyValue.Type.Item"},{"KeyName":"CareOfName","Value":"{CareOfName}","_Type":"KeyValue.Type.Item"},{"KeyName":"CityCode","Value":"{CityCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"CityName","Value":"{CityName}","_Type":"KeyValue.Type.Item"},{"KeyName":"CompanyPostalCode","Value":"{CompanyPostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"County","Value":"{County}","_Type":"KeyValue.Type.Item"},{"KeyName":"DeliveryServiceNumber","Value":"{DeliveryServiceNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"DeliveryServiceTypeCode","Value":"{DeliveryServiceTypeCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"District","Value":"{District}","_Type":"KeyValue.Type.Item"},{"KeyName":"FormOfAddress","Value":"{FormOfAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"FullName","Value":"{FullName}","_Type":"KeyValue.Type.Item"},{"KeyName":"HomeCityName","Value":"{HomeCityName}","_Type":"KeyValue.Type.Item"},{"KeyName":"HouseNumber","Value":"{HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"HouseNumberSupplementText","Value":"{HouseNumberSupplementText}","_Type":"KeyValue.Type.Item"},{"KeyName":"Language","Value":"{Language}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBox","Value":"{POBox}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBoxDeviatingCityName","Value":"{POBoxDeviatingCityName}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBoxDeviatingCountry","Value":"{POBoxDeviatingCountry}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBoxDeviatingRegion","Value":"{POBoxDeviatingRegion}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBoxIsWithoutNumber","Value":"{POBoxIsWithoutNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBoxLobbyName","Value":"{POBoxLobbyName}","_Type":"KeyValue.Type.Item"},{"KeyName":"POBoxPostalCode","Value":"{POBoxPostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Person","Value":"{Person}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{PostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"PrfrdCommMediumType","Value":"{PrfrdCommMediumType}","_Type":"KeyValue.Type.Item"},{"KeyName":"Region","Value":"{Region}","_Type":"KeyValue.Type.Item"},{"KeyName":"StreetName","Value":"{StreetName}","_Type":"KeyValue.Type.Item"},{"KeyName":"StreetPrefixName","Value":"{StreetPrefixName}","_Type":"KeyValue.Type.Item"},{"KeyName":"StreetSuffixName","Value":"{StreetSuffixName}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxJurisdiction","Value":"{TaxJurisdiction}","_Type":"KeyValue.Type.Item"},{"KeyName":"TransportZone","Value":"{TransportZone}","_Type":"KeyValue.Type.Item"},{"KeyName":"AddressRepresentationCode","Value":"{AddressRepresentationCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"ContactPersonBuilding","Value":"{ContactPersonBuilding}","_Type":"KeyValue.Type.Item"},{"KeyName":"ContactPersonPrfrdCommMedium","Value":"{ContactPersonPrfrdCommMedium}","_Type":"KeyValue.Type.Item"},{"KeyName":"ContactRelationshipDepartment","Value":"{ContactRelationshipDepartment}","_Type":"KeyValue.Type.Item"},{"KeyName":"ContactRelationshipFunction","Value":"{ContactRelationshipFunction}","_Type":"KeyValue.Type.Item"},{"KeyName":"CorrespondenceShortName","Value":"{CorrespondenceShortName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Floor","Value":"{Floor}","_Type":"KeyValue.Type.Item"},{"KeyName":"InhouseMail","Value":"{InhouseMail}","_Type":"KeyValue.Type.Item"},{"KeyName":"IsDefaultAddress","Value":"{IsDefaultAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"RoomNumber","Value":"{RoomNumber}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"to_EmailAddress","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{AddressID}","Footnote":"{IsDefaultEmailAddress}","PreserveIconStackSpacing":false,"StatusText":"{EmailAddress}","Subhead":"{Person}","SubstatusText":"{SearchEmailAddress}","OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/to_EmailAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"to_FaxNumber","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{AddressID}","Footnote":"{IsDefaultFaxNumber}","PreserveIconStackSpacing":false,"StatusText":"{FaxCountry}","Subhead":"{Person}","SubstatusText":"{FaxNumber}","OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/to_FaxNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"to_MobilePhoneNumber","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{AddressID}","Footnote":"{DestinationLocationCountry}","PreserveIconStackSpacing":false,"StatusText":"{IsDefaultPhoneNumber}","Subhead":"{Person}","SubstatusText":"{PhoneNumber}","OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/to_MobilePhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"to_PhoneNumber","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{AddressID}","Footnote":"{DestinationLocationCountry}","PreserveIconStackSpacing":false,"StatusText":"{IsDefaultPhoneNumber}","Subhead":"{Person}","SubstatusText":"{PhoneNumber}","OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/to_PhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"to_URLAddress","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{OrdinalNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{AddressID}","Footnote":"{ValidityStartDate}","PreserveIconStackSpacing":false,"StatusText":"{IsDefaultURLAddress}","Subhead":"{Person}","SubstatusText":"{SearchURLAddress}","OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/to_URLAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["A_AddressEmailAddress","A_AddressFaxNumber","A_AddressPhoneNumber","A_AddressPhoneNumber","A_AddressHomePageURL"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_Detail"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Edit.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Edit.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_BPContactToAddress","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_A_BPContactToAddress_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"RelationshipNumber","_Name":"RelationshipNumber","Value":"{RelationshipNumber}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"BusinessPartnerCompany","_Name":"BusinessPartnerCompany","Value":"{BusinessPartnerCompany}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"BusinessPartnerPerson","_Name":"BusinessPartnerPerson","Value":"{BusinessPartnerPerson}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Mode":"Date","_Name":"ValidityEndDate","Value":"{ValidityEndDate}","Caption":"ValidityEndDate","_Type":"Control.Type.FormCell.DatePicker","IsEditable":false},{"Caption":"AddressID","_Name":"AddressID","Value":"{AddressID}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"AddressNumber","_Name":"AddressNumber","Value":"{AddressNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AdditionalStreetPrefixName","_Name":"AdditionalStreetPrefixName","Value":"{AdditionalStreetPrefixName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AdditionalStreetSuffixName","_Name":"AdditionalStreetSuffixName","Value":"{AdditionalStreetSuffixName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressTimeZone","_Name":"AddressTimeZone","Value":"{AddressTimeZone}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CareOfName","_Name":"CareOfName","Value":"{CareOfName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CityCode","_Name":"CityCode","Value":"{CityCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CityName","_Name":"CityName","Value":"{CityName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CompanyPostalCode","_Name":"CompanyPostalCode","Value":"{CompanyPostalCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","Value":"{Country}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"County","_Name":"County","Value":"{County}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryServiceNumber","_Name":"DeliveryServiceNumber","Value":"{DeliveryServiceNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DeliveryServiceTypeCode","_Name":"DeliveryServiceTypeCode","Value":"{DeliveryServiceTypeCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"District","_Name":"District","Value":"{District}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FormOfAddress","_Name":"FormOfAddress","Value":"{FormOfAddress}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"FullName","_Name":"FullName","Value":"{FullName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HomeCityName","_Name":"HomeCityName","Value":"{HomeCityName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HouseNumber","_Name":"HouseNumber","Value":"{HouseNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HouseNumberSupplementText","_Name":"HouseNumberSupplementText","Value":"{HouseNumberSupplementText}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Language","_Name":"Language","Value":"{Language}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBox","_Name":"POBox","Value":"{POBox}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxDeviatingCityName","_Name":"POBoxDeviatingCityName","Value":"{POBoxDeviatingCityName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxDeviatingCountry","_Name":"POBoxDeviatingCountry","Value":"{POBoxDeviatingCountry}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxDeviatingRegion","_Name":"POBoxDeviatingRegion","Value":"{POBoxDeviatingRegion}","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"POBoxIsWithoutNumber","Caption":"POBoxIsWithoutNumber","Value":"{POBoxIsWithoutNumber}","_Type":"Control.Type.FormCell.Switch"},{"Caption":"POBoxLobbyName","_Name":"POBoxLobbyName","Value":"{POBoxLobbyName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"POBoxPostalCode","_Name":"POBoxPostalCode","Value":"{POBoxPostalCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Person","_Name":"Person","Value":"{Person}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PostalCode","_Name":"PostalCode","Value":"{PostalCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PrfrdCommMediumType","_Name":"PrfrdCommMediumType","Value":"{PrfrdCommMediumType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Region","_Name":"Region","Value":"{Region}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetName","_Name":"StreetName","Value":"{StreetName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetPrefixName","_Name":"StreetPrefixName","Value":"{StreetPrefixName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetSuffixName","_Name":"StreetSuffixName","Value":"{StreetSuffixName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"TaxJurisdiction","_Name":"TaxJurisdiction","Value":"{TaxJurisdiction}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"TransportZone","_Name":"TransportZone","Value":"{TransportZone}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AddressRepresentationCode","_Name":"AddressRepresentationCode","Value":"{AddressRepresentationCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactPersonBuilding","_Name":"ContactPersonBuilding","Value":"{ContactPersonBuilding}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactPersonPrfrdCommMedium","_Name":"ContactPersonPrfrdCommMedium","Value":"{ContactPersonPrfrdCommMedium}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactRelationshipDepartment","_Name":"ContactRelationshipDepartment","Value":"{ContactRelationshipDepartment}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ContactRelationshipFunction","_Name":"ContactRelationshipFunction","Value":"{ContactRelationshipFunction}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CorrespondenceShortName","_Name":"CorrespondenceShortName","Value":"{CorrespondenceShortName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Floor","_Name":"Floor","Value":"{Floor}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InhouseMail","_Name":"InhouseMail","Value":"{InhouseMail}","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"IsDefaultAddress","Caption":"IsDefaultAddress","Value":"{IsDefaultAddress}","_Type":"Control.Type.FormCell.Switch"},{"Caption":"RoomNumber","_Name":"RoomNumber","Value":"{RoomNumber}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_Edit"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_List.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_List.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,A_BPContactToAddress)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{BusinessPartnerCompany}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Detail.action","StatusImage":"","Title":"{AdditionalStreetPrefixName}","Footnote":"{BusinessPartnerPerson}","PreserveIconStackSpacing":false,"StatusText":"{ValidityEndDate}","Subhead":"{RelationshipNumber}","SubstatusText":"{AddressID}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"A_BPContactToAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_BPContactToAddress_List"}

/***/ }),

/***/ "./build.definitions/MyApplication/Pages/Main.page":
/*!*********************************************************!*\
  !*** ./build.definitions/MyApplication/Pages/Main.page ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_BusinessPartnerA2X","AccessoryType":"None","UseTopPadding":true,"Caption":"BusinessPartnerA2X","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_List.action","Alignment":"Center","Title":"A_AddressEmailAddress","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_List.action","Alignment":"Center","Title":"A_AddressPhoneNumber","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_List.action","Alignment":"Center","Title":"A_BPContactToAddress","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"_Name":"SectionButtonTable_BusinessPartnerA2X","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MyApplication/Actions/Application/UserMenuPopover.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Main","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"MyApplication","Version":"/MyApplication/Globals/Application/AppDefinition_Version.global","MainPage":"/MyApplication/Pages/Main.page","OnLaunch":"/MyApplication/Rules/Service/Initialize.js","OnWillUpdate":"/MyApplication/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/MyApplication/Rules/Service/Initialize.js","Styles":"/MyApplication/Styles/Styles.less","Localization":"/MyApplication/i18n/i18n.properties","_SchemaVersion":"24.11","StyleSheets":{"Styles":{"css":"/MyApplication/Styles/Styles.css","ios":"/MyApplication/Styles/Styles.nss","android":"/MyApplication/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/AppUpdate.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/AppUpdate.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/MyApplication/Rules/Application/AppUpdateFailure.js","OnSuccess":"/MyApplication/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/AppUpdateFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/AppUpdateFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/AppUpdateProgressBanner.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/AppUpdateProgressBanner.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MyApplication/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/AppUpdateSuccessMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/AppUpdateSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/Logout.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/Logout.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/NavToAbout.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/NavToAbout.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MyApplication/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/NavToActivityLog.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/NavToActivityLog.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MyApplication/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/NavToSupport.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/NavToSupport.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/MyApplication/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/OnWillUpdate.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/OnWillUpdate.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/Reset.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/Reset.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/ResetMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/ResetMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/MyApplication/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Application/UserMenuPopover.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Application/UserMenuPopover.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/MyApplication/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/MyApplication/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/MyApplication/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/MyApplication/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/MyApplication/Actions/Application/Logout.action","Title":"Logout","Visible":"/MyApplication/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","IsDefaultEmailAddress":"#Control:IsDefaultEmailAddress/#Value","EmailAddress":"#Control:EmailAddress/#Value","SearchEmailAddress":"#Control:SearchEmailAddress/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"Target":{"EntitySet":"A_AddressEmailAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteEntity.action":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_DeleteEntity.action ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"A_AddressEmailAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MyApplication/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.action":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_UpdateEntity.action ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"A_AddressEmailAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","IsDefaultEmailAddress":"#Control:IsDefaultEmailAddress/#Value","EmailAddress":"#Control:EmailAddress/#Value","SearchEmailAddress":"#Control:SearchEmailAddress/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Create.action":
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Create.action ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Detail.action":
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Detail.action ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_List.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_List.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressEmailAddress/A_AddressEmailAddress_List.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteEntity.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_DeleteEntity.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"A_AddressFaxNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MyApplication/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"A_AddressFaxNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","IsDefaultFaxNumber":"#Control:IsDefaultFaxNumber/#Value","FaxCountry":"#Control:FaxCountry/#Value","FaxNumber":"#Control:FaxNumber/#Value","FaxNumberExtension":"#Control:FaxNumberExtension/#Value","InternationalFaxNumber":"#Control:InternationalFaxNumber/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Detail.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Detail.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressFaxNumber/A_AddressFaxNumber_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_DeleteEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"A_AddressHomePageURL","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MyApplication/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"A_AddressHomePageURL","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","ValidityStartDate":"#Control:ValidityStartDate/#Value","IsDefaultURLAddress":"#Control:IsDefaultURLAddress/#Value","SearchURLAddress":"#Control:SearchURLAddress/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value","URLFieldLength":"#Control:URLFieldLength/#Value","WebsiteURL":"#Control:WebsiteURL/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Detail.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Detail.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressHomePageURL/A_AddressHomePageURL_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_CreateEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","DestinationLocationCountry":"#Control:DestinationLocationCountry/#Value","IsDefaultPhoneNumber":"#Control:IsDefaultPhoneNumber/#Value","PhoneNumber":"#Control:PhoneNumber/#Value","PhoneNumberExtension":"#Control:PhoneNumberExtension/#Value","InternationalPhoneNumber":"#Control:InternationalPhoneNumber/#Value","PhoneNumberType":"#Control:PhoneNumberType/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"Target":{"EntitySet":"A_AddressPhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_DeleteEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"A_AddressPhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MyApplication/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/A_AddressPhoneNumber_UpdateEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"A_AddressPhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","DestinationLocationCountry":"#Control:DestinationLocationCountry/#Value","IsDefaultPhoneNumber":"#Control:IsDefaultPhoneNumber/#Value","PhoneNumber":"#Control:PhoneNumber/#Value","PhoneNumberExtension":"#Control:PhoneNumberExtension/#Value","InternationalPhoneNumber":"#Control:InternationalPhoneNumber/#Value","PhoneNumberType":"#Control:PhoneNumberType/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Create.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Create.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Detail.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_List.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_List.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_AddressPhoneNumber/A_AddressPhoneNumber_List.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.action":
/*!*************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.action ***!
  \*************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"to_EmailAddress","Target":{"EntitySet":"A_BPContactToAddress","ReadLink":"{@odata.readLink}"}},"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","IsDefaultEmailAddress":"#Control:IsDefaultEmailAddress/#Value","EmailAddress":"#Control:EmailAddress/#Value","SearchEmailAddress":"#Control:SearchEmailAddress/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"Target":{"EntitySet":"A_AddressEmailAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.action":
/*!**********************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.action ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"to_FaxNumber","Target":{"EntitySet":"A_BPContactToAddress","ReadLink":"{@odata.readLink}"}},"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","IsDefaultFaxNumber":"#Control:IsDefaultFaxNumber/#Value","FaxCountry":"#Control:FaxCountry/#Value","FaxNumber":"#Control:FaxNumber/#Value","FaxNumberExtension":"#Control:FaxNumberExtension/#Value","InternationalFaxNumber":"#Control:InternationalFaxNumber/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"Target":{"EntitySet":"A_AddressFaxNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action":
/*!************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"to_URLAddress","Target":{"EntitySet":"A_BPContactToAddress","ReadLink":"{@odata.readLink}"}},"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","ValidityStartDate":"#Control:ValidityStartDate/#Value","IsDefaultURLAddress":"#Control:IsDefaultURLAddress/#Value","SearchURLAddress":"#Control:SearchURLAddress/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value","URLFieldLength":"#Control:URLFieldLength/#Value","WebsiteURL":"#Control:WebsiteURL/#Value"},"Target":{"EntitySet":"A_AddressHomePageURL","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.action":
/*!************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.action ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"to_PhoneNumber","Target":{"EntitySet":"A_BPContactToAddress","ReadLink":"{@odata.readLink}"}},"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"AddressID":"#Control:AddressID/#Value","Person":"#Control:Person/#Value","OrdinalNumber":"#Control:OrdinalNumber/#Value","DestinationLocationCountry":"#Control:DestinationLocationCountry/#Value","IsDefaultPhoneNumber":"#Control:IsDefaultPhoneNumber/#Value","PhoneNumber":"#Control:PhoneNumber/#Value","PhoneNumberExtension":"#Control:PhoneNumberExtension/#Value","InternationalPhoneNumber":"#Control:InternationalPhoneNumber/#Value","PhoneNumberType":"#Control:PhoneNumberType/#Value","AddressCommunicationRemarkText":"#Control:AddressCommunicationRemarkText/#Value"},"Target":{"EntitySet":"A_AddressPhoneNumber","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/MyApplication/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplication/Actions/CreateEntitySuccessMessage.action","Properties":{"RelationshipNumber":"#Control:RelationshipNumber/#Value","BusinessPartnerCompany":"#Control:BusinessPartnerCompany/#Value","BusinessPartnerPerson":"#Control:BusinessPartnerPerson/#Value","ValidityEndDate":"#Control:ValidityEndDate/#Value","AddressID":"#Control:AddressID/#Value","AddressNumber":"#Control:AddressNumber/#Value","AdditionalStreetPrefixName":"#Control:AdditionalStreetPrefixName/#Value","AdditionalStreetSuffixName":"#Control:AdditionalStreetSuffixName/#Value","AddressTimeZone":"#Control:AddressTimeZone/#Value","CareOfName":"#Control:CareOfName/#Value","CityCode":"#Control:CityCode/#Value","CityName":"#Control:CityName/#Value","CompanyPostalCode":"#Control:CompanyPostalCode/#Value","Country":"#Control:Country/#Value","County":"#Control:County/#Value","DeliveryServiceNumber":"#Control:DeliveryServiceNumber/#Value","DeliveryServiceTypeCode":"#Control:DeliveryServiceTypeCode/#Value","District":"#Control:District/#Value","FormOfAddress":"#Control:FormOfAddress/#Value","FullName":"#Control:FullName/#Value","HomeCityName":"#Control:HomeCityName/#Value","HouseNumber":"#Control:HouseNumber/#Value","HouseNumberSupplementText":"#Control:HouseNumberSupplementText/#Value","Language":"#Control:Language/#Value","POBox":"#Control:POBox/#Value","POBoxDeviatingCityName":"#Control:POBoxDeviatingCityName/#Value","POBoxDeviatingCountry":"#Control:POBoxDeviatingCountry/#Value","POBoxDeviatingRegion":"#Control:POBoxDeviatingRegion/#Value","POBoxIsWithoutNumber":"#Control:POBoxIsWithoutNumber/#Value","POBoxLobbyName":"#Control:POBoxLobbyName/#Value","POBoxPostalCode":"#Control:POBoxPostalCode/#Value","Person":"#Control:Person/#Value","PostalCode":"#Control:PostalCode/#Value","PrfrdCommMediumType":"#Control:PrfrdCommMediumType/#Value","Region":"#Control:Region/#Value","StreetName":"#Control:StreetName/#Value","StreetPrefixName":"#Control:StreetPrefixName/#Value","StreetSuffixName":"#Control:StreetSuffixName/#Value","TaxJurisdiction":"#Control:TaxJurisdiction/#Value","TransportZone":"#Control:TransportZone/#Value","AddressRepresentationCode":"#Control:AddressRepresentationCode/#Value","ContactPersonBuilding":"#Control:ContactPersonBuilding/#Value","ContactPersonPrfrdCommMedium":"#Control:ContactPersonPrfrdCommMedium/#Value","ContactRelationshipDepartment":"#Control:ContactRelationshipDepartment/#Value","ContactRelationshipFunction":"#Control:ContactRelationshipFunction/#Value","CorrespondenceShortName":"#Control:CorrespondenceShortName/#Value","Floor":"#Control:Floor/#Value","InhouseMail":"#Control:InhouseMail/#Value","IsDefaultAddress":"#Control:IsDefaultAddress/#Value","RoomNumber":"#Control:RoomNumber/#Value"},"Target":{"EntitySet":"A_BPContactToAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"A_BPContactToAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MyApplication/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DetailPopover.action":
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DetailPopover.action ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add A_AddressEmailAddress","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.js"},{"Title":"Add A_AddressFaxNumber","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.js"},{"Title":"Add A_AddressPhoneNumber","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.js"},{"Title":"Add A_AddressPhoneNumber","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.js"},{"Title":"Add A_AddressHomePageURL","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.js"},{"Title":"Delete","OnPress":"/MyApplication/Rules/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_UpdateEntity.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"A_BPContactToAddress","Service":"/MyApplication/Services/BusinessPartnerA2X.service","ReadLink":"{@odata.readLink}"},"Properties":{"RelationshipNumber":"#Control:RelationshipNumber/#Value","BusinessPartnerCompany":"#Control:BusinessPartnerCompany/#Value","BusinessPartnerPerson":"#Control:BusinessPartnerPerson/#Value","ValidityEndDate":"#Control:ValidityEndDate/#Value","AddressID":"#Control:AddressID/#Value","AddressNumber":"#Control:AddressNumber/#Value","AdditionalStreetPrefixName":"#Control:AdditionalStreetPrefixName/#Value","AdditionalStreetSuffixName":"#Control:AdditionalStreetSuffixName/#Value","AddressTimeZone":"#Control:AddressTimeZone/#Value","CareOfName":"#Control:CareOfName/#Value","CityCode":"#Control:CityCode/#Value","CityName":"#Control:CityName/#Value","CompanyPostalCode":"#Control:CompanyPostalCode/#Value","Country":"#Control:Country/#Value","County":"#Control:County/#Value","DeliveryServiceNumber":"#Control:DeliveryServiceNumber/#Value","DeliveryServiceTypeCode":"#Control:DeliveryServiceTypeCode/#Value","District":"#Control:District/#Value","FormOfAddress":"#Control:FormOfAddress/#Value","FullName":"#Control:FullName/#Value","HomeCityName":"#Control:HomeCityName/#Value","HouseNumber":"#Control:HouseNumber/#Value","HouseNumberSupplementText":"#Control:HouseNumberSupplementText/#Value","Language":"#Control:Language/#Value","POBox":"#Control:POBox/#Value","POBoxDeviatingCityName":"#Control:POBoxDeviatingCityName/#Value","POBoxDeviatingCountry":"#Control:POBoxDeviatingCountry/#Value","POBoxDeviatingRegion":"#Control:POBoxDeviatingRegion/#Value","POBoxIsWithoutNumber":"#Control:POBoxIsWithoutNumber/#Value","POBoxLobbyName":"#Control:POBoxLobbyName/#Value","POBoxPostalCode":"#Control:POBoxPostalCode/#Value","Person":"#Control:Person/#Value","PostalCode":"#Control:PostalCode/#Value","PrfrdCommMediumType":"#Control:PrfrdCommMediumType/#Value","Region":"#Control:Region/#Value","StreetName":"#Control:StreetName/#Value","StreetPrefixName":"#Control:StreetPrefixName/#Value","StreetSuffixName":"#Control:StreetSuffixName/#Value","TaxJurisdiction":"#Control:TaxJurisdiction/#Value","TransportZone":"#Control:TransportZone/#Value","AddressRepresentationCode":"#Control:AddressRepresentationCode/#Value","ContactPersonBuilding":"#Control:ContactPersonBuilding/#Value","ContactPersonPrfrdCommMedium":"#Control:ContactPersonPrfrdCommMedium/#Value","ContactRelationshipDepartment":"#Control:ContactRelationshipDepartment/#Value","ContactRelationshipFunction":"#Control:ContactRelationshipFunction/#Value","CorrespondenceShortName":"#Control:CorrespondenceShortName/#Value","Floor":"#Control:Floor/#Value","InhouseMail":"#Control:InhouseMail/#Value","IsDefaultAddress":"#Control:IsDefaultAddress/#Value","RoomNumber":"#Control:RoomNumber/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Create.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Create.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.action":
/*!******************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressEmailAddress.action ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressEmailAddress.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action":
/*!***************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action ***!
  \***************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressFaxNumber.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.action":
/*!*****************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressHomePageURL.action ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.action":
/*!*****************************************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressPhoneNumber.action ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressPhoneNumber.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Detail.action":
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Detail.action ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_Edit.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_List.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_List.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplication/Pages/BusinessPartnerA2X_A_BPContactToAddress/A_BPContactToAddress_List.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnline.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnline.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/MyApplication/Services/BusinessPartnerA2X.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/CloseModalPage_Cancel.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/CloseModalPage_Cancel.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/CloseModalPage_Complete.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/CloseModalPage_Complete.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/ClosePage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/ClosePage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/CreateEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/CreateEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/CreateEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/CreateEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/MyApplication/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/DeleteConfirmation.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/DeleteConfirmation.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/DeleteEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/DeleteEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/DeleteEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/DeleteEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MyApplication/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/DraftDiscardEntity.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/DraftDiscardEntity.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressEmailAddress","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Discarded"}},"OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/DraftEditEntity.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/DraftEditEntity.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressEmailAddress","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Edit"}},"OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/DraftSaveEntity.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/DraftSaveEntity.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/MyApplication/Services/BusinessPartnerA2X.service","EntitySet":"A_AddressEmailAddress","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MyApplication/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Saved"}},"OnFailure":"/MyApplication/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/GenericBannerMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/GenericBannerMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/GenericMessageBox.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/GenericMessageBox.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/GenericNavigation.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/GenericNavigation.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/MyApplication/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/GenericToastMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/GenericToastMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Logging/LogUploadFailure.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Logging/LogUploadFailure.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Logging/LogUploadSuccessful.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Logging/LogUploadSuccessful.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Logging/UploadLog.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Logging/UploadLog.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/MyApplication/Actions/Logging/LogUploadFailure.action","OnSuccess":"/MyApplication/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/Logging/UploadLogProgress.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/Logging/UploadLogProgress.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/MyApplication/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/UpdateEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/UpdateEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Actions/UpdateEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Actions/UpdateEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MyApplication/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplication/Globals/Application/AppDefinition_Version.global":
/*!******************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Globals/Application/AppDefinition_Version.global ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MyApplication/Globals/Application/ApplicationName.global":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplication/Globals/Application/ApplicationName.global ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MyApplication/Globals/Application/SupportEmail.global":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Globals/Application/SupportEmail.global ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MyApplication/Globals/Application/SupportPhone.global":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplication/Globals/Application/SupportPhone.global ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MyApplication/Services/BusinessPartnerA2X.service":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MyApplication/Services/BusinessPartnerA2X.service ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../odata/v4/business-partner-a2-x/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/MyApplication/Styles/Styles.json":
/*!************************************************************!*\
  !*** ./build.definitions/MyApplication/Styles/Styles.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/MyApplication/jsconfig.json":
/*!*******************************************************!*\
  !*** ./build.definitions/MyApplication/jsconfig.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map