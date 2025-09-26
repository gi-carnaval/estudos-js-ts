function delay(ms, result) {
  return new Promise(r => setTimeout(() => r(result), ms))
}
const items = [1, 2, 3]

//Sequencial
async function seq() {
  console.time('seq')
  const results = []
  for (const i of items) {
    results.push(await delay(500, i))
  }
  console.timeEnd('seq')
  return results
}

//Parallel
async function parallel() {
  console.time('parallel')
  const promises = items.map(i => delay(500, i))
  console.log({ promises })
  const results = await Promise.all(promises)
  console.timeEnd('parallel')
  return results
}

seq()
parallel()