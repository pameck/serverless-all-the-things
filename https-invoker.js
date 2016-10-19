let sampleTestDataForTests = {
  options: {
    host: "<A HOST>", // something like ehrjwerhk.sadasd.us-east-1.amazonaws.com
    path: "/dev/greetings/hello?param1=1&param2=2",
    method: "GET"
  }
};

exports.handler = (event, context, callback) => {
    const req = https.request(event.options, (res) => {
        let body = '';
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            if (res.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            callback(null, body);
        });
    });
    req.on('error', callback);
    if (event.data) {
        req.write(JSON.stringify(event.data));
    }
    req.end();
};
