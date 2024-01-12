describe ('API Test', () => {

  it (('Single User'), () => {

      cy.request('GET', 'https://reqres.in/api/users/2')
  
      .then ((response) => {
          const email = 'janet.weaver@reqres.in'
          const fname = 'Janet'
          const lname = 'Weaver'
          const image = 'https://reqres.in/img/faces/2-image.jpg'
      
          expect (response.status) .to.eq(200)
          expect (response.body.data.email) .eql(email)
          expect (response.body.data.first_name) .eql(fname)
          expect (response.body.data.last_name) .eql(lname)
          expect (response.body.data.avatar).eql(image)
      })
  })

})