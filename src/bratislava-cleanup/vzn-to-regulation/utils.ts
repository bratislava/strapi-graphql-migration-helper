import * as fs from 'fs'
import * as path from 'path'

export function parseVznCodeFromTitle(vznTitle: string | null | undefined): {
  vznYear: number
  vznNumber: number
  vznCode: string
} {
  if (!vznTitle) {
    return { vznYear: -1, vznNumber: -1, vznCode: 'invalid' }
  }
  const matches = vznTitle.match(/[Vv][Zz][Nn].*?([0-9]{1,2}).*?(\d{4})/)
  if (!matches) return { vznYear: -1, vznNumber: -1, vznCode: 'invalid' }
  const vznYear = +matches?.[2] ?? -1
  const vznNumber = +matches?.[1] ?? -1
  const isValidVznName = vznYear > 1000 && vznNumber > 0 && !vznTitle.includes('priloh')
  const vznCode = isValidVznName ? `VZN_${vznYear}_${vznNumber < 10 ? '0' + vznNumber : vznNumber}` : 'invalid'
  return { vznYear, vznNumber, vznCode }
}

export function dataAsObject(objectArray, property) {
  const dataAsObject = {}
  objectArray.forEach((item) => {
    dataAsObject[item[property]] = { ...item }
  })
}

export function writeDataToFile(data, fileName) {
  const dataToWrite = JSON.stringify(data)
  const createStream = fs.createWriteStream(path.join(__dirname, fileName))
  createStream.write(dataToWrite)
  createStream.end()
  console.log(`writing to file ${path.join(__dirname, fileName)} completed`)
}

// WRITING AND READING FILES ///////////////////////////////////////////////////////
//
// CREATE
// const createStream = fs.createWriteStream(path.join(__dirname, 'fileName.txt'))
// createStream.end()
// READ
// const outputText = fs.readFileSync(path.join(__dirname, 'vznData/input.json'), 'utf8')
// WRITE
// fs.writeFile(path.join(__dirname, 'vznData/input.json'), JSON.stringify(['uan', 'tu', 'tree']), (err) => {
//   if (err) throw err
//   console.log('complete')
// })
//
/////////////////////////////////////////////////////////////////////////////////////