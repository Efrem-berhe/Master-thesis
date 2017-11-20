function startIntro(source) {
    var intro = introJs();
    intro.setOptions({
        steps: [
            {
                element: '#step1',
                intro: "In this block you can see results of overall or individual category," +
                " after filling surveys",
                position: 'bottom'
            },
            {
                element: '#step2',
                intro: "The badges you see below are in progress badges you can win them only if you complete the task",
                position: 'bottom'
            },
            {
                element: '#step3',
                intro: 'This leader board is where you can see your ranking',
                position: 'bottom'
            }
        ]
    });


    var mysurvey = introJs();
    mysurvey.setOptions({
        steps: [

            {
                element: '#step1',
                intro: "Select one category to start your survey",
                position: 'bottom'
            },
        ]
    });

    var profile = introJs();
    profile.setOptions({
        steps: [
            {
                element: '#step1',
                intro: "Upload or select a picture to change your profile picture",
                position: 'bottom'
            },
        ]
    });

    var rank = introJs();
    rank.setOptions({
        steps: [
            {
                element: '#step1',
                intro: "your name is highlighted, your ranking is on the left side of your profile picture",
                position: 'bottom'
            }
        ]
    });

    var achievement = introJs();
    achievement.setOptions({
        steps: [
            {
                element: '#step1',
                intro: "All your collected badges will be displayed here",
                position: 'bottom'
            },
            {
                element: '#step2',
                intro: "These badges are future badges, you can collect them if you complete the task. Read the name of the badge and challenge on the description.",
                position: 'bottom'
            },
        ]
    });

    if (source == 'home')
        intro.start().oncomplete();

    if (source == 'Home')
        intro.start();

    else if (source == 'mysurvey')
        mysurvey.start().oncomplete();

    if (source == 'My Survey')
        mysurvey.start();

    else if (source == 'rank')
        rank.start().oncomplete();

    if (source == 'Rank')
        rank.start();

    else if (source == 'achievement')
        achievement.start().oncomplete();

    if (source == 'Achievement')
        achievement.start();

    if (source == 'Profile')
        profile.start();
}

