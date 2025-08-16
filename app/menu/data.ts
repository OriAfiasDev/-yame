import { TCategory } from "./types";

export const dataSet: TCategory[] = [
  {
    id: "category_1",
    name: "הצלחת הראשונה",
    description: "מבחר מנות ראשונות ופתיחים",
    dishes: [
      {
        id: "dish_1_1",
        name: "פוקצ'ה על אבן",
        description: "שמן שום, פטרוזיליה, מטבל סלסת עגבניות, שמן זית ובלסמי",
        price: 34,
      },
      {
        id: "dish_1_2",
        name: "חציל ים תיכוני",
        description:
          "חציל על האבן בליווי טחינה, סלסת עגבניות טריות, שמן זית, פטרוזיליה",
        price: 47,
      },
      {
        id: "dish_1_3",
        name: "נשנוש חלומי קראנצ'י",
        description: "אצבעות חלומי מטוגנות בזיגוג טריאקי ושומשום",
        price: 59,
      },
      {
        id: "dish_1_4",
        name: "סלט קפרזה",
        description:
          "קרעי גבינת מוצרלה, עגבניות שרי, בצל סגול, בזיליקום, בלסמי מצומצם ומלח גס",
        price: 59,
      },
      {
        id: "dish_1_5",
        name: "ארטישוק א-לה רומנה",
        description:
          "ארטישוק צלוי על הגריל, עגבניות שרי מוקפצות עם בצל ופלפל חריף, פרמון, בלסמי מצומצם, שום קונפי ומלח גס",
        price: 59,
        spicy: true,
        recommended: true,
      },
      {
        id: "dish_1_6",
        name: "עלי גפן",
        description:
          "5 יח' עלי גפן במילוי אורז לבן בהכנה ביתית, חומש על לאבנה עם שמן זית",
        price: 59,
      },
      {
        id: "dish_1_7",
        name: "כנפיים פריכות",
        description:
          "כנפי עוף בציפוי פריך מוקפצות ברוטב מתקתק מוגש עם שומשום ובצל ירוק",
        price: 62,
      },
      {
        id: "dish_1_8",
        name: "סמוסה",
        description:
          "5 יח' סמוסות בהכנה ביתית, 5 יחי בצק פילו במילוי עוף טחון מתובל בטעמים הודיים, מוגש עם רוטב צ'אטני",
        price: 62, // Price inferred from proximity
      },
      {
        id: "dish_1_9",
        name: "צ'יפס קלאסי",
        description: "צ'יפס קלאסי פריך (תוספת בולגרית 15)",
        price: 38,
      },
      {
        id: "dish_1_10",
        name: "חומוס טחינה",
        description:
          "חומוס, טחינה ביתית, פפריקה אדומה, שמן זית ופטרוזיליה. מוגש עם 2 פיתות",
        price: 45,
      },
      {
        id: "dish_1_11",
        name: "כרובית",
        description: "כרובית מטוגנת בציפוי קריספי בליווי צ'ילי מתוק",
        price: 59,
      },
      {
        id: "dish_1_12",
        name: "שניצלונים",
        description: "רצועות עוף בציפוי פריך",
        price: 59,
      },
      {
        id: "dish_1_13",
        name: "אדממה",
        description: "פולי סויה מבושלים עם מלח גס ולימון",
        price: 38,
      },
      {
        id: "dish_1_14",
        name: "רביולי סלק",
        description:
          "גבינת מסקרפונה עיזים מטוגנת בליווי רוטב שמנת וגבינות בצד, 4 יחידות",
        price: 82,
        recommended: true,
      },
      {
        id: "dish_1_15",
        name: "קרפצ'יו סלק",
        description: "דבש, בלסמי מצומצם, מלח, שמן זית, עלי בייבי, גבינת פטה",
        price: 79,
        recommended: true,
      },
    ],
  },
  {
    id: "category_2",
    name: "עיקריות",
    description: "מוגש עם תוספת אחת לבחירה - סלט אישי / צ'יפס / אורז",
    dishes: [
      {
        id: "dish_2_1",
        name: "פרגית עסיסית",
        description: "פרגית עוף בגריל, מושרה בתערובת תבלינים",
        price: 89,
      },
      {
        id: "dish_2_2",
        name: "קבב על פוקאצ'ה",
        description: "תערובת בשר בקר מתובל טחון, טחינה צבעונית וסלסת עגבניות",
        price: 89,
      },
      {
        id: "dish_2_3",
        name: "שניצל הבית",
        description: "חזה עוף מתובל מצופה בפירורים פריכים",
        price: 79,
      },
      {
        id: "dish_2_4",
        name: "נקניקיות מרגז חריפות",
        description: "נקניקיות מרגז פיזנטיות בליווי טחינה",
        price: 75,
        spicy: true,
      },
      {
        id: "dish_2_5",
        name: "סטייק אנטריקוט",
        description: "אנטריקוס ארגנטינאי פרימיום 300 גרם",
        price: 159,
      },
      {
        id: "dish_2_6",
        name: "פיש & צ'יפס",
        description: "נגסי פילה דג אמנון בציפוי טמפורה",
        price: 75,
      },
      {
        id: "dish_2_7",
        name: "המבורגר אנטריקוט",
        description:
          "220 גרם בשר אנטריקוט טחון מוגש בלחמניית המבורגר עם ירקות וציפס. תוספות: ביצת עין / בצל מטוגן / פטריות",
        price: 79,
        recommended: true,
      },
      {
        id: "dish_2_8",
        name: "פלטת בשרים זוגית",
        description:
          "אנטריקוט, 2 יח' קבב, 2 יח' מרגז, 2 יח' פרגית, 4 יח' כנפיים. מוגש עם שתי תוספות לבחירה",
        price: 279,
      },
      {
        id: "dish_2_9",
        name: "כריך רוסטביף",
        description:
          "חסה, עגבנייה, מלפפון חמוץ, איולי שום וריבת בצל. לחם לבן / דגנים לבחירה",
        price: 67,
        recommended: true,
      },
    ],
  },
  {
    id: "category_3",
    name: "פינה לילדים",
    description: "מוגש עם צ'יפס",
    dishes: [
      {
        id: "dish_3_1",
        name: "נקניקיות עוף / אצבעות שניצל",
        description: "מנה לבחירת הילדים",
        price: 39,
      },
    ],
  },
  {
    id: "category_4",
    name: "בוקר טוב",
    description: "מוגש עד 12:00 או 13:00, וגם בכל שעות היום",
    dishes: [
      {
        id: "dish_4_1",
        name: "ארוחת בוקר ישראלית",
        description:
          "3 ביצים לבחירה, גבינת שמנת, גבינת פטה, סלט טונה, טחינה, אבוקדו, סלט ירוק, לחם, חמאה, ריבה. שתייה חמה וקלה לבחירה.",
        price: 79,
      },
      {
        id: "dish_4_2",
        name: "אגז בנדיקט",
        description: "לחם בריוש, סלמון מעושן, אבוקדו, ביצה עלומה וסלט ירוק",
        price: 75,
        recommended: true,
      },
      {
        id: "dish_4_3",
        name: "שקשוקת הבית",
        description:
          "3 ביצים בתבשיל עגבניות טריות בבישול ארוך. מוגש עם טחינה, זיתים מתובלים ולחם מחמצת",
        price: 69,
      },
      {
        id: "dish_4_4",
        name: "שקשוקה יוונית",
        description:
          "3 ביצים בתבשיל עגבניות טריות בבישול ארוך, בולגרית מגורדת, זיתי קלמטה",
        price: 79,
      },
      {
        id: "dish_4_5",
        name: "שקשוקה מרגז",
        description:
          "3 ביצים בתבשיל עגבניות טריות בבישול ארוך, בתוספת נקניקיות מרגז צלויות",
        price: 79,
        spicy: true,
      },
      {
        id: "dish_4_6",
        name: "בייגל טוסט צהובה",
        description:
          "מוגש בתוספת סלט קטן. תוספות לבחירה: פטה, שמנת, ביצה קשה, זיתים, בצל, פטריות, תירס",
        price: 59,
      },
      {
        id: "dish_4_7",
        name: "קפה ומאפה",
        description: "מאפה שקדים / שוקולד",
        price: 39,
      },
    ],
  },
  {
    id: "category_5",
    name: "סלטים",
    description: "",
    dishes: [
      {
        id: "dish_5_1",
        name: "סלט קיסר",
        description: "חסה קיסר, רוטב קיסר, בצל סגול, ביצה רכה, קרוטונים, פרמזן",
        price: 79,
      },
      {
        id: "dish_5_2",
        name: "סלט חזה עוף",
        description:
          "חזה עוף מתובל על הגריל, מבחר עלים רעננים, שרי, מלפפון, בצל סגול, בתיבול שמן זית ולימון",
        price: 79,
      },
      {
        id: "dish_5_3",
        name: "סלט יווני",
        description:
          "מבחר עלים רעננים, שרי, מלפפון, בצל סגול, בולגרית מגורדת, זיתי קלמטה, זעתר, בתיבול שמן זית ולימון",
        price: 69,
      },
      {
        id: "dish_5_4",
        name: "סלט חלומי",
        description:
          "מבחר עלים רעננים, שרי, מלפפון, בצל סגול, רצועות גבינת חלומי, רוטב ויניגרט הדרים, פטריות מוקפצות בטריאקי מתקתק",
        price: 79,
      },
      {
        id: "dish_5_5",
        name: "סלט עשבים",
        description: "מיקס עלים ועשבים, רוטב ויניגרט תפוח עץ ופקאן",
        price: 69,
        recommended: true,
        vegan: true,
      },
    ],
  },
  {
    id: "category_6",
    name: "איטלקי",
    description: "פיצות ופסטות",
    dishes: [
      {
        id: "dish_6_1",
        name: "פיצה YAME",
        description:
          "רוטב עגבניות, מוצרלה, בטטה צלויה, שום קונפי, פרמזן, נגיעות בלסמי מצומצם, בזיליקום טרי",
        price: 59,
        recommended: true,
      },
      {
        id: "dish_6_2",
        name: "פיצה מיקונוס",
        description:
          "רוטב עגבניות, מוצרלה, בצל סגול, זיתי קלמטה, גבינה בולגרית מגורדת, בזיליקום טרי",
        price: 59,
      },
      {
        id: "dish_6_3",
        name: "פיצה מרגריטה",
        description:
          "רוטב עגבניות, גבינת מוצרלה, בזיליקום טרי. תוספות לבחירה: עגבנייה, פטה, זיתי קלמטה, בצל, פטריות טריות, תירס (תוספת 6)",
        price: 59,
      },
      {
        id: "dish_6_4",
        name: "אלפרדו גרנדה",
        description:
          "פסטה פטוצ'יני, רוטב שמנת, בטטה, ערמונים, פרמזן, בזיליקום טרי",
        price: 59, // Price assumed from other pizzas/pastas
      },
      {
        id: "dish_6_5",
        name: "פסטה רוזה",
        description: "פסטה פטוצ'יני, רוטב שמנת ועגבניות, פרמזן, בזיליקום טרי",
        price: 59, // Price assumed from other pizzas/pastas
      },
      {
        id: "dish_6_6",
        name: "טורטליני פולנטה",
        description: "טורטליני ברוטב חמאת עגבניות ופרמזין",
        price: 59, // Price assumed from other pizzas/pastas
        recommended: true,
      },
    ],
  },
  {
    id: "category_7",
    name: "קינוחים",
    description: "",
    dishes: [
      {
        id: "dish_7_1",
        name: "עוגת גבינה באסקית",
        description:
          "עוגת גבינה באסקית אפויה, עשירה ונימוחה על מצע עוגיות חמאה",
        price: 59,
      },
      {
        id: "dish_7_2",
        name: "עוגת גזר",
        description:
          "שכבות של עוגת גזר שביניהם קרם גבינה וניל ומעל קראמבל שוקולד לבן",
        price: 59,
      },
      {
        id: "dish_7_3",
        name: "פאדג' חמה",
        description:
          "עוגת שוקולד ביתית חמה ונימוחה, עשויה ללא קמח ומלאה בשוקולד מבפנים ומבחוץ",
        price: 59,
      },
      {
        id: "dish_7_4",
        name: "סופלה אלפרדו",
        description:
          "פונדנט שוקולד חם עם טראפל שוקולד בפנים, בציפוי של גנאש שוקולד חלב",
        price: 59,
      },
      {
        id: "dish_7_5",
        name: "עוגת קוקיס קינדר",
        description: "משולש שכבות בצק עשוי קוקיס שוקו צ'יפס שביניהם גנאש קינדר",
        price: 59,
      },
      {
        id: "dish_7_6",
        name: "אבטיח",
        description: "אבטיח בעונה",
        price: 46,
      },
      {
        id: "dish_7_7",
        name: "אבטיח בולגרית",
        description: "אבטיח בעונה עם גבינה בולגרית",
        price: 56,
      },
    ],
  },
  {
    id: "category_8",
    name: "חם",
    description: "שתיה חמה",
    dishes: [
      {
        id: "dish_8_1",
        name: "אספרסו",
        description: "קצר / ארוך",
        price: 12,
      },
      {
        id: "dish_8_2",
        name: "אספרסו כפול",
        description: "קצר / ארוך",
        price: 14,
      },
      {
        id: "dish_8_3",
        name: "מקיאטו",
        description: "קצר / ארוך",
        price: 12,
      },
      {
        id: "dish_8_4",
        name: "הפוך",
        description: "קטן: 14 | גדול: 18",
        price: 14,
      },
      {
        id: "dish_8_5",
        name: "נס על חלב",
        description: "",
        price: 17,
      },
      {
        id: "dish_8_6",
        name: "נס קפה / אמריקנו",
        description: "",
        price: 14,
      },
      {
        id: "dish_8_7",
        name: "קפה שחור",
        description: "",
        price: 11,
      },
      {
        id: "dish_8_8",
        name: "שוקו חם",
        description: "",
        price: 14,
      },
      {
        id: "dish_8_9",
        name: "שוקו פרלינים",
        description: "",
        price: 22,
      },
      {
        id: "dish_8_10",
        name: "תה",
        description: "",
        price: 12,
      },
      {
        id: "dish_8_11",
        name: "תה נענע",
        description: "",
        price: 14,
      },
      {
        id: "dish_8_12",
        name: "סיידר חם",
        description: "",
        price: 15,
      },
    ],
  },
  {
    id: "category_9",
    name: "קר",
    description: "שתיה קרה",
    dishes: [
      {
        id: "dish_9_1",
        name: "שתיה קלה",
        description:
          "קוקה קולה, קולה זירו, ספרייט, ספרייט זירו, פאנטה, פיוז טי",
        price: 15,
      },
      {
        id: "dish_9_2",
        name: "סודה / מים מינרליים",
        description: "",
        price: 12,
      },
      {
        id: "dish_9_3",
        name: "נביעות בטעמים",
        description: "אפרסק / ענבים / תפוח",
        price: 15,
      },
      {
        id: "dish_9_4",
        name: "פריגת",
        description: "ענבים / תפוזים",
        price: 16,
      },
      {
        id: "dish_9_5",
        name: "לימונדה / לימונענע",
        description: "",
        price: 16,
      },
      {
        id: "dish_9_6",
        name: "קנקן לימונענע",
        description: "",
        price: 42,
      },
      {
        id: "dish_9_7",
        name: "מיץ סחוט טרי",
        description: "תפוזים / גזר / תפוגזר",
        price: 22,
      },
      {
        id: "dish_9_8",
        name: "קפה קר",
        description: "",
        price: 18,
      },
      {
        id: "dish_9_9",
        name: "מאלטי",
        description: "",
        price: 19,
      },
      {
        id: "dish_9_10",
        name: "משקה אנרגיה",
        description: "",
        price: 22,
      },
      {
        id: "dish_9_11",
        name: 'מים מינרליים 750 מ"ל',
        description: "Ferrarelle",
        price: 32,
      },
      {
        id: "dish_9_12",
        name: "אייס קפה",
        description: "",
        price: 18,
      },
      {
        id: "dish_9_13",
        name: "גרניטה לימונענע",
        description: "",
        price: 19,
      },
      {
        id: "dish_9_14",
        name: "פריש מנגו",
        description: "",
        price: 32,
      },
    ],
  },
  {
    id: "category_10",
    name: "מילקשייק",
    description: "",
    dishes: [
      {
        id: "dish_10_1",
        name: "מילקשייק",
        description: "בטעמי שוקו, וניל, ריבת חלב",
        price: 38,
      },
    ],
  },
  {
    id: "category_11",
    name: "שייק פירות",
    description: "על בסיס מים או חלב",
    dishes: [
      {
        id: "dish_11_1",
        name: "שייק פירות",
        description: "בטעמי תות, בננה, תמר, מנגו",
        price: 38,
      },
    ],
  },
  {
    id: "category_12",
    name: "יינות",
    description: "",
    dishes: [
      {
        id: "dish_12_1",
        name: "הר חרמון לבן",
        description: "מחיר לכוס | מחיר לבקבוק: 139",
        price: 54,
      },
      {
        id: "dish_12_2",
        name: "הר חרמון אדום",
        description: "מחיר לכוס | מחיר לבקבוק: 139",
        price: 54,
      },
      {
        id: "dish_12_3",
        name: "גורץ",
        description: "מחיר לכוס | מחיר לבקבוק: 159",
        price: 56,
      },
      {
        id: "dish_12_4",
        name: "רוזה רקנאטי",
        description: "מחיר לכוס | מחיר לבקבוק: 139",
        price: 54,
      },
      {
        id: "dish_12_5",
        name: "שאבלי",
        description: "מחיר לכוס | מחיר לבקבוק: 259",
        price: 59,
      },
    ],
  },
  {
    id: "category_13",
    name: "בירות מהחבית",
    description: "",
    dishes: [
      {
        id: "dish_13_1",
        name: "ווינשטפן",
        description: "חצי ליטר | שליש ליטר: 39",
        price: 45,
      },
      {
        id: "dish_13_2",
        name: "סובורג",
        description: "חצי ליטר | שליש ליטר: 36",
        price: 42,
      },
      {
        id: "dish_13_3",
        name: "קרלסברג",
        description: "חצי ליטר | שליש ליטר: 36",
        price: 42,
      },
      {
        id: "dish_13_4",
        name: "שנדי",
        description: "חצי ליטר | שליש ליטר: 36",
        price: 42,
      },
    ],
  },
  {
    id: "category_14",
    name: "בירות בבקבוק",
    description: "",
    dishes: [
      {
        id: "dish_14_1",
        name: "קורונה",
        description: "",
        price: 32, // Price assumed
      },
      {
        id: "dish_14_2",
        name: "היינקן",
        description: "",
        price: 32, // Price assumed
      },
      {
        id: "dish_14_3",
        name: "בלאנק",
        description: "",
        price: 32, // Price assumed
      },
      {
        id: "dish_14_4",
        name: "קסטיל רוז",
        description: "",
        price: 32, // Price assumed
      },
      {
        id: "dish_14_5",
        name: "סמירנוף אייס",
        description: "",
        price: 32, // Price assumed
      },
      {
        id: "dish_14_6",
        name: "סומרסבי",
        description: "תפוח / פירות יער",
        price: 32, // Price assumed
      },
      {
        id: "dish_14_7",
        name: "בריזר",
        description: "אבטיח / אננס",
        price: 32, // Price assumed
      },
    ],
  },
  {
    id: "category_15",
    name: "קוקטיילים קלאסיים",
    description: "",
    dishes: [
      {
        id: "dish_15_1",
        name: "מוחיטו",
        description: "",
        price: 59,
      },
      {
        id: "dish_15_2",
        name: "TONG",
        description: "רום, ספרייט",
        price: 59,
      },
      {
        id: "dish_15_3",
        name: "אפרול שפריץ",
        description: "אפרול, סודה, סלייס תפוז",
        price: 59,
      },
      {
        id: "dish_15_4",
        name: "ג'ין טוניק",
        description: "",
        price: 59,
      },
      {
        id: "dish_15_5",
        name: "אייס לימונארק",
        description: "עראק, לימונים, נענע טריה",
        price: 59,
      },
      {
        id: "dish_15_6",
        name: "נגרוני",
        description: "קמפרי, ג'ין, ורמוט",
        price: 59,
      },
    ],
  },
  {
    id: "category_16",
    name: "קוקטיילים YA-ME",
    description: "",
    dishes: [
      {
        id: "dish_16_1",
        name: "מונאקו",
        description: "וודקה, קוקטייל ליצי, לימונדה, פירות יער",
        price: 69,
      },
      {
        id: "dish_16_2",
        name: "מיאמי ביץ'",
        description: "וודקה, קפוא, מונין, קוקטייל ליצי",
        price: 69,
      },
      {
        id: "dish_16_3",
        name: "טולום",
        description: "וודקה, גרנדין, מיץ תפוזים, סיידר תפוחים",
        price: 52,
      },
    ],
  },
  {
    id: "category_17",
    name: "ויסקי",
    description: "",
    dishes: [
      {
        id: "dish_17_1",
        name: "בלאק לייבל",
        description: "",
        price: 65,
      },
      {
        id: "dish_17_2",
        name: "שיבס",
        description: "",
        price: 65,
      },
      {
        id: "dish_17_3",
        name: "ג'וני גולד",
        description: "",
        price: 65,
      },
    ],
  },
  {
    id: "category_18",
    name: "וודקה",
    description: "",
    dishes: [
      {
        id: "dish_18_1",
        name: "פילם",
        description: "",
        price: 65,
      },
      {
        id: "dish_18_2",
        name: "לנדיה",
        description: "",
        price: 59,
      },
      {
        id: "dish_18_3",
        name: "גריגוס",
        description: "",
        price: 59,
      },
      {
        id: "dish_18_4",
        name: "ואן גוך",
        description: "",
        price: 69,
      },
    ],
  },
  {
    id: "category_19",
    name: "טקילה",
    description: "",
    dishes: [
      {
        id: "dish_19_1",
        name: "רבו נולד",
        description: "",
        price: 49,
      },
      {
        id: "dish_19_2",
        name: "קוורבו",
        description: "",
        price: 52,
      },
      {
        id: "dish_19_3",
        name: "יון קלאס",
        description: "",
        price: 49,
      },
      {
        id: "dish_19_4",
        name: "פטרון",
        description: "",
        price: 69,
      },
    ],
  },
  {
    id: "category_20",
    name: "קוניאק",
    description: "",
    dishes: [
      {
        id: "dish_20_1",
        name: "הנסי",
        description: "",
        price: 69,
      },
      {
        id: "dish_20_2",
        name: "רמי מרטן",
        description: "",
        price: 69,
      },
    ],
  },
  {
    id: "category_21",
    name: "אניס",
    description: "",
    dishes: [
      {
        id: "dish_21_1",
        name: "ערק עגלות",
        description: "",
        price: 38,
      },
      {
        id: "dish_21_2",
        name: "אוזן פלומ",
        description: "",
        price: 36,
      },
    ],
  },
];
