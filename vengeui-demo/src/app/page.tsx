import { GlowBorderCard } from "@/components/ui/glow-border-card";
import AnimatedButton from "@/components/ui/animated-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderPreview } from "@/components/ui/folder-preview";
import { Plus, Search, FlaskConical, FileText, ChevronRight, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Top Nav */}
      <nav className="fixed top-4 right-6 z-50 flex items-center gap-3">
        <Button variant="outline" size="sm" className="rounded-full text-sm px-4 bg-gray-100 dark:bg-zinc-900 border-gray-200 dark:border-zinc-700">
          回到旧版本
        </Button>
        <div className="w-9 h-9 rounded-full bg-gray-300 dark:bg-zinc-700 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-20 pb-16">
        {/* Greeting */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-3">晚上好，user</h1>
          <p className="text-gray-400 dark:text-gray-500 text-lg">欢迎来到心流 2.0，或者写一句其他 slogan。</p>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Left: 快速开始 */}
          <div className="col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">快速开始</h2>
              <button className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1 transition-colors">
                查看全部 <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* 新建知识库 Card — GlowBorderCard + Aurora */}
              <GlowBorderCard
                colorPreset="aurora"
                width="100%"
                height="220px"
                borderRadius="1rem"
                animationDuration={5}
                className="w-full"
              >
                <div className="flex flex-col items-center justify-center text-center gap-4 p-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">建立你的第一个知识库</h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed max-w-[180px]">
                      导入文章、网页或图片到知识库，让心流帮您快速获取洞察，并按照您的要求进行创作。
                    </p>
                  </div>
                  <AnimatedButton className="px-4 py-2 text-sm rounded-full">
                    <Plus className="w-4 h-4 mr-1" />
                    新建知识库
                  </AnimatedButton>
                </div>
              </GlowBorderCard>

              {/* 心流使用指南 Card — FolderPreview (nandi variant) */}
              <div className="relative rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-visible h-[220px] flex flex-col justify-between p-5 cursor-pointer hover:border-gray-300 dark:hover:border-zinc-600 transition-colors">
                <BorderBeam size={200} duration={8} colorFrom="#a78bfa" colorTo="#60a5fa" />
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 border-0">
                    10个来源
                  </Badge>
                  <span className="text-gray-300 dark:text-gray-600 text-lg tracking-widest">· · ·</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base">心流使用指南</h3>
                    <p className="text-xs text-gray-400 mt-0.5">8 个文件</p>
                  </div>
                  <FolderPreview
                    variant="nandi"
                    size="md"
                    files={[
                      { name: "intro.md", type: "txt" },
                      { name: "guide.md", type: "txt" },
                      { name: "demo.gif", type: "gif" },
                      { name: "audio.mp3", type: "mp3" },
                      { name: "config", type: "default" },
                      { name: "assets", type: "default" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: 我的创作 */}
          <div className="col-span-1">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">我的创作</h2>
            <div className="relative rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-visible h-[220px] flex flex-col items-center justify-center gap-4">
              <BorderBeam size={250} duration={12} colorFrom="#f0abfc" colorTo="#38bdf8" delay={3} />
              <FolderPreview
                variant="kubera"
                size="lg"
                files={[
                  { name: "article1", type: "txt" },
                  { name: "draft", type: "txt" },
                  { name: "image.gif", type: "gif" },
                  { name: "notes", type: "default" },
                ]}
                label="我的创作"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center px-6">
                悬浮文件夹查看内容预览
              </p>
            </div>
          </div>
        </div>

        {/* 实用工具 */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">实用工具</h2>
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            {[
              { label: "AI搜索", icon: Search, color: "aurora" as const },
              { label: "高级研究", icon: FlaskConical, color: "ocean" as const },
              { label: "论文阅读", icon: FileText, color: "sunset" as const },
            ].map(({ label, icon: Icon, color }) => (
              <GlowBorderCard
                key={label}
                colorPreset={color}
                width="100%"
                height="72px"
                borderRadius="0.875rem"
                animationDuration={6}
                borderWidth="0.75em"
                blurAmount="0.4em"
                inset="-0.6em"
                className="w-full cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-2.5 px-2">
                  <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                </div>
              </GlowBorderCard>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-100 dark:border-zinc-900">
        <p className="text-xs text-gray-400 dark:text-gray-600">本服务内容由AI生成，准确性和完整性无法保证，亦不代表我们的态度和观点</p>
        <p className="text-xs text-gray-300 dark:text-gray-700 mt-1">备案号</p>
      </footer>
    </div>
  );
}
