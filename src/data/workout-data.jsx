export const splitsInfo = [
    {
        name: 'Push-Pull-Legs Split',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: 'Bro Splits',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: "Jim Wendler's 5-3-1",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: '5-Day Split',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

export const workoutGroups = [
    {
        name: 'Chest',
        img: 'https://library.kissclipart.com/20180916/wbw/kissclipart-exercise-clipart-exercise-fitness-centre-weight-tr-70bd23ec73d5f38a.png',
    },
    {
        name: 'Legs',
        img: 'https://cdn2.iconfinder.com/data/icons/warm-up-cool-down-exercise-02/684/leg_stretch_exercise_workout_warm_up-512.png',
    },
    {
        name: 'Back',
        img: 'https://cdn3.iconfinder.com/data/icons/workouts/500/back-512.png',
    },
    {
        name: 'Arms',
        img: 'https://cdn3.iconfinder.com/data/icons/workouts/500/bicep-512.png',
    },
    {
        name: 'Shoulders',
        img: 'https://cdn-icons-png.flaticon.com/512/2324/2324729.png',
    },
    {
        name: 'Abdominals',
        img: 'https://www.pngmart.com/files/21/6-Pack-Abs-PNG-Pic.png',
    },
    {
        name: 'Cardio',
        img: 'https://icon-library.com/images/cardio-icon/cardio-icon-13.jpg',
    },
    {
        name: 'Random',
        img: 'https://cdn2.iconfinder.com/data/icons/arrows-set-2/512/14-512.png',
    },
];

const chest = {
    weighted: [
        'Flat dumbell benchpress',
        'Flat barbell benchpress',
        'Flat dumbbell fly',
        'Incline dumbell benchpress',
        'Incline barbell benchpress',
        'Incline dumbbell fly',
        'Decline dumbell benchpress',
        'Decline barbell benchpress',
        'Cable fly',
        'Plate press',
        'Cable cross-over',
        'Machine chest press',
        'Machine chest fly',
        'Seated peckdeck fly',
    ],

    nonWeighted: [
        'Dips',
        'Body-weight push-up (Any variation)',
        'Decline Body-weight push-up',
        'Seated tricep extension',
        'Burnout dips',
        'Burnout pushups',
    ],
};

const legs = {
    weighted: [
        'Front squat',
        'Barbell back squat',
        'Deadlift',
        'Leg press',
        'Power clean',
        'Hang clean',
        'Barbell lunge',
        'Hamstring machine',
        'Quad machine',
        'Single-leg romanian deadlift',
        'Kettlebell Swing',
    ],
};

const back = {
    weighted: [
        'Superman row',
        'T-bar row',
        'Deadlift',
        'Barbell row',
        'Single-arm dumbell row',
        'Stiff arm pulldown',
        'Wide-grip lat pulldown',
        'Close-grip lat pulldown',
        'Seated cable row',
        'Standing cable L-pulls',
        'Seated bicep curls',
        'Hammer curls',
        'Cable curls',
    ],
};

const arms = {
    weighted: [
        'Dumbell curls',
        'Twisted dumbell curls',
        'Dumbell hammer curls',
        'Dumbell isolated curls',
        'Dumbell seated curls',
        'Dumbell seated incline curls',
        'Barbell curls',
        'Barbell reverse curls',
        'Cable curls',
        'Single arm isolated cable curls',
        'Reverse cable curls',
        'Machine bicep curls',
        'Preacher curls',

        'Cable tricep pulldowns',
        'Single arm isolated cable pulldowns',
        'Tricep kickbacks',
        'Single arm isolated tricep kickbacks',
        'Dumbell tricep press',
        'Flat dumbell tricep press',
        'Skullcrushers',
        'Machine tricep extensions',
    ],
};

const shoulders = {
    weighted: [
        'Barbell overhead press',
        'Dumbell overhead press',
        'Arnold press',
        'Standing cable press',
        'TYI',
        'Barbell facepull',
        'Cable facepull',
        'Barbell lateral raise',
        'Cable lateral raise',
        'Dumbbell bent-over lateral raise',
    ],
};

const abs = {
    nonWeighted: [
        'Track holds',
        'Flutter kicks',
        'Leg raise',
        'Flutter kicks',
        'In-n-outs',
        'Russian twist',
        'Star crunches',
        'Bicycles',
        'Mountain climbers',
        'Crunches',
        'Reach-ups',
        'Side planks',
        'Planks',
    ],
};

const cardio = {
    cardio: ['Stairs', 'Jog', 'HIIT Sprints', 'Bike', 'Swimming', 'Run'],
};

// 1. Brzycki formula: Weight × (36 / (37 – number of reps))
// 2. Epley formula: Weight × (1 + (0.0333 × number of reps))
// 3. Lombardi formula: Weight × (number of reps ^ 0.1)
// 4. O’Conner formula: Weight × (1 + (0.025 × number of reps))
export const calculationTypeList = {
    'Jim Wendler Formula': 'weightState * repState * 0.0333 + weightState',
    'Brzycki Formula': 'weightState * (36 / (37 - repState))',
    'Epley Formula': 'weightState * (1 + (0.0333 * repState))',
    'Lombardi Formula': 'weightState * Math.pow(repState,0.1)',
    "O'Conner Formula": 'weightState * (1 + (0.025 * repState));',
    'Average All': 'avg',
};

export const workouts = {
    chest: chest,
    legs: legs,
    back: back,
    arms: arms,
    shoulders: shoulders,
    abdominals: abs,
    cardio: cardio,
};
