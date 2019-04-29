import moment from 'moment';

const convertDateToString = date => moment(date).format('DD.MM.YYYY, HH:mm:ss');

export default convertDateToString;
