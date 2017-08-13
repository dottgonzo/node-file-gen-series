import * as nodeFileGen from '../index'

import * as chai from 'chai'

const filepath = '/tmp/Bonobo - Ketto-4tXFA6jTulk.mp4'
const filepathZero = '/tmp/Bonobo - Ketto-4tXFA6jTulk_000099.mp4'
const options = {
  numberLenght: 5
}
const expect = chai.expect
describe('Main File Gen Test', function () {

  describe('Main File Gen new file', function () {
    it('generate a file name', function () {
      const newname = nodeFileGen.genFileSequence(filepath, options)
      expect(newname).to.be.ok
      expect(newname).to.be.a('string')

    })
    it('file name contains a number', function () {
      const newname = nodeFileGen.genFileSequence(filepath, options)
      console.log(newname)
      expect(newname.split('_').length).to.be.ok
      expect(newname.split('_').length).to.be.a('number')
      expect(newname.split('_')[newname.split('_').length - 1]).to.be.ok
      expect(newname.split('_')[newname.split('_').length - 1].split('.')[0]).to.be.ok
      expect(parseInt(newname.split('_')[newname.split('_').length - 1].split('.')[0])).to.be.a('number')

      expect(newname.split('_')[newname.split('_').length - 1].split('.')[0].length).to.be.eq(options.numberLenght)
    })
    it('file name contains ' + options.numberLenght + ' numbers', function () {
      const newname = nodeFileGen.genFileSequence(filepath, options)
      expect(newname.split('_')[newname.split('_').length - 1].split('.')[0].length).to.be.eq(options.numberLenght)
    })
  })


})   