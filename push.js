var push = require('web-push');
 
let vapidKeys={
    publicKey: 'BDEWEvZlvNjWfUjFkhVaij9wedBNpEp7Ztuv_CnxZkrDh1NYAMCfA1Muu-SCabD2XvNNHHp-RnTq47V9zxt24y8',
    privateKey: 'cdJNeL4xzH4rO1DEclss8vx2p8WZwOR5X_5yA1OQl-M'
  } 
  push .setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)
  
  let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/fIE2skYhHQI:APA91bHZQVvy1gEuaJ_KWVtykeDRY6e118qpwMIUO6FJ-ltU05fC7DxU4Kr5KUYmqltQFlVFaKiVt9vSUDGIYeEm6N9Z_3R1DxgKQ8t3De8HuFGJ-HghZoSwp4N7sKy9SL32WZCHvkbm","expirationTime":null,"keys":{"p256dh":"BMhLSTIjPMXIvfr9JEgwJg386WTrMhl-5S0-LmPwkPYRhw3LZgoqmDYQHtEOm-MT7h-ZxUVekfivtS3tYUeVagE","auth":"QlbEv1iUGit1RgAqIR6PCw"}}
  push.sendNotification(sub,'test message')