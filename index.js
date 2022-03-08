const inputExample = [
  { id: "foo", pId: null },
  { id: "bar", pId: "foo" },
  { id: "baz", pId: "foo" },
  { id: "fooBaz", pId: "baz" },
]

const fun = (data) => {
  let masterObject = {}
  let temp = data.map((e) => {
    const firstKey = Object.keys(e)[0]
    const head = e[firstKey]
    const tail = Object(e)
    
    // return {[head]:tail}
  })
  let obj = Object.assign({}, temp)
  let val = Object.values(obj)

  return masterObject
}
console.log(fun(inputExample))

const outputExample = {
  foo: { id: "foo", pId: null },
  bar: { id: "bar", pId: "foo" },
  baz: { id: "baz", pId: "foo" },
  fooBaz: { id: "fooBaz", pId: "baz" },
}
