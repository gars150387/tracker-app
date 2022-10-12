const jwt = require('jsonwebtoken')

const generateJWT = ( uid, name ) => {

return new Promise( (resolve, reject)  => {

    const payload = { uid, name };

    console.log('token',{uid, name })

    jwt.sign( payload, "TRACK-1-INVENTORY-2-@CONTEXTGLOBAL-RECEIVERS-3-CONFERENCES-4", {
        expiresIn: '1h'
    }, (error, token ) => {

        if ( error ) {
            console.log(error)
            reject('Could not generate token')
        }

        resolve( token )
    })

})




}


module.exports = {
    generateJWT
}