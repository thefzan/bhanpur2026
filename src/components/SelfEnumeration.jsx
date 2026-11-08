
import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileCheck,
  Fingerprint,
  Globe,
  Home,
  Info,
  Languages,
  MapPin,
  ShieldCheck,
  Smartphone,
  UserRound,
  Users,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";


const PORTAL_URL = "https://se.census.gov.in/";

const steps = [
  {
    title: "आधिकारिक पोर्टल खोलें",
    desc: "सबसे पहले अपने मोबाइल या कंप्यूटर में जनगणना 2027 का आधिकारिक पोर्टल खोलें।",
    icon: Globe,
    color: "bg-blue-100 text-blue-700",
    details: [
      "https://se.census.gov.in/ वेबसाइट पर जाएं।",
      "अपना राज्य उत्तर प्रदेश चुनें।",
      "कैप्चा भरकर आगे बढ़ें।",
    ],
  },
  {
    title: "परिवार का पंजीकरण करें",
    desc: "अपने परिवार की जानकारी देकर पंजीकरण की प्रक्रिया शुरू करें।",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    details: [
      "परिवार के मुखिया का नाम दर्ज करें।",
      "एक सक्रिय मोबाइल नंबर दर्ज करें।",
      "पोर्टल पर मांगी गई अन्य जानकारी भरें।",
    ],
  },
  {
    title: "मोबाइल नंबर सत्यापित करें",
    desc: "अपने मोबाइल नंबर पर प्राप्त OTP के माध्यम से पहचान सत्यापित करें।",
    icon: Smartphone,
    color: "bg-green-100 text-green-700",
    details: [
      "आपके मोबाइल पर OTP आएगा।",
      "प्राप्त OTP को निर्धारित स्थान पर भरें।",
      "सत्यापन पूरा करके आगे बढ़ें।",
    ],
  },
  {
    title: "अपने घर का पता भरें",
    desc: "अपने निवास स्थान की सही जानकारी दर्ज करें।",
    icon: MapPin,
    color: "bg-orange-100 text-orange-700",
    details: [
      "अपना जिला चुनें।",
      "गांव या कस्बे का नाम दर्ज करें।",
      "मोहल्ला और नजदीकी पहचान चिन्ह भरें।",
      "मांगे जाने पर पिन कोड भी दर्ज करें।",
    ],
  },
  {
    title: "मानचित्र पर अपना घर खोजें",
    desc: "दिए गए मानचित्र में अपने मकान की सही लोकेशन निर्धारित करें।",
    icon: Home,
    color: "bg-pink-100 text-pink-700",
    details: [
      "स्क्रीन पर दिखाई देने वाले नक्शे को खोलें।",
      "लोकेशन मार्कर को अपने घर की जगह पर लगाएं।",
      "लोकेशन सही होने पर उसे सुरक्षित करें।",
    ],
  },
  {
    title: "जनगणना का प्रश्नपत्र भरें",
    desc: "पोर्टल पर पूछे गए सवालों के सही और स्पष्ट जवाब दें।",
    icon: ClipboardList,
    color: "bg-indigo-100 text-indigo-700",
    details: [
      "हर सवाल को ध्यान से पढ़ें।",
      "अपने परिवार और उसके सदस्यों की जानकारी दें।",
      "सभी आवश्यक प्रश्नों के जवाब भरें।",
      "गलत जानकारी देने से बचें।",
    ],
  },
  {
    title: "भरी हुई जानकारी जांचें",
    desc: "जानकारी जमा करने से पहले एक बार सभी विवरण अच्छी तरह जांच लें।",
    icon: FileCheck,
    color: "bg-yellow-100 text-yellow-700",
    details: [
      "परिवार के सभी विवरण दोबारा देखें।",
      "नाम और पते में गलती हो तो सुधार करें।",
      "सभी जरूरी जानकारी पूरी होने की जांच करें।",
    ],
  },
  {
    title: "फॉर्म जमा करें और SE ID प्राप्त करें",
    desc: "सभी जानकारी सही होने पर फॉर्म जमा करें और अपनी विशेष पहचान संख्या प्राप्त करें।",
    icon: Fingerprint,
    color: "bg-teal-100 text-teal-700",
    details: [
      "अंतिम बार सभी जानकारी की पुष्टि करें।",
      "फॉर्म को सबमिट करें।",
      "आपको एक विशेष SE ID मिलेगी।",
      "SE ID का स्क्रीनशॉट लें या उसे लिखकर सुरक्षित रखें।",
    ],
  },
  {
    title: "प्रगणक को अपनी SE ID दिखाएं",
    desc: "जब जनगणना कर्मचारी आपके घर आएं, तो उन्हें अपनी SE ID जरूर बताएं।",
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-700",
    details: [
      "अपनी SE ID सुरक्षित रखें।",
      "घर आने वाले जनगणना कर्मचारी को SE ID दिखाएं।",
      "कर्मचारी आपकी ऑनलाइन भरी जानकारी का सत्यापन करेंगे।",
      "आवश्यकता पड़ने पर कर्मचारी दोबारा जानकारी प्राप्त कर सकते हैं।",
    ],
  },
];

const preparations = [
  {
    icon: Smartphone,
    title: "मोबाइल नंबर",
    desc: "OTP प्राप्त करने के लिए चालू मोबाइल नंबर रखें।",
  },
  {
    icon: Users,
    title: "परिवार की जानकारी",
    desc: "परिवार के सभी सदस्यों की सही जानकारी तैयार रखें।",
  },
  {
    icon: MapPin,
    title: "घर का पता",
    desc: "जिला, गांव, मोहल्ला और पिन कोड की जानकारी रखें।",
  },
  {
    icon: Languages,
    title: "भाषा का चयन",
    desc: "ऐसी भाषा चुनें जिसे आप आसानी से समझ सकें।",
  },
];

function SectionHeading({ subtitle, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-purple-700">
        {subtitle}
      </p>

      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-4 sm:gap-6">
      <div className="flex shrink-0 flex-col items-center">
        <div
          className={`z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${step.color}`}
        >
          <Icon size={24} />
        </div>

        {index !== steps.length - 1 && (
          <div className="mt-3 min-h-full w-0.5 bg-slate-200" />
        )}
      </div>

      <div className="mb-7 min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-7">
        <span className="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
          चरण {index + 1}
        </span>

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          {step.title}
        </h3>

        <p className="mt-2 leading-7 text-slate-600">
          {step.desc}
        </p>

        <ul className="mt-5 space-y-3">
          {step.details.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-6 text-slate-700"
            >
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-green-600"
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SelfEnumeration() {
  return (
    <>
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#430081] via-purple-800 to-indigo-900 px-5 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
            <CalendarDays size={17} />
            जनगणना 2027
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-6xl">
            स्व-गणना (Self Enumeration)
            <span className="mt-2 block text-yellow-300">
              अब अपनी जनगणना स्वयं करें
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-purple-100 sm:text-lg">
            अब आप घर बैठे अपने परिवार की जानकारी ऑनलाइन दर्ज कर सकते हैं।
            नीचे दिए गए आसान चरणों को पढ़ें और स्व-गणना की प्रक्रिया समझें।
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-purple-950 transition hover:bg-yellow-300"
            >
              आधिकारिक पोर्टल खोलें
              <ArrowUpRight size={20} />
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              पूरी प्रक्रिया देखें
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="mx-auto -mt-7 max-w-5xl px-5">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:grid-cols-2">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-700">
              <CalendarDays size={25} />
            </div>
            <div>
              <p className="text-sm text-slate-500">स्व-गणना की अवधि</p>
              <h3 className="mt-1 font-bold text-slate-900">
                16 नवंबर – 30 नवंबर 2026
              </h3>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-green-100 p-3 text-green-700">
              <Users size={25} />
            </div>
            <div>
              <p className="text-sm text-slate-500">
                घर-घर जनगणना की अवधि
              </p>
              <h3 className="mt-1 font-bold text-slate-900">
                1 दिसंबर 2026 – 4 जनवरी 2027
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          subtitle="सबसे पहले समझें"
          title="स्व-गणना क्या है?"
          description="स्व-गणना एक ऐसी सुविधा है जिसके माध्यम से परिवार का मुखिया या परिवार का कोई सदस्य स्वयं ऑनलाइन अपने परिवार की जानकारी दर्ज कर सकता है।"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: "घर बैठे जानकारी भरें",
              desc: "मोबाइल या कंप्यूटर के माध्यम से अपने परिवार का विवरण ऑनलाइन दर्ज करें।",
            },
            {
              icon: Clock,
              title: "अपनी सुविधा के अनुसार",
              desc: "निर्धारित स्व-गणना अवधि के अंदर अपनी जानकारी भरें।",
            },
            {
              icon: ShieldCheck,
              title: "SE ID प्राप्त करें",
              desc: "फॉर्म जमा करने के बाद मिलने वाली SE ID को सुरक्षित रखें।",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-xl bg-purple-100 p-3 text-purple-700">
                  <Icon size={27} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PREPARATION */}
      <section className="bg-purple-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            subtitle="शुरू करने से पहले"
            title="इन चीजों को तैयार रखें"
            description="स्व-गणना शुरू करने से पहले नीचे दी गई जरूरी जानकारियां अपने पास रखें।"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preparations.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <Icon size={28} className="text-purple-700" />

                  <h3 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEP BY STEP PROCESS */}
      <section id="process" className="scroll-mt-20 px-5 py-20">
        <div className="mx-auto max-w-4xl">

          <SectionHeading
            subtitle="आसान तरीका"
            title="स्व-गणना की पूरी प्रक्रिया"
            description="नीचे दिए गए 9 चरणों को क्रम से पढ़ें और समझें कि आपको ऑनलाइन क्या-क्या करना है।"
          />

          <div>
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="bg-amber-50 px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-white p-6 sm:p-9">
          <div className="flex items-center gap-3">
            <AlertTriangle className="shrink-0 text-amber-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">
              कुछ जरूरी बातें याद रखें
            </h2>
          </div>

          <ul className="mt-7 space-y-4">
            {[
              "अपनी जानकारी हमेशा सही और सत्य भरें।",
              "केवल आधिकारिक सरकारी पोर्टल का ही उपयोग करें।",
              "अपना OTP किसी अनजान व्यक्ति को न बताएं।",
              "फॉर्म जमा करने के बाद अपनी SE ID सुरक्षित रखें।",
              "जनगणना कर्मचारी के घर आने पर उन्हें अपनी SE ID जरूर दिखाएं।",
              "स्व-गणना करना वैकल्पिक है, लेकिन निर्धारित अवधि में इसे पूरा करें यदि आप इस सुविधा का उपयोग करना चाहते हैं।",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-green-600"
                />
                <span className="leading-7 text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="bg-gradient-to-br from-[#430081] to-indigo-900 px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <CheckCircle2 size={36} className="text-yellow-300" />
          </div>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            आपकी जानकारी, आपकी जिम्मेदारी!
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-purple-100">
            जनगणना में सही जानकारी देना देश के बेहतर भविष्य के लिए महत्वपूर्ण है।
            आज ही स्व-गणना की प्रक्रिया समझें और अपनी जानकारी सही तरीके से दर्ज करें।
          </p>

          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-purple-950 transition hover:bg-yellow-300"
          >
            स्व-गणना शुरू करें
            <ExternalLink size={19} />
          </a>

          <p className="mt-5 text-sm text-purple-200">
            आधिकारिक वेबसाइट: se.census.gov.in
          </p>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="bg-slate-950 px-5 py-6 text-center text-sm text-slate-400">
        <p>
          यह पेज केवल जन-जागरूकता एवं जानकारी देने के उद्देश्य से बनाया गया है।
        </p>
        <p className="mt-2">
          आधिकारिक जानकारी एवं निर्देशों के लिए भारत सरकार के जनगणना पोर्टल को देखें।
        </p>
      </footer>

    </main>
    
    </>
  );
}
