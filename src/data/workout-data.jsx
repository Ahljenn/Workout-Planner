export const splitsInfo = [
    { 
      "name" : "Push-Pull-Legs Split",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    { 
      "name" : "Bro Splits",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  
    },
    { 
      "name" : "Jim Wendler's 5-3-1",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  
    },
    { 
      "name" : "5-Day Split",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

export const workoutGroups = [
  {
    "name" : "Chest",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/chest.png?token=GHSAT0AAAAAABTPFFAJYMXUIUBO3SJLGFYYYVOFDUQ"
  },
  {
    "name" : "Legs",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/legs.png?token=GHSAT0AAAAAABTPFFAJMFX3REYJZZ4JEHBUYVOFELA"
  },
  {
    "name" : "Back",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/back.png?token=GHSAT0AAAAAABTPFFAILUDUWVKYXXI6XXQ6YVOFEWQ"
  },
  {
    "name" : "Arms",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/arms.png?token=GHSAT0AAAAAABTPFFAJK23M2A65TNWO6APAYVOFE4Q"
  },
  {
    "name" : "Shoulders",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/shoulder.png?token=GHSAT0AAAAAABTPFFAIOB43GWQ2RWHWQ4JWYVOFFCQ"
  },
  {
    "name" : "Abdominals",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/abs.png?token=GHSAT0AAAAAABTPFFAIWW3F5F6CGPO72O66YVOFDJA"
  },
  {
    "name" : "Cardio",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/cardio.png?token=GHSAT0AAAAAABTPFFAJCYX37PPKKC373JB6YVOFFJQ"
  },
  {
    "name" : "Random",
    "img" : "https://raw.githubusercontent.com/Ahljenn/Workout-Planner/main/public/imgs/random.png?token=GHSAT0AAAAAABTPFFAJIUBTYAMTGBZPQCNKYVOFFMQ"
  }
];

const chest = {
  weighted : [
  "Flat dumbell benchpress", 
  "Flat barbell benchpress", 
  "Flat dumbbell fly",
  "Incline dumbell benchpress", 
  "Incline barbell benchpress", 
  "Incline dumbbell fly", 
  "Decline dumbell benchpress", 
  "Decline barbell benchpress", 
  "Cable fly",
  "Plate press",
  "Cable cross-over",
  "Machine chest press", 
  "Machine chest fly",
  "Seated peckdeck fly" 
  ],

  nonWeighted : [
  "Dips",
  "Body-weight push-up (Any variation)",
  "Decline Body-weight push-up",
  "Seated tricep extension",
  "Burnout dips",
  "Burnout pushups" 
  ]
};

const legs = {
  weighted : [
  "Front squat"  , 
  "Barbell back squat"  ,
  "Deadlift"  , 
  "Leg press"  , 
  "Power clean"  , 
  "Hang clean" ,
  "Barbell lunge", 
  "Hamstring machine", 
  "Quad machine", 
  "Single-leg romanian deadlift", 
  "Kettlebell Swing"
  ]
};

const back = {
  weighted : [
  "Superman row"  , 
  "T-bar row"  , 
  "Deadlift"  , 
  "Barbell row"  , 
  "Single-arm dumbell row"  , 
  "Stiff arm pulldown"  , 
  "Wide-grip lat pulldown"  , 
  "Close-grip lat pulldown"  , 
  "Seated cable row"  , 
  "Standing cable L-pulls", 
  "Seated bicep curls", 
  "Hammer curls", 
  "Cable curls"
  ]
};

const arms = {
  weighted: [
    "Dumbell curls",
    "Twisted dumbell curls",
    "Dumbell hammer curls",
    "Dumbell isolated curls",
    "Dumbell seated curls",
    "Dumbell seated incline curls",
    "Barbell curls",
    "Barbell reverse curls",
    "Cable curls",
    "Single arm isolated cable curls",
    "Reverse cable curls",
    "Machine bicep curls",
    "Preacher curls",

    "Cable tricep pulldowns",
    "Single arm isolated cable pulldowns",
    "Tricep kickbacks",
    "Single arm isolated tricep kickbacks",
    "Dumbell tricep press",
    "Flat dumbell tricep press",
    "Skullcrushers",
    "Machine tricep extensions"
  ]
}

const shoulders = {
  weighted : [
  "Barbell overhead press", 
  "Dumbell overhead press", 
  "Arnold press",
  "Standing cable press", 
  "TYI", 
  "Barbell facepull", 
  "Cable facepull", 
  "Barbell lateral raise", 
  "Cable lateral raise", 
  "Dumbbell bent-over lateral raise"
  ]
};


//Ab work out logic is different
const abs = {
  nonWeighted : [
  "Track holds",
  "Flutter kicks",
  "Leg raise",
  "Flutter kicks",
  "In-n-outs",
  "Russian twist",
  "Star crunches",
  "Bicycles",
  "Mountain climbers",
  "Crunches",
  "Reach-ups",
  "Side planks",
  "Planks"
  ]
};

const cardio = {
  nonWeighted : [
    "Stairs",
    "Jog",
    "HIIT Sprints",
    "Bike", 
    "Swimming", 
    "Run"
  ]
}

export const workouts = {
  chest : chest, 
  legs : legs, 
  back : back, 
  arms : arms,
  shoulders : shoulders, 
  abdominals : abs,
  cardio : cardio
}