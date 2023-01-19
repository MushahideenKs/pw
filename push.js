var push = require('web-push');
 
let vapidKeys={
    publicKey: 'BDEWEvZlvNjWfUjFkhVaij9wedBNpEp7Ztuv_CnxZkrDh1NYAMCfA1Muu-SCabD2XvNNHHp-RnTq47V9zxt24y8',
    privateKey: 'cdJNeL4xzH4rO1DEclss8vx2p8WZwOR5X_5yA1OQl-M'
  } 
  push .setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)
  
  let sub={};
  push.sendNotification(sub,'test message')