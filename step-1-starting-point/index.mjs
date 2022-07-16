import moment from 'moment';

function calculateRemainingTime(deadline, now = moment().startOf('day')) {
    deadline = moment(deadline).startOf('day');
    now = moment(now).startOf('day');

    return deadline.diff(now, 'days');
}

console.log(
    calculateRemainingTime(new Date('08/12/2022'))
);
