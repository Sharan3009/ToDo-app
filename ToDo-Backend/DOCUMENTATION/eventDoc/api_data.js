define({ "api": [
  {
    "type": "emit",
    "url": "accept-friend-request",
    "title": "Accepting friend request",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;accept-friend-request&quot;)</b> has to be emitted when user accepts the friend request of other user.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"senderId\": string,\n                            \"recipientId\": string,\n                            \"requestStatus\": 'accepted'\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitAcceptFriendRequest"
  },
  {
    "type": "emit",
    "url": "activate-email",
    "title": "Sending activation email",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;activate-email&quot;)</b> has to be emitted when a user signs up to send activation email.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                   \"email\":string,\n                   \"firstName\":string,\n                   \"lastName\" : string,\n                   \"activateUserToken\":string\n               }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitActivateEmail"
  },
  {
    "type": "emit",
    "url": "add-friend-request",
    "title": "Sending friend request",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;add-friend-request&quot;)</b> has to be emitted when user sends the friend request to other user.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"senderId\": string,\n                            \"recipientId\": string,\n                            \"requestStatus\": 'requested'\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitAddFriendRequest"
  },
  {
    "type": "emit",
    "url": "complete-item",
    "title": "Complete Item",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;complete-item&quot;)</b> has to be emitted when user completes the item.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                           listId: string,\n                           itemId: string\n                       }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitCompleteItem"
  },
  {
    "type": "emit",
    "url": "create-item",
    "title": "Create Item",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;create-item&quot;)</b> has to be emitted when user creates the item. CreatorId is required to display real time item creation.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            listId: string,\n                            itemParentId: string,\n                            itemName: string,\n                            creatorId: creatorId,\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitCreateItem"
  },
  {
    "type": "emit",
    "url": "create-list",
    "title": "Create List",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;create-list&quot;)</b> has to be emitted when user creates the list.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"listName\": string,\n                            \"creatorId\": string,\n                            \"private\": boolean\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitCreateList"
  },
  {
    "type": "emit",
    "url": "delete-item",
    "title": "Delete Item",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;delete-item&quot;)</b> has to be emitted when user deletes the item.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            listId: string,\n                            itemId: string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitDeleteItem"
  },
  {
    "type": "emit",
    "url": "delete-list",
    "title": "Delete List",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;delete-list&quot;)</b> has to be emitted when user deletes the list. CreatorId is needed to display real time deletion.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                           \"listId\": string,\n                           \"creatorId\": string\n                       }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitDeleteList"
  },
  {
    "type": "emit",
    "url": "edit-item",
    "title": "Edit Item",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;edit-item&quot;)</b> has to be emitted when user edits the item.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            listId: string,\n                            itemId: string,\n                            itemName: string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitEditItem"
  },
  {
    "type": "emit",
    "url": "edit-list",
    "title": "Edit List",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;edit-list&quot;)</b> has to be emitted when user edits the list.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"listId\": string,\n                            \"listName\": string,\n                            \"private\": boolean\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitEditList"
  },
  {
    "type": "emit",
    "url": "forgot-password",
    "title": "Sending change password email",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;forgot-password&quot;)</b> has to be emitted when a user inputs his email to receive forget password email.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                \"email\":string,\n                \"resetPasswordToken\":string\n            }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitForgotPassword"
  },
  {
    "type": "emit",
    "url": "join-room",
    "title": "Joining the current room",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;join-room&quot;)</b> has to be emitted when user opens the user page to check his dashboard or other's dashboard. Data that has to be passed here is <b>userId</b>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitJoinRoom"
  },
  {
    "type": "emit",
    "url": "open-item",
    "title": "Open Item",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;open-item&quot;)</b> has to be emitted when user opens the item.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            listId: string,\n                            itemId: string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitOpenItem"
  },
  {
    "type": "emit",
    "url": "reject-friend-request",
    "title": "Rejecting friend request",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;reject-friend-request&quot;)</b> has to be emitted when user rejects the friend request of other user and deletes the request from database. Hence no Request status is required.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"senderId\": string,\n                            \"recipientId\": string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitRejectFriendRequest"
  },
  {
    "type": "emit",
    "url": "send-notification",
    "title": "Send Notification",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;send-notification&quot;)</b> has to be emitted when user does any action. type can be any of following options <b>'requested', 'accepted', 'createList', 'editList', 'deleteList', 'undoList', 'createItem', 'editItem', 'deleteItem', 'completeItem', 'openItem'</b>. itemName and listName will be required for items and only listName is required while doing aciton on list. No recipientId is required while doing action with lists as it will be taken from friend list. While doing friend requests recipientId is required to whom request is being sent or accepted.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            senderId: string,\n                            profileId: string,\n                            senderFullName: string,\n                            type: string,\n                            listName?: string,\n                            itemName?: string,\n                            recipientId? : string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSendNotification"
  },
  {
    "type": "emit",
    "url": "set-user",
    "title": "Setting user online",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;set-user&quot;)</b> has to be emitted when a user comes online. This is to verify if the user is normal user only",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSetUser"
  },
  {
    "type": "emit",
    "url": "undo-list",
    "title": "Undo List",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;undo-list&quot;)</b> has to be emitted when user undo the list.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"listId\": string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndoList"
  },
  {
    "type": "emit",
    "url": "unfriend",
    "title": "unfriending the friend",
    "version": "0.0.1",
    "group": "Emit",
    "description": "This event <b>(&quot;unfriend&quot;)</b> has to be emitted when user unfriends the friend and deletes the request from database. Hence no Request status is required.",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n                            \"senderId\": string,\n                            \"recipientId\": string\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUnfriend"
  },
  {
    "type": "listen",
    "url": "auth-error",
    "title": "Emitting auth error on fail of token verification",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;auth-error&quot;)</b> has to be listened by the current room and will be triggered if there comes any auth-token error",
    "examples": [
      {
        "title": "The example data as output",
        "content": "{\n                            \"status\": 500,\n                            \"error\": Please provide correct auth token\n                        }",
        "type": "json"
      }
    ],
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenAuthError"
  },
  {
    "type": "listen",
    "url": "create-list-real-time",
    "title": "Create List Real Time",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;create-list-real-time&quot;)</b> has to be listened when list is created and display it in real time. It will be broadcasted in creator's room only.",
    "filename": "app/libs/listLib.js",
    "groupTitle": "Listen",
    "name": "ListenCreateListRealTime"
  },
  {
    "type": "listen",
    "url": "delete-list-real-time",
    "title": "Delete List Real Time",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;delete-list-real-time&quot;)</b> has to be listened when list is deleted and display it in real time. It will be broadcasted in creator's room only.",
    "filename": "app/libs/listLib.js",
    "groupTitle": "Listen",
    "name": "ListenDeleteListRealTime"
  },
  {
    "type": "listen",
    "url": "start-room",
    "title": "Starting the room",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;start&quot;)</b> has to be listened while starting profile page. Only then the other events of user get to work.",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenStartRoom"
  },
  {
    "type": "listen",
    "url": "update-list-real-time",
    "title": "Update List Real Time",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;update-list-real-time&quot;)</b> has to be listened when list is updated and display it in real time. It will be broadcasted in creator's room only.",
    "filename": "app/libs/listLib.js",
    "groupTitle": "Listen",
    "name": "ListenUpdateListRealTime"
  },
  {
    "type": "listen",
    "url": "userId",
    "title": "Receiving Notification",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;userId&quot;)</b> has to be listened when to get notifications. userId will be friend's userId.",
    "filename": "app/libs/notificationLib.js",
    "groupTitle": "Listen",
    "name": "ListenUserid"
  },
  {
    "type": "listen",
    "url": "verifyUser",
    "title": "Verification of user",
    "version": "0.0.1",
    "group": "Listen",
    "description": "This event <b>(&quot;verifyUser&quot;)</b> has to be listened on the user's end to verify user or admin authentication.",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenVerifyuser"
  }
] });
