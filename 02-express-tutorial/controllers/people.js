let { people } = require("../data")

const getPeople = (req, res)=>{
  res.status(200).json({ data:people })
}

const getPerson = (req, res) =>{
  const {id} = req.params
  const person = people.find((person)=> person.id === Number(id))
  
  if(!person){
    return res.status(404).json({ status: false, msg: "Person not Found" })
  }
  res.status(200).json({status: true, msg:`Found person: ${person.id} and ${person.name}`})
}

const createPerson = (req, res)=>{
  const { name } = req.body
  if(name){
    return res.status(201).json({ sucess: true, person: name })
  }
  res.status(401).json({ success: false, msg:"Please Provide Info" })
}

const createPersonPostman = (req, res)=>{
  const { name } = req.body
  if(name){
    return res.status(200).json({success: true, name: name})
  }
  return res.status(200).json({success: false, msg:"Please Provide Info"})
}

const updatePerson = (req, res)=>{
  const {id} = req.params
  const { name } = req.body
  const person = people.find((person)=> person.id === Number(id))
  
  if(!person){
    return res.status(404).json({status: false, msg: "No person with this id"})
  }
  
  const newName = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })

  res.status(200).json({status: true, data: newName })
}

// delete method
const deletePerson = (req, res)=>{
  const person = people.find((person)=> person.id === Number(req.params.id))

  if(!person){
    return res.status(404).json({status: false, msg:"No person exist"})
  }

  const newPeople = people.filter((person)=> person.id !== Number(req.params.id))

  res.status(200).json({status:true, msg:`Delete successfully with id = ${req.params.id}`, peopole: newPeople})
}

module.exports = {
  getPeople,
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
}
