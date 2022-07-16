import moment from 'moment';

export function calculateRemainingTime(deadline, now = moment().startOf('day')) {
    deadline = moment(deadline).startOf('day');
    now = moment(now).startOf('day');

    return deadline.diff(now, 'days');
}
