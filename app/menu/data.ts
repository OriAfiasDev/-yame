import { TCategory } from "./types";

export const dataSet: TCategory[] = [
  {
    id: "category_1",
    name: "הצלחת הראשונה",
    description: "מבחר מנות ראשונות ופתיחים",
    order: 2,
    thumbnail:
      "https://images.immediate.co.uk/production/volatile/sites/30/2024/03/Jamon-and-wild-garlic-croquetas-50f2d2f.jpg",
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
        price: 44,
      },
      {
        id: "dish_1_3",
        name: "נשנוש חלומי קראנצ'י",
        description: "אצבעות חלומי מטוגנות בזיגוג טריאקי ושומשום",
        price: 59,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0032.jpg",
      },
      {
        id: "dish_1_4",
        name: "סלט קפרזה",
        description:
          "קרעי גבינת מוצרלה, עגבניות שרי, בצל סגול, בזיליקום, בלסמי מצומצם ומלח גס",
        price: 59,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_9914.jpg",
      },
      {
        id: "dish_1_5",
        name: "ארטישוק א-לה רומנה",
        description:
          "ארטישוק צלוי על הגריל, עגבניות שרי מוקפצות עם בצל ופלפל חריף, פרמון, בלסמי מצומצם, שום קונפי ומלח גס",
        price: 59,
        spicy: true,
        recommended: true,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0037.jpg",
      },
      {
        id: "dish_1_6",
        name: "עלי גפן",
        description:
          "5 יח' עלי גפן במילוי אורז לבן בהכנה ביתית, חומש על לאבנה עם שמן זית",
        price: 59,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_9977.jpg",
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
        price: 47,
      },
      {
        id: "dish_1_10",
        name: "חומוס טחינה",
        description:
          "חומוס, טחינה ביתית, פפריקה אדומה, שמן זית ופטרוזיליה. מוגש עם 2 פיתות",
        price: 38,
      },
      {
        id: "dish_1_11",
        name: "כרובית",
        description: "כרובית מטוגנת בציפוי קריספי בליווי צ'ילי מתוק",
        price: 47,
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
        price: 45,
      },
      {
        id: "dish_1_14",
        name: "רביולי סלק",
        description:
          "גבינת מסקרפונה עיזים מטוגנת בליווי רוטב שמנת וגבינות בצד, 4 יחידות",
        price: 59,
        recommended: true,
      },
      {
        id: "dish_1_15",
        name: "קרפצ'יו סלק",
        description: "דבש, בלסמי מצומצם, מלח, שמן זית, עלי בייבי, גבינת פטה",
        price: 59,
        recommended: true,
      },
    ],
  },
  {
    id: "category_2",
    name: "עיקריות",
    description: "מוגש עם תוספת אחת לבחירה - סלט אישי / צ'יפס / אורז",
    order: 5,
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
        price: 119,
      },
      {
        id: "dish_2_3",
        name: "שניצל הבית",
        description: "חזה עוף מתובל מצופה בפירורים פריכים",
        price: 82,
      },
      {
        id: "dish_2_4",
        name: "נקניקיות מרגז חריפות",
        description: "נקניקיות מרגז פיזנטיות בליווי טחינה",
        price: 79,
        spicy: true,
      },
      {
        id: "dish_2_5",
        name: "סטייק אנטריקוט",
        description: "אנטריקוס ארגנטינאי פרימיום 300 גרם",
        price: 159,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0044.jpg",
      },
      {
        id: "dish_2_6",
        name: "פיש & צ'יפס",
        description: "נגסי פילה דג אמנון בציפוי טמפורה",
        price: 89,
      },
      {
        id: "dish_2_7",
        name: "המבורגר אנטריקוט",
        description: `220 גרם בשר אנטריקוט טחון מוגש בלחמניית המבורגר עם ירקות וציפס
תוספות: ביצת עין / בצל מטוגן / פטריות`,
        price: 89,
        recommended: true,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_9963.jpg",
      },
      {
        id: "dish_2_8",
        name: "פלטת בשרים זוגית",
        description: `אנטריקוט, 2 יח' קבב, 2 יח' מרגז, 2 יח' פרגית, 4 יח' כנפיים
מוגש עם שתי תוספות לבחירה`,
        price: 279,
      },
      {
        id: "dish_2_9",
        name: "כריך רוסטביף",
        description: `חסה, עגבנייה, מלפפון חמוץ, איולי שום וריבת בצל
לחם לבן / דגנים לבחירה`,
        price: 79,
        recommended: true,
      },
    ],
  },
  {
    id: "category_3",
    name: "פינה לילדים",
    description: "אוכל שהילדים תמיד אוהבים",
    order: 5.1,
    dishes: [
      {
        id: "dish_3_1",
        name: "אצבעות שניצל",
        description: "מוגש עם צ׳יפס",
        price: 59,
      },
      {
        id: "dish_3_2",
        name: "נקניקיות עוף",
        description: "מוגש עם צ׳יפס",
        price: 59,
      },
    ],
  },
  {
    id: "category_4",
    name: "בוקר טוב",
    description: "מוגש עד 13:00 בימים ראשון - שישי, עד 12:00 בימי שבת",
    order: 1,
    thumbnail:
      "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltff83a08b0ab08cb4/664cbe0dece86b22ce53e9bc/breakfast-meat-spread.jpg",
    dishes: [
      {
        id: "dish_4_1",
        name: "ארוחת בוקר ישראלית ליחיד",
        description: `3 ביצים לבחירה, גבינת שמנת, גבינת פטה, סלט טונה, טחינה, אבוקדו, סלט ירוק, לחם, חמאה, ריבה
2 שתייה חמה או קלה לבחירה.`,
        price: 89,
      },
      {
        id: "dish_4_15",
        name: "ארוחת בוקר ישראלית לזוג",
        description: `6 ביצים לבחירה, גבינת שמנת, גבינת פטה, סלט טונה, טחינה, אבוקדו, סלט ירוק, לחם, חמאה, ריבה
4 שתייה חמה או קלה לבחירה.`,
        price: 149,
      },
      {
        id: "dish_4_2",
        name: "קוראסון סלמון",
        description: "קוראסון חמאה, סלמון מעושן, ביצה עלומה, שמנת, חסה ובצל",
        price: 67,
        recommended: true,
      },
      {
        id: "dish_4_25",
        name: "אגז בנדיקט",
        description: "לחם בריוש, סלמון מעושן, אבוקדו, ביצה עלומה וסלט ירוק",
        price: 79,
        recommended: true,
      },
      {
        id: "dish_4_3",
        name: "שקשוקת הבית",
        description:
          "3 ביצים בתבשיל עגבניות טריות בבישול ארוך. מוגש עם טחינה, זיתים מתובלים ולחם מחמצת",
        price: 72,
      },
      {
        id: "dish_4_4",
        name: "שקשוקה יוונית",
        description:
          "3 ביצים בתבשיל עגבניות טריות בבישול ארוך, בולגרית מגורדת, זיתי קלמטה",
        price: 75,
      },
      {
        id: "dish_4_5",
        name: "שקשוקה מרגז",
        description:
          "3 ביצים בתבשיל עגבניות טריות בבישול ארוך, בתוספת נקניקיות מרגז צלויות",
        price: 75,
        spicy: true,
      },
      {
        id: "dish_4_6",
        name: "בייגל טוסט צהובה",
        description: `מוגש בתוספת סלט קטן. תוספות לבחירה: פטה, שמנת, ביצה קשה, זיתים, בצל, פטריות, תירס (6 ש״ח)
מוגש בכל שעות היום`,
        price: 59,
      },
      {
        id: "dish_4_7",
        name: "קפה ומאפה",
        description: `מאפה שקדים / שוקולד
מוגש בכל שעות היום`,
        price: 39,
      },
    ],
  },
  {
    id: "category_5",
    name: "סלטים",
    description: "טעמים של בריאות ורעננות",
    order: 3,
    thumbnail:
      "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg",
    dishes: [
      {
        id: "dish_5_1",
        name: "סלט קיסר",
        description: "חסה קיסר, רוטב קיסר, בצל סגול, ביצה רכה, קרוטונים, פרמזן",
        price: 75,
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
        price: 75,
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
    order: 4,
    thumbnail:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-01-Caramelized-Tomato-Paste-Pasta%2F06-CARAMELIZED-TOMATO-PASTE-PASTA-039",
    dishes: [
      {
        id: "dish_6_1",
        name: "פיצה YA•ME",
        description:
          "רוטב עגבניות, מוצרלה, בטטה צלויה, שום קונפי, פרמזן, נגיעות בלסמי מצומצם",
        price: 79,
        recommended: true,
      },
      {
        id: "dish_6_2",
        name: "פיצה מיקונוס",
        description:
          "רוטב עגבניות, מוצרלה, בצל סגול, זיתי קלמטה, גבינה בולגרית מגורדת",
        price: 79,
      },
      {
        id: "dish_6_3",
        name: "פיצה מרגריטה",
        description: `רוטב עגבניות, גבינת מוצרלה, בזיליקום טרי
תוספות לבחירה: עגבנייה, פטה, זיתי קלמטה, בצל, פטריות טריות, תירס (6 ש״ח)`,
        price: 69,
      },
      {
        id: "dish_6_35",
        name: "פסטה YA•ME",
        description:
          "פסטה פטוצ׳יני, רוטב שמנת, בטטה, ערמונים, פרמזן, בזיליקום טרי",
        price: 79,
        recommended: true,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0063.jpg",
      },
      {
        id: "dish_6_4",
        name: "אלפרדו גרנדה",
        description:
          "פסטה פטוצ'יני, רוטב שמנת, פטריות טריות, פרמזן, בזיליקום טרי",
        price: 74,
      },
      {
        id: "dish_6_5",
        name: "פסטה רוזה",
        description: "פסטה פטוצ'יני, רוטב שמנת ועגבניות, פרמזן, בזיליקום טרי",
        price: 79,
      },
      {
        id: "dish_6_6",
        name: "טורטליני פולנטה",
        description: "טורטליני ברוטב חמאת עגבניות ופרמזין",
        price: 75,
        recommended: true,
      },
    ],
  },
  {
    id: "category_7",
    name: "קינוחים",
    description: "רגע לפני שמסיימים, משהו מתוק",
    order: 6,
    thumbnail:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Chocolate-sandwich-cupcakes-4b30ada.jpg?quality=90&resize=708,643",
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
        description: "מוגש בעונה",
        price: 46,
      },
      {
        id: "dish_7_7",
        name: "אבטיח בולגרית",
        description: "מוגש בעונה",
        price: 56,
      },
    ],
  },
  {
    id: "category_8",
    name: "שתיה חמה",
    description: "תוספת חלב שקדים / סויה / שיבולת שועל: 3 ש״ח",
    thumbnail:
      "https://www.americanolounge.com/wp-content/uploads/2024/08/What-is-American-style-coffee_270222935.webp",
    order: 7,
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
        name: "קפוצ׳ינו קטן",
        description: "",
        price: 14,
      },
      {
        id: "dish_8_4",
        name: "קפוצ׳ינו גדול",
        description: "",
        price: 18,
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
        description: "תוספת יין: 8 ש״ח",
        price: 22,
      },
    ],
  },
  {
    id: "category_9",
    name: "שתיה קרה",
    description: "שתיה קרה",
    thumbnail:
      "https://gadegal-homestay.himwebx.com/wp-content/uploads/2023/10/cold-drink.jpeg",
    order: 8,
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
        price: 16,
      },
      {
        id: "dish_9_11",
        name: "מים מינרליים Ferrarelle",
        description: "750 מ״ל",
        price: 32,
      },
    ],
  },
  {
    id: "category_10",
    name: "מרעננים",
    description: "משקאות קפואים מרעננים, שילוב מושלם של פירות וקרח",
    order: 9,
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=1xw:0.843328335832084xh;center,top&resize=1200:*",
    dishes: [
      {
        id: "dish_10_1",
        name: "אייס קפה",
        description: "",
        price: 32,
      },
      {
        id: "dish_10_2",
        name: "גרניטה לימונענע",
        description: "",
        price: 19,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0147.jpg",
      },
      {
        id: "dish_10_3",
        name: "פרש מנגו",
        description: `פרי מנגו ונענע טריה
מוגש גרוס`,
        price: 38,
      },
      {
        id: "dish_10_4",
        name: "מילקשייק",
        description: "בטעמי שוקו, וניל, ריבת חלב",
        price: 38,
      },
      {
        id: "dish_10_5",
        name: "שייק פירות",
        description: "בטעמי תות, בננה, תמר, מנגו",
        price: 38,
      },
    ],
  },
  {
    id: "category_12",
    name: "יינות",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 10,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0278/8642/0047/files/11_Types_of_Wine_480x480.jpg?v=1711203013",
    dishes: [
      {
        id: "dish_12_1",
        name: "הר חרמון לבן",
        description: "מחיר לכוס | מחיר לבקבוק: 159",
        price: 56,
      },
      {
        id: "dish_12_2",
        name: "הר חרמון אדום",
        description: "מחיר לכוס | מחיר לבקבוק: 159",
        price: 56,
      },
      {
        id: "dish_12_3",
        name: "גוורץ",
        description: "מחיר לכוס | מחיר לבקבוק: 139",
        price: 54,
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
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 11,
    thumbnail:
      "https://www.tastingtable.com/img/gallery/why-draft-beer-tastes-better-than-bottled/the-tasting-experience-1648062930.jpg",
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
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 12,
    thumbnail:
      "https://thumbs.dreamstime.com/b/bottles-famous-global-beer-brands-poznan-pol-mar-including-heineken-becks-bud-miller-corona-stella-artois-san-miguel-143170558.jpg",
    dishes: [
      {
        id: "dish_14_1",
        name: "קורונה",
        description: "",
        price: 38,
      },
      {
        id: "dish_14_2",
        name: "היינקן",
        description: "",
        price: 36,
      },
      {
        id: "dish_14_3",
        name: "בלאנק",
        description: "",
        price: 36,
      },
      {
        id: "dish_14_4",
        name: "קסטיל רוז",
        description: "",
        price: 45,
      },
      {
        id: "dish_14_5",
        name: "סמירנוף אייס",
        description: "",
        price: 38,
      },
      {
        id: "dish_14_6",
        name: "סומרסבי",
        description: "תפוח / פירות יער",
        price: 38,
      },
      {
        id: "dish_14_7",
        name: "בריזר",
        description: "אבטיח / אננס",
        price: 38,
      },
    ],
  },
  {
    id: "category_15",
    name: "קוקטיילים קלאסיים",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 13,
    thumbnail:
      "https://demitris.com/cdn/shop/articles/Untitled_design_-_2025-04-17T130659.845.png?v=1744916832",
    dishes: [
      {
        id: "dish_15_1",
        name: "מוחיטו",
        description: "רום, ספרייט, נענע, לימון, סוכר חום",
        price: 59,
      },
      {
        id: "dish_15_3",
        name: "אפרול שפריץ",
        description: "אפרול, קאווה, סודה, סלייס תפוז",
        price: 59,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0204.jpg",
      },
      {
        id: "dish_15_4",
        name: "ג'ין טוניק",
        description: "ג׳ין, מי טוניק, נענע, קליפת מלפפון",
        price: 59,
      },
      {
        id: "dish_15_5",
        name: "אייס לימונארק",
        description: "ערק, לימונים, נענע טריה. מוגש גרוס",
        price: 59,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0147.jpg",
      },
      {
        id: "dish_15_6",
        name: "נגרוני",
        description: "ג׳ין, קמפרי, מרטיני וורמוט אדום, מיץ תפוזים",
        price: 59,
      },
    ],
  },
  {
    id: "category_16",
    name: "קוקטיילים YA-ME",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 14,
    thumbnail:
      "https://demitris.com/cdn/shop/articles/Untitled_design_-_2025-04-17T130659.845.png?v=1744916832",
    dishes: [
      {
        id: "dish_16_1",
        name: "מונאקו",
        description: "וודקה, קוקטייל ליצי, לימונדה, פירות יער",
        price: 65,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0107.jpg",
      },
      {
        id: "dish_16_11",
        name: "קו-טאו",
        description: "טקילה, מנגו קפוא, מונין מנגו, קוקטייל ליצ׳י",
        price: 65,
        thumbnail:
          "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/IMG_0161.jpg",
      },
      {
        id: "dish_16_2",
        name: "מיאמי בריז'",
        description: "ג׳ין, ספרייט, ריבת פירות יער, נענע ולימון",
        price: 65,
      },
      {
        id: "dish_16_3",
        name: "טולום",
        description: "טקילה, גרנדין, מיץ תפוזים, סלייס תפוז",
        price: 65,
      },
    ],
  },
  {
    id: "category_17",
    name: "וויסקי",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 15,
    thumbnail:
      "https://minuman.com/cdn/shop/articles/061022---Get-Familiar-with-Different-Types-of-Whisky_dd355a17-b1d7-4261-9f0a-9d86e8b19399.jpg?v=1749691372",
    dishes: [
      {
        id: "dish_17_1",
        name: "ג׳וני ווקר בלאק לייבל",
        description: "",
        price: 59,
      },
      {
        id: "dish_17_2",
        name: "שיבס",
        description: "",
        price: 59,
      },
      {
        id: "dish_17_3",
        name: "ג'וני ווקר גולד לייבל",
        description: "",
        price: 69,
      },
    ],
  },
  {
    id: "category_18",
    name: "וודקה",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 16,
    thumbnail:
      "https://minuman.com/cdn/shop/articles/061022---Get-Familiar-with-Different-Types-of-Whisky_dd355a17-b1d7-4261-9f0a-9d86e8b19399.jpg?v=1749691372",
    dishes: [
      {
        id: "dish_18_1",
        name: "פינלנדיה",
        description: "",
        price: 59,
      },
      {
        id: "dish_18_3",
        name: "גרייגוס",
        description: "",
        price: 69,
      },
      {
        id: "dish_18_4",
        name: "ואן גוך",
        description: "",
        price: 69,
      },
      {
        id: "dish_18_5",
        name: "בלוודר",
        description: "",
        price: 69,
      },
    ],
  },
  {
    id: "category_19",
    name: "טקילה",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 17,
    thumbnail:
      "https://minuman.com/cdn/shop/articles/061022---Get-Familiar-with-Different-Types-of-Whisky_dd355a17-b1d7-4261-9f0a-9d86e8b19399.jpg?v=1749691372",
    dishes: [
      {
        id: "dish_19_1",
        name: "קוורבו נולד",
        description: "",
        price: 52,
      },

      {
        id: "dish_19_3",
        name: "פטרון קלאסי",
        description: "",
        price: 69,
      },
    ],
  },
  {
    id: "category_20",
    name: "קוניאק",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 18,
    thumbnail:
      "https://minuman.com/cdn/shop/articles/061022---Get-Familiar-with-Different-Types-of-Whisky_dd355a17-b1d7-4261-9f0a-9d86e8b19399.jpg?v=1749691372",
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
    thumbnail:
      "https://minuman.com/cdn/shop/articles/061022---Get-Familiar-with-Different-Types-of-Whisky_dd355a17-b1d7-4261-9f0a-9d86e8b19399.jpg?v=1749691372",
    description: "מכירה או הגשה של משקאות חריפים למי שטרם מלאו לו 18 אסורה",
    order: 19,
    dishes: [
      {
        id: "dish_21_1",
        name: "ערק עלית",
        description: "",
        price: 49,
      },
      {
        id: "dish_21_2",
        name: "אוזו פלומרי",
        description: "",
        price: 49,
      },
    ],
  },
];
