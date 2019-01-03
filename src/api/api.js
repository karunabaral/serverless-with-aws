module.exports.handler = (event, context, done) => {
    done(null, {
        statusCode: 200,
        headers: {}, // optional, this only works with API proxy method thats on by default. (need to set it from AWS API Gateway instead)
        body: JSON.stringify({
            message: 'hello'
        })
    })
}
