'use strict';

// Your first function handler
module.exports.hello = (event, context, cb) => {
  console.log('*******', JSON.stringify(context));
  cb(null, { message: 'I\'m a greeting endpoint, hello there!', event });
};