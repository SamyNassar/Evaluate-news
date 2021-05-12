const FormHandler = require('../src/client/js/formHandler');


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
        satus:200
    }),
  })
);


test(" Should be object ",  () => {
    return FormHandler.getData({ blogURL: "http://wikiroulette.co/" })
    .then(data => {
        expect(typeof data).toEqual('object')
    })    
})