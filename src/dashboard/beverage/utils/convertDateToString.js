import { format } from 'date-fns';

const convertDateToString = date => format(new Date(date), 'dd.MM.yyyy, HH:mm:ss');

export default convertDateToString;
