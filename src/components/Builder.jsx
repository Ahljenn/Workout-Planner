import * as util from '../helpers/util';

export default function builder(data, time, count) {
    util.durstenfeldShuffle(data); //Shuffle the data

    //Trim array depending on user selection
    if (util.inRange(time, 20, 30)) {
        data.splice(0, data.length - 3 - count + 1);
    } else if (util.inRange(time, 31, 40)) {
        data.splice(0, data.length - 4 - count + 1);
    } else if (util.inRange(time, 41, 60)) {
        data.splice(0, data.length - 6 - count + 1);
    } else if (util.inRange(time, 61, 90)) {
        data.splice(0, data.length - 7 - count + 1);
    } else if (util.inRange(time, 91, 120)) {
        data.splice(0, data.length - 9 - count + 1);
    } else if (util.inRange(time, 121, 160)) {
        data.splice(0, data.length - 12 - count + 1);
    } else if (util.inRange(time, 161, 180)) {
        data.splice(0, data.length - 12 - count + 1);
    } else if (util.inRange(time, 181, 240)) {
        data.splice(0, data.length - 12 - count + 1);
    }

    //Build reps and sets
    data.forEach((item, index) => {
        let type = item.split('/')[1][1]; //Get string if it is weighted or not - single char
        data[index] = { title: item.split('/')[0] }; //Get name of workout
        let reps, difficulty, randDiff, randReps, randSets, randMin, minutes;
        switch (type) {
            case 'w': //weighted
                reps = [8, 10, 12, 14];
                difficulty = ['Light', 'Medium', 'Heavy'];
                randDiff =
                    difficulty[Math.floor(Math.random() * difficulty.length)];
                randReps = reps[Math.floor(Math.random() * reps.length)];
                randSets = Math.floor(Math.random() * (5 - 2) + 2);
                data[index] = {
                    ...data[index],
                    reps: `${randReps} reps x ${randSets} sets - ${randDiff}`,
                }; //Add object to same index with title
                break;
            case 'n': //nonweighted
                reps = [10, 30, 60];
                randReps = reps[Math.floor(Math.random() * reps.length)];
                randSets = Math.floor(Math.random() * (4 - 2) + 2);
                data[index] = {
                    ...data[index],
                    reps: `${randReps} reps x ${randSets} sets`,
                };
                break;
            case 'c': //cardio
                minutes = [10, 15, 20, 30]; //Should add up to provided user minutes
                randMin = minutes[Math.floor(Math.random() * minutes.length)];
                data[index] = { ...data[index], minutes: `${randMin} minutes` };
                break;
            default:
                console.error('Unexpected parsing failure');
        }
    });
    return data;
}

/* Remove elements depending on the count
    10-30 minutes: 3 workouts
    30-40 minutes: 4 workouts
    40-60 minutes: 5 workouts
    60-90 minutes: 6-7 workouts
    120 minutes: 8-10 workouts
    120-160 minutes: 12 workouts
    160-180 minutes: 12 workouts, added reps
    180-240 minutes: 12 workouts, added reps x2
*/
