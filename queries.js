const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertdeal_participant = (request, response) => {
const {id, userid, deal_id, percent, agreementid, resourcetype, fi_id, funded_amountinpennies, funded_date, funded_user_id, funded_name, created} = request.body
 pool.query( "INSERT INTO cbanc2.deal_participant (id, userid, deal_id, percent, agreementid, resourcetype, fi_id, funded_amountinpennies, funded_date, funded_user_id, funded_name, created) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[id, userid, deal_id, percent, agreementid, resourcetype, fi_id, funded_amountinpennies, funded_date, funded_user_id, funded_name, created],(error, results) => {
   if (error) {
     throw error
   }
   response.status(201).send('A new row is inserted in deal_participant')
   })
   }



module.exports = {
insertdeal_participant
}
