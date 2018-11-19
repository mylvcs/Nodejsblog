module.exports = {
    port: 3000,
    session: {
      secret: 'myblog',
      key: 'myblog',
      maxAge: 2592000000
    },
    mongodb : 'mongodb://blogadmin:blogadmin123@ds163683.mlab.com:63683/myblog'
}