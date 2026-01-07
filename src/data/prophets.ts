export type NodeType = 'ulu-alazm' | 'messenger' | 'prophet' | 'connector' | 'relative';

export interface ProphetNode {
    name: string;
    type: NodeType;
    title?: string;
    timeline?: string;
    relation?: string;
    desc?: string;
    children?: ProphetNode[];
}

export const treeData: ProphetNode = {
    name: "آدم",
    type: "prophet",
    title: "أبو البشر",
    timeline: "بداية الخلق (تُقدر بآلاف السنين قبل التاريخ المدون)",
    relation: "خلقه الله بيده من طين، ونفخ فيه من روحه، وأسجد له الملائكة.",
    desc: "أول إنسان وأول نبي. عاش في الجنة مع زوجه حواء ثم هبط إلى الأرض ليعمرها بعد أن وسوس لهما الشيطان. علمه الله الأسماء كلها.",
    children: [
        {
            name: "قابيل",
            type: "relative",
            title: "القاتل الأول",
            timeline: "الجيل الأول للبشرية",
            relation: "ابن آدم.",
            desc: "أول من سن جريمة القتل في الأرض. قدم قرباناً فلم يتقبل منه، فحسد أخاه هابيل وقتله.",
            children: []
        },
        {
            name: "هابيل",
            type: "relative",
            title: "الشهيد الأول",
            timeline: "الجيل الأول للبشرية",
            relation: "ابن آدم.",
            desc: "صاحب القلب النقي والتقوى. قتله أخوه قابيل ظلماً وعدواناً، فكان أول مقتول في تاريخ البشرية.",
            children: []
        },
        {
            name: "شيث",
            type: "prophet",
            title: "هبة الله",
            timeline: "بعد وفاة آدم بقرون قليلة",
            relation: "ابن آدم (ولد بعد مقتل هابيل).",
            desc: "خلف أباه آدم في رعاية شؤون البشرية. أنزل الله عليه خمسين صحيفة.",
            children: [
                {
                    name: "إدريس",
                    type: "prophet",
                    title: "صاحب القلم",
                    timeline: "بين آدم ونوح (حوالي الألفية الرابعة أو الخامسة ق.م)",
                    relation: "من نسل شيث (الجيل الخامس).",
                    desc: "أول من خط بالقلم، وأول من خاط الثياب. رفعه الله مكاناً علياً.",
                    children: [
                        {
                            name: "نوح",
                            type: "ulu-alazm",
                            title: "شيخ الأنبياء",
                            timeline: "حوالي 3000 - 2500 ق.م (قبل الطوفان)",
                            relation: "من نسل إدريس.",
                            desc: "الأب الثاني للبشرية. دعا قومه 950 سنة، فأنجاه الله ومن معه في الفلك.",
                            children: [
                                {
                                    name: "يام",
                                    type: "relative",
                                    title: "الابن الكافر (كنعان)",
                                    timeline: "عصر الطوفان",
                                    relation: "ابن نوح.",
                                    desc: "رفض ركوب السفينة وكان من المغرقين.",
                                    children: []
                                },
                                {
                                    name: "حام",
                                    type: "connector",
                                    title: "أبو الحاميين",
                                    timeline: "ما بعد الطوفان",
                                    relation: "ابن نوح.",
                                    desc: "جد الشعوب الأفريقية والمصريين والكنعانيين.",
                                    children: [
                                        { name: "مصرايم", type: "connector", timeline: "عصور ما قبل الأسرات", title: "أبو المصريين", relation: "ابن حام.", desc: "استقر في وادي النيل.", children: [] },
                                        {
                                            name: "كوش", type: "connector", timeline: "العصور القديمة", title: "أبو النوبة", relation: "ابن حام.", desc: "جد شعوب النوبة والحبشة.", children: [
                                                { name: "النمرود", type: "relative", timeline: "حوالي 2000 ق.م", title: "الملك الجبار", relation: "ابن كوش.", desc: "ملك بابل، حاج إبراهيم في ربه.", children: [] }
                                            ]
                                        },
                                        { name: "كنعان", type: "connector", timeline: "العصر البرونزي", title: "أبو الكنعانيين", relation: "ابن حام.", desc: "جد القبائل الكنعانية.", children: [] }
                                    ]
                                },
                                {
                                    name: "سام",
                                    type: "connector",
                                    title: "أبو العرب والعبرانيين",
                                    timeline: "ما بعد الطوفان",
                                    relation: "ابن نوح.",
                                    desc: "جد الشعوب السامية.",
                                    children: [
                                        {
                                            name: "هود",
                                            type: "messenger",
                                            title: "نبي عاد",
                                            timeline: "حوالي 2400 ق.م (بعد قوم نوح)",
                                            relation: "من نسل سام.",
                                            desc: "أرسل إلى قوم عاد في الأحقاف.",
                                            children: [
                                                {
                                                    name: "صالح",
                                                    type: "messenger",
                                                    title: "نبي ثمود",
                                                    timeline: "حوالي 2000 ق.م (قبل إبراهيم)",
                                                    relation: "من نسل سام.",
                                                    desc: "صاحب الناقة، أرسل لقوم ثمود.",
                                                    children: [
                                                        {
                                                            name: "آزر",
                                                            type: "connector",
                                                            title: "تارح",
                                                            timeline: "حوالي 2100 ق.م",
                                                            relation: "من نسل سام.",
                                                            desc: "والد إبراهيم.",
                                                            children: [
                                                                {
                                                                    name: "هاران",
                                                                    type: "connector",
                                                                    title: "",
                                                                    timeline: "حوالي 2000 ق.م",
                                                                    relation: "أخو إبراهيم.",
                                                                    desc: "والد لوط.",
                                                                    children: [
                                                                        { name: "لوط", type: "messenger", timeline: "حوالي 1900 ق.م (عاصر إبراهيم)", title: "نبي سدوم", relation: "ابن أخ إبراهيم.", desc: "أرسل لأهل سدوم وعمورة.", children: [] }
                                                                    ]
                                                                },
                                                                {
                                                                    name: "إبراهيم",
                                                                    type: "ulu-alazm",
                                                                    title: "خليل الله",
                                                                    timeline: "حوالي 1900 - 1800 ق.م",
                                                                    relation: "ابن آزر.",
                                                                    desc: "أبو الأنبياء، بنى الكعبة المشرفة.",
                                                                    children: [
                                                                        {
                                                                            name: "إسماعيل",
                                                                            type: "messenger",
                                                                            title: "الذبيح",
                                                                            timeline: "حوالي 1850 ق.م",
                                                                            relation: "الابن الأكبر.",
                                                                            desc: "جد العرب المستعربة، شارك في بناء الكعبة.",
                                                                            children: [
                                                                                {
                                                                                    name: "عدنان", type: "connector", timeline: "القرن 2 ق.م (تقديراً)", title: "جد العرب العدنانية", relation: "من نسله.", desc: "الجد الجامع لقبائل العرب العدنانية.", children: [
                                                                                        {
                                                                                            name: "عبد المطلب", type: "connector", timeline: "497 م - 578 م", title: "سيد قريش", relation: "من نسله.", desc: "جد النبي وكافله.", children: [
                                                                                                {
                                                                                                    name: "عبد الله", type: "connector", timeline: "545 م - 570 م", title: "الذبيح الثاني", relation: "ابن عبد المطلب.", desc: "والد النبي.", children: [
                                                                                                        { name: "محمد ﷺ", type: "ulu-alazm", timeline: "571 م (عام الفيل) - 632 م", title: "خاتم النبيين", relation: "ابنه.", desc: "سيد ولد آدم ورحمة الله للعالمين.", children: [] }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            name: "مدين",
                                                                            type: "connector",
                                                                            title: "",
                                                                            timeline: "حوالي 1800 ق.م",
                                                                            relation: "ابن إبراهيم.",
                                                                            desc: "جد أصحاب الأيكة.",
                                                                            children: [
                                                                                { name: "شعيب", type: "messenger", timeline: "حوالي 1500 ق.م (عاصر موسى)", title: "خطيب الأنبياء", relation: "من نسله.", desc: "بعث لأهل مدين.", children: [] }
                                                                            ]
                                                                        },
                                                                        {
                                                                            name: "إسحاق",
                                                                            type: "prophet",
                                                                            title: "الغلام العليم",
                                                                            timeline: "حوالي 1800 ق.م",
                                                                            relation: "ابن إبراهيم.",
                                                                            desc: "والد يعقوب.",
                                                                            children: [
                                                                                {
                                                                                    name: "العيص",
                                                                                    type: "connector",
                                                                                    title: "عيسو",
                                                                                    timeline: "حوالي 1750 ق.م",
                                                                                    relation: "ابن إسحاق.",
                                                                                    desc: "توأم يعقوب.",
                                                                                    children: [
                                                                                        {
                                                                                            name: "أيوب", type: "prophet", timeline: "حوالي 1600 - 1500 ق.م", title: "رمز الصبر", relation: "من ذريته.", desc: "ابتلاه الله فصبر.", children: [
                                                                                                { name: "ذو الكفل", type: "prophet", timeline: "فترة غير محددة (ربما عاصر اليسع)", title: "الصالح", relation: "ابنه.", desc: "كان قاضياً عادلاً.", children: [] }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    name: "يعقوب",
                                                                                    type: "prophet",
                                                                                    title: "إسرائيل",
                                                                                    timeline: "حوالي 1750 ق.م",
                                                                                    relation: "ابن إسحاق.",
                                                                                    desc: "أبو الأسباط.",
                                                                                    children: [
                                                                                        { name: "روبين", type: "relative", timeline: "القرن 17 ق.م", title: "أكبر الأسباط", relation: "ابنه.", desc: "أكبر أبناء يعقوب.", children: [] },
                                                                                        { name: "يوسف", type: "messenger", timeline: "حوالي 1700 - 1600 ق.م", title: "عزيز مصر", relation: "ابنه.", desc: "مكنه الله في مصر.", children: [] },
                                                                                        {
                                                                                            name: "بنيامين", type: "connector", timeline: "القرن 17 ق.م", title: "شقيق يوسف", relation: "ابنه.", desc: "", children: [
                                                                                                { name: "يونس", type: "messenger", timeline: "حوالي 800 ق.م", title: "ذو النون", relation: "من سبطه.", desc: "صاحب الحوت.", children: [] }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            name: "لاوي", type: "connector", timeline: "القرن 17 ق.م", title: "سبط الكهنة", relation: "ابنه.", desc: "جد موسى وهارون.", children: [
                                                                                                { name: "موسى", type: "ulu-alazm", timeline: "حوالي 1300 ق.م", title: "كليم الله", relation: "من نسله.", desc: "قاهر فرعون، صاحب التوراة.", children: [] },
                                                                                                {
                                                                                                    name: "هارون", type: "prophet", timeline: "حوالي 1300 ق.م", title: "الوزير", relation: "أخو موسى.", desc: "وزير موسى.", children: [
                                                                                                        {
                                                                                                            name: "إلياس", type: "messenger", timeline: "حوالي 900 ق.م", title: "إيليا", relation: "من نسله.", desc: "حارب عبادة البعل.", children: [
                                                                                                                { name: "اليسع", type: "prophet", timeline: "حوالي 850 ق.م", title: "", relation: "تلميذه.", desc: "خليفة إلياس.", children: [] }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                { name: "يوشع", type: "prophet", timeline: "حوالي 1250 ق.م", title: "الفتا القائد", relation: "من نسله.", desc: "فتح بيت المقدس.", children: [] }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            name: "يهوذا", type: "connector", timeline: "القرن 17 ق.م", title: "سبط الملوك", relation: "ابنه.", desc: "جد الملوك.", children: [
                                                                                                {
                                                                                                    name: "داود", type: "messenger", timeline: "حوالي 1040 - 970 ق.م", title: "الملك النبي", relation: "من نسله.", desc: "صاحب الزبور.", children: [
                                                                                                        {
                                                                                                            name: "سليمان", type: "prophet", timeline: "حوالي 970 - 931 ق.م", title: "ملك الملوك", relation: "ابنه.", desc: "سخر له الجن والريح.", children: [
                                                                                                                {
                                                                                                                    name: "ماثان", type: "connector", timeline: "القرن 1 ق.م", title: "", relation: "من نسله.", desc: "الجد المشترك.", children: [
                                                                                                                        {
                                                                                                                            name: "زكريا", type: "prophet", timeline: "القرن الأول الميلادي", title: "كافل مريم", relation: "من نسله.", desc: "كافل مريم.", children: [
                                                                                                                                { name: "يحيى", type: "prophet", timeline: "القرن الأول الميلادي", title: "السيد الحصور", relation: "ابنه.", desc: "عاصر المسيح.", children: [] }
                                                                                                                            ]
                                                                                                                        },
                                                                                                                        {
                                                                                                                            name: "عمران", type: "connector", timeline: "القرن الأول قبل الميلاد", title: "والد مريم", relation: "من نسله.", desc: "والد مريم.", children: [
                                                                                                                                {
                                                                                                                                    name: "مريم", type: "connector", timeline: "القرن الأول الميلادي", title: "العذراء", relation: "ابنته.", desc: "سيدة نساء العالمين.", children: [
                                                                                                                                        { name: "عيسى", type: "ulu-alazm", timeline: "حوالي 1 - 33 م", title: "المسيح", relation: "ابنها.", desc: "كلمة الله وروحه.", children: [] }
                                                                                                                                    ]
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
