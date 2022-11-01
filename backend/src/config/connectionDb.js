
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "himalaya";

//database credentials
const USERNAME = "himalayaUsaUser";
const PASSWORD = "RK1K9w9cDUXGmzoW";

//default app port
const PORT = 3555;

// mongoose options for connection
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.mwuf9.mongodb.net/${DATABASE}?retryWrites=true&w=majority`  // dheeraj

const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}