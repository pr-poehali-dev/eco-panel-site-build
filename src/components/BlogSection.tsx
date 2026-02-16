import Icon from "@/components/ui/icon";

const posts = [
  {
    title: "Как выбрать утеплитель для сендвич-панелей",
    excerpt: "Разбираемся в преимуществах минеральной ваты, PIR-плиты и пенополиуретана для разных типов зданий",
    date: "12 февраля 2026",
    tag: "Технологии",
    readTime: "5 мин",
  },
  {
    title: "Строительство склада зимой: особенности и советы",
    excerpt: "Рассказываем, как мы возводим объекты в условиях низких температур без потери качества",
    date: "5 февраля 2026",
    tag: "Практика",
    readTime: "7 мин",
  },
  {
    title: "Энергоэффективность зданий из сендвич-панелей",
    excerpt: "Как современные панели помогают экономить до 40% на отоплении промышленных объектов",
    date: "28 января 2026",
    tag: "Экономия",
    readTime: "4 мин",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Блог</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Полезные <span className="text-primary italic">статьи</span>
          </h2>
          <p className="text-muted-foreground">Делимся экспертизой и рассказываем о тонкостях строительства</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <Icon name="FileText" size={48} className="text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-primary/20 border border-primary/30 text-primary text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
