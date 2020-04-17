const view = {};

view.showComponents = async function (name) {
    switch (name) {
        case 'loading': {
            let app = document.getElementById('app');
            app.innerHTML = components.loading;

            let irregularVerbs = await controller.getAllData();
            model.allData(controller.transDocs(irregularVerbs.docs));

            let normalVerbs = await controller.getNormalVerbs();
            model.saveNormalVerbs(controller.transDocs(normalVerbs));

            let exercises = await controller.getExercises();
            model.saveExercises(controller.exerciseCLean(controller.transDocs(exercises)));
            controller.dataDivisionThroughtSign(model.allData);
            controller.dataDivisionThroughtLevel()
            $(document).ready(() => {
                view.showComponents('study');
            })
        }
        case 'study': {
            let app = document.getElementById('app');
            app.innerHTML = components.navBar + components.study + components.footer + components.modalDisplaySearchWorld + components.modalStartGame;
            view.showAllTable();
            $(document).ready(
                $('#formToFind').submit((e) => {
                    e.preventDefault();
                    let valueOfInput = $("#formToFindInput").val().trim().toLowerCase();
                    if (valueOfInput != '') {
                        let verbs = model.allData.concat(model.normalVerbs);
                        let hadSearchVerb;
                        for (let i = 0; i < verbs.length; i++) {
                            const element = verbs[i];
                            if (element.infinitiveVerbs === valueOfInput
                                || element.pastParticiple === valueOfInput
                                || element.simplePast === valueOfInput) {

                                $('#modalDisplaySearchVerbs').modal('show');

                                $("#modalContent").html(
                                    `<p>${element.infinitiveVerbs}</p>
                                <p>${element.simplePast} / ${element.pastParticiple}</p>
                                <p>${element.mean}</p>`
                                );
                                $("#formToFindInput").val("");
                                return hadSearchVerb = true;
                            }
                        }
                        if (hadSearchVerb != true) {
                            $('#modalDisplaySearchVerbs').modal('show');
                            $("#modalContent").html(
                                `<p>Không có dữ liệu về từ này</p>`
                            );
                            $("#formToFindInput").val("");
                        }
                    }
                }),
                $('.menu-verb a').click(function(event) {
                    event.preventDefault();
                    part = $(this).attr('href');
                    
                    let position = $(part).offset().top; // tìm vị trí thẻ h1
                    $('html, body').animate({scrollTop: position},1000,'easeInOutSine');
                    })
            )
            $('body').on('hidden.bs.modal', function () {
                if ($('.modal.show').length > 0) {
                    $('body').addClass('modal-open');
                }
            });
            break;
        }
        case 'exercises': {
            let app = document.getElementById('app');
            app.innerHTML = components.navBar + components.exercises + components.footer + components.modalStartGame;

            view.showQuestions();
            break;
        }
        case 'game': {
            let app = document.getElementById('app');
            app.innerHTML = components.navBar + components.game + components.modalStartGame + components.modalEndGame + components.footer;

            view.showBoardGame();
            view.showGrowth();
            view.showScoreboard();
            $('.grid').masonry({
                itemSelector: '.grid-item',
            });
            $('body').on('hidden.bs.modal', function () {
                if ($('.modal.show').length > 0) {
                    $('body').addClass('modal-open');
                }
            });


            break;
        }
    }
}
// _________________________game______________________________
view.showModalStartGame = function () {
    $("*").modal('hide');
    $("#modalStartGame").modal('show', () => {
        $("#modalStartGame").focus();
    });

    $("#basicMode").click(() => {
        model.saveGameMode('basic');
        $("#modalStartGame").modal('hide');
        view.toGame();
    });
    $("#mediumMode").click(() => {
        model.saveGameMode('medium');
        $("#modalStartGame").modal('hide');
        view.toGame();
    });
    $("#hardMode").click(() => {
        model.saveGameMode('hard');
        $("#modalStartGame").modal('hide');
        view.toGame();
    });
}

view.toGame = function () {
    $("*").modal('hide')
    model.saveGameClick(0);
    model.saveGameOkay(0);
    model.saveGameOpps(0);
    model.oppsVerbs = []
    view.showComponents('game');
    view.showGrowth();
    view.showScoreboard();
}

view.showBoardGame = function () {
    let areaShow = document.getElementById("boardGame");
    let irregularVerbs = [];
    if (model.gameMode == 'basic') {
        irregularVerbs = view.shuffle(model.basicVerbs);
    }
    if (model.gameMode == 'medium') {
        irregularVerbs = view.shuffle(model.mediumVerbs);
    }
    if (model.gameMode == 'hard') {
        irregularVerbs = view.shuffle(model.hardVerbs);
    }

    let s = "";
    for (let i = 0; i < irregularVerbs.length; i++) {
        const element = irregularVerbs[i];
        s += `
        <div class="grid-item" id="item-${i + 1}">
            <div class="card">
                <div class="card-show-verb">
                    <p>${element.infinitiveVerbs}</p>`
        element.simplePast == element.pastParticiple
            ? s += `<p id="solution-${i + 1}" class="opacity-text">${element.simplePast} (both)</p>`
            : s += `<p id="solution-${i + 1}" class="opacity-text">${element.simplePast} / ${element.pastParticiple}</p>`
        s += `</div>
                <hr>
                <div style="display: flex; justify-content: center;">
                    <button type="button" id="opps-${i + 1}" data-infinitiveVerb="${element.infinitiveVerbs}" class="btn btn-danger" style="text-align: center; width: 8rem"><i
                            class="fas fa-times"></i> Opps!</button>
                    <button type="button" id="check-${i + 1}" class="btn btn-secondary"
                        style="text-align: center; width: 8rem"><i class="fas fa-search"></i> Check</button>
                    <button type="button" id="okay-${i + 1}" class="btn btn-success" style="text-align: center; width: 8rem"><i
                            class="fas fa-check"></i> Okay!</button>
                </div>
            </div>
        </div>`;
        $(document).ready(() => {
            $(`#opps-${i + 1}`).hide();
            $(`#okay-${i + 1}`).hide();
            $(`#check-${i + 1}`).click(() => {
                model.saveGameClick(model.gameClick + 1);
                view.showScoreboard();
                $(`#check-${i + 1}`).hide();
                $(`#opps-${i + 1}`).show(200);
                $(`#okay-${i + 1}`).show(200);
                $(`#solution-${i + 1}`).css("opacity", "1");
            });

            $(`#opps-${i + 1}`).click(() => {
                model.saveGameOpps(model.gameOpps + 1);
                model.saveOppsVerbs($(`#opps-${i + 1}`).attr("data-infinitiveVerb"));
                view.showGrowth();
                view.showScoreboard();
                $grid = $(".grid");
                $item = $(`#item-${i + 1}`)
                $grid.masonry('remove', $item).masonry();
                controller.checkEnd();
            })
            $(`#okay-${i + 1}`).click(() => {
                model.saveGameOkay(model.gameOkay + 1);
                view.showGrowth();
                view.showScoreboard();
                $grid = $(".grid");
                $item = $(`#item-${i + 1}`)
                $grid.masonry('remove', $item).masonry();
                controller.checkEnd();
            })
        })
    }
    areaShow.innerHTML = s;
}

view.showScoreboard = function () {
    $("#scoreboardOpps").html(model.gameOpps);
    $("#scoreboardCheck").html(model.gameClick);
    $("#scoreboardOkay").html(model.gameOkay);
}

view.showGrowth = function () {
    let currentPercent = ((model.gameOkay / model.gameClick) * 100).toFixed(0);
    if (model.gameOkay == 0 && model.gameClick == 0) {
        currentPercent = 100;
    }
    $("#growth").html(`${currentPercent} %`);
}

view.shuffle = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ______________________exesires________________________
view.toExercises = function () {
    view.showComponents('exercises');
};

view.showQuestions = function () {
    let question = model.exercises;
    let s = "<p style='font-size: 16px; font-weight: 600'>Choose the correct past simple or past participle in space</p>";

    for (let i = 0; i < question.length; i++) {
        const element = question[i];
        s += `
        <div class="row question">
            <div class="col-9">
                <span>${i + 1})</span>
                <span>${element.headQuestion}</span>
                <form id="formQuestion-${i + 1}">
                <input type="text" id="inputQuestion-${i + 1}" size="10" maxlength="10" autocomplete="off"><i id="wrong-${i + 1}" class="fas fa-times fa-1.5x text-danger question__icon"></i><i id="correct-${i + 1}" class="fas fa-check text-success question__icon"></i>
                </form>
                <span>${element.footerQuestion}</span> 
                <p id="answerQuestion-${i + 1}">[.]</p>
            </div>
            <div class="col-3">
                <button type="submit" id="checkAnswer-${i + 1}" class="btn btn-primary">Check</button>
                <button type="button" id="ShowAnswer-${i + 1}" class="btn btn-info">Show</button>
            </div>
        </div>`
        $(document).ready(() => {
            $(`#wrong-${i + 1}`).hide();
            $(`#correct-${i + 1}`).hide();
            $(`#ShowAnswer-${i + 1}`).click(() => {
                $(`#answerQuestion-${i + 1}`).html(`[ ${element.answer} ]`)
            });

            $(`#checkAnswer-${i + 1}`).click(() => {
                let val = $(`#inputQuestion-${i + 1}`).val().trim().toLowerCase();
                if (val == element.answer) {
                    $(`#wrong-${i + 1}`).hide(200);
                    $(`#correct-${i + 1}`).show(200);
                }
                else {
                    $(`#correct-${i + 1}`).hide(200);
                    $(`#wrong-${i + 1}`).show(200);
                }
            })

            $(`#formQuestion-${i + 1}`).submit((e) => {
                e.preventDefault();
                let val = $(`#inputQuestion-${i + 1}`).val().trim();
                if (val == element.answer) {
                    $(`#wrong-${i + 1}`).hide(200);
                    $(`#correct-${i + 1}`).show(200);
                }
                else {
                    $(`#correct-${i + 1}`).hide(200);
                    $(`#wrong-${i + 1}`).show(200);
                }
            })
        })
    }
    $("#exercise").html(s)
};



// _______________________study__________________________
view.toStudy = function () {
    view.showComponents('study');
};

view.showAllTable = () => {
    view.showTable('tableOfv1=V2=V3Verbs', model.allSameSign);
    view.showTable('tableOfV1=V3Verbs', model.v1LikeV3Sign);
    view.showTable('tableOfIAUVerbs', model.iAUsign);
    view.showTable('tableOfV2=V3Verbs', model.v2LikeV3Sign);
    view.showTable('tableOfV2=V3AndD->TVerbs', model.v2LikeV3AndDTSign);
    view.showTable('tableOfV2=V3AndMN->TVerbs', model.v2LikeV3AndMNTSign);
    view.showTable('tableOfV2=V3AndEE->EVerbs', model.v2LikeV3AndEESign);
    view.showTable('tableOfV2=V3AndOught,AughtVerbs', model.v2LikeV3AndOughtSign);
    view.showTable('tableOfV2=V3AndAy->AidVerbs', model.v2LikeV3AndAidSign);
    view.showTable('tableOfV2=V3AndI->OuVerbs', model.v2LikeV3AndOuSign);
    view.showTable('tableOfV2=V3AndI->UVerbs', model.v2LikeV3AndUSign);
    view.showTable('tableOfOtherVerbs', model.differentSign);
    view.showTable('tableOfNInV3Verbs', model.nInV3Sign);
    view.showTable('tableOfNInV3AndOInV2,V3Verbs', model.nInV3AndOInV2V3Sign);
    view.showTable('tableOfNInV3AndOInV2Verbs', model.nInV3AndOInV2Sign);
    view.showTable('tableOfNInV3AndEwInV2,OwnOrAwnInV3Verbs', model.nInV3AndewInV2OwnInv3Sign);
}

view.showTable = (idInHtml, listVerbs) => {
    let tableResult = `
    <table class="table my-table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nguyên thể (V1)</th>
            <th scope="col">Quá khứ đơn (V2)</th>
            <th scope="col">Quá khứ phân từ (V3)</th>
            <th scope="col">Nghĩa thường gặp</th>
            </tr>
        </thead>
        <tbody>`
    for (let i = 0; i < listVerbs.length; i++) {
        const element = listVerbs[i];
        tableResult += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${element.infinitiveVerbs}</td>
                <td>${element.simplePast}</td>
                <td>${element.pastParticiple}</td>
                <td>${element.mean}</td>
            </tr> `
    }
    tableResult += `
            </tbody>
        </table>`
    let id = document.getElementById(idInHtml);
    id.innerHTML = tableResult
}

view.showModalEndGame = function () {
    $("#modalEndGame").modal('show');
    let result = ((model.gameOkay / model.gameClick) * 100).toFixed(0);
    $(document).ready(() => {
        $("#resultGrowth").html(`${result} %`);
        $("#resultCheck").html(`${model.gameClick}`);
        $("#resultOpps").html(`${model.gameOpps}`);
        $("#resultOkay").html(`${model.gameOkay}`);
    })
    if (result >= 85) {
        $(document).ready(() => {
            $("#resultImg").html(`
            <p style="line-height: 2.5rem;">Victory</p>
            <img src="./img/victoryCup.png" alt="victoryCup" style="width: 150px; height: 150px;">
            <p>You got a cup</p>`);
        })
    }
    else {
        $(document).ready(() => {
            $("#resultImg").html(`
            <p style="line-height: 2.5rem;">Defeat</p>
            <img src="./img/coffeeCup.png" alt="CoffeeCup" style="width: 150px; height: 150px;">
            <p>But it's ok, You got a coffee cup</p>`);
        })
    }
    if (model.oppsVerbs.length != 0) {
        let s = '';
        for (let i = 0; i < model.oppsVerbs.length; i++) {
            const element = model.oppsVerbs[i];
            s += `${element}, `
        }
        $(document).ready(() => {
            $("#resultFix").html(`
            <hr>
            <p style="line-height: 2.5rem;">You should be careful when using some verbs: </p>
            <p>${s}</p>`);
        })
    }
}