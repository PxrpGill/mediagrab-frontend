import type { Metadata } from "next";

import { Home } from "@/views/home";

export const metadata: Metadata = {
  title: "MediaGrab - Главная",
  description:
    "Скачивайте видео и музыку из ВКонтакте и YouTube в один клик! Просто вставьте ссылку - получите MP4, MP3 в HD качестве. Без регистрации, без ограничений. Работает на всех устройствах!",
  keywords: [
    "скачать видео вк",
    "скачать музыку youtube",
    "конвертер youtube в mp3",
    "загрузчик vk видео",
  ],
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
