//
// FROM MYAPP2
//
//
// const [selectedDataId, setSelectedDataId] = React.useState(0)
//   let vznFilesArray: any[] = []
//   let vznsFillingArray: any[] = []
//   let vznsArray: any[] = []

//   for (const [key, value] of Object.entries(VznFilesData)) {
//     vznFilesArray.push(value)
//   }
//   for (const [key, value] of Object.entries(VznsData)) {
//     vznsArray.push(value)
//   }

//   vznFilesArray.forEach((file) => {
//     if (VznsData[file.code]) return
//     const newVzn: Vzn = {
//       code: file.code,
//       cancellationCode: "?",
//       amendmentsCodes: ["?"],
//       url: file.url,
//       title: "[from files] " + file.name,
//     }
//     vznsFillingArray.push(newVzn)
//   })

//   const vznsWithFiles: Vzn[] = [...vznsArray, ...vznsFillingArray].sort((a, b) => {
//     return a.code.localeCompare(b.code)
//   })

//   for (let i = 0; i < vznsWithFiles.length - 1; i++) {
//     const currentVzn = vznsWithFiles[i]
//     const nextVzn = vznsWithFiles[i + 1]
//     if (!currentVzn || !nextVzn) continue
//     if (!currentVzn.code.includes("_") || !nextVzn.code.includes("_")) continue
//     const [, currentVznYear, currentVznNumber] = currentVzn.code.split("_")
//     const [, nextVznYear, nextVznNumber] = nextVzn.code.split("_")
//     const CONDITION =
//       (currentVznYear === nextVznYear && +currentVznNumber + 1 === +nextVznNumber) ||
//       (+currentVznYear + 1 === +nextVznYear && +nextVznNumber === 1)
//     console.log(
//       "iteration i: " +
//         i +
//         "\n" +
//         "current: " +
//         currentVzn.code +
//         " | " +
//         "next: " +
//         nextVzn.code +
//         "\n" +
//         "currentYear: " +
//         currentVznYear +
//         " | " +
//         "nextYear: " +
//         nextVznYear +
//         "\n" +
//         "currentNumber: " +
//         currentVznNumber +
//         " | " +
//         "nextNumber: " +
//         nextVznNumber +
//         "\n" +
//         "\n " +
//         "CONIDTION: " +
//         CONDITION
//     )
//     if (!CONDITION) {
//       const newVznNumber = +currentVznNumber + 1
//       const newVzn = {
//         code:
//           "VZN_" + currentVznYear + "_" + (newVznNumber < 10 ? "0" + newVznNumber : newVznNumber),
//         title: "[missing vzn]",
//         url: "url missing from media library",
//         amendmentsCodes: ["??"],
//         cancellationCode: "??",
//       }
//       i++
//       //console.log("newVzn: " + newVzn.code)
//       vznsWithFiles.splice(i, 0, newVzn)
//     }
//   }
