
Day-6
12/9/2025

 show dbs
use schoolDB
show collections
db.students.insertOne({
  name : 'Kavya',
  age : 22,
  city :'chennai'
}
  )
  
  db.students.insertMany(
    [
      {
          name : 'Kavya B',
  age : 23,
  city :'chennai'
      },
            {
          name : 'Balu B',
  age : 25,
  city :'chennai'
      },
            {
          name : 'Ramu B',
  age : 24,
  city :'chennai'
      },
            {
          name : 'Sonu B',
  age : 26,
  city :'chennai'
      },
      ])
      
show collections

<!-- comparision operators -->
>           $gt
>=          $gte
<            $lt
<=            $lte
=              $eq
!=             $ne
value in array $in
not in array    $nin

db.students.find()
db.students.find().pretty()
db.students.find({age :{$gt : 25}})





      
      
      

