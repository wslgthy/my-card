"use client";

import { useState } from "react";

export default function Home() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 py-16">
      {/* 顶部装饰：古风宫殿飞檐 + 暴雨 + 闪电 + 红丝带 */}
      <div className="pop-in w-full flex justify-center">
        <svg
          viewBox="0 0 920 240"
          className="w-full"
          style={{ maxWidth: 720 }}
          role="img"
          aria-label="古风宫殿飞檐、暴雨与闪电的手账装饰"
        >
          {/* 雨丝 */}
          <g stroke="var(--blue)" strokeWidth="1.5" opacity="0.45" strokeLinecap="round">
            <line x1="120" y1="20" x2="108" y2="55" />
            <line x1="220" y1="10" x2="208" y2="45" />
            <line x1="330" y1="25" x2="318" y2="60" />
            <line x1="430" y1="8" x2="418" y2="43" />
            <line x1="520" y1="22" x2="508" y2="57" />
            <line x1="820" y1="15" x2="808" y2="50" />
            <line x1="880" y1="30" x2="868" y2="65" />
            <line x1="60" y1="40" x2="48" y2="75" />
          </g>

          {/* 闪电 */}
          <g className="flash" style={{ filter: "drop-shadow(3px 4px 0 rgba(28,25,17,.35))" }}>
            <path
              d="M 700,0 L 652,110 L 700,110 L 636,235 L 752,95 L 700,95 Z"
              fill="#FAF6EF"
              stroke="var(--ink)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </g>

          {/* 屋檐 */}
          <g style={{ filter: "drop-shadow(3px 4px 0 rgba(28,25,17,.18))" }}>
            <path
              d="M 30,160 C 250,55 670,55 890,160 L 845,160 C 650,85 270,85 75,160 Z"
              fill="var(--ink)"
            />
            <path
              d="M 75,160 C 40,160 22,138 48,122 C 64,112 86,120 78,140"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M 845,160 C 880,160 898,138 872,122 C 856,112 834,120 842,140"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <g stroke="var(--ink)" strokeWidth="3">
              <line x1="150" y1="160" x2="150" y2="176" />
              <line x1="250" y1="156" x2="250" y2="172" />
              <line x1="350" y1="152" x2="350" y2="168" />
              <line x1="460" y1="150" x2="460" y2="166" />
              <line x1="570" y1="152" x2="570" y2="168" />
              <line x1="670" y1="156" x2="670" y2="172" />
              <line x1="770" y1="160" x2="770" y2="176" />
            </g>
          </g>

          {/* 红丝带 */}
          <g className="sway" style={{ filter: "drop-shadow(3px 4px 0 rgba(28,25,17,.25))" }}>
            <path
              d="M 150,158 C 132,195 178,214 156,256 C 172,232 196,214 186,186 C 178,202 166,200 172,178 C 164,170 156,164 150,158 Z"
              fill="var(--accent)"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* 名片卡片 */}
      <div className="pop-in relative tilt-a">
        <section className="sticker sticker--lg w-[360px] max-w-[88vw] px-8 pt-9 pb-8 text-center relative z-10">
          {/* 头像（引用 /avatar.jpg，加载失败显示纸色圆形占位） */}
          <div className="mb-3">
            <div className="avatar">
              {avatarError ? (
                <div className="avatar-ph" aria-label="头像占位">
                  <svg viewBox="0 0 48 48" width="54" height="54" fill="none">
                    <circle cx="24" cy="18" r="9" stroke="var(--ink-soft)" strokeWidth="2.5" />
                    <path
                      d="M8 44 C 8 33 16 28 24 28 C 32 28 40 33 40 44"
                      stroke="var(--ink-soft)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/avatar.jpg"
                  alt="范正阳的头像"
                  onError={() => setAvatarError(true)}
                />
              )}
            </div>
          </div>

          {/* 名字 */}
          <h1 className="font-zh-title text-4xl font-semibold text-ink leading-tight">
            范正阳
          </h1>

          {/* 自我介绍 */}
          <p className="c-soft text-[15px] leading-relaxed mt-3 px-1">
            在风雨中，我愿意高声呼喊，也愿意静静的欣赏过路的行人
          </p>

          <div className="h-px mx-10 my-5" style={{ background: "var(--ink)", opacity: 0.7 }} />

          {/* 联系方式 */}
          <p className="text-ink text-[15px]">
            <span className="font-medium">微信：</span>wtbnb68646
          </p>
        </section>

        {/* 爱好标签：顶端墨线串联，错落贴在卡片上沿，部分超出边界 */}
        <div className="absolute left-0 right-0 z-30" style={{ top: -54, height: 72 }}>
          {/* 串联四标签的墨线（手绘起伏） */}
          <svg
            viewBox="0 0 360 72"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M 6,40 C 90,32 150,48 250,38 C 300,33 332,44 354,40"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(2px 2px 0 rgba(28,25,17,.18))" }}
            />
          </svg>
          <span
            className="badge absolute"
            style={{ top: 16, left: "2%", background: "var(--sky)", transform: "rotate(-6deg)", borderRadius: "16px 6px 18px 8px" }}
          >
            乒乓球
          </span>
          <span
            className="badge absolute"
            style={{ top: 2, left: "27%", background: "var(--iron)", transform: "rotate(4deg)", borderRadius: "8px 18px 6px 16px" }}
          >
            运动
          </span>
          <span
            className="badge absolute"
            style={{ top: 18, left: "52%", background: "var(--green-ink)", transform: "rotate(-5deg)", borderRadius: "18px 8px 14px 6px" }}
          >
            桌游
          </span>
          <span
            className="badge absolute"
            style={{ top: 4, left: "76%", background: "var(--note)", transform: "rotate(6deg)", borderRadius: "6px 14px 8px 18px" }}
          >
            阅读
          </span>
        </div>

        {/* 卡片墨线描边内外的风雨雷电装饰（紧贴边框） */}
        <svg
          viewBox="0 0 340 340"
          preserveAspectRatio="none"
          className="absolute inset-0 pointer-events-none"
          style={{ width: "100%", height: "100%", zIndex: 20 }}
          aria-hidden="true"
        >
          {/* 上边 */}
          <g style={{ filter: "drop-shadow(2px 2px 0 rgba(28,25,17,.25))" }}>
            <path
              className="flash"
              d="M 58,-6 L 76,16 L 64,16 L 84,40 L 50,8 L 66,8 Z"
              fill="#F7FAFF"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line x1="22" y1="-6" x2="16" y2="14" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="120" y1="-4" x2="114" y2="16" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="200" y1="-6" x2="194" y2="14" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="300" y1="-4" x2="294" y2="16" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <path
              className="sway"
              d="M 322,-4 C 340,16 310,34 332,58 C 314,44 302,28 310,14 C 318,22 328,8 322,-4 Z"
              fill="var(--accent)"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
              style={{ transformOrigin: "326px 0px" }}
            />
          </g>

          {/* 右边 */}
          <g style={{ filter: "drop-shadow(2px 2px 0 rgba(28,25,17,.25))" }}>
            <path
              className="flash"
              d="M 346,150 L 326,168 L 340,168 L 320,194 L 352,160 L 334,160 Z"
              fill="#F7FAFF"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line x1="346" y1="60" x2="330" y2="66" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="346" y1="230" x2="330" y2="236" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="346" y1="290" x2="330" y2="296" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          </g>

          {/* 下边 */}
          <g style={{ filter: "drop-shadow(2px 2px 0 rgba(28,25,17,.25))" }}>
            <path
              className="flash"
              d="M 150,346 L 168,324 L 156,324 L 176,300 L 144,334 L 160,334 Z"
              fill="#F7FAFF"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line x1="40" y1="346" x2="34" y2="326" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="110" y1="348" x2="104" y2="328" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="250" y1="346" x2="244" y2="326" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="310" y1="348" x2="304" y2="328" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          </g>

          {/* 左边 */}
          <g style={{ filter: "drop-shadow(2px 2px 0 rgba(28,25,17,.25))" }}>
            <path
              className="flash"
              d="M -6,120 L 14,138 L 0,138 L 20,164 L -12,130 L 4,130 Z"
              fill="#F7FAFF"
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line x1="-6" y1="60" x2="10" y2="66" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="-6" y1="220" x2="10" y2="226" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <line x1="-6" y1="284" x2="10" y2="290" stroke="#8DB4D6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          </g>
        </svg>
      </div>

      {/* 装饰小贴纸 */}
      <div className="pop-in flex flex-wrap gap-3 justify-center">
        <span className="badge tilt-c">手账风</span>
        <span className="badge badge--green tilt-b">贴纸</span>
        <span className="badge badge--blue tilt-a">速写</span>
        <span className="badge badge--gold tilt-c">墨韵</span>
      </div>
    </main>
  );
}
