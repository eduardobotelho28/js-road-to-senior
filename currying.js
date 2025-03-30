
//sem currying
// const getDiscount = (price, discount) => price * discount

//com currying

const getDiscount = discount => price => price * discount

const getLoyalCustomerDiscount     = getDiscount(.10)
const getExcellentCustomerDiscount = getDiscount(.20)
const getAmazingCustomerDiscount   = getDiscount(.30)

console.log(
    getLoyalCustomerDiscount(747)     ,
    getExcellentCustomerDiscount(747) ,
    getAmazingCustomerDiscount(747)
)