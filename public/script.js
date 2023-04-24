$("#generate").click(function(){
	var lorem = $("#lorem");
	lorem.html("")
	var quantity = $("#quantity")[0].valueAsNumber;
	var data = ["Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. et harum quidem rerum facilis est et expedita distinctio. nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.","Hanc ego cum teneam sententiam, quid est cur verear, ne ad eam non possim accommodare Torquatos nostros? quos tu paulo ante cum memoriter, tum etiam erga nos amice et benivole collegisti, nec me tamen laudandis maioribus meis corrupisti nec segniorem ad respondendum reddidisti. quorum facta quem ad modum, quaeso, interpretaris? sicine eos censes aut in armatum hostem impetum fecisse aut in liberos atque in sanguinem suum tam crudelis fuisse, nihil ut de utilitatibus, nihil ut de commodis suis cogitarent? at id ne ferae quidem faciunt, ut ita ruant itaque turbent, ut earum motus et impetus quo pertineant non intellegamus, tu tam egregios viros censes tantas res gessisse sine causa?  Quae fuerit causa, mox videro; interea hoc tenebo, si ob aliquam causam ista, quae sine dubio praeclara sunt, fecerint, virtutem iis per se ipsam causam non fuisse. -- Torquem detraxit hosti. -- Et quidem se texit, ne interiret. -- At magnum periculum adiit. -- In oculis quidem exercitus. -- Quid ex eo est consecutus? -- Laudem et caritatem, quae sunt vitae sine metu degendae praesidia firmissima. -- Filium morte multavit. -- Si sine causa, nollem me ab eo ortum, tam inportuno tamque crudeli; sin, ut dolore suo sanciret militaris imperii disciplinam exercitumque in gravissimo bello animadversionis metu contineret, saluti prospexit civium, qua intellegebat contineri suam. atque haec ratio late patet.  In quo enim maxime consuevit iactare vestra se oratio, tua praesertim, qui studiose antiqua persequeris, claris et fortibus viris commemorandis eorumque factis non emolumento aliquo, sed ipsius honestatis decore laudandis, id totum evertitur eo delectu rerum, quem modo dixi, constituto, ut aut voluptates omittantur maiorum voluptatum adipiscendarum causa aut dolores suscipiantur maiorum dolorum effugiendorum gratia.","Sed de clarorum hominum factis illustribus et gloriosis satis hoc loco dictum sit. erit enim iam de omnium virtutum cursu ad voluptatem proprius disserendi locus. nunc autem explicabo, voluptas ipsa quae qualisque sit, ut tollatur error omnis imperitorum intellegaturque ea, quae voluptaria, delicata, mollis habeatur disciplina, quam gravis, quam continens, quam severa sit. Non enim hanc solam sequimur, quae suavitate aliqua naturam ipsam movet et cum iucunditate quadam percipitur sensibus, sed maximam voluptatem illam habemus, quae percipitur omni dolore detracto, nam quoniam, cum privamur dolore, ipsa liberatione et vacuitate omnis molestiae gaudemus, omne autem id, quo gaudemus, voluptas est, ut omne, quo offendimur, dolor, doloris omnis privatio recte nominata est voluptas. ut enim, cum cibo et potione fames sitisque depulsa est, ipsa detractio molestiae consecutionem affert voluptatis, sic in omni re doloris amotio successionem efficit voluptatis.  Itaque non placuit Epicuro medium esse quiddam inter dolorem et voluptatem; illud enim ipsum, quod quibusdam medium videretur, cum omni dolore careret, non modo voluptatem esse, verum etiam summam voluptatem. quisquis enim sentit, quem ad modum sit affectus, eum necesse est aut in voluptate esse aut in dolore. omnis autem privatione doloris putat Epicurus terminari summam voluptatem, ut postea variari voluptas distinguique possit, augeri amplificarique non possit.   At etiam Athenis, ut e patre audiebam facete et urbane Stoicos irridente, statua est in Ceramico Chrysippi sedentis porrecta manu, quae manus significet illum in hae esse rogatiuncula delectatum: 'Numquidnam manus tua sic affecta, quem ad modum affecta nunc est, desiderat?' -- Nihil sane. -- 'At, si voluptas esset bonum, desideraret.' -- Ita credo. -- 'Non est igitur voluptas bonum.' Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. nam si ea sola voluptas esset, quae quasi titillaret sensus, ut ita dicam, et ad eos cum suavitate afflueret et illaberetur, nec manus esse contenta posset nec ulla pars vacuitate doloris sine iucundo motu voluptatis. sin autem summa voluptas est, ut Epicuro placet, nihil dolere, primum tibi recte, Chrysippe, concessum est nihil desiderare manum, cum ita esset affecta, secundum non recte, si voluptas esset bonum, fuisse desideraturam. idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est.","Extremum autem esse bonorum voluptatem ex hoc facillime perspici potest: Constituamus aliquem magnis, multis, perpetuis fruentem et animo et corpore voluptatibus nullo dolore nec impediente nec inpendente, quem tandem hoc statu praestabiliorem aut magis expetendum possimus dicere? inesse enim necesse est in eo, qui ita sit affectus, et firmitatem animi nec mortem nec dolorem timentis, quod mors sensu careat, dolor in longinquitate levis, in gravitate brevis soleat esse, ut eius magnitudinem celeritas, diuturnitatem allevatio consoletur.  Ad ea cum accedit, ut neque divinum numen horreat nec praeteritas voluptates effluere patiatur earumque assidua recordatione laetetur, quid est, quod huc possit, quod melius sit, accedere? Statue contra aliquem confectum tantis animi corporisque doloribus, quanti in hominem maximi cadere possunt, nulla spe proposita fore levius aliquando, nulla praeterea neque praesenti nec expectata voluptate, quid eo miserius dici aut fingi potest? quodsi vita doloribus referta maxime fugienda est, summum profecto malum est vivere cum dolore, cui sententiae consentaneum est ultimum esse bonorum eum voluptate vivere. nec enim habet nostra mens quicquam, ubi consistat tamquam in extremo, omnesque et metus et aegritudines ad dolorem referuntur, nec praeterea est res ulla, quae sua natura aut sollicitare possit aut angere.  Praeterea et appetendi et refugiendi et omnino rerum gerendarum initia proficiscuntur aut a voluptate aut a dolore. quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. quoniam autem id est vel summum bonorum vel ultimum vel extremum -- quod Graeci telos nominant --, quod ipsum nullam ad aliam rem, ad id autem res referuntur omnes, fatendum est summum esse bonum iucunde vivere.",",Id qui in una virtute ponunt et splendore nominis capti quid natura postulet non intellegunt, errore maximo, si Epicurum audire voluerint, liberabuntur: istae enim vestrae eximiae pulchraeque virtutes nisi voluptatem efficerent, quis eas aut laudabilis aut expetendas arbitraretur? ut enim medicorum scientiam non ipsius artis, sed bonae valetudinis causa probamus, et gubernatoris ars, quia bene navigandi rationem habet, utilitate, non arte laudatur, sic sapientia, quae ars vivendi putanda est, non expeteretur, si nihil efficeret; nunc expetitur, quod est tamquam artifex conquirendae et comparandae voluptatis --  Quam autem ego dicam voluptatem, iam videtis, ne invidia verbi labefactetur oratio mea --. nam cum ignoratione rerum bonarum et malarum maxime hominum vita vexetur, ob eumque errorem et voluptatibus maximis saepe priventur et durissimis animi doloribus torqueantur, sapientia est adhibenda, quae et terroribus cupiditatibusque detractis et omnium falsarum opinionum temeritate derepta certissimam se nobis ducem praebeat ad voluptatem. sapientia enim est una, quae maestitiam pellat ex animis, quae nos exhorrescere metu non sinat. qua praeceptrice in tranquillitate vivi potest omnium cupiditatum ardore restincto. cupiditates enim sunt insatiabiles, quae non modo singulos homines, sed universas familias evertunt, totam etiam labefactant saepe rem publicam.  Ex cupiditatibus odia, discidia, discordiae, seditiones, bella nascuntur, nec eae se foris solum iactant nec tantum in alios caeco impetu incurrunt, sed intus etiam in animis inclusae inter se dissident atque discordant, ex quo vitam amarissimam necesse est effici, ut sapiens solum amputata circumcisaque inanitate omni et errore naturae finibus contentus sine aegritudine possit et sine metu vivere.  Quae est enim aut utilior aut ad bene vivendum aptior partitio quam illa, qua est usus Epicurus? qui unum genus posuit earum cupiditatum, quae essent et naturales et necessariae, alterum, quae naturales essent nec tamen necessariae, tertium, quae nec naturales nec necessariae. quarum ea ratio est, ut necessariae nec opera multa nec impensa expleantur; ne naturales quidem multa desiderant, propterea quod ipsa natura divitias, quibus contenta sit, et parabilis et terminatas habet; inanium autem cupiditatum nec modus ullus nec finis inveniri potest.  Quodsi vitam omnem perturbari videmus errore et inscientia, sapientiamque esse solam, quae nos a libidinum impetu et a formidinum terrore vindicet et ipsius fortunae modice ferre doceat iniurias et omnis monstret vias, quae ad quietem et ad tranquillitatem ferant, quid est cur dubitemus dicere et sapientiam propter voluptates expetendam et insipientiam propter molestias esse fugiendam?","Eademque ratione ne temperantiam quidem propter se expetendam esse dicemus, sed quia pacem animis afferat et eos quasi concordia quadam placet ac leniat. temperantia est enim, quae in rebus aut expetendis aut fugiendis ut rationem sequamur monet. nec enim satis est iudicare quid faciendum non faciendumve sit, sed stare etiam oportet in eo, quod sit iudicatum. plerique autem, quod tenere atque servare id, quod ipsi statuerunt, non possunt, victi et debilitati obiecta specie voluptatis tradunt se libidinibus constringendos nec quid eventurum sit provident ob eamque causam propter voluptatem et parvam et non necessariam et quae vel aliter pararetur et qua etiam carere possent sine dolore tum in morbos gravis, tum in damna, tum in dedecora incurrunt, saepe etiam legum iudiciorumque poenis obligantur.  Qui autem ita frui volunt voluptatibus, ut nulli propter eas consequantur dolores, et qui suum iudicium retinent, ne voluptate victi faciant id, quod sentiant non esse faciendum, ii voluptatem maximam adipiscuntur praetermittenda voluptate. idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. ex quo intellegitur nec intemperantiam propter se esse fugiendam temperantiamque expetendam, non quia voluptates fugiat, sed quia maiores consequatur.","Eadem fortitudinis ratio reperietur. nam neque laborum perfunctio neque perpessio dolorum per se ipsa allicit nec patientia nec assiduitas nec vigiliae nec ea ipsa, quae laudatur, industria, ne fortitudo quidem, sed ista sequimur, ut sine cura metuque vivamus animumque et corpus, quantum efficere possimus, molestia liberemus. ut enim mortis metu omnis quietae vitae status perturbatur, et ut succumbere doloribus eosque humili animo inbecilloque ferre miserum est, ob eamque debilitatem animi multi parentes, multi amicos, non nulli patriam, plerique autem se ipsos penitus perdiderunt, sic robustus animus et excelsus omni est liber cura et angore, cum et mortem contemnit, qua qui affecti sunt in eadem causa sunt, qua ante quam nati, et ad dolores ita paratus est, ut meminerit maximos morte finiri, parvos multa habere intervalla requietis, mediocrium nos esse dominos, ut, si tolerabiles sint, feramus, si minus, animo aequo e vita, cum ea non placeat, tamquam e theatro exeamus. quibus rebus intellegitur nec timiditatem ignaviamque vituperari nec fortitudinem patientiamque laudari suo nomine, sed illas reici, quia dolorem pariant, has optari, quia voluptatem.","Iustitia restat, ut de omni virtute sit dictum. sed similia fere dici possunt. ut enim sapientiam, temperantiam, fortitudinem copulatas esse docui cum voluptate, ut ab ea nullo modo nec divelli nec distrahi possint, sic de iustitia iudicandum est, quae non modo numquam nocet cuiquam, sed contra semper afficit cum vi sua atque natura, quod tranquillat animos, tum spe nihil earum rerum defuturum, quas natura non depravata desiderat. et] quem ad modum temeritas et libido et ignavia semper animum excruciant et semper sollicitant turbulentaeque sunt, sic inprobitas si] cuius in mente consedit, hoc ipso, quod adest, turbulenta est; si vero molita quippiam est, quamvis occulte fecerit, numquam tamen id confidet fore semper occultum. plerumque improborum facta primo suspicio insequitur, dein sermo atque fama, tum accusator, tum iudex;  Multi etiam, ut te consule, ipsi se indicaverunt. quodsi qui satis sibi contra hominum conscientiam saepti esse et muniti videntur, deorum tamen horrent easque ipsas sollicitudines, quibus eorum animi noctesque diesque exeduntur, a diis inmortalibus supplicii causa importari putant. quae autem tanta ex improbis factis ad minuendas vitae molestias accessio potest fieri, quanta ad augendas, cum conscientia factorum, tum poena legum odioque civium? et tamen in quibusdam neque pecuniae modus est neque honoris neque imperii nec libidinum nec epularum nec reliquarum cupiditatum, quas nulla praeda umquam improbe parta minuit, sed] potius inflammat, ut coercendi magis quam dedocendi esse videantur.","Invitat igitur vera ratio bene sanos ad iustitiam, aequitatem, fidem, neque homini infanti aut inpotenti iniuste facta conducunt, qui nec facile efficere possit, quod conetur, nec optinere, si effecerit, et opes vel fortunae vel ingenii liberalitati magis conveniunt, qua qui utuntur, benivolentiam sibi conciliant et, quod aptissimum est ad quiete vivendum, caritatem, praesertim cum omnino nulla sit causa peccandi.  Quae enim cupiditates a natura proficiscuntur, facile explentur sine ulla iniuria, quae autem inanes sunt, iis parendum non est. nihil enim desiderabile concupiscunt, plusque in ipsa iniuria detrimenti est quam in iis rebus emolumenti, quae pariuntur iniuria. Itaque ne iustitiam quidem recte quis dixerit per se ipsam optabilem, sed quia iucunditatis vel plurimum afferat. nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. itaque non ob ea solum incommoda, quae eveniunt inprobis, fugiendam inprobitatem putamus, sed multo etiam magis, quod, cuius in animo versatur, numquam sinit eum respirare, numquam adquiescere.","Quodsi ne ipsarum quidem virtutum laus, in qua maxime ceterorum philosophorum exultat oratio, reperire exitum potest, nisi derigatur ad voluptatem, voluptas autem est sola, quae nos vocet ad se et alliciat suapte natura, non potest esse dubium, quin id sit summum atque extremum bonorum omnium, beateque vivere nihil aliud sit nisi cum voluptate vivere.","Huic certae stabilique sententiae quae sint coniuncta explicabo brevi. nullus in ipsis error est finibus bonorum et malorum, id est in voluptate aut in dolore, sed in his rebus peccant, cum e quibus haec efficiantur ignorant. animi autem voluptates et dolores nasci fatemur e corporis voluptatibus et doloribus -- itaque concedo, quod modo dicebas, cadere causa, si qui e nostris aliter existimant, quos quidem video esse multos, sed imperitos --, quamquam autem et laetitiam nobis voluptas animi et molestiam dolor afferat, eorum tamen utrumque et ortum esse e corpore et ad corpus referri, nec ob eam causam non multo maiores esse et voluptates et dolores animi quam corporis. nam corpore nihil nisi praesens et quod adest sentire possumus, animo autem et praeterita et futura. ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. quod idem licet transferre in voluptatem, ut ea maior sit, si nihil tale metuamus.   Iam illud quidem perspicuum est, maximam animi aut voluptatem aut molestiam plus aut ad beatam aut ad miseram vitam afferre momenti quam eorum utrumvis, si aeque diu sit in corpore. Non placet autem detracta voluptate aegritudinem statim consequi, nisi in voluptatis locum dolor forte successerit, at contra gaudere nosmet omittendis doloribus, etiamsi voluptas ea, quae sensum moveat, nulla successerit, eoque intellegi potest quanta voluptas sit non dolere.  Sed ut iis bonis erigimur, quae expectamus, sic laetamur iis, quae recordamur. stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant. est autem situm in nobis ut et adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. sed cum ea, quae praeterierunt, acri animo et attento intuemur, tum fit ut aegritudo sequatur, si illa mala sint, laetitia, si bona.",",O praeclaram beate vivendi et apertam et simplicem et directam viam! eum enim certe nihil homini possit melius esse quam vacare omni dolore et molestia perfruique maximis et animi et corporis voluptatibus, videtisne quam nihil praetermittatur quod vitam adiuvet, quo facilius id, quod propositum est, summum bonum consequamur? clamat Epicurus, is quem vos nimis voluptatibus esse deditum dicitis; non posse iucunde vivi, nisi sapienter, honeste iusteque vivatur, nec sapienter, honeste, iuste, nisi iucunde.  Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; quo minus animus a se ipse dissidens secumque discordans gustare partem ullam liquidae voluptatis et liberae potest. atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.","Quodsi corporis gravioribus morbis vitae iucunditas impeditur, quanto magis animi morbis impediri necesse est! animi autem morbi sunt cupiditates inmensae et inanes divitiarum, gloriae, dominationis, libidinosarum etiam voluptatum. accedunt aegritudines, molestiae, maerores, qui exedunt animos conficiuntque curis hominum non intellegentium nihil dolendum esse animo, quod sit a dolore corporis praesenti futurove seiunctum. nec vero quisquam stultus non horum morborum aliquo laborat, nemo igitur est non miser.  Accedit etiam mors, quae quasi saxum Tantalo semper impendet, tum superstitio, qua qui est imbutus quietus esse numquam potest. praeterea bona praeterita non meminerunt, praesentibus non fruuntur, futura modo expectant, quae quia certa esse non possunt, conficiuntur et angore et metu maximeque cruciantur, cum sero sentiunt frustra se aut pecuniae studuisse aut imperiis aut opibus aut gloriae. nullas enim consequuntur voluptates, quarum potiendi spe inflammati multos labores magnosque susceperant.  ecce autem alii minuti et angusti aut omnia semper desperantes aut malivoli, invidi, difficiles, lucifugi, maledici, monstruosi, alii autem etiam amatoriis levitatibus dediti, alii petulantes, alii audaces, protervi, idem intemperantes et ignavi, numquam in sententia permanentes, quas ob causas in eorum vita nulla est intercapedo molestiae. igitur neque stultorum quisquam beatus neque sapientium non beatus. Multoque hoc melius nos veriusque quam Stoici. illi enim negant esse bonum quicquam nisi nescio quam illam umbram, quod appellant honestum non tam solido quam splendido nomine, virtutem autem nixam hoc honesto nullam requirere voluptatem atque ad beate vivendum se ipsa esse contentam.","Sed possunt haec quadam ratione dici non modo non repugnantibus, verum etiam approbantibus nobis. sic enim ab Epicuro sapiens semper beatus inducitur: finitas habet cupiditates, neglegit mortem, de diis inmortalibus sine ullo metu vera sentit, non dubitat, si ita melius sit, migrare de vita. his rebus instructus semper est in voluptate. neque enim tempus est ullum, quo non plus voluptatum habeat quam dolorum. nam et praeterita grate meminit et praesentibus ita potitur, ut animadvertat quanta sint ea quamque iucunda, neque pendet ex futuris, sed expectat illa, fruitur praesentibus ab iisque vitiis, quae paulo ante collegi, abest plurimum et, cum stultorum vitam cum sua comparat, magna afficitur voluptate. dolores autem si qui incurrunt, numquam vim tantam habent, ut non plus habeat sapiens, quod gaudeat, quam quod angatur.  Optime vero Epicurus, quod exiguam dixit fortunam intervenire sapienti maximasque ab eo et gravissimas res consilio ipsius et ratione administrari neque maiorem voluptatem ex infinito tempore aetatis percipi posse, quam ex hoc percipiatur, quod videamus esse finitum. In dialectica autem vestra nullam existimavit esse nec ad melius vivendum nec ad commodius disserendum viam. In physicis plurimum posuit. ea scientia et verborum vis et natura orationis et consequentium repugnantiumve ratio potest perspici. omnium autem rerum natura cognita levamur superstitione, liberamur mortis metu, non conturbamur ignoratione rerum, e qua ipsa horribiles existunt saepe formidines. denique etiam morati melius erimus, cum didicerimus quid natura desideret. tum vero, si stabilem scientiam rerum tenebimus, servata illa, quae quasi delapsa de caelo est ad cognitionem omnium, regula, ad quam omnia iudicia rerum dirigentur, numquam ullius oratione victi sententia desistemus.  Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere. quicquid porro animo cernimus, id omne oritur a sensibus; qui si omnes veri erunt, ut Epicuri ratio docet, tum denique poterit aliquid cognosci et percipi. quos qui tollunt et nihil posse percipi dicunt, ii remotis sensibus ne id ipsum quidem expedire possunt, quod disserunt. praeterea sublata cognitione et scientia tollitur omnis ratio et vitae degendae et rerum gerendarum. sic e physicis et fortitudo sumitur contra mortis timorem et constantia contra metum religionis et sedatio animi omnium rerum occultarum ignoratione sublata et moderatio natura cupiditatum generibusque earum explicatis, et, ut modo docui, cognitionis regula et iudicio ab eadem illa constituto veri a falso distinctio traditur.","Restat locus huic disputationi vel maxime necessarius de amicitia, quam, si voluptas summum sit bonum, affirmatis nullam omnino fore. de qua Epicurus quidem ita dicit, omnium rerum, quas ad beate vivendum sapientia comparaverit, nihil esse maius amicitia, nihil uberius, nihil iucundius. nec vero hoc oratione solum, sed multo magis vita et factis et moribus comprobavit. quod quam magnum sit fictae veterum fabulae declarant, in quibus tam multis tamque variis ab ultima antiquitate repetitis tria vix amicorum paria reperiuntur, ut ad Orestem pervenias profectus a Theseo. at vero Epicurus una in domo, et ea quidem angusta, quam magnos quantaque amoris conspiratione consentientis tenuit amicorum greges! quod fit etiam nunc ab Epicureis. sed ad rem redeamus; de hominibus dici non necesse est.","Tribus igitur modis video esse a nostris de amicitia disputatum. alii cum eas voluptates, quae ad amicos pertinerent, negarent esse per se ipsas tam expetendas, quam nostras expeteremus, quo loco videtur quibusdam stabilitas amicitiae vacillare, tuentur tamen eum locum seque facile, ut mihi videtur, expediunt. ut enim virtutes, de quibus ante dictum est, sic amicitiam negant posse a voluptate discedere. nam cum solitudo et vita sine amicis insidiarum et metus plena sit, ratio ipsa monet amicitias comparare, quibus partis confirmatur animus et a spe pariendarum voluptatum seiungi non potest.  Atque ut odia, invidiae, despicationes adversantur voluptatibus, sic amicitiae non modo fautrices fidelissimae, sed etiam effectrices sunt voluptatum tam amicis quam sibi, quibus non solum praesentibus fruuntur, sed etiam spe eriguntur consequentis ac posteri temporis. quod quia nullo modo sine amicitia firmam et perpetuam iucunditatem vitae tenere possumus neque vero ipsam amicitiam tueri, nisi aeque amicos et nosmet ipsos diligamus, idcirco et hoc ipsum efficitur in amicitia, et amicitia cum voluptate conectitur. nam et laetamur amicorum laetitia aeque atque nostra et pariter dolemus angoribus.  Quocirca eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. quaeque de virtutibus dicta sunt, quem ad modum eae semper voluptatibus inhaererent, eadem de amicitia dicenda sunt. praeclare enim Epicurus his paene verbis: 'Eadem', inquit, 'scientia confirmavit animum, ne quod aut sempiternum aut diuturnum timeret malum, quae perspexit in hoc ipso vitae spatio amicitiae praesidium esse firmissimum.'","Sunt autem quidam Epicurei timidiores paulo contra vestra convicia, sed tamen satis acuti, qui verentur ne, si amicitiam propter nostram voluptatem expetendam putemus, tota amicitia quasi claudicare videatur. itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; cum autem usus progrediens familiaritatem effecerit, tum amorem efflorescere tantum, ut, etiamsi nulla sit utilitas ex amicitia, tamen ipsi amici propter se ipsos amentur. etenim si loca, si fana, si urbes, si gymnasia, si campum, si canes, si equos, si ludicra exercendi aut venandi consuetudine adamare solemus, quanto id in hominum consuetudine facilius fieri poterit et iustius?","Sunt autem, qui dicant foedus esse quoddam sapientium, ut ne minus amicos quam se ipsos diligant. quod et posse fieri intellegimus et saepe etiam videmus, et perspicuum est nihil ad iucunde vivendum reperiri posse, quod coniunctione tali sit aptius. Quibus ex omnibus iudicari potest non modo non impediri rationem amicitiae, si summum bonum in voluptate ponatur, sed sine hoc institutionem omnino amicitiae non posse reperiri.","Quapropter si ea, quae dixi, sole ipso illustriora et clariora sunt, si omnia dixi hausta e fonte naturae, si tota oratio nostra omnem sibi fidem sensibus confirmat, id est incorruptis atque integris testibus, si infantes pueri, mutae etiam bestiae paene loquuntur magistra ac duce natura nihil esse prosperum nisi voluptatem, nihil asperum nisi dolorem, de quibus neque depravate iudicant neque corrupte, nonne ei maximam gratiam habere debemus, qui hac exaudita quasi voce naturae sic eam firme graviterque comprehenderit, ut omnes bene sanos in viam placatae, tranquillae, quietae, beatae vitae deduceret? Qui quod tibi parum videtur eruditus, ea causa est, quod nullam eruditionem esse duxit, nisi quae beatae vitae disciplinam iuvaret.  An ille tempus aut in poetis evolvendis, ut ego et Triarius te hortatore facimus, consumeret, in quibus nulla solida utilitas omnisque puerilis est delectatio, aut se, ut Plato, in musicis, geometria, numeris, astris contereret, quae et a falsis initiis profecta vera esse non possunt et, si essent vera, nihil afferrent, quo iucundius, id est quo melius viveremus, eas ergo artes persequeretur, vivendi artem tantam tamque et operosam et perinde fructuosam relinqueret? non ergo Epicurus ineruditus, sed ii indocti, qui, quae pueros non didicisse turpe est, ea putant usque ad senectutem esse discenda.",",Quae cum dixisset, Explicavi, inquit, sententiam meam, et eo quidem consilio, tuum iudicium ut cognoscerem, quoniam mihi ea facultas, ut id meo arbitratu facerem, ante hoc tempus numquam est data."];
	for(var i = 0; i < quantity; i++){
		lorem.append("<p>"+data[i]+"</p>")
	}
})

$("#copy").click(function() {
	var range = document.createRange();
	range.selectNode($("#lorem")[0]);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	}
)


/*
-----------------------------------------------
Parse the commands sent by GPT to us
------------------------------------------------
*/



/*
--------------------------------------------------------------
Business logic of the page:
--------------------------------------------------------------
*/

// Helper functions:

    // Function to escape HTML characters:
    const escapeHtml = (unsafe) => {
        return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    }

    // Common function to show the time next to the chat message:
    function getCurrentTime() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        return hours + ':' + minutes + ':' + seconds;
    }

    // This function converts a single response from ChatGPT to HTML format:
    formatResponse = (retMsg) => {

        single_lines = retMsg.split("\n")

        // Give additional capability to the bot -- very simple example of changing the page background and changeing the text color
        // Loop over all the lines:
        for (var i = 0; i < single_lines.length; i++) {

            // If the line starts with __changeBackground, then change the background color:
            if (single_lines[i].startsWith("___")) {

                // We probably have some command that ChatGPT is trying to invoke, send
                // it to the handler function:
                HandleGPTCommandRequest(single_lines[i])
            }
        }

        retMsg = escapeHtml(retMsg)

        // Any code within ```<something>``` should be replaced with <pre> <something> </pre>
        // TODO: This thing is not working properly, need to fix it:
        retMsg = retMsg.replaceAll(/```([\s\S]+)```/g, "<br/><pre class='code'>\$1</pre><br/>");

        // TODO: The \n is not working properly, need to fix it:
        retMsg = retMsg.replaceAll("\n", "<br/>");

        curTime = getCurrentTime();
        retMsg = `<br/><br/><span class='chatgpt'>ChatGPT:</span><small>${curTime}</small> <br/>` + retMsg + "<br/>";

        return retMsg
    }

    // Variables to track tokens:
    session_total_prompt_tokens = 0
    session_total_completion_tokens = 0
    session_total_tokens = 0
    session_time_taken_secs = 0
    session_calls_done = 0
    session_avg_time_taken = 0


    // ChatGPT API Call:
    function CallChatGPT() {

        // The chat message and the API key
        user_request = $("#chat_box").val()
        api_key = $("#openai_key").val()

        if (api_key.length == 0) {

            // Show error:
            $("#status_message").css("color", "red").html("Please add an API key 👉🏼")

            // Change the style back after 3 seconds:
            setTimeout(function(){ $("#status_message").css("color", "black"); $("#status_message").html(".") }, 4000)
            return;
        }

        // Make the chat box tab active, incase the user was in the media tab:
        $("#tabs").tabons("opti", "active", 0);

        // Get the topic
        topic = $("input[name='topic']:checked").val()

        // If something is selected, add that in front of the message:

        if (topic.length > 0) {

            // 👇🏼👇🏼👇🏼 Change this code if you want
            // The message will have a prefix, example if you write : how to write a for loop?
            // and you have selected Python from the radio button
            // then the message sent to chat GPT will be :
            // "I am working on, python. How do you write a for loop?"

            // What
            topic_type = $("input[name='topic']:checked").attr("data")

            // Is there a custom prefix statement?
            custom_prefix = $("input[name='topic']:checked").attr("custom_prefix") ? $("input[name='topic']:checked").attr("custom_prefix") : "";

            // If there is a custom prefix, then use that:
            if ( custom_prefix.length > 0 ) {
                user_request = custom_prefix + user_request;

                // If this is just a technology topic, use this common pattern:
            } else if (topic_type == "technology") {

                user_request = "I am working on, " + topic + ". Please help me with " + user_request;
            }
        }

        // OpenAI URL:
        openai_url = "https://api.openai.com/v1/chat/completions"

        // Build details of the user functions, so they can be used on the
        // initialization of the bot:

        custom_func_list_str = ""

        // Loop over the custom_functions and build the text to send to ChatGPT:
        for (var kk in custom_functions) {

            cur_func = custom_functions[kk]

            // text
            custom_func_list_str += `function name & parameters: ${cur_func["func_name_param_pattern"]} | `
            custom_func_list_str += `what it does: ${cur_func["func_explanation"]} | `
            custom_func_list_str += `user usage example: ${cur_func["user_request_pattern"]} \n`
        }

        // The actual message to send -- you can change this part if you want
        // as per your liking:
        msgs = [
            {
                "role": "system",
                // You can change this part to be whatever you want it to be 👇🏻
                "content": `You are a helpful coding assistant and may be sometimes asked other questions and given tasks.

                For the tasks you have a list of functions you can call (given below)
                - To call a function, reply with ___<function name>(<parameters>) in a separate line
                - In the list, you have details of:
                    - The function name and the parameters it accepts
                    - What the function does and an example of how the user may request the function (it's a broad outline - it may vary slightly by the the user)
                - Please try to fulfil the request immediately rather than ask for more information

                Custom function details:\n` + custom_func_list_str
            },
            {
                "role": "user",
                "content": user_request
            }
        ]

        // Get the temprature value from the slider -- if not defined, set it to 0.6
        temprature = $("#gpt_temprature").val()
        // convert it to a float:
        temprature = parseFloat(temprature)

        if (temprature.length === 0 || temprature === 0) {
            temprature = 0.6
        }

        // If the model name is set, use that:
        model_name = $("#model_name").val()

        // Something should be set and it should be one of the valid model names, otehrwise use the default:
        if (model_name.length === 0 || ( model_name !== "gpt-3.5-turbo" && model_name !== "gpt-3.5-turbo-0301" && model_name !== "gpt-4" ) ) {
            model_name = "gpt-3.5-turbo"
        }

        // Number of responses to generate:
        num_responses = parseInt($("#num_gens").val())

        if (num_responses.length === 0 || num_responses === 0) {
            num_responses = 1
        }

        // These are other settings to send to OpenAI:
        send_message = {
            model : model_name,
            messages: msgs,
            temperature: temprature,
            n: num_responses,
        };

        // If #enable_max_tokens is checked, then use the value for max_tokens:
        if ($("#enable_max_tokens").is(":checked")) {

            // Get the value:
            max_tokens = $("#max_tokens").val()

            // If the value is not set, then set it to 100:
            if (max_tokens.length === 0 || max_tokens === 0) {
                max_tokens = 2000
            }

            // Add the max_tokens to the send_message:
            send_message["max_tokens"] = max_tokens
        }

        // Success function()
        // This is the code that will be run after the reply from ChatGPT comes back:
        success_behavior = function(reply_message) {

            console.log("Got a response back from ChatGPT -- the response is:")
            console.log(reply_message)

            retMsg = ""

            // Actual message from ChatGPT:
            for (i=0; i < reply_message.choices.length; i++) {

                curMsg = reply_message.choices[i].message.content;
                // $("#status_message").html("<span class='sending'>got reply</span>");
                curMsg = formatResponse(curMsg)

                retMsg += curMsg

                $("#status_message").append("<span class='sending'>got reply</span>");
            }

            // After 1.5 seconds hide the success message:
            window.setTimeout(function(){ $("#status_message").html(".");}, 1500);

            $("#chat_response").append(retMsg);
            $("#chat_response").scrollTop($("#chat_response")[0].scrollHeight);

            $("#prompt_tokens").html(reply_message.usage.completion_tokens);
            $("#completion_tokens").html(reply_message.usage.prompt_tokens);
            $("#total_tokens").html(reply_message.usage.total_tokens);

            session_total_completion_tokens += reply_message.usage.completion_tokens;
            session_total_prompt_tokens += reply_message.usage.prompt_tokens;
            session_total_tokens += reply_message.usage.total_tokens;

            $("#total_prompt_tokens").html(session_total_completion_tokens);
            $("#total_completion_tokens").html(session_total_prompt_tokens);
            $("#total_session_tokens").html(session_total_tokens);
        };

        curTime = getCurrentTime();
        show_msg = `<br/><br/><span class='you'>You: </span> <small>${curTime}</small><br/>` + user_request

        $("#chat_response").append(show_msg);
        $("#chat_response").scrollTop($("#chat_response")[0].scrollHeight);


        var ajaxTime= new Date().getTime();

        // This is the actual call to OpenAI
        $.ajax({
            type: "POST",
            url: openai_url,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + api_key);
            },
            data: JSON.stringify(send_message),
            success: success_behavior,
            contentType: 'application/json; charset=utf-8',
            dataType: "json"
        }).done(function(data) {

            secs = ((new Date().getTime() - ajaxTime)/1000).toFixed(2);

            session_time_taken_secs += parseFloat(secs);
            session_calls_done += 1;

            session_avg_time_taken = (session_time_taken_secs / session_calls_done).toFixed(2);

            $("#last_time_taken").html(secs + " sec");
            $("#avg_time_taken").html(session_avg_time_taken + " sec");


        }).fail(function(data) {

            $("#status_message").css("color", "red").html("Error with previous request. Please check the logs or try again.");
            console.log(data);

            setTimeout(function() {
                $("#status_message").css("color", "black").html(".");
            }, 3000);
        })
    };

    send_request = function() {

        $("#status_message").html("<span class='sending'>Sending message...</span>")

        // The call to ChatGPT is made from this function:
        CallChatGPT()
    };

    // Side panel description of the available custom actions:
    function buildCustomActionsList() {

        // Build the custom actions list:
        txt = ""

        $.each(custom_functions, function(key, value) {

            txt += `
<hr/>
                <b class="action_name">${value["action_name"]}</b>
                <p>${value["user_description"]}</p>
                <p>Example Usage:<br/> ${value["user_request_pattern"]}</p>
`
        });

        // chat_actions_available_list
        $(".chat_actions_available_list").html(txt)
    }

    // Wait for the page to load before we do anything
    $("document").ready(function() {
		// Initialize the tabs:
        $("#tabs").tabs();
        
        $("#max_tokens").html($("#num_tokens").val())
        $("#tabs").tabs("option", "active", 0);
        // Make the list of action descriptions to show on the side panel:
        //buildCustomActionsList();

        $(".min_max").click(function(){

            console.log("Clicked on min/max button")
            console.log("found elements: ", $(this).siblings(".wrapper"))
            // Toggle visibility of the sibling called ".wrapper":
            $(this).parent("h6").siblings(".wrapper").toggle();
        });

       
        // If ctrl + enter is pressed anywhere on the page:
        $(document).keypress(function(e) {
            if ((e.keyCode == 10 || e.keyCode == 13) && (e.ctrlKey || e.metaKey)) {
                send_request();
            }
        });

        $("#send_button").click(function() {
            send_request();
        })

        // Hide the API settings and usage reference:
        $(".api_settings").find(".min_max").click();
        $(".usage_reference").find(".min_max").click();

    });

