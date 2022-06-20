import { Meal } from '../models/meal.js'

let mealObj = {} 
let mealArr = []

function newMeal(req, res) {
  Meal.find({}, function(err, meals) {
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals,
    })
  })
}

function create(req, res) {
  // if (mealArr.indexOf(Meal) === -1) {
  Meal.create(req.body, function(err, meal) {
    res.redirect('/meals/new')
    mealArr.push(Meal)
  })
}
// }

export {
  newMeal as new,
  create
}