const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getTournaments(req, res);
    }

    case "POST": {
      return addTournament(req, res);
    }

    case "PUT": {
      return updateTournament(req, res);
    }

    case "DELETE": {
      return deleteTournament(req, res);
    }
  }
}
