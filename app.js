const quizData = {
  quran: {
    name: "القرآن الكريم",
    shortName: "القرآن",
    questions: {
      easy: [
        { text: "ما هي السورة التي تُسمّى قلب القرآن؟", answers: ["سورة يس", "سورة الفاتحة", "سورة الملك", "سورة الرحمن"], correct: 0 },
        { text: "كم عدد أركان الإسلام؟", answers: ["ثلاثة", "أربعة", "خمسة", "ستة"], correct: 2 },
        { text: "ما أول سورة في ترتيب المصحف؟", answers: ["البقرة", "الفاتحة", "العلق", "الناس"], correct: 1 },
        { text: "في أي شهر أُنزل القرآن الكريم؟", answers: ["شعبان", "رمضان", "محرم", "رجب"], correct: 1 },
        { text: "ما أطول سورة في القرآن الكريم؟", answers: ["آل عمران", "النساء", "المائدة", "البقرة"], correct: 3 },
        { text: "ما السورة التي تبدأ بقول الله تعالى: تبارك الذي بيده الملك؟", answers: ["سورة الملك", "سورة القلم", "سورة الحاقة", "سورة المعارج"], correct: 0 },
        { text: "كم عدد سور القرآن الكريم؟", answers: ["104 سور", "110 سور", "114 سورة", "120 سورة"], correct: 2 }
      ],
      medium: [
        { text: "ما السورة التي لا تبدأ بالبسملة؟", answers: ["الأنفال", "التوبة", "يونس", "الحشر"], correct: 1 },
        { text: "ما السورة التي ذُكرت فيها البسملة مرتين؟", answers: ["النمل", "القصص", "النور", "مريم"], correct: 0 },
        { text: "ما أول ما نزل من القرآن الكريم؟", answers: ["يا أيها المدثر", "اقرأ باسم ربك", "الحمد لله رب العالمين", "قل هو الله أحد"], correct: 1 },
        { text: "كم عدد أجزاء القرآن الكريم؟", answers: ["20 جزءاً", "25 جزءاً", "30 جزءاً", "40 جزءاً"], correct: 2 },
        { text: "ما السورة التي تعدل ثلث القرآن؟", answers: ["الفلق", "الإخلاص", "الكافرون", "الكوثر"], correct: 1 },
        { text: "ما السورة التي تسمى سورة بني إسرائيل؟", answers: ["الإسراء", "الكهف", "طه", "سبأ"], correct: 0 },
        { text: "ما عدد آيات سورة الفاتحة؟", answers: ["5 آيات", "6 آيات", "7 آيات", "8 آيات"], correct: 2 }
      ],
      hard: [
        { text: "ما السورة التي ورد فيها سجدتان؟", answers: ["الحج", "النجم", "العلق", "فصلت"], correct: 0 },
        { text: "من الصحابي الذي جمع القرآن في مصحف واحد أول مرة؟", answers: ["علي بن أبي طالب", "أبو بكر الصديق", "عثمان بن عفان", "زيد بن ثابت"], correct: 1 },
        { text: "ما السورة التي تسمى أم الكتاب؟", answers: ["الفاتحة", "البقرة", "يس", "الملك"], correct: 0 },
        { text: "ما عدد السور المكية تقريباً؟", answers: ["86 سورة", "70 سورة", "28 سورة", "114 سورة"], correct: 0 },
        { text: "في أي سورة وردت قصة أصحاب الأخدود؟", answers: ["البروج", "الفجر", "الطارق", "الضحى"], correct: 0 },
        { text: "ما السورة التي وردت فيها آية الكرسي؟", answers: ["البقرة", "آل عمران", "النساء", "المائدة"], correct: 0 },
        { text: "ما السورة التي سميت باسم نبي؟", answers: ["يونس", "الفتح", "الصف", "الجمعة"], correct: 0 }
      ]
    }
  },
  seerah: {
    name: "السيرة النبوية", shortName: "السيرة",
    questions: {
      easy: [
        { text: "في أي مدينة وُلد النبي محمد ﷺ؟", answers: ["المدينة المنورة", "مكة المكرمة", "الطائف", "القدس"], correct: 1 },
        { text: "من أول زوجات النبي ﷺ؟", answers: ["عائشة رضي الله عنها", "حفصة رضي الله عنها", "خديجة رضي الله عنها", "سودة رضي الله عنها"], correct: 2 },
        { text: "ما اسم الغار الذي نزل فيه الوحي أول مرة؟", answers: ["غار ثور", "غار حراء", "غار أحد", "غار النور"], correct: 1 },
        { text: "من كان رفيق النبي ﷺ في الهجرة؟", answers: ["عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق", "عثمان بن عفان"], correct: 2 },
        { text: "إلى أي مدينة هاجر النبي ﷺ؟", answers: ["الطائف", "المدينة المنورة", "دمشق", "خيبر"], correct: 1 }
      ],
      medium: [
        { text: "كم سنة مكث النبي ﷺ في مكة بعد البعثة؟", answers: ["10 سنوات", "13 سنة", "15 سنة", "20 سنة"], correct: 1 },
        { text: "ما أول مسجد بُني في الإسلام؟", answers: ["المسجد النبوي", "المسجد الحرام", "مسجد قباء", "المسجد الأقصى"], correct: 2 },
        { text: "في أي سنة هجرية وقعت غزوة بدر؟", answers: ["السنة الأولى", "السنة الثانية", "السنة الثالثة", "السنة الخامسة"], correct: 1 },
        { text: "من مرضعة النبي ﷺ من بني سعد؟", answers: ["حليمة السعدية", "ثويبة الأسلمية", "آمنة بنت وهب", "فاطمة بنت أسد"], correct: 0 },
        { text: "ما اسم العام الذي توفيت فيه خديجة وأبو طالب؟", answers: ["عام الفيل", "عام الحزن", "عام الوفود", "عام الفتح"], correct: 1 },
        { text: "كم كان عمر النبي ﷺ حين بُعث؟", answers: ["35 عاماً", "40 عاماً", "45 عاماً", "50 عاماً"], correct: 1 },
        { text: "ما أول قبلة صلى إليها المسلمون؟", answers: ["الكعبة", "المسجد النبوي", "المسجد الأقصى", "مسجد قباء"], correct: 2 }
      ],
      hard: [
        { text: "ما آخر غزوة غزاها النبي ﷺ؟", answers: ["تبوك", "حنين", "خيبر", "الفتح"], correct: 0 },
        { text: "من أول سفير في الإسلام إلى المدينة؟", answers: ["مصعب بن عمير", "معاذ بن جبل", "بلال بن رباح", "زيد بن ثابت"], correct: 0 },
        { text: "ما اسم ناقة النبي ﷺ؟", answers: ["القصواء", "العضباء", "دلدل", "البغلة"], correct: 0 },
        { text: "في أي عام كان صلح الحديبية؟", answers: ["السنة الرابعة", "السنة السادسة", "السنة الثامنة", "السنة التاسعة"], correct: 1 },
        { text: "من الصحابي الذي نام في فراش النبي ليلة الهجرة؟", answers: ["علي بن أبي طالب", "الزبير بن العوام", "طلحة بن عبيد الله", "سعد بن أبي وقاص"], correct: 0 },
        { text: "من آخر من توفي من أمهات المؤمنين؟", answers: ["عائشة رضي الله عنها", "أم سلمة رضي الله عنها", "ميمونة رضي الله عنها", "صفية رضي الله عنها"], correct: 1 },
        { text: "ما اسم الوثيقة التي نظم بها النبي ﷺ شؤون المدينة؟", answers: ["صحيفة المدينة", "بيعة العقبة", "صلح الحديبية", "كتاب الأمان"], correct: 0 }
      ]
    }
  },
  aqeedah: {
    name: "العقيدة", shortName: "العقيدة",
    questions: {
      easy: [
        { text: "كم عدد أركان الإيمان؟", answers: ["أربعة", "خمسة", "ستة", "سبعة"], correct: 2 },
        { text: "ما أول أركان الإسلام؟", answers: ["الصلاة", "الشهادتان", "الصيام", "الزكاة"], correct: 1 },
        { text: "ما معنى التوحيد؟", answers: ["إفراد الله بالعبادة", "كثرة العبادة", "طلب العلم", "حسن الخلق"], correct: 0 },
        { text: "الإيمان بالملائكة هو الركن كم من أركان الإيمان؟", answers: ["الأول", "الثاني", "الثالث", "الرابع"], correct: 1 },
        { text: "ما ضد التوحيد؟", answers: ["الرياء", "النفاق", "الشرك", "البدعة"], correct: 2 },
        { text: "ما الركن الثاني من أركان الإسلام؟", answers: ["الزكاة", "الصلاة", "الصيام", "الحج"], correct: 1 },
        { text: "من هو خاتم الأنبياء والمرسلين؟", answers: ["موسى عليه السلام", "عيسى عليه السلام", "إبراهيم عليه السلام", "محمد ﷺ"], correct: 3 }
      ],
      medium: [
        { text: "ما مراتب الدين الثلاث؟", answers: ["الإسلام والإيمان والإحسان", "العلم والعمل والدعوة", "الصبر والشكر واليقين", "التوحيد والفقه والسلوك"], correct: 0 },
        { text: "ما معنى الإحسان في حديث جبريل؟", answers: ["كثرة الصدقة", "أن تعبد الله كأنك تراه", "الصمت الطويل", "قراءة القرآن"], correct: 1 },
        { text: "ما الركن الخامس من أركان الإيمان؟", answers: ["الإيمان بالقدر", "الإيمان بالرسل", "الإيمان باليوم الآخر", "الإيمان بالكتب"], correct: 2 },
        { text: "ما أعظم ذنب عند الله؟", answers: ["عقوق الوالدين", "الغيبة", "الشرك بالله", "الكذب"], correct: 2 },
        { text: "ما المقصود بتوحيد الألوهية؟", answers: ["إفراد الله بأفعاله", "إفراد الله بالعبادة", "الإيمان بأسماء الله", "الإيمان بالقدر"], correct: 1 },
        { text: "ما المقصود بالإيمان باليوم الآخر؟", answers: ["الإيمان بالحياة الدنيا", "الإيمان بالبعث والحساب والجزاء", "الإيمان بالملائكة", "الإيمان بالكتب"], correct: 1 },
        { text: "ما معنى الإيمان بالرسل؟", answers: ["تصديقهم واتباع ما جاؤوا به", "معرفة أسمائهم فقط", "قراءة قصصهم فقط", "محبتهم دون اتباع"], correct: 0 }
      ],
      hard: [
        { text: "ما أقسام التوحيد المشهورة عند أهل السنة؟", answers: ["قسمان", "ثلاثة أقسام", "أربعة أقسام", "خمسة أقسام"], correct: 1 },
        { text: "ما مراتب القدر الأربع؟", answers: ["العلم والكتابة والمشيئة والخلق", "الصبر والشكر والرضا والتوكل", "القول والعمل والنية والاتباع", "الإسلام والإيمان والإحسان واليقين"], correct: 0 },
        { text: "ما تعريف الإيمان عند أهل السنة؟", answers: ["المعرفة فقط", "قول وعمل يزيد وينقص", "العمل فقط", "القول بلا عمل"], correct: 1 },
        { text: "ما الاسم الجامع لكل ما يحبه الله ويرضاه؟", answers: ["العبادة", "التقوى", "الطاعة", "الإحسان"], correct: 0 },
        { text: "ما أعظم واجب على العباد؟", answers: ["بر الوالدين", "طلب العلم", "توحيد الله", "صلة الرحم"], correct: 2 },
        { text: "ما حكم الإيمان بأسماء الله وصفاته؟", answers: ["واجب", "مستحب فقط", "مباح", "مكروه"], correct: 0 },
        { text: "ما الموقف الصحيح من نصوص الصفات؟", answers: ["إثباتها بلا تكييف ولا تمثيل", "إنكارها كلها", "تشبيهها بصفات الخلق", "تأويلها جميعاً بلا دليل"], correct: 0 }
      ]
    }
  }
};

const state = { category: "quran", level: "easy", questions: [], current: 0, score: 0, answered: false };
const $ = (selector) => document.querySelector(selector);
const setupView = $("#setup-view");
const setupPanel = $(".setup-panel");
const quizView = $("#quiz-view");
const resultView = $("#result-view");
const levelDescriptions = { easy: "مناسب للمبتدئين", medium: "يحتاج تركيزاً جيداً", hard: "لأهل التحدي والمعرفة" };
const levelNames = { easy: "مبتدئ", medium: "متوسط", hard: "متقدم" };

function selectCategory(button) {
  document.querySelectorAll(".category-card").forEach((card) => card.classList.remove("active"));
  button.classList.add("active");
  state.category = button.dataset.category;
}
function selectLevel(button) {
  document.querySelectorAll(".level-option").forEach((option) => option.classList.remove("active"));
  button.classList.add("active");
  state.level = button.dataset.level;
  $("#level-description").textContent = levelDescriptions[state.level];
}
function renderQuestion() {
  const question = state.questions[state.current];
  const total = state.questions.length;
  const number = state.current + 1;
  $("#question-number").textContent = number;
  $("#badge-number").textContent = String(number).padStart(2, "0");
  $("#question-total").textContent = total;
  $("#progress-percent").textContent = `${Math.round((number / total) * 100)}%`;
  $("#progress-bar").style.width = `${(number / total) * 100}%`;
  $("#question-text").textContent = question.text;
  $("#quiz-category").textContent = quizData[state.category].name;
  $("#feedback").textContent = "";
  $("#feedback").className = "feedback";
  $("#next-button").disabled = true;
  $("#next-button").innerHTML = number === total ? "عرض النتيجة <span>←</span>" : "التالي <span>←</span>";
  const letters = ["أ", "ب", "ج", "د"];
  $("#answers").innerHTML = question.answers.map((answer, index) => `<button class="answer" data-index="${index}" type="button"><span class="answer-letter">${letters[index]}</span><span>${answer}</span></button>`).join("");
  document.querySelectorAll(".answer").forEach((answer) => answer.addEventListener("click", () => chooseAnswer(answer)));
}
function chooseAnswer(button) {
  if (state.answered) return;
  state.answered = true;
  const question = state.questions[state.current];
  const chosen = Number(button.dataset.index);
  const correct = chosen === question.correct;
  if (correct) state.score += 1;
  button.classList.add(correct ? "correct" : "wrong");
  if (!correct) document.querySelector(`.answer[data-index="${question.correct}"]`).classList.add("correct");
  document.querySelectorAll(".answer").forEach((answer) => { answer.disabled = true; });
  const feedback = $("#feedback");
  feedback.textContent = correct ? "إجابة موفقة، أحسنت!" : "ليست الإجابة الصحيحة، واصل التعلّم.";
  feedback.classList.add(correct ? "good" : "bad");
  $("#next-button").disabled = false;
}
function startQuiz() {
  state.questions = [...quizData[state.category].questions[state.level]];
  state.current = 0;
  state.score = 0;
  state.answered = false;
  setupView.classList.add("hidden");
  setupPanel.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function nextQuestion() {
  if (!state.answered) return;
  if (state.current < state.questions.length - 1) {
    state.current += 1;
    state.answered = false;
    renderQuestion();
  } else showResult();
}
function showResult() {
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  const total = state.questions.length;
  const percent = state.score / total;
  $("#score-value").textContent = state.score;
  $("#score-total").textContent = total;
  $("#correct-count").textContent = `${Math.round(percent * 100)}%`;
  $("#result-level").textContent = levelNames[state.level];
  $("#result-category").textContent = quizData[state.category].shortName;
  $("#result-title").textContent = percent === 1 ? "إتقان رائع!" : percent >= .6 ? "أداء جميل!" : "بداية طيبة!";
  $("#result-subtitle").textContent = percent === 1 ? "ما شاء الله، إجاباتك كلها صحيحة." : "كل إجابة تقرّبك خطوة من معرفة أوسع.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function returnToSetup() {
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  setupView.classList.remove("hidden");
  setupPanel.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".category-card").forEach((button) => button.addEventListener("click", () => selectCategory(button)));
document.querySelectorAll(".level-option").forEach((button) => button.addEventListener("click", () => selectLevel(button)));
$("#start-button").addEventListener("click", startQuiz);
$("#next-button").addEventListener("click", nextQuestion);
$("#quit-button").addEventListener("click", returnToSetup);
$("#retry-button").addEventListener("click", startQuiz);
$("#new-quiz-button").addEventListener("click", returnToSetup);
