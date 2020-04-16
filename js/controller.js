const controller = {};


// _______________________main___________________________
controller.getAllData = function () {
    return firebase
        .firestore()
        .collection('irregularVerbs')
        .get();
}

controller.getNormalVerbs = function () {
    return firebase
        .firestore()
        .collection('normalVerbs')
        .get();
}

controller.getExercises = function () {
    return firebase
        .firestore()
        .collection(' exercise')
        .get();
}

controller.dataDivisionThroughtLevel = function () {
    let allData = model.allData;
    let normalVerbs = model.normalVerbs;
    let basic = []
    let medium = []
    let hard = []
    for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (element.level == 'basic') {
            basic.push(element);
        }
        if (element.level == 'medium') {
            medium.push(element);
        }
        if (element.level == 'hard') {
            hard.push(element);
        }
    }
    for (let i = 0; i < normalVerbs.length; i++) {
        const element = normalVerbs[i];
        if (element.level == 'basic') {
            basic.push(element);
        }
        if (element.level == 'medium') {
            medium.push(element);
        }
        if (element.level == 'hard') {
            hard.push(element);
        }
    }
    model.saveBasicVerbs(basic);
    model.saveMediumVerbs(medium);
    model.saveHardVerbs(hard);
}

controller.transDocs = function (docs) {
    let dataResult = [];
    docs.forEach(element => {
        let data = element.data();
        data.id = element.id;
        dataResult.push(data)
    });
    return dataResult;
}

controller.dataDivisionThroughtSign = function (data) {
    let allSameSign = [];
    let v1LikeV3Sign = [];
    let v2LikeV3Sign = [];
    let iAUSign = [];
    let differentSign = [];
    let nInV3Sign = [];
    let v2LikeV3AndDTSign = [];
    let v2LikeV3AndMNTSign = [];
    let v2LikeV3AndEESign = [];
    let v2LikeV3AndOughtSign = [];
    let v2LikeV3AndAidSign = [];
    let v2LikeV3AndOuSign = [];
    let v2LikeV3AndUSign = [];
    let nInV3AndEwInV2OwnInv3Sign = [];
    let nInV3AndOInV2Sign = [];
    let nInV3AndOInV2V3Sign = []

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.signal === 'allSame') {
            allSameSign.push(element)
        }
        if (element.signal === 'v1=v3') {
            v1LikeV3Sign.push(element)
        }
        if (element.signal === 'v2=v3') {
            v2LikeV3Sign.push(element)
        }
        if (element.signal === 'v2=v3, d->t') {
            v2LikeV3AndDTSign.push(element)
        }
        if (element.signal === 'v2=v3, endByM,N->moreT') {
            v2LikeV3AndMNTSign.push(element)
        }
        if (element.signal === 'v2=v3, ee') {
            v2LikeV3AndEESign.push(element)
        }
        if (element.signal === 'v2=v3, ought,aught') {
            v2LikeV3AndOughtSign.push(element)
        }
        if (element.signal === 'v2=v3, ay->aid') {
            v2LikeV3AndAidSign.push(element)
        }
        if (element.signal === 'v2=v3, i->ou') {
            v2LikeV3AndOuSign.push(element)
        }
        if (element.signal === 'v2=v3, i->u') {
            v2LikeV3AndUSign.push(element)
        }
        if (element.signal === 'iau') {
            iAUSign.push(element)
        }
        if (element.signal === 'different') {
            differentSign.push(element)
        }
        if (element.signal === "nInV3") {
            nInV3Sign.push(element)
        }
        if (element.signal === "nInV3, oInV2,v3") {
            nInV3AndOInV2V3Sign.push(element)
        }
        if (element.signal === "nInV3, ewInV2,ownOrAwnInV3") {
            nInV3AndEwInV2OwnInv3Sign.push(element)
        }
        if (element.signal === "nInV3, oInV2") {
            nInV3AndOInV2Sign.push(element)
        }
    };

    model.allSameSign(allSameSign);
    model.v1LikeV3Sign(v1LikeV3Sign);
    model.v2LikeV3Sign(v2LikeV3Sign);
    model.iAUsign(iAUSign);
    model.differentSign(differentSign);
    model.v2LikeV3AndDTSign(v2LikeV3AndDTSign);
    model.v2LikeV3AndMNTSign(v2LikeV3AndMNTSign);
    model.v2LikeV3AndEESign(v2LikeV3AndEESign);
    model.v2LikeV3AndOughtSign(v2LikeV3AndOughtSign);
    model.v2LikeV3AndAidSign(v2LikeV3AndAidSign);
    model.v2LikeV3AndOuSign(v2LikeV3AndOuSign);
    model.v2LikeV3AndUSign(v2LikeV3AndUSign);
    model.nInV3Sign(nInV3Sign);
    model.nInV3AndOInV2V3Sign(nInV3AndOInV2V3Sign);
    model.nInV3AndEwInV2OwnInv3Sign(nInV3AndEwInV2OwnInv3Sign);
    model.nInV3AndOInV2Sign(nInV3AndOInV2Sign);
}

controller.sortList = (data) => {
    let term = data.sort(function (a, b) {
        var nameA = a.infinitiveVerbs;
        var nameB = b.infinitiveVerbs;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return term
}

// __________________game______________________
controller.checkEnd = function () {
    let numberOfVerbInGameMode = [];
    let numberOfClick = model.gameOkay + model.gameOpps;
    if (model.gameMode == 'basic') {
        numberOfVerbInGameMode = model.basicVerbs.length;
    }
    if (model.gameMode == 'medium') {
        numberOfVerbInGameMode = model.mediumVerbs.length;
    }
    if (model.gameMode == 'hard') {
        numberOfVerbInGameMode = model.hardVerbs.length;
    }
    if (numberOfClick == numberOfVerbInGameMode) {
            view.showModalEndGame();
    }
}   
// exercise
controller.exerciseCLean = function (exercises) {
    let array = [];
    for (let i = 0; i < exercises.length; i++) {
        const element = exercises[i];
        answer = element.answer;
        question = element.question;
        let fisrtPosition = question.indexOf(answer);
        let head = question.substring(0,fisrtPosition);
        let middle = question.substring(fisrtPosition,fisrtPosition + answer.length);
        let footer = question.substring(fisrtPosition + answer.length, question.length);
        array.push(
            {
                id: element.id,
                headQuestion: head,
                answer: answer,
                footerQuestion: footer
            }
        )
    };
    return array;
}