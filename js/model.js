const model = {};

// _________________study_________________
model.allData = function (allIrregularVerb) {
    model.allData = controller.sortList(allIrregularVerb);
}

model.saveNormalVerbs = function (normalVerbs) {
    model.normalVerbs = controller.sortList(normalVerbs)
}

model.allSameSign = function (allIrregularVerb) {
    model.allSameSign = controller.sortList(allIrregularVerb);
}

model.v1LikeV3Sign = function (allIrregularVerb) {
    model.v1LikeV3Sign = controller.sortList(allIrregularVerb);
}

model.iAUsign = function (allIrregularVerb) {
    model.iAUsign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3Sign = function (allIrregularVerb) {
    model.v2LikeV3Sign = controller.sortList(allIrregularVerb);
}

model.differentSign = function (allIrregularVerb) {
    model.differentSign = controller.sortList(allIrregularVerb);
}

model.nInV3Sign = function (allIrregularVerb) {
    model.nInV3Sign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndDTSign = function (allIrregularVerb) {
    model.v2LikeV3AndDTSign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndMNTSign = function (allIrregularVerb) {
    model.v2LikeV3AndMNTSign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndEESign = function (allIrregularVerb) {
    model.v2LikeV3AndEESign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndOughtSign   = function (allIrregularVerb) {
    model.v2LikeV3AndOughtSign  = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndAidSign = function (allIrregularVerb) {
    model.v2LikeV3AndAidSign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndOuSign = function (allIrregularVerb) {
    model.v2LikeV3AndOuSign = controller.sortList(allIrregularVerb);
}

model.v2LikeV3AndUSign = function (allIrregularVerb) {
    model.v2LikeV3AndUSign = controller.sortList(allIrregularVerb);
}

model.nInV3Sign = function (allIrregularVerb) {
    model.nInV3Sign = controller.sortList(allIrregularVerb);
}

model.nInV3AndOInV2V3Sign = function (allIrregularVerb) {
    model.nInV3AndOInV2V3Sign = controller.sortList(allIrregularVerb);
}

model.nInV3AndEwInV2OwnInv3Sign = function (allIrregularVerb) {
    model.nInV3AndewInV2OwnInv3Sign = controller.sortList(allIrregularVerb);
}

model.nInV3AndOInV2Sign = function (allIrregularVerb) {
    model.nInV3AndOInV2Sign = controller.sortList(allIrregularVerb);
}

// _________________game________________
model.saveGameClick = function (clickCount) {
    model.gameClick = clickCount;
}

model.oppsVerbs = [];

model.saveOppsVerbs = function (id) {
    (model.oppsVerbs).push(id)
}

model.saveGameOpps = function (oppsCount) {
    model.gameOpps = oppsCount;
}

model.saveGameOkay = function (okayCount) {
    model.gameOkay = okayCount;
}

model.saveBasicVerbs = function (verbs) {
    model.basicVerbs = verbs
}

model.saveMediumVerbs = function (verbs) {
    model.mediumVerbs = verbs
}

model.saveHardVerbs = function (verbs) {
    model.hardVerbs = verbs
}

model.saveGameMode = function (mode) {
    model.gameMode = mode
}

// exercise
model.saveExercises = function (exercises) {
    model.exercises = exercises;
}