"use client";
import Nav from "@/components/Nav";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function IndexPage() {

  const t = useTranslations("HomePage");

  return <div className="flex flex-col gap-4 text-gray-500">
    <Nav />
    <h1 className="text-4xl font-bold py-4">{t("title")}</h1>
    <h2 className="text-lg font-bold">
      {t("description")}
    </h2>
    <p className="">
      {t("overview")}
    </p>
    <p className="">
      {t("career")}
    </p>
    <p className="font-bold">
      {t("experience.title")}
    </p>
    <div className="border-s-2 border-gray-300 ps-4 flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="">
          {t("experience.dngx.title")}
        </p>
        <p className="text-xs italic">
          {t("experience.dngx.date")}
        </p>
      </div>
      <p className="font-bold">
        {t("experience.dngx.description")}
      </p>
    </div>
    <div className="border-s-2 border-gray-300 ps-4 flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="">
          {t("experience.debrah.title")}
        </p>
        <p className="text-xs italic">
          {t("experience.debrah.date")}
        </p>
      </div>
      <p className="font-bold">
        {t("experience.debrah.description")}
      </p>
    </div>
    <p className="font-bold">
      {t("techStack")}
    </p>
    <p className="text-sm flex flex-wrap gap-2">
      {["Dart", "JavaScript", "PHP", "Python", "Flutter", "React", "Node.js", "Laravel", "PostgreSQL", "MySQL", "Firestore", "Supabase", "AWS", "Google Cloud", "Docker", "Vercel", "Firebase"].map((tech) => (
        <span key={tech} className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
          {tech}
        </span>
      ))}
    </p>
    <div className="flex flex-wrap gap-2">
      <Link href="mailto:redhaa811@gmail.com" className="text-sm">
        [ redhaa811@gmail.com ]
      </Link>
      <Link href="https://github.com/redhaa811" className="text-sm">
        [ github.com/redhaa811 ]
      </Link>
      <Link href="https://www.linkedin.com/in/redha-alramadhan/" className="text-sm">
        [ linkedin.com/in/redha-alramadhan ]
      </Link>
    </div>
  </div>;
}
