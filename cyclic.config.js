module.exports = {
    routes: [
      {
        //directly post page from url
        path: '/post/*',
        proxy: {
          url: 'https://dark-rose-bee-ring.cyclic.app'
        }
      }
    ]
  }
  