/*

function checkVznTitleValidity(client: QueryCLient) {
  const dataVzns = getAllVzns(client)
  const enhancedDataVzns: any[] = []
  dataVzns.then((data) => {
    data?.forEach((vzn) => {
      const vznTitle = vzn.attributes?.title
      if (!vznTitle) {
        console.log(`VZN with id ${vzn.id} \x1b[31m did not pass \x1b[0m title with reason: no title`)
        return
      }
      //If title is not empty, check if it matches the pattern VZN NUMBER/YEAR
      const matches = vznTitle.match(/VZN (\d+)\/(\d+)/)
      const vznYear = matches?.[2]
      const vznNumber = matches?.[1]
      const enhancedVzn = { ...vzn, vznYear, vznNumber }
      enhancedDataVzns.push(enhancedVzn)
      if (!vznYear) {
        console.log(`VZN with id ${vzn.id} \x1b[31m did not pass \x1b[0m title with reason: year not found`)
        return
      }
      if (!vznNumber) {
        console.log(`VZN with id ${vzn.id} \x1b[31m did not pass \x1b[0m title with reason: number not found`)
        return
      }
      //Title Passes, if no problem encountered
      console.log(
        `VZN with id:${vzn.id} \x1b[32m passed \x1b[0m title check with title:
      ${vzn.attributes?.title}
      year: ${vznYear} number: ${vznNumber}`
      )
    })
    console.log(`Checked ${data?.length} VZNs`)
  })
  //clearInterval(waitTimer)
  return enhancedDataVzns
}

*/
