// script.js
const storyText = document.getElementById('story-text');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');

const story = {
    start: {
        text: "You are standing at a crossroads. Do you want to go left or right?",
        choices: {
            left: "leftPath",
            right: "rightPath"
        }
    },
    leftPath: {
        text: "You chose the left path and encounter a friendly dragon. Do you talk to the dragon or run away?",
        choices: {
            talk: "talkDragon",
            run: "runAway"
        }
    },
    rightPath: {
        text: "You chose the right path and find a treasure chest. Do you open it or leave it?",
        choices: {
            open: "openChest",
            leave: "leaveChest"
        }
    },
    talkDragon: {
        text: "The dragon shares its wisdom with you. Do you accept its advice or continue on your own?",
        choices: {
            accept: "acceptWisdom",
            continue: "continueOwn"
        }
    },
    runAway: {
        text: "You run away safely and find a hidden cave. Do you enter the cave or keep running?",
        choices: {
            enter: "enterCave",
            keepRunning: "keepRunning"
        }
    },
    openChest: {
        text: "You find gold and jewels. Suddenly, a genie appears. Do you ask for a wish or run away?",
        choices: {
            wish: "askWish",
            run: "runAwayGenie"
        }
    },
    leaveChest: {
        text: "You leave the chest and continue your journey. You find an abandoned village. Do you explore the village or keep walking?",
        choices: {
            explore: "exploreVillage",
            walk: "keepWalking"
        }
    },
    acceptWisdom: {
        text: "The dragon's wisdom guides you to a hidden treasure. You are now rich! The end.",
        choices: {}
    },
    continueOwn: {
        text: "You continue on your own but get lost in the forest. The end.",
        choices: {}
    },
    enterCave: {
        text: "Inside the cave, you find ancient artifacts. Do you take the artifacts or leave them?",
        choices: {
            take: "takeArtifacts",
            leave: "leaveArtifacts"
        }
    },
    keepRunning: {
        text: "You keep running and eventually find safety in a nearby village. The end.",
        choices: {}
    },
    askWish: {
        text: "The genie grants you a wish. You wish for infinite wisdom and live a fulfilling life. The end.",
        choices: {}
    },
    runAwayGenie: {
        text: "You run away from the genie and find yourself at another crossroads. Do you go left or right?",
        choices: {
            left: "leftPath",
            right: "rightPath"
        }
    },
    exploreVillage: {
        text: "While exploring the village, you find a secret map. Do you follow the map or ignore it?",
        choices: {
            follow: "followMap",
            ignore: "ignoreMap"
        }
    },
    keepWalking: {
        text: "You keep walking and discover a beautiful waterfall. You decide to rest and enjoy the view. The end.",
        choices: {}
    },
    takeArtifacts: {
        text: "You take the artifacts and become a renowned archaeologist. The end.",
        choices: {}
    },
    leaveArtifacts: {
        text: "You leave the artifacts and exit the cave safely. The end.",
        choices: {}
    },
    followMap: {
        text: "The map leads you to a hidden treasure. You are now rich! The end.",
        choices: {}
    },
    ignoreMap: {
        text: "You ignore the map and continue your journey. The end.",
        choices: {}
    }
};

function updateStory(node) {
    storyText.textContent = story[node].text;
    const choices = story[node].choices;
    if (Object.keys(choices).length === 0) {
        choice1.style.display = 'none';
        choice2.style.display = 'none';
    } else {
        choice1.style.display = 'inline-block';
        choice2.style.display = 'inline-block';
        choice1.textContent = Object.keys(choices)[0];
        choice2.textContent = Object.keys(choices)[1];
        choice1.onclick = () => updateStory(choices[Object.keys(choices)[0]]);
        choice2.onclick = () => updateStory(choices[Object.keys(choices)[1]]);
    }
}

// Start the story
updateStory('start');