const components = {};

// ____________________main__________________
components.loading = `
    <div class="loading">
        <div style="text-align: center; width: 100%;">
            <img src="./img/logo.png">
        </div>
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>`

components.navBar = `
    <section class="header">
        <nav class="navbar navbar-expand-sm bg-light my-nav">
                <img src="./img/logo.png" class="logo" onclick="view.toStudy()">
            <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-light"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style="margin-left: 1rem;">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link header__title active" onclick="view.toStudy()" >Study</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link header__title" onclick="view.toExercises()">Exercises</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link header__title" onclick="view.showModalStartGame()">Game</a>
                    </li>
                </ul>
            </div>
        </nav>
    </section>`

components.footer = `
<section class="footer">
    <p style="float: left">Made By DaoBaNhat, LeVanThanh</p>
    <p style="float: right">Connect with us: admin991999@gmail.com</p>
</section>
`

// _______________________study__________________________
components.study = `
    <section id="study">
        
        <div id="findIrregularVerb">
            <form id="formToFind" class="form-to-find">
                <input type="text" id="formToFindInput" class="form-to-find__input" autocomplete="off"  placeholder="Search...">
                <button type="submit" class="form-to-find__button"><i class="fas fa-search"></i></button>
            </form>
        </div>
        
        <div class="container">
        <div class="menu-verb">
        <span>Với tài liệu này chúng tôi chia động từ bất quy tắc thành 4 nhóm chính</span>
        <a href="#1" title="Nhóm động từ không đổi"><span class="badge badge-danger my-badge">V1=V2=V3</span></a>
        <a href="#2" title="Nhóm các động từ có nguyên âm “I” ở V1, chuyển thành “A” ở V2 và “U” ở V3"><span class="badge badge-success my-badge">IAU</span></a>
        <a href="#3" title="Nhóm các động từ có V2 và V3 giống nhau"><span class="badge badge-primary my-badge">V2=V3</span></a>
        <a href="#4" title="Nhóm các động từ kết thúc “N” ở V3 "><span class="badge badge-warning my-badge">N</span></a>
        </div>
            <h1 id="1" class="content__title"><strong>1.</strong> Nhóm động từ không đổi <span class="badge badge-danger my-badge">V1=V2=V3</span></h1>
            <div id="tableOfv1=V2=V3Verbs" >
                
            </div>
            <h1 class="content__title"><strong>2.</strong> Nhóm động từ v1=v3</h1>
            <div id="tableOfV1=V3Verbs">
                
            </div>
            <h1 id="2" class="content__title"><strong>3.</strong> Nhóm các động từ có nguyên âm “I” ở V1, chuyển thành “A” ở V2 và “U” ở V3 <span class="badge badge-success my-badge">IAU</span></h1>
            <div id="tableOfIAUVerbs">
                
            </div>
            <h1 id="3" class="content__title"><strong>4.</strong> Nhóm các động từ có V2 và V3 giống nhau <span class="badge badge-primary my-badge">V2=V3</span></h1>
            <div id="tableOfV2=V3Verbs">

            </div>
            <h1 class="content__title"><strong>4.1</strong> D->T <span class="badge badge-primary my-badge">D->T</span></h1>
            <div id="tableOfV2=V3AndD->TVerbs">

            </div>
            <h1 class="content__title"><strong>4.2</strong> M,N-> More T <span class="badge badge-primary my-badge">M,N->More T</span></h1>
            <div id="tableOfV2=V3AndMN->TVerbs">

            </div>
            <h1 class="content__title"><strong>4.3</strong> EE->E <span class="badge badge-primary my-badge">EE</span></h1>
            <div id="tableOfV2=V3AndEE->EVerbs">

            </div>
            <h1 class="content__title"><strong>4.4</strong> Ought, Aught <span class="badge badge-primary my-badge">Ought, Aught</span></h1>
            <div id="tableOfV2=V3AndOught,AughtVerbs">

            </div>
            <h1 class="content__title"><strong>4.5</strong> Ay->Aid <span class="badge badge-primary my-badge">Ay->Aid</span></h1>
            <div id="tableOfV2=V3AndAy->AidVerbs">

            </div>
            <h1 class="content__title"><strong>4.6</strong> I->Ou <span class="badge badge-primary my-badge">I->Ou</span></h1>
            <div id="tableOfV2=V3AndI->OuVerbs">

            </div>
            <h1 class="content__title"><strong>4.7</strong> I->U <span class="badge badge-primary my-badge">I->U</span></h1>
            <div id="tableOfV2=V3AndI->UVerbs">

            </div>
            <h1 id="4" class="content__title"><strong>5.</strong>Nhóm các động từ kết thúc “N” ở V3 (n) <span class="badge badge-warning my-badge">N</span></h1>
            <div id="tableOfNInV3Verbs">

            </div>
            <h1 class="content__title"><strong>5.1</strong> O ở V2, V3 <span class="badge badge-warning my-badge">N, OV2V3</span></h1>
            <div id="tableOfNInV3AndOInV2,V3Verbs">

            </div>
            <h1 class="content__title"><strong>5.2</strong> O chỉ ở V2 <span class="badge badge-warning my-badge">N, OV2</span></h1>
            <div id="tableOfNInV3AndOInV2Verbs">

            </div>
            <h1 class="content__title"><strong>5.3</strong> Đuôi “EW” ở V2, “OWN” hoặc “AWN” ở V3<span class="badge badge-warning my-badge">N, EWV2</span></h1>
            <div id="tableOfNInV3AndEwInV2,OwnOrAwnInV3Verbs">

            </div>

            <h1 class="content__title"><strong>6</strong>. Nhóm động từ bất quy tắc khác</h1>
            <div id="tableOfOtherVerbs">

            </div>
            <p>Tài liệu tham khảo dicriction.cambrige.com và các trang tài liệu khác</p>
        </div>
    </section>`

components.modalDisplaySearchWorld = `
    <div class="modal fade" id="modalDisplaySearchVerbs">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body modal-search" id="modalContent">
                    
                </div>
            </div>
        </div>
    </div>
`
// _________________exercises___________________
components.exercises = `
    <div id="exercise" class="container exrcises">
        
    </div>`

// ________________game______________________
components.modalStartGame = `
    <div id="modalStartGame" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content" style="border: none">
                <div class="modal-header bg-info">
                    <h5 class="modal-title bg-info">Play game</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body my-bg" style="margin: 0.5rem">
                    <div class="card rule">
                        <h1 class="rule-title">How to play</h1>
                        <hr>
                        <p>Take choosing questions.</p>
                        <p>Think about the answer then hit <button class="btn btn-secondary"
                                style="padding: 0px">check</button> button</p>
                        <p>Click <button class="btn btn-primary" style="padding: 0px">Okay</button> if the answer is
                            correct or <button class="btn btn-danger" style="padding: 0px">Opps</button> if not</p>
                        <p>Open the whole card and get over 85% 'growth' points to win</p>
                    </div>
                    <div class="card tutorial container">
                        <div class="row">
                            <div class="col-sm-3">
                                <p>Growth</p>
                                <i class="fas fa-seedling"> 85%</i>
                            </div>
                            <div class="col-sm-3">
                                <p>Check</p>
                                <i class="fas fa-search"> 20</i>
                            </div>

                            <div class="col-sm-3">
                                <p>Opps</p>
                                <i class="fas fa-times"> 3</i>
                            </div>
                            <div class="col-sm-3">
                                <p>Okay</p>
                                <i class="fas fa-check"> 17</i>
                            </div>
                        </div>
                    </div>
                    <div class="row game-mode">
                        <div id="basicMode" class="col-sm-4" style="margin-bottom: 1rem;">
                            <div class="card">
                                <div class="row">
                                    <img src="./img/cupi.png">
                                    <h1 style="text-align: center;">Basic</h1>
                                </div>
                                <hr>
                                <p>easy for everyone</p>
                            </div>
                        </div>
                        <div id="mediumMode" class="col-sm-4" style="margin-bottom: 1rem;">
                            <div class="card">
                                <div class="row">
                                    <img src="./img/chicken.png">
                                    <h1 style="text-align: center;">Medium</h1>
                                </div>
                                <hr>
                                <p style="text-align: center;">more verbs and harder</p>
                            </div>
                        </div>
                        <div id="hardMode" class="col-sm-4" style="margin-bottom: 1rem;">
                            <div class="card">
                                <div class="row"><img src="./img/dinosaur.png">
                                    <h1>Hard</h1>
                                </div>
                                <hr>
                                <p>Are you sure about that?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

components.modalEndGame = `
<div id="modalEndGame" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" style="border: none">
                <div class="card tutorial container">
                    <p>result</p>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p>Growth</p>
                            <i id="resultGrowth" class="fas fa-seedling"> 85%</i>
                        </div>
                        <div class="col-sm-3">
                            <p>Check</p>
                            <i id="resultCheck" class="fas fa-search"> 20</i>
                        </div>
                        <div class="col-sm-3">
                            <p>Opps</p>
                            <i id="resultOpps" class="fas fa-times"> 3</i>
                        </div>
                        <div class="col-sm-3">
                            <p>Okay</p>
                            <i id="resultOkay" class="fas fa-check"> 17</i>
                        </div>
                    </div>
                    <hr>
                    <div id="resultImg" class="display: flex; justify-content: center">
                        
                    </div>
                    <div id="resultFix">
                        
                    </div>
                </div>
                <div class="card" style="padding: .5rem; margin-bottom: 1rem">
                    <div class="row" style="width: 100%; margin: 0">
                        <div class="col-sm-6" style="padding: 0">
                            <button type="button" onclick='view.toGame()' class="btn btn-danger" style="text-align: center; width: 100%"><i
                                    class="fas fa-sync-alt"></i> Restart</button>
                        </div>
                        <div class="col-sm-6" style="padding: 0">
                            <button type="button" onclick="view.showModalStartGame()" class="btn btn-primary" style="text-align: center; width: 100%"><i
                                    class="fas fa-sync-alt"></i> other
                                mode</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

components.game = `
<div class="grid my-bg">
<div class="grid-item" id="scoreBoard">
    <div class="card">
        <div class="growth">
            <i class="fas fa-seedling"></i>
            <span id="growth"></span>
        </div>
        <div class="Scoreboard">
            <div>
                <i class="fas fa-times"></i>
                <span id="scoreboardOpps"></span>
            </div>
            <div>
                <i class="fas fa-search"></i>
                <span id="scoreboardCheck"></span>
            </div>
            <div>
                <i class="fas fa-check"></i>
                <span id="scoreboardOkay"></span>
            </div>
        </div>
        <hr>
        <div style="display: flex; justify-content: center;">
            <button type="button" onclick="view.toGame()" class="btn btn-danger" style="width: 10rem"><i
                    class="fas fa-sync-alt"></i> Restart</button>
            <button type="button" onclick="view.showModalStartGame()" class="btn btn-primary" style="width: 10rem"><i
                    class="fas fa-sync-alt"></i> Other mode</button>
        </div>
    </div>
</div>
<div id="boardGame" class="board-game">

</div>
</div>`