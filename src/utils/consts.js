export const BASE_URL = "https://bime.see5.net";

export const teamMembersData = {
  zahra: {
    name: "زهرا",
    jobTitle: "گرافیست",
    picture: "/assets/img/members/zahra.jpg",
    about:`سلام! من یک گرافیست با تجربه ام، که از سال1397در دنیای گرافیک فعالیت می کنم.
    در طی این سال ها، عشقم به هنر و خلاقیت من را به سمت ایجاد آثار بصری زیبا و جذاب
    هدایت کرده است`,
    contacts: [
      { link: "", value: "09055966823", logo: "/assets/img/phone.svg" },
      {
        link: "https://www.linkedin.com/in/zahra-asgariyan-9b385b292",
        value: "لینکدین",
        logo: "/assets/img/linkdin.svg",
      },
      {
        link: "https://t.me/asgariyan12",
        value: "تلگرام",
        logo: "/assets/img/telegram.svg",
      },
        {
        link: "https://www.instagram.com/_zahraasgariyan_",
        value: "اینستاگرام",
        logo: "/assets/img/instagram.svg",
      },
    ],
    languages: [{ title: "انگلیسی", rating: 4 }] /** rating integer from 1-8 */,
    educations: [
      {
        title: "کاردانی",
        description: "دانشگاه اصفهان از سال 1400",
      },
    ],
    experiments: [
      {
        title: "گرافیست فریلنسر",
        fromDate: "مهر1394",
        toDate: "تیر1402",
        description: "توضیحات در مورد نحوه کار و غیره",
      },
    ],
    skills: [
      {
        title: "فتوشاپ",
        logo: "/assets/img/skills/photoshop.svg",
        percentage: 80,
      },
      {
        title: "ایلاستریتور",
        logo: "/assets/img/skills/illustrator.svg",
        percentage: 80,
      },
      {
        title: "ایکس دی",
        logo: "/assets/img/skills/xd.svg",
        percentage: 100,
      },
      {
        title: "پریمیر",
        logo: "/assets/img/skills/premiere.svg",
        percentage: 50,
      },  {
        title: "corel draw",
        logo: "/assets/img/skills/coreldraw.svg",
        percentage: 70,
      },
    ],
    interests: ["موسیقی", "ورزش"],
  },
  atefe: {
    name: "عاطفه",
    jobTitle: "فول استک دولوپر",
    picture: "/assets/img/members/atefe.jpg",
    about: `علاقه عمیق من به حل مسایل منطقی باعث شد که به سمت توسعه وب بروم تا آن اشتیاق را به یک حرفه تبدیل کنم. 
    هدف من برای آینده نزدیک گنجاندن هوش مصنوعی در پروژه های لاراول و تسلط بر این تلاقی فناوری ها است. `,
    contacts: [
      { link: "", value: "09100520741", logo: "/assets/img/phone.svg" },
      {
        link: "https://www.linkedin.com/in/atefe-ali-asgariyan-85983b269",
        value: "لینکدین",
        logo: "/assets/img/linkdin.svg",
      },
      {
        link: "https://t.me/tobeconfi",
        value: "تلگرام",
        logo: "/assets/img/telegram.svg",
      },
    ],
    languages: [
      { title: "انگلیسی", rating: 8 },
      { title: "آلمانی", rating: 2 },
    ] /** rating integer from 1-8 */,
    educations: [
      {
        title: "کارشناسی",
        description: "دانشگاه صنعتی اصفهان از سال 1395 تا 1400",
      },
    ],
    experiments: [
      {
        title: "بک اند فریلنسر",
        fromDate: "1400",
        toDate: "تیر1402",
        description: "توضیحات در مورد نحوه کار و غیره",
      },
    ],
    skills: [
      {
        title: "php",
        logo: "/assets/img/skills/php.svg",
        percentage: 100,
      },
      {
        title: "laravel",
        logo: "/assets/img/skills/laravel.svg",
        percentage: 100,
      },
      {
        title: "react.js",
        logo: "/assets/img/skills/react.svg",
        percentage: 80,
      },
      {
        title: "گیت",
        logo: "/assets/img/skills/git.svg",
        percentage: 90,
      },
    ],
    interests: ["موسیقی", "ورزش"],
  },
  mahan: {
    name: "ماهان",
    jobTitle: "برنامه نویس بک اند",
    picture: "/assets/img/members/mahan.webp",
    about:
      "برنامه نویس بک اند هستم که 4 سالی میشه در حوضه وب فعالیت میکنم و یک سال هستش که دارم تخصصی در سمت بک اند وبسایت ها کار میکنم",
    contacts: [
      { link: "", value: "09158027458", logo: "/assets/img/phone.svg" },
      {
        link: "https://www.linkedin.com/in/mahan-mahmodi-4a58a2278/",
        value: "لینکدین",
        logo: "/assets/img/linkdin.svg",
      },
      {
        link: "https://www.instagram.com/WAHAWN_",
        value: "اینستاگرام",
        logo: "/assets/img/instagram.svg",
      },
      {
        link: "https://t.me/exiteboy",
        value: "تلگرام",
        logo: "/assets/img/telegram.svg",
      },
    ],

    languages: [{ title: "انگلیسی", rating: 5 }] /** rating integer from 1-8 */,
    educations: [],
    experiments: [
      {
        title: "طراحی سایت ",
        fromDate: "بهمن 1397",
        toDate: "تا کنون",
        description:
          "به صورت فریلنسر در حوضه طراحی سایت مشغول بودم ",
      },
    ],
    skills: [
      {
        title: "جنگو",
        logo: "/assets/img/skills/django.svg",
        percentage: 80,
      },
      {
        title: "داکر",
        logo: "/assets/img/skills/docker.svg",
        percentage: 80,
      },
      {
        title: "پی اچ پی",
        logo: "/assets/img/skills/php.svg",
        percentage: 70,
      },
      {
        title: "گیت",
        logo: "/assets/img/skills/git.svg",
        percentage: 80,
      },
      {
        title: "وردپرس",
        logo: "/assets/img/skills/wordpress.svg",
        percentage: 80,
      },
      {
        title: "سئو",
        logo: "/assets/img/skills/seo.svg",
        percentage: 50,
      },
    ],
    interests: ["موسیقی", "ورزش", "گیم", "کد زدن"],
  },

  amir:  {
    name: "امیر",
    jobTitle: "برنامه نویس فرانت اند",
    picture: "/assets/img/members/mahan.webp",
    about:
      "برنامه نویس بک اند هستم که 4 سالی میشه در حوضه وب فعالیت میکنم و یک سال هستش که دارم تخصصی در سمت بک اند وبسایت ها کار میکنم",
    contacts: [
      { link: "", value: "09158027458", logo: "/assets/img/phone.svg" },
      {
        link: "https://www.linkedin.com/in/mahan-mahmodi-4a58a2278/",
        value: "لینکدین",
        logo: "/assets/img/linkdin.svg",
      },
      {
        link: "https://www.instagram.com/WAHAWN_",
        value: "اینستاگرام",
        logo: "/assets/img/instagram.svg",
      },
      {
        link: "https://t.me/exiteboy",
        value: "تلگرام",
        logo: "/assets/img/telegram.svg",
      },
    ],

    languages: [{ title: "انگلیسی", rating: 5 }] /** rating integer from 1-8 */,
    educations: [],
    experiments: [
      {
        title: "طراحی سایت ",
        fromDate: "بهمن 1397",
        toDate: "تا کنون",
        description:
          "به صورت فریلنسر در حوضه طراحی سایت مشغول بودم و تجربه کار در شرکت رو ندارم",
      },
    ],
    skills: [
      {
        title: "html",
        logo: "/assets/img/skills/html.svg",
        percentage: 80,
      },
      {
        title: "css",
        logo: "/assets/img/skills/css.svg",
        percentage: 80,
      },
      {
        title: "گیت",
        logo: "/assets/img/skills/git.svg",
        percentage: 80,
      },
      {
        title: "jquery",
        logo: "/assets/img/skills/jquery.svg",
        percentage: 80,
      },
    ],
    interests: ["موسیقی", "ورزش", "گیم", "کد زدن"],
  },
};
