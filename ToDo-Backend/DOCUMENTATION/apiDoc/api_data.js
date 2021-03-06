define({ "api": [
  {
    "group": "Friend_Request",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friendRequests/request/:senderId/:recipientId",
    "title": "Get Request status between two users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>senderId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recipientId",
            "description": "<p>recipientId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Friend Request Found\",\n    \"status\": 200,\n    \"data\": {\n        \"senderId\": string,\n        \"recipientId\": string,\n        \"requestStatus\": string\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to Find Request\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/friendRequests.js",
    "groupTitle": "Friend_Request",
    "name": "GetApiV1FriendrequestsRequestSenderidRecipientid"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/listStates/:userId",
    "title": "Get User List States.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip of the user (query param)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Lists Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"listId\": string,\n            \"present\": number,\n            \"creatorId\": string\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find userLists\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/lists.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsListstatesUserid"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/presentList/:listId/:presentState",
    "title": "Get List with present state.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "presentState",
            "description": "<p>presentState of the list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"List Found\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": date,\n        \"listId\": string,\n        \"listName\": string,\n        \"creatorId\": string,\n        \"state\": number,\n        \"private\": boolean,\n        \"item\": [\n            {\n                \"_id\": string,\n                \"itemId\": string,\n                \"itemName\": string,\n                \"itemParentId\": string,\n                \"done\": boolean\n            }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Lists\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/lists.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsPresentlistListidPresentstate"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/state/:listId/",
    "title": "Get List present state.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User List State Found\",\n    \"status\": 200,\n    \"data\": {\n            \"listId\": string,\n            \"present\": number,\n            \"creatorId\": string\n        }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find List state\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/lists.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsStateListid"
  },
  {
    "group": "Notification",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/notifications/unread/:userId",
    "title": "Get User UnRead Notifications.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Unread Notifications Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"seen\": boolean,\n            \"createdOn\": date,\n            \"notiId\": string,\n            \"profileId\": string,\n            \"senderId\": string,\n            \"description\": string,\n            \"type\": string,\n            \"recipientId\": string\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Notifications\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/notifications.js",
    "groupTitle": "Notification",
    "name": "GetApiV1NotificationsUnreadUserid"
  },
  {
    "group": "Notification",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/notifications/user/:userId",
    "title": "Get User Notifications.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip of the user (query param)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Notifications Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"seen\": boolean,\n            \"createdOn\": date,\n            \"notiId\": string,\n            \"profileId\": string,\n            \"senderId\": string,\n            \"description\": string,\n            \"type\": string,\n            \"recipientId\": string\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Notifications\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/notifications.js",
    "groupTitle": "Notification",
    "name": "GetApiV1NotificationsUserUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/user/:user",
    "title": "Get Users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>partial name of the user (either firstName, lastName or fullName).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"lastName\": string,\n            \"createdOn\": date,\n            \"userId\": string,\n            \"firstName\": string,\n            \"fullName\": string,\n            \"email\": string,\n            \"countryCode\": string,\n            \"mobileNumber\": number,\n            \"friends\": [\n                {\n                    \"_id\": string,\n                    \"userId\": string,\n                    \"userName\": string\n                }\n            ]\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting the user\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUserUser"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userDetails/:userId",
    "title": "Get User Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Found\",\n    \"status\": 200,\n    \"data\": {\n            \"lastName\": string,\n            \"createdOn\": date,\n            \"userId\": string,\n            \"firstName\": string,\n            \"fullName\": string,\n            \"email\": string,\n            \"countryCode\": string,\n            \"mobileNumber\": number,\n            \"friends\": [\n                {\n                    \"_id\": string,\n                    \"userId\": string,\n                    \"userName\": string\n                }\n            ]\n        }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting the details\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUserdetailsUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/activate",
    "title": "User Activate.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "activateToken",
            "description": "<p>activateToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Your account is successfully activated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Failed to activate the user\",\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersActivate"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgot",
    "title": "User Forgot Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Reset Token Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\":string,\n        \"email\":string,\n        \"firstName\": string,\n        \"lastName\": string,\n        \"password\": string,\n        \"active\" : boolean,\n        \"createdOn\":date,\n        \"resetPasswordExpires\":date,\n        \"resetPasswordToken\" : string,\n        \"countryCode\" : string,\n        \"mobileNumber\" : number\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Reset Token Failed\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgot"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\":string,\n        \"userDetails\":{\n        \"userId\": string,\n        \"firstName\": string,\n        \"lastName\": string,\n        \"email\": string\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"Login Failed\",\n      \"status\": 500,\n      \"data\": null\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reset",
    "title": "User Reset Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>resetPasswordToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Password successfully updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Password update Failed\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersReset"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "User SignUp.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\":string,\n        \"email\": string\n        \"firstName\": string,\n        \"lastName\": string,\n        \"countryCode\" : string,\n        \"mobileNumber\" : number,\n        \"active\": boolean,\n        \"createdOn\": date,\n        \"activateUserToken\":string\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to create new user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  }
] });
