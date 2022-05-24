import { useRouter } from "next/router";

import { useTranslation } from 'next-i18next';

import Box from "@mui/system/Box";

import DropDown from "./DropDown/DropDown";

import Cookies from "universal-cookie";

import cls from "./langSwitch.module.scss";

const cookies = new Cookies();

const LangSwitch = ({ locale, navTop }) => {
  const router = useRouter();
  const { t: translate, i18n } = useTranslation('common');

  const switchLang = (language) => {
    if (language === locale) return;

    cookies.set("NEXT_LOCALE", language, { path: "/" });

    if (language === 'ar')
      document.querySelector(":root").style.setProperty('--font', 'BalooBhaijaan2');
    else
      document.querySelector(":root").style.setProperty('--font', 'SpaceGrotesk');

    router.replace(router, null, { locale: language });
  };

  const menu = [
    {
      option: translate('lang.en'),
      img: "/imgs/English.webp",
      method: switchLang,
      methodParam: "en",
    },
    {
      option: translate('lang.ar'),
      img: "/imgs/Arabic.svg",
      method: switchLang,
      methodParam: "ar",
    }
  ];

  return (
    <Box className={cls.lang}>
      <DropDown menu={menu} locale={locale} navTop={navTop} />
    </Box>
  );
};

export default LangSwitch;
