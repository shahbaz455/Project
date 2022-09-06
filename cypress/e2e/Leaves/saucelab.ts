describe("Sauce Lab", function () {
  //     it('should be sauce lab web app', function () {
  //         cy.visit("https://www.saucedemo.com/").then((res)=>{
  //             expect(res.status).be.eq(200);
  //         })
  //     });
  it("200 homepage response", () => {
    cy.request({
      url: "https://www.saucedemo.com/",
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.redirectedToUrl).to.eq(undefined);
    });
  });
});
