import React, { useEffect, useMemo, useState } from "react";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import appImg1 from "../assets/app1.png";
import appImg2 from "../assets/app2.png";
import appImg3 from "../assets/app3.png";
import transImg1 from "../assets/trans1.png";
import transImg2 from "../assets/trans2.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review1.png";
import review3 from "../assets/review1.png";

export default function SalesPlanScreen({ answers, onBack, onContinue, onPurchase }) {
    const [timeLeft, setTimeLeft] = useState(897);
    const [selectedPlan, setSelectedPlan] = useState("1-month");
    const [agreeTop, setAgreeTop] = useState(true);
    const [agreeBottom, setAgreeBottom] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const currentWeight =
        Number(answers?.currentWeight?.kg) ||
        Number(answers?.currentWeight?.value) ||
        70;

    const targetWeight =
        Number(answers?.goalWeight?.kg) ||
        Number(answers?.goalWeight?.value) ||
        60;

    const bodyFatStart = useMemo(() => {
        const bmi = Number(answers?.currentWeight?.bmi || 28);
        return bmi >= 30 ? 32 : bmi >= 25 ? 28 : 24;
    }, [answers]);

    const bodyFatEnd = useMemo(() => Math.max(14, bodyFatStart - 10), [bodyFatStart]);

    const plans = [
        {
            id: "1-month",
            title: "1-month membership",
            subtitle: "Ideal solution for trying out the plan",
            oldDaily: "1.39",
            newDaily: "0.48",
            totalOld: "41.82",
            totalNew: "14.49",
            badge: "MOST POPULAR - SAVE 65%",
            selectedBorder: "border-[#6ba7e8]",
        },
        {
            id: "3-month",
            title: "3-month membership",
            subtitle: "Great for building new healthy habits",
            oldDaily: "0.96",
            newDaily: "0.28",
            totalOld: "72.25",
            totalNew: "25.20",
            badge: "",
            selectedBorder: "border-[#6ba7e8]",
        },
        {
            id: "6-month",
            title: "6-month membership",
            subtitle: "For achieving the best health results",
            oldDaily: "0.48",
            newDaily: "0.17",
            totalOld: "89.59",
            totalNew: "29.95",
            badge: "",
            selectedBorder: "border-[#6ba7e8]",
        },
    ];

    const selectedPlanData = plans.find((p) => p.id === selectedPlan) || plans[0];

    const handlePrimaryAction = () => {
        if (onPurchase) onPurchase(selectedPlanData);
        if (onContinue) onContinue(selectedPlanData);
    };

    return (
        <div className="min-h-screen bg-[#f6fbff] text-black">
            <div className="sticky top-0 z-50 border-b border-[#e8eef6] bg-white">
                <div className="mx-auto flex max-w-[980px] items-center justify-between px-3 py-3 sm:px-4">
                    <div className="flex items-center gap-3">
                        {onBack ? (
                            <button
                                type="button"
                                onClick={onBack}
                                className="text-[22px] leading-none text-[#7f8793]"
                            >
                                ←
                            </button>
                        ) : null}
                        <div className="text-[11px] text-[#6f7680] sm:text-[12px]">
                            Discount reserved for{" "}
                            <span className="text-[22px] font-bold leading-none text-black">
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handlePrimaryAction}
                        className="rounded-[7px] bg-[#1f7ceb] px-5 py-2 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#1869c7]"
                    >
                        Get your plan
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-[980px] px-3 pb-16 pt-6 sm:px-4">
                <section className="mx-auto max-w-[600px]">
                    <div className="rounded-[8px] bg-[#e8f2ff] px-5 py-6">
                        <div className="flex items-center justify-center gap-5 sm:gap-10">
                            <BodyPreviewCard
                                image={beforeImg}
                                fatText={`+${bodyFatStart}%`}
                                level="Low"
                            />

                            <BodyPreviewCard
                                image={afterImg}
                                fatText={`${bodyFatEnd}-${bodyFatEnd + 6}%`}
                                level="High"
                            />
                        </div>
                    </div>
                    <p className="mt-2 text-center text-[10px] text-[#878787]">
                        Provided results may vary
                    </p>
                </section>

                <section className="mx-auto mt-10 max-w-[780px] text-center">
                    <h1 className="text-[30px] font-extrabold leading-tight text-[#2f2f2f] sm:text-[42px]">
                        Your A1C management plan is customized
                        <br className="hidden sm:block" /> and waiting!
                    </h1>
                </section>

                <div className="mx-auto mt-8 max-w-[780px]">
                    <PromoStrip timeLeft={formatTime(timeLeft)} />
                </div>

                <section className="mx-auto mt-8 max-w-[980px]">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {plans.map((plan) => (
                            <PricingCard
                                key={plan.id}
                                plan={plan}
                                checked={selectedPlan === plan.id}
                                onSelect={() => setSelectedPlan(plan.id)}
                            />
                        ))}
                    </div>

                    <div className="mt-4 flex items-start gap-2 px-1 text-[11px] leading-5 text-[#7d7d7d]">
                        <input
                            id="agreeTop"
                            type="checkbox"
                            checked={agreeTop}
                            onChange={(e) => setAgreeTop(e.target.checked)}
                            className="mt-0.5 h-3.5 w-3.5 rounded border-[#cad2dc]"
                        />
                        <label htmlFor="agreeTop">
                            I agree to the <span className="underline">T&amp;Cs</span> and I have read and understood the{" "}
                            <span className="underline">Privacy Policy</span>.
                        </label>
                    </div>

                    <button
                        type="button"
                        onClick={handlePrimaryAction}
                        disabled={!agreeTop}
                        className={`mx-auto mt-5 block w-full max-w-[300px] rounded-[8px] py-3 text-[15px] font-bold text-white transition ${agreeTop ? "bg-[#1f7ceb] hover:bg-[#1869c7]" : "cursor-not-allowed bg-[#1f7ceb]/50"
                            }`}
                    >
                        Get your plan
                    </button>

                    <div className="mx-auto mt-5 max-w-[760px] px-2 text-center text-[10px] leading-5 text-[#8e8e8e]">
                        By clicking "Get your plan" I acknowledge and agree to pay{" "}
                        <span className="font-semibold text-[#555]">USD {selectedPlanData.totalNew}</span> for my membership.
                        I understand that unless I cancel before the end of the current introductory period,
                        MyBody will automatically charge my payment method the regular price of{" "}
                        <span className="font-semibold text-[#555]">USD {selectedPlanData.totalOld}</span> every month thereafter.
                        I can easily cancel my subscription online.
                    </div>
                </section>

                <section className="mt-14 bg-[#eaf4ff] px-4 py-14 sm:px-8">
                    <div className="mx-auto max-w-[980px]">
                        <h2 className="text-center text-[28px] font-extrabold leading-tight text-[#2f2f2f] sm:text-[36px]">
                            Track your wins and stay motivated
                        </h2>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            <AppShot image={appImg1} />
                            <AppShot image={appImg2} />
                            <AppShot image={appImg3} />
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-14 sm:px-8">
                    <div className="mx-auto max-w-[980px]">
                        <h2 className="text-center text-[28px] font-extrabold leading-tight text-[#2f2f2f] sm:text-[34px]">
                            Success stories from our members
                        </h2>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            <ReviewBox
                                image={review1}
                                name="Sophia M."
                                text="Dropped 8 lbs in just a few weeks without feeling like I was even dieting! The meals are super filling, tasty and everything is easy to follow. Honestly, best decision ever."
                            />
                            <ReviewBox
                                image={review2}
                                name="Marcus H."
                                text="The plan is simple to follow and fits into my daily life. My fasting blood sugar dropped by 15 points in the first month, which I didn’t expect. Already feeling a huge difference in my energy."
                            />
                            <ReviewBox
                                image={review3}
                                name="Lily S."
                                text="I feel amazing! My cravings are way down, my sleep is better and I don’t feel so bloated after meals. #NewMe"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-[#eaf4ff] px-4 py-14 sm:px-8">
                    <div className="mx-auto max-w-[980px]">
                        <h2 className="text-center text-[28px] font-extrabold leading-tight text-[#2f2f2f] sm:text-[34px]">
                            They did this – you can too
                        </h2>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
                            <TransformCard image={transImg1} rotate="-rotate-3" />
                            <TransformCard image={transImg2} rotate="rotate-3" />
                        </div>

                        <p className="mt-4 text-center text-[10px] text-[#878787]">
                            Provided results may vary
                        </p>
                    </div>
                </section>

                <section className="mx-auto mt-14 max-w-[780px] text-center">
                    <h2 className="text-[30px] font-extrabold leading-tight text-[#2f2f2f] sm:text-[42px]">
                        Your A1C management plan is customized
                        <br className="hidden sm:block" /> and waiting!
                    </h2>
                </section>

                <div className="mx-auto mt-8 max-w-[780px]">
                    <PromoStrip timeLeft={formatTime(timeLeft)} />
                </div>

                <section className="mx-auto mt-8 max-w-[980px]">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {plans.map((plan) => (
                            <PricingCard
                                key={`bottom-${plan.id}`}
                                plan={plan}
                                checked={selectedPlan === plan.id}
                                onSelect={() => setSelectedPlan(plan.id)}
                            />
                        ))}
                    </div>

                    <div className="mt-4 flex items-start gap-2 px-1 text-[11px] leading-5 text-[#7d7d7d]">
                        <input
                            id="agreeBottom"
                            type="checkbox"
                            checked={agreeBottom}
                            onChange={(e) => setAgreeBottom(e.target.checked)}
                            className="mt-0.5 h-3.5 w-3.5 rounded border-[#cad2dc]"
                        />
                        <label htmlFor="agreeBottom">
                            I agree to the <span className="underline">T&amp;Cs</span> and I have read and understood the{" "}
                            <span className="underline">Privacy Policy</span>.
                        </label>
                    </div>

                    <button
                        type="button"
                        onClick={handlePrimaryAction}
                        disabled={!agreeBottom}
                        className={`mx-auto mt-5 block w-full max-w-[300px] rounded-[8px] py-3 text-[15px] font-bold text-white transition ${agreeBottom ? "bg-[#1f7ceb] hover:bg-[#1869c7]" : "cursor-not-allowed bg-[#1f7ceb]/50"
                            }`}
                    >
                        Get your plan
                    </button>

                    <div className="mx-auto mt-5 max-w-[760px] px-2 text-center text-[10px] leading-5 text-[#8e8e8e]">
                        By clicking "Get your plan" I acknowledge and agree to pay{" "}
                        <span className="font-semibold text-[#555]">USD {selectedPlanData.totalNew}</span> for my membership.
                        I understand that unless I cancel before the end of the current introductory period,
                        MyBody will automatically charge my payment method the regular price of{" "}
                        <span className="font-semibold text-[#555]">USD {selectedPlanData.totalOld}</span> every month thereafter.
                        I can easily cancel my subscription online.
                    </div>
                </section>

                <section className="mt-14 bg-[#eaf4ff] px-4 py-14 sm:px-8">
                    <div className="mx-auto max-w-[760px] text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2fb35e] text-white shadow-sm">
                            <svg
                                className="h-7 w-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 className="mt-5 text-[28px] font-extrabold text-[#2f2f2f] sm:text-[38px]">
                            30 days money-back guarantee
                        </h2>

                        <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[#6d7785]">
                            We are confident in our program, and you should start seeing results within a month! If you don’t
                            notice any changes, we’ll give you a full refund.
                        </p>

                        <button
                            type="button"
                            className="mt-5 text-[13px] font-medium text-[#6984a5] underline"
                        >
                            Learn about applicable limitations.
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

function PromoStrip({ timeLeft }) {
    return (
        <div className="grid overflow-hidden rounded-[12px] bg-[#e8f2ff] sm:grid-cols-[1fr_140px]">
            <div className="border-b border-[#d6e3f5] px-4 py-4 sm:border-b-0 sm:border-r sm:px-5">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#355271]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#247de9] text-[10px] text-white">
                        ✓
                    </span>
                    Your promo code applied!
                </div>

                <div className="mt-3 flex h-[40px] items-center justify-between rounded-[8px] bg-white px-3 text-[12px] text-[#4c4c4c]">
                    <span>asdasd_mar14</span>
                    <span className="text-[#5eb67a]">✓</span>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-4">
                <div className="text-[10px] text-[#7b8796]">Expires in:</div>
                <div className="mt-1 text-[15px] font-bold text-[#1f7ceb]">{timeLeft}</div>
            </div>
        </div>
    );
}

function BodyPreviewCard({ image, fatText, level }) {
    return (
        <div className="flex w-[118px] flex-col items-center text-center sm:w-[150px]">
            <div className="h-[150px] w-[78px] overflow-hidden rounded-[18px] bg-[#d7e3f4] sm:h-[180px] sm:w-[92px]">
                <img
                    src={image}
                    alt="body preview"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="mt-3 text-[10px] leading-4 text-[#2f2f2f] sm:text-[11px]">
                <div>Body fat</div>
                <div className="font-bold">{fatText}</div>
                <div>Wellness level</div>
                <div>{level}</div>
            </div>
        </div>
    );
}

function PricingCard({ plan, checked, onSelect }) {
    return (
        <div
            className={`relative rounded-[14px] border bg-white px-4 pb-4 pt-5 ${checked ? "border-[#72aae8] shadow-[0_0_0_1px_#72aae8]" : "border-[#dde4eb]"
                }`}
        >
            {plan.badge ? (
                <div className="absolute left-0 right-0 top-0 rounded-t-[14px] bg-[#58b36a] py-1 text-center text-[10px] font-bold text-white">
                    {plan.badge}
                </div>
            ) : null}

            <div className={plan.badge ? "pt-2" : ""}>
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-[15px] font-bold text-[#2f2f2f]">{plan.title}</h3>
                        <p className="mt-1 text-[11px] leading-4 text-[#878d95]">{plan.subtitle}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onSelect}
                        className={`mt-1 flex h-4 w-4 items-center justify-center rounded-full border ${checked ? "border-[#2f2f2f]" : "border-[#c7ced6]"
                            }`}
                    >
                        {checked ? <span className="h-2 w-2 rounded-full bg-[#2f2f2f]" /> : null}
                    </button>
                </div>

                <div className="mt-4 text-[11px] text-[#cf7489] line-through">USD {plan.oldDaily}</div>

                <div className="mt-1 flex items-end gap-1">
                    <span className="text-[32px] font-extrabold leading-none text-[#202020]">
                        USD {plan.newDaily}
                    </span>
                    <span className="pb-1 text-[12px] text-[#6f6f6f]">/ day</span>
                </div>

                <div className="mt-4 text-[11px] text-[#c77e8d]">
                    Total <span className="line-through">USD {plan.totalOld}</span>{" "}
                    <span className="font-semibold text-[#777]">USD {plan.totalNew}</span>
                </div>
            </div>
        </div>
    );
}

function AppShot({ image }) {
    return (
        <div className="rounded-[10px] bg-[#d8eaff] p-4">
            <div className="mx-auto h-[200px] w-[190px] overflow-hidden rounded-[24px] border-[0px] border-black bg-white shadow-sm">
                <img
                    src={image}
                    alt="app screenshot"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

function ReviewBox({ name, text }) {
    return (
        <div className="rounded-[12px] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ededed] text-[11px] font-semibold text-[#747474]">
                    Img
                </div>
                <div>
                    <div className="text-[13px] font-bold text-[#303030]">{name}</div>
                    <div className="text-[11px] text-[#f5a623]">★★★★★</div>
                </div>
            </div>
            <p className="mt-3 text-[12px] leading-5 text-[#69707a]">“{text}”</p>
        </div>
    );
}

function TransformCard({ image, rotate }) {
    return (
        <div
            className={`h-[210px] w-[118px] overflow-hidden rounded-[10px] border border-[#bfd0e0] bg-white shadow-sm ${rotate}`}
        >
            <img
                src={image}
                alt="transformation"
                className="h-full w-full object-cover"
            />
        </div>
    );
}