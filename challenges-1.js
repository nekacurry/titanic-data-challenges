// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Returns a number.

const getTotalPassengers = (data) => {
	return data.length
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
	return data.reduce((acc, pass) => pass.fields.survived === 'Yes' ? acc += 1 : acc, 0)
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
	return data.reduce((acc, pass) => pass.fields.survived === 'No' ? acc += 1 : acc, 0)
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
	return data.reduce((acc, pass) => pass.fields.pclass === pclass ? acc += 1 : acc, 0)
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. 
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
	return getSurvivorCount(data.filter(pass => pass.fields.pclass === pclass))
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
	return getCasualityCount(data.filter(pass => pass.fields.pclass === pclass))
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
	return data.filter(pass => !isNaN(pass.fields.age)).reduce((minAge, pass) => minAge = Math.min(minAge, pass.fields.age), 1000)
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where 
// age is missing.

const getMaxAge = (data) => {
	return data.filter(pass => !isNaN(pass.fields.age)).reduce((maxAge, pass) => maxAge = Math.max(maxAge, pass.fields.age), 0)
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the 
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
	return data.reduce((acc, pass) => pass.fields.embarked === embarked ? acc += 1 : acc, 0)
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
	return data.filter(pass => !isNaN(pass.fields.fare)).reduce((minFare, pass) => minFare = Math.min(minFare, pass.fields.fare), 1000)
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare. Be sure to filter these! 

const getMaxFare = (data) => {
	return data.filter(pass => !isNaN(pass.fields.fare)).reduce((maxFare, pass) => maxFare = Math.max(maxFare, pass.fields.fare), 0)
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
	return data.reduce((acc, pass) => pass.fields.sex === gender ? acc += 1 : acc, 0)
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This 
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property. 

const getSurvivorsByGender = (data, gender) => {
	return getSurvivorCount(data.filter(pass => pass.fields.sex === gender))
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
	return getCasualityCount(data.filter(pass => pass.fields.sex === gender))
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and 
// return that number. Be sure to filter the passengers records 
// where the fare is missing! 

const getTotalFare = (data) => {
	return data.filter(pass => !isNaN(pass.fields.fare)).reduce((total, pass) => total + pass.fields.fare, 0)
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide 
// by the number of passengers. Be sure to filter passengers who are
// missing a fare! 

const getAverageFare = (data) => {
	return getTotalFare(data) / getTotalPassengers(data.filter(pass => !isNaN(pass.fields.fare)))
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are 
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items 
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
  const fares = data.filter(pass => !isNaN(pass.fields.fare)).map(pass => pass.fields.fare).sort((a, b) => a - b)

	return fares[Math.ceil(fares.length / 2)]
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide 
// by the number of passenegers. Be sure to filter where ages are not 
// available. 

const getAverageAge = (data) => {
  const filterPass = data.filter(pass => !isNaN(pass.fields.age))
  const ages = filterPass.reduce((ages, pass) => ages + pass.fields.age, 0)

	return ages / filterPass.length
}

// 19 --------------------------------------------------------------
// Return the median age from passengers. Do that median thing of 
// finding the middle value. 

const getMedianAge = (data) => {
  const ages = data.filter(pass => !isNaN(pass.fields.age)).map(pass => pass.fields.age).sort((a, b) => a - b)

	return ages[Math.ceil(ages.length / 2)]
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the 
// the total number. 

const getAverageAgeByGender = (data, gender) => {
  const filterPass = data.filter(pass => !isNaN(pass.fields.age) && pass.fields.sex === gender)
  const ages = filterPass.reduce((ages, pass) => ages + pass.fields.age, 0)

	return ages / filterPass.length
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getTotalPassengers,
	getSurvivorCount,
	getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
	getCasualityCountForClass,
	getMinAge,
	getMaxAge,
	getEmbarkedCount,
	getMaxFare,
	getMinFare,
	getPassengersByGender,
	getSurvivorsByGender,
	getCasualitiesByGender,
	getTotalFare,
	getAverageFare,
	getMedianFare,
	getAverageAge,
	getMedianAge,
	getAverageAgeByGender
}