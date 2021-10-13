import { connect } from 'mongoose';

const database = connect('mongodb://localhost:27017/company-app');

export default database;
